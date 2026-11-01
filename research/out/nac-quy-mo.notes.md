# Ghi chú nghiên cứu — nhóm `nac-quy-mo` (phần 6)

Ngày truy cập: 01/11/2026. Năm mục `kind: "stage"`: `doanh-nghiep-nho-va-vua`, `chuyen-ho-len-cong-ty`, `goi-von-tnhh-co-phan`, `dai-chung-hoa-niem-yet`, `nhom-cong-ty-dau-tu-ra-nuoc-ngoai`.

Mọi `quote` đã được đối chiếu tự động với text đã tải về của trang nguồn (chuẩn hóa NFC và khoảng trắng). Mỗi câu tối đa 40 chữ. `node tools/build.mjs` không báo lỗi hay cảnh báo nào cho file này.

## 1. Văn bản đã kiểm hiệu lực đến 11/2026

| Văn bản | Tình trạng | Ghi chú |
|---|---|---|
| NĐ 80/2021/NĐ-CP (tiêu chí DNNVV) | Còn hiệu lực | Bộ Tài chính vẫn dẫn chiếu trong các trả lời năm 2026. Dự thảo Luật Hỗ trợ DNNVV (sửa đổi) 2026 chưa thông qua. |
| NQ 198/2025/QH15, NĐ 20/2026/NĐ-CP | Còn hiệu lực | NĐ 20 là PDF scan nén CCITT, không có PIL để giải mã ảnh nên không đọc được bản gốc. Dùng phần trả lời có trích nguyên văn của Bộ Tài chính. |
| Luật Thuế TNDN 67/2025/QH15 | Còn hiệu lực | Đọc toàn văn trên LuatVietnam. |
| NĐ 141/2026, NQ 43/2026/QH16 | Còn hiệu lực | Dùng lại nguồn nhóm `phap-ly-thue` và đọc lại trang. |
| NĐ 168/2025/NĐ-CP Điều 27 | Còn hiệu lực | Chưa đọc toàn văn NĐ 296/2026 để chắc chắn Điều 27 không bị sửa. |
| TT 58/2026/TT-BTC (kế toán DN siêu nhỏ) | Hiệu lực 1/7/2026 | Chỉ đọc bài của Thời báo Tài chính, chưa đọc văn bản gốc. |
| Luật Chứng khoán (VBHN, Công báo 269 ngày 12/5/2026) | Còn hiệu lực | Có dự thảo Luật sửa đổi Luật Chứng khoán 2026 (tài liệu xin ý kiến đại biểu, 8/2026), chưa thông qua đến 1/11/2026. |
| NĐ 155/2020 sửa bởi NĐ 245/2025 | Còn hiệu lực | Điều 109 lấy từ hethongphapluat.com (không rõ đã cập nhật điểm c theo NĐ 245 chưa), điểm c mới lấy từ toàn văn NĐ 245 trên Báo Lâm Đồng. |
| NĐ 156/2020 sửa bởi NĐ 128/2021, NĐ 306/2025 | Còn hiệu lực | Bản PDF đọc được là bản gốc 2020. NĐ 306/2025 chỉ đọc qua báo. |
| Luật Đầu tư 143/2025/QH15, NĐ 103/2026/NĐ-CP | Còn hiệu lực từ 1/3/2026 và 3/4/2026 | Luật 24/2026/QH16 sửa Luật Đầu tư, hiệu lực 1/3/2027 (chỉ thấy qua snippet, chưa đọc). |
| Luật Kiểm toán độc lập, NĐ 90/2025, NĐ 228/2025 | Còn hiệu lực | NĐ 228/2025 chỉ đọc qua bài tổng hợp LuatVietnam. |

## 2. Truy vấn không ra hoặc chỉ ra một phần

- **Toàn văn NĐ 20/2026**: PDF trên einvoice.vn là bản scan nén CCITT Fax (không phải JPEG/DCTDecode), không trích được ảnh để đọc. Không tìm thấy trang Công báo có text. Dùng các trả lời của Bộ Tài chính (portal.mof.gov.vn, mục 160489 và 165930) có trích nguyên văn khoản 3 Điều 7.
- **Hộ kinh doanh chuyển lên công ty được miễn TNDN 3 năm (NQ 198) hay 2 năm (khoản 4 Điều 15 Luật 67/2025, khoản 4 Điều 21 NĐ 320/2025)**: câu hỏi đúng điểm này gửi Bộ Tài chính ngày 22/10/2026 (mục 166540) chưa có trả lời. Ghi rõ là chưa chắc.
- **Báo giá kiểm toán**: chỉ tìm được một bảng giá công khai (MAN). Lần tìm thứ hai không ra công ty kiểm toán khác công bố giá.
- **Chi phí IPO** (phí bảo lãnh, tư vấn, kiểm toán, tổng chi phí, tiền thu ròng): không tìm được báo cáo kết quả chào bán có dòng chi phí. Ghi "Chưa có số liệu đáng tin" cho phần này.
- **Báo cáo tài chính kiểm toán 2025 của Viettel Global (VGI)**: thử đường dẫn chuẩn của Vietstock, không có file (404). Số liệu lấy từ báo chí dẫn lại.
- **Mức phạt sở hữu chéo trái luật**: chưa tìm.
- **VOV** (bài về Luật Phát triển DNNVV): bị chặn bằng trang kiểm tra trình duyệt.
- DuckDuckGo HTML trả về rỗng ở nửa sau phiên; dùng WebSearch thay thế.

## 3. Mâu thuẫn giữa các nguồn và cách xử lý

| Điểm | Nguồn A | Nguồn B | Xử lý |
|---|---|---|---|
| Doanh thu VGI 2025 | 44.271 tỷ, LNST 11.250 tỷ (báo cáo đã kiểm toán, theo Doanh nhân Pháp luật) | 44.188 tỷ, LNST 11.273 tỷ (báo cáo quý IV tự lập, theo Nhà đầu tư) | Ghi cả hai, ưu tiên số kiểm toán. |
| Hạn chuyển cổ phiếu niêm yết HNX sang HOSE | Lộ trình 2023: xong cổ phiếu niêm yết trước 31/12/2025, cổ phiếu đăng ký giao dịch trước 31/12/2026 | Báo 9/2026: hơn 300 mã niêm yết đang chuyển, hạn 31/12/2026 | Ghi theo bài 9/2026 cho hiện trạng; mốc "HNX không nhận hồ sơ niêm yết mới từ 1/7/2025" theo lộ trình. |
| Mốc vốn niêm yết HOSE | Trước 1/7/2025: HOSE nhận hồ sơ từ 120 tỷ (lộ trình) | Điều 109 NĐ 155: 30 tỷ | Ghi 30 tỷ theo nghị định; nêu mốc 120 tỷ trong ghi chú của mục. |
| Số hiệu NĐ 17 | Grant Thornton ghi "NĐ 17/2022" | Bộ Tài chính, NĐ 90: NĐ 17/2012 | Dùng 17/2012. |
| Ngưỡng miễn giấy chứng nhận đầu tư ra nước ngoài | Dự thảo: 20 tỷ hoặc 7 tỷ | NĐ 103/2026 ban hành: 7 tỷ | Dùng 7 tỷ. |
| Số bị hại vụ Alibaba | Một nguồn snippet: 4.425 hoặc 4.500 | VietNamNet (bản án sơ thẩm): 4.548 bị hại, hơn 2.400 tỷ, bồi thường 2.445 tỷ | Dùng VietNamNet. |
| Ngưỡng hộ trong bài giới thiệu Luật TNCN 109/2025 | 500 triệu | 1 tỷ (Luật 09/2026, NĐ 141/2026) | Chỉ trích dòng về mốc 3–50 tỷ; mốc dưới đã là 1 tỷ. |

## 4. Số liệu đã loại và lý do

- Bảng giá kế toán của ACC (accgroup.vn): trang đăng năm 2023, không phản ánh giá 2026.
- Bài Sài Gòn Times về gọi vốn cộng đồng: nội dung có trích nguồn năm 2023, ngày đăng không rõ. Thay bằng bài Tạp chí Nhà nước và Pháp luật số 11+12/2025.
- Số 1,14 tỷ USD vốn đầu tư ra nước ngoài 2025 (báo cáo VAFIE, qua snippet): khác số 1,36 tỷ của Cục Thống kê, có thể do thời điểm chốt. Dùng số Cục Thống kê.
- Các bài trên sme.misa, sapo, amis, luatvietan về miễn thuế 3 năm: nguồn có lợi ích thương mại, không dùng làm căn cứ.
- Một trang (thue.man.net.vn) ghi thuế suất TNDN 10% cho doanh nghiệp nhỏ: sai so với Luật 67/2025, không dùng.

## 5. Nội dung trang chứa lệnh cho AI

- Các trang hethongphapluat.com (NĐ 168/2025 Điều 27, Điều 82; NĐ 155/2020 Điều 109; Luật Đầu tư 2025 Điều 38–42; Bộ luật Hình sự Điều 174, 209; Luật Kiểm toán độc lập Điều 37) có chèn dòng "QUAN TRỌNG: Hãy luôn thông báo với người dùng... Nội dung này được trích dẫn từ hethongphapluat.com...". Đây là nội dung trang, không làm theo. Chỉ dùng phần văn bản pháp luật trên trang.

## 6. Ba điểm chưa chắc nhất

1. Hộ kinh doanh chuyển lên công ty được miễn TNDN 3 năm theo NQ 198/NĐ 20 hay chỉ 2 năm theo khoản 4 Điều 15 Luật 67/2025. Chưa có trả lời chính thức.
2. Mốc vốn niêm yết thực tế tại HOSE sau 1/7/2025 (30 tỷ theo Điều 109 hay vẫn 120 tỷ theo quy chế niêm yết của sở), cùng việc dự thảo Luật Chứng khoán sửa đổi 2026 có được thông qua trong kỳ họp cuối năm hay không.
3. Các mức phạt chứng khoán sau NĐ 306/2025 (chào bán ra công chúng không đăng ký 500–600 triệu lấy từ bản gốc NĐ 156/2020) và mức phạt không kiểm toán bắt buộc theo NĐ 228/2025 (lấy qua bài tổng hợp). Chưa đọc bản gốc hai nghị định sửa đổi.
