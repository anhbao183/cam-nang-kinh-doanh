# Kiểm tra tay các nguồn mà máy không tự kiểm được

Ngày 01/11/2026. Bổ sung cho `link-report.md`: các trang chặn truy cập tự động được mở bằng trình duyệt thật rồi tìm câu trích trong nội dung hiển thị.

| Mục | Nguồn | Trang | Câu trích | Kết quả |
|---|---|---|---|---|
| 1.2 | 1 | facebook.com/business/help/1049081556813520 | "In-stream ads, Ads on Reels and the Performance bonus programme ended on 31 August 2025" | Có |
| 1.2 | 8 | creators.facebook.com/blog/combating-unoriginal-content | "improperly reuse someone else's videos, photos or text posts repeatedly will not only lose access to Facebook monetisation…" | Có |
| 1.2 | 9 | creators.facebook.com/blog/combating-unoriginal-content | "took action on around 500,000 accounts" | Có |
| 1.2 | 2 | creators.facebook.com/tools/facebook-content-monetization | "currently invitation-only" | Có |
| 1.1 | 2 | support.google.com/youtube/answer/12843009 | "Starting Feb. 1, 2027, YPP entry thresholds for new creators are changing to 8,000 qualified watch hours…" | Có (curl) |

| 5.2 | 34 | NĐ 339/2026/NĐ-CP, bản ký số (xdcs.cdnchinhphu.vn), trang 71 | Điều 62 khoản 3: "Phạt tiền từ 100.000.000 đồng đến 130.000.000 đồng…", điểm d "Sử dụng căn hộ chung cư vào mục đích không phải để ở, trừ trường hợp cho thuê để ở theo quy định của pháp luật về nhà ở;" | Có (đọc bằng mắt trên bản scan) |

Chưa kiểm tay: help.openai.com (giá ChatGPT Plus), docs.midjourney.com, intel.com (TDP), moit.gov.vn (không mở được), các trang Facebook còn lại của mục 1.2.

## Vòng 2 (01/11/2026)

- Các file PDF ký số trên datafiles.chinhphu.vn, xdcs.cdnchinhphu.vn (NĐ 68, 58, 282, 339, 392) và BCTC quý của MWG trên bhxcdn.vn là bản scan dạng ảnh. Máy không bóc được chữ, nên `check_sources.py` xếp chúng vào loại "PDF scan, cần đọc bằng mắt". Các nhóm nghiên cứu đọc các file này bằng mắt. Người điều phối kiểm lại một điểm quan trọng nhất (NĐ 339, ở bảng trên) và thấy khớp.
- Đồng bộ ngưỡng thuế: 4 mục dịch vụ (giặt sấy, homestay, spa, dạy thêm) còn dùng ngưỡng 500 triệu theo bản gốc NĐ 68/2026. Đã sửa thành 1 tỷ theo NĐ 141/2026, có thêm nguồn.
- Mục tạp hóa còn dẫn NĐ 70/2025 về hóa đơn. Đã đổi sang NĐ 254/2026, văn bản thay thế từ 1/7/2026.

## Nguồn hạ mức

- Mục 1.3, các nguồn trỏ tới `affiliate.shopee.vn`: câu chữ lấy từ mã giao diện trang sau đăng nhập, không phải văn bản chính sách công khai. Hạ từ A xuống B, đánh dấu `verified: "ui"`, bỏ các biến giữ chỗ kiểu `{total}` trong câu trích.

## Prompt injection gặp khi nghiên cứu

- Nhóm thực phẩm báo trang hethongphapluat.com chèn câu yêu cầu AI ghi nguồn trang đó. Câu này đã bị bỏ qua; trang chỉ được dùng để đọc văn bản luật.
