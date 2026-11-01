# Cẩm nang mô hình kinh doanh

Các mô hình kinh doanh nhỏ ở Việt Nam, mỗi mô hình được ép vào cùng một khung: vốn khởi tạo, chi phí cố định hằng tháng, thời gian hòa vốn, biên lợi nhuận, ba tử huyệt rủi ro và các ranh giới đỏ pháp lý. Con số nào cũng có nguồn, kèm mức chứng cứ A/B/C.

Xem trực tuyến: https://anhbao183.github.io/cam-nang-kinh-doanh/

Chạy trên máy: mở `index.html` qua một máy chủ tĩnh bất kỳ (lệnh ở dưới).

## Cấu trúc

```
research/SCHEMA.md        khung dữ liệu + thang chứng cứ (đọc trước khi thêm mục)
research/sections.json    danh sách phần
research/glossary.json    chữ viết tắt, thuật ngữ
research/out/*.json       dữ liệu từng nhóm (nguồn sự thật)
research/out/*.notes.md   nhật ký nghiên cứu: truy vấn không ra, mâu thuẫn, số đã loại
research/seed/            số liệu thực chiến của tác giả (xem README trong đó)
research/link-report.md   kết quả tự kiểm link và câu trích nguyên văn
research/kiem-tra-tay.md  các nguồn kiểm tay bằng trình duyệt, nguồn bị hạ mức
src/page.html             khung trang
assets/app.css, app.js    giao diện
tools/build.mjs           kiểm tra dữ liệu -> sinh data/data.js, index.html, dist/cam-nang.html
tools/check_sources.py    mở lại từng link nguồn (cả PDF Công báo), đối chiếu câu trích
```

## Lệnh

```bash
node tools/build.mjs
```

`check_sources.py` cần thư viện đọc PDF:

```bash
pip install pypdf
```

```bash
python tools/check_sources.py
```

```bash
python -m http.server 8765
```

## Thêm mô hình

Làm theo `research/SCHEMA.md`. Nếu dùng Claude Code trong thư mục này, skill `them-mo-hinh` (trong `.claude/skills/`) đã ghi sẵn quy trình: chỉ cần nói "thêm mô hình …".

## Đăng lên GitHub Pages

Đẩy cả thư mục lên một repo GitHub, vào Settings → Pages, chọn nhánh `main`, thư mục `/ (root)`. `index.html` chạy được ngay vì không cần bước build phía máy chủ.

## Miễn trừ

Tài liệu tham khảo, không thay cho tư vấn của luật sư, kế toán hay cơ quan thuế. Luật thay đổi nhanh; luôn mở link nguồn để kiểm tra hiệu lực trước khi quyết định.
