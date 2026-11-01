# Khung dữ liệu & chuẩn chứng cứ — Cẩm nang mô hình kinh doanh

Mọi mục trong cẩm nang đều được nghiên cứu theo đúng khung này. Mục tiêu: **không có con số nào không có nguồn**, và người đọc luôn biết con số đó chắc đến đâu.

## 1. Thang chứng cứ (gắn cho TỪNG con số / nhận định)

| Mức | Nghĩa | Ví dụ nguồn hợp lệ |
|---|---|---|
| **A** | Văn bản gốc, chính thức | Luật / Nghị định / Thông tư còn hiệu lực (vbpl.vn, chinhphu.vn, congbao.chinhphu.vn, luatvietnam.vn, thuvienphapluat.vn); biểu phí / chính sách chính thức của nền tảng (YouTube Help, Meta Transparency/Help, Shopee/TikTok Seller Center); bảng giá chính thức (EVN, trang giá của nhà cung cấp); thống kê chính thức (NSO/GSO); BCTC đã kiểm toán của doanh nghiệp niêm yết |
| **B** | Báo cáo ngành / khảo sát có phương pháp | iPOS.vn, Metric.vn, Decision Lab, Q&Me, YouNet, Big4 (PwC, Deloitte, EY, KPMG), SSI/VNDirect/MBS Research, Google-Temasek-Bain e-Conomy SEA, hiệp hội ngành (VD Hiệp hội Yến sào VN), báo cáo của doanh nghiệp niêm yết |
| **C** | Bằng chứng yếu hơn, nhưng vẫn kiểm chứng được | Báo chí chính thống phỏng vấn chủ cơ sở (VnExpress, Tuổi Trẻ, Thanh Niên, CafeF, VnEconomy, Báo Đầu tư...); báo giá thị trường (≥ 2 nguồn); case study đơn lẻ; **ước tính của tác giả — bắt buộc ghi rõ công thức và giả định** |

Quy tắc cứng:
- Không tìm được nguồn ≥ C → ghi rõ `"Chưa có số liệu đáng tin"` thay vì đoán.
- Không dùng blog bán khoá học, bài PR của đơn vị bán thiết bị/nhượng quyền làm nguồn số liệu lợi nhuận (có thể dùng làm *báo giá* mức C, nhưng phải ghi rõ "nguồn có lợi ích thương mại").
- Văn bản pháp luật: phải kiểm tra **còn hiệu lực đến 11/2026** chưa (VN thay đổi rất nhiều 2025–2026: bỏ thuế khoán từ 1/1/2026, Luật Thuế TNCN/GTGT sửa đổi, NĐ 117/2025 sàn TMĐT khấu trừ thuế, NĐ 70/2025 hoá đơn máy tính tiền, Luật TMĐT 2025, Luật Quảng cáo sửa đổi 2025, NĐ 168/2025 đăng ký kinh doanh, chính quyền 2 cấp từ 1/7/2025, Luật BHXH 2024...). Ghi số hiệu + điều/khoản cụ thể.
- Trích dẫn (`quote`) phải là câu **nguyên văn ngắn** (≤ 40 từ) lấy từ nguồn, giữ ngôn ngữ gốc. Không bịa trích dẫn. Nếu chỉ đọc được snippet của công cụ tìm kiếm mà không mở được trang, ghi `"verified": "snippet"`; mở được trang và thấy câu đó thì `"verified": "page"`.
- Số liệu nước ngoài (USD, Mỹ...) chỉ dùng khi không có số VN, và phải ghi rõ "số liệu thị trường X".
- Tiền tệ: VNĐ, ghi "triệu" / "tỷ". Quy đổi USD thì ghi tỷ giá dùng.

## 2. Khung một MÔ HÌNH KINH DOANH (`kind: "model"`)

```jsonc
{
  "id": "che-bien-yen-sao",              // slug, không dấu
  "kind": "model",
  "section": "3",                         // mã phần (xem danh sách phần bên dưới)
  "title": "Hộ kinh doanh tinh chế yến sào từ tổ yến thô",
  "summary": "2–3 câu, giọng thẳng: bỏ ra gì, nhận lại gì, hợp với ai, cái bẫy lớn nhất.",
  "tags": {
    "capital": "mid",       // low (<50tr) | mid (50–500tr) | high (>500tr)
    "breakeven": "mid",     // fast (<6 tháng) | mid (6–18 tháng) | slow (>18 tháng) | unknown
    "risk": "high",         // low | mid | high
    "legal": "conditional", // simple (chỉ ĐKKD hoặc không cần) | conditional (ngành nghề có điều kiện / 1–2 giấy phép con) | heavy (nhiều giấy phép, thẩm định, quy hoạch)
    "time": "full",         // part (làm thêm được) | full (phải toàn thời gian)
    "evidence": "B"         // mức chứng cứ tổng thể của mục (mức của phần lớn các con số chính)
  },
  "capital": {
    "range": "150 – 300 triệu",
    "text": "Giải thích ngắn, có cơ cấu.",
    "breakdown": [ { "item": "Thiết bị tinh chế", "value": "30–60 triệu", "refs": [2], "grade": "C" } ],
    "grade": "C", "refs": [1, 2]
  },
  "burn":      { "range": "...", "text": "Chi phí cố định hàng tháng gồm...", "grade": "C", "refs": [] },
  "breakeven": { "range": "...", "text": "...", "grade": "C", "refs": [] },
  "margin": {
    "gross": "...", "net": "...",
    "text": "Giải thích, phân biệt kênh / quy mô.",
    "grade": "B", "refs": []
  },
  "risks": [                               // ĐÚNG 3 tử huyệt, xếp từ chết nhanh nhất
    { "title": "Chôn vốn ở nguyên liệu thô", "text": "Cơ chế + bằng chứng (sự kiện có thật, số liệu).", "refs": [] }
  ],
  "legal": [                               // ranh giới đỏ pháp lý
    {
      "title": "Giấy chứng nhận cơ sở đủ điều kiện ATTP",
      "basis": "Điều 34 Luật An toàn thực phẩm 2010; Điều 11–12 NĐ 15/2018/NĐ-CP",
      "text": "Ai phải có, ai được miễn, chi phí/thời gian xin, mức phạt nếu thiếu (ghi NĐ xử phạt).",
      "refs": []
    }
  ],
  "seed": null,       // để trống — chỗ dành cho số liệu thực chiến của tác giả
  "notes": "Ghi chú: biến thể, điều kiện để con số đúng, cảnh báo đọc số liệu.",
  "sources": [
    {
      "id": 1,
      "org": "Quốc hội",
      "year": 2010,
      "title": "Luật An toàn thực phẩm số 55/2010/QH12",
      "quote": "Câu nguyên văn ngắn từ nguồn",
      "url": "https://...",
      "type": "law",          // law | policy (chính sách/biểu phí nền tảng) | price (bảng giá chính thức) | stats | report | financials | press | quote (báo giá thị trường) | estimate
      "grade": "A",
      "verified": "page",     // page | snippet | ui (chữ trong giao diện trang phải đăng nhập — tối đa mức B)
      "accessed": "2026-11-01"
    }
  ]
}
```

`refs` là mảng `id` trong `sources` của chính mục đó.

## 3. Khung một MỤC PHÁP LÝ / THUẾ CHUNG (`kind: "rule"`)

```jsonc
{
  "id": "bo-thue-khoan-2026",
  "kind": "rule",
  "section": "0",
  "title": "Từ 1/1/2026 hết thuế khoán: hộ kinh doanh tự khai theo doanh thu thực",
  "summary": "2–3 câu thẳng: thay đổi gì, ai bị ảnh hưởng, phải làm gì.",
  "tags": { "risk": "high", "evidence": "A", "applies": ["all"] },   // applies: all | online | food | content | service | agri
  "who":      { "text": "Áp dụng cho ai, ngưỡng nào.", "refs": [] },
  "rule":     { "text": "Quy định cụ thể: tỷ lệ, ngưỡng, thời hạn, thủ tục.", "refs": [] },
  "cost":     { "text": "Chi phí / công sức tuân thủ (lệ phí, phần mềm, thời gian).", "refs": [] },
  "penalty":  { "text": "Mức phạt / truy thu nếu sai, ghi NĐ xử phạt.", "refs": [] },
  "effective":"Hiệu lực từ ... (văn bản thay thế/sửa đổi nếu có)",
  "notes": "...",
  "sources": [ /* như trên */ ]
}
```

## 4. Danh sách phần

- `0` — Nền pháp lý & thuế chung (áp dụng cho mọi mô hình)
- `1` — Nội dung số & nền tảng (YouTube, Facebook, tiếp thị liên kết)
- `2` — Thương mại điện tử & bán lẻ
- `3` — Chế biến thực phẩm, đặc sản & nông nghiệp
- `4` — Ăn uống (F&B)
- `5` — Dịch vụ & lưu trú

## 5. Định dạng nộp

Mỗi nhóm nghiên cứu ghi **một file JSON hợp lệ** (mảng các mục) vào `research/out/<ten-nhom>.json`, UTF-8, không comment. Kèm `research/out/<ten-nhom>.notes.md` ghi: các truy vấn đã thử mà không ra, các chỗ nghi ngờ / mâu thuẫn giữa nguồn, các số liệu đã loại bỏ và vì sao.
