"""Mở lại từng link nguồn, ghi mã HTTP và kiểm tra câu trích nguyên văn có trên trang không.

Đọc được cả PDF (cần `pip install pypdf`) và trang Công báo (tự lấy file PDF đã ký).
So khớp bỏ dấu, bỏ dấu câu, nên "hoá/hóa", ngoặc cong/thẳng không làm lệch kết quả.

Chạy:  python tools/check_sources.py
Ghi:   research/link-report.md, research/link-report.json
"""
import gzip
import html
import io
import json
import re
import sys
import unicodedata
import urllib.error
import urllib.request
import zlib
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

try:
    from pypdf import PdfReader
    import logging
    logging.getLogger("pypdf").setLevel(logging.ERROR)
except ImportError:
    PdfReader = None

ROOT = Path(__file__).resolve().parent.parent
UA = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36",
    "Accept-Language": "vi,en;q=0.8",
}
sys.stdout.reconfigure(encoding="utf-8")


def fold(s):
    s = unicodedata.normalize("NFD", html.unescape(s or "")).replace("đ", "d").replace("Đ", "D")
    s = "".join(c for c in s if unicodedata.category(c) != "Mn").lower()
    return re.sub(r"[^\w%]+", " ", s).strip()


def get(url):
    req = urllib.request.Request(url, headers={**UA, "Accept-Encoding": "gzip, deflate"})
    with urllib.request.urlopen(req, timeout=40) as r:
        body = r.read()
        enc = (r.headers.get("content-encoding") or "").lower()
        # Một số trang báo trả gzip kể cả khi không xin
        if enc == "gzip" or body[:2] == b"\x1f\x8b":
            body = gzip.decompress(body)
        elif enc == "deflate":
            body = zlib.decompress(body, -zlib.MAX_WBITS)
        return r.status, r.headers.get("content-type", ""), body


def pdf_text(body):
    if not PdfReader:
        return None
    return "\n".join((p.extract_text() or "") for p in PdfReader(io.BytesIO(body)).pages)


def fetch(url):
    """Trả (status, kind, text). kind: html | pdf | pdf-unread | error."""
    try:
        status, ctype, body = get(url)
    except urllib.error.HTTPError as e:
        return e.code, "error", ""
    except Exception as e:
        return 0, "error", type(e).__name__
    try:
        if "pdf" in ctype or url.lower().endswith(".pdf"):
            t = pdf_text(body)
            if t is None:
                return status, "pdf-unread", ""
            # PDF ký số của chinhphu.vn thường là bản scan: không có lớp chữ, phải đọc bằng mắt
            return (status, "pdf", t) if len(t.strip()) > 50 else (status, "pdf-scan", "")
        h = body.decode("utf-8", "replace")
        text = re.sub(r"<[^>]+>", " ", re.sub(r"(?s)<(script|style).*?</\1>", " ", h))
        pdfs = re.findall(r"https://congbaocdn\.chinhphu\.vn/[^\"' ]+?\.pdf", h)
        if pdfs and PdfReader:
            _, _, pb = get(pdfs[0])
            text += "\n" + pdf_text(pb)
        return status, "html", text
    except Exception as e:
        return status, "error", type(e).__name__


def main():
    js = (ROOT / "data" / "data.js").read_text(encoding="utf-8")
    data = json.loads(js[js.index("{"): js.rindex("}") + 1])
    jobs = [(it, s) for it in data["items"] for s in it.get("sources", []) if s.get("url")]
    urls = sorted({s["url"] for _, s in jobs})
    with ThreadPoolExecutor(8) as ex:
        pages = dict(zip(urls, ex.map(fetch, urls)))

    rows = []
    for it, s in jobs:
        status, kind, text = pages[s["url"]]
        q = fold(s.get("quote", ""))
        if not q:
            verdict = "—"
        elif kind == "error" or status >= 400:
            verdict = "trang chặn truy cập tự động" if status in (400, 401, 403, 429) else "không mở được"
        elif kind == "pdf-unread":
            verdict = "pdf, cần pypdf"
        elif kind == "pdf-scan":
            verdict = "pdf dạng ảnh scan, cần đọc bằng mắt"
        else:
            page = fold(text)
            if q[:90] in page:
                verdict = "có"
            else:
                words = set(page.split())
                qw = [w for w in q.split() if len(w) > 1]
                cov = sum(w in words for w in qw) / max(1, len(qw))
                verdict = f"{'gần khớp' if cov >= 0.9 else 'KHÔNG THẤY'} ({round(cov * 100)}% từ)"
        rows.append({"no": it["no"], "item": it["id"], "id": s["id"], "url": s["url"], "status": status,
                     "verified": s.get("verified", ""), "quote": verdict})

    rows.sort(key=lambda r: ([int(x) for x in r["no"].split(".")], r["id"]))
    ok = sum(r["quote"] == "có" for r in rows)
    near = sum(r["quote"].startswith("gần") for r in rows)
    miss = [r for r in rows if r["quote"].startswith("KHÔNG")]
    blocked = [r for r in rows if r["quote"].startswith("trang chặn") or r["quote"].startswith("không mở")]
    scans = [r for r in rows if r["quote"].startswith("pdf dạng ảnh")]
    head = [
        "# Báo cáo kiểm tra nguồn",
        "",
        f"Tổng {len(rows)} nguồn có link · câu trích khớp nguyên văn: {ok} · gần khớp (≥ 90% từ): {near} · "
        f"không thấy: {len(miss)} · trang chặn/không mở được: {len(blocked)} · PDF scan phải đọc bằng mắt: {len(scans)}.",
        "",
        "\"Không thấy\" chưa chắc là trích sai: trang có thể dựng nội dung bằng JavaScript. Mở tay để kiểm.",
        "",
        "| Mục | Nguồn | HTTP | Người nghiên cứu ghi | Câu trích trên trang | URL |",
        "|---|---|---|---|---|---|",
    ]
    body = [f"| {r['no']} {r['item']} | {r['id']} | {r['status']} | {r['verified']} | {r['quote']} | {r['url']} |" for r in rows]
    (ROOT / "research" / "link-report.md").write_text("\n".join(head + body) + "\n", encoding="utf-8")
    (ROOT / "research" / "link-report.json").write_text(json.dumps(rows, ensure_ascii=False, indent=1), encoding="utf-8")
    print(head[2])
    for r in miss + blocked:
        print(f"  {r['no']} {r['item']} #{r['id']}: {r['quote']} · {r['url'][:90]}")


if __name__ == "__main__":
    main()
