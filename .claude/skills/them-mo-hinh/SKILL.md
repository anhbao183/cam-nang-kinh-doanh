---
name: them-mo-hinh
description: Thêm hoặc cập nhật một mô hình kinh doanh / một quy định chung vào "Cẩm nang mô hình kinh doanh" theo đúng khung dữ liệu và chuẩn chứng cứ A/B/C của dự án. Dùng khi người dùng nói "thêm mô hình …", "nghiên cứu mô hình …", "cập nhật số liệu mục …", "kiểm tra lại luật của mục …", "thêm số liệu thực chiến", hoặc hỏi một câu về kinh doanh mà muốn trả lời theo cẩm nang.
---

# Thêm / cập nhật mục trong Cẩm nang mô hình kinh doanh

## Trả lời câu hỏi theo cẩm nang
Khi người dùng hỏi về một mô hình (vốn, hòa vốn, luật…): đọc `data/data.js` (hoặc các file `research/out/*.json`), trả lời bằng số liệu trong đó **kèm số hiệu mục và nguồn**, nói rõ mức chứng cứ. Không bịa thêm số liệu ngoài cẩm nang; nếu cẩm nang không có thì nói không có và đề nghị nghiên cứu bổ sung.

## Thêm hoặc sửa một mục
1. Đọc `research/SCHEMA.md`: thang chứng cứ A/B/C, khung JSON, quy tắc trích dẫn. Tuân thủ tuyệt đối. Có 4 loại mục: `model` (mô hình nhỏ), `rule` (luật chung), `stage` (nấc quy mô) và `case` (tập đoàn, doanh nghiệp lâu đời). Với `case`, đọc thêm quy tắc riêng trong `research/VONG-3.md`.
2. Xem một mục có sẵn cùng phần trong `research/out/*.json` để giữ giọng văn: câu ngắn, thẳng, không quảng cáo, không emoji.
3. Nghiên cứu bằng WebSearch và đọc trang gốc (curl + `python -I` bóc text). Văn bản pháp luật phải kiểm tra **còn hiệu lực tại ngày hôm nay**. Không tìm được nguồn ≥ C thì ghi "Chưa có số liệu đáng tin".
4. Ghi mục mới vào file JSON của nhóm phù hợp trong `research/out/` (hoặc tạo `research/out/<nhom-moi>.json`). `id` là slug không dấu, không trùng.
5. Chạy `node tools/build.mjs`. Sửa hết **LỖI**; xem lại **CẢNH BÁO** (nguồn không được trích, số tử huyệt ≠ 3).
6. Chạy `python tools/check_sources.py` (cần `pypdf`), mở `research/link-report.md`, xử lý các nguồn lỗi hoặc "KHÔNG THẤY" câu trích của mục vừa thêm. Trang chặn truy cập tự động thì mở bằng trình duyệt để kiểm tay và ghi vào `research/kiem-tra-tay.md`.
7. Ghi chú quá trình (truy vấn không ra, mâu thuẫn giữa nguồn) vào `research/out/<nhom>.notes.md`.

## Số liệu thực chiến (seed)
Số liệu vận hành thật của tác giả đặt ở `research/seed/<id-muc>.json` (xem `research/seed/README.md`). Không trộn vào trường có nguồn công khai. Build tự gắn vào ô "Số liệu thực chiến" của mục cùng id.
