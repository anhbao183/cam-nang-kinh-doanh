# Ghi chú nhóm tap-doan-vn-1 (phần 7: Viettel, Petrovietnam, Vingroup, Hòa Phát)

Ngày làm: 01/11/2026. Tất cả nguồn ghi `verified: "page"` đều đã mở và đọc được câu trích (PDF đọc bằng pypdf; PDF scan của Hòa Phát đọc bằng ảnh trang).

## Truy vấn / nguồn không lấy được

- **Viettel – trang chính thức** (viettel.com.vn): trả về trang kiểm tra cookie bằng JavaScript; không vượt qua cơ chế này. Dùng thay bằng bản "Công bố thông tin" năm 2019 và 2021 của Viettel lưu trên Vietstock (mức A) và báo chí đưa tin hội nghị tổng kết 9/1/2026 (mức C).
- **Viettel – BCTC/BCTN 2025**: Viettel không công bố. Bản CBTT trên Vietstock chỉ có đến năm 2021 (2022–2025 trả 404).
- **Viettel Global (VGI) – BCTC 2025 đã kiểm toán, BCTN 2025**: không tìm được file PDF (các đường dẫn Vietstock UPCoM/HNX/OTC đều 404). Tên miền viettelglobal.vn hiện là trang quảng cáo vay tiền không liên quan (tên miền bị chiếm/hết hạn); không dùng trang này. Số của VGI lấy qua báo chí trích BCTC kiểm toán (mức C).
- **Lãi/lỗ từng thị trường nước ngoài của Viettel năm 2025**: không có nguồn công khai. Nguồn gần nhất có phân loại lãi/lỗ là phát biểu giữa năm 2018 (8/10 thị trường có lãi; Tanzania, Myanmar lỗ theo kế hoạch). Ghi "Chưa có số liệu đáng tin" cho năm 2025.
- **Federal Register (Mỹ)**: trang toàn văn trả về "Request Access". Đã xác nhận qua API của federalregister.gov: tìm toàn văn cụm "Telecom International Myanmar" (cơ quan BIS) trả về đúng văn bản 2024-31468 công bố 6/1/2025, phần tóm tắt ghi "Burma (1)". Tên Mytel trong văn bản xác nhận gián tiếp qua kết quả tìm toàn văn và bài của US-ASEAN Business Council.
- **Vingroup – vingroup.net**: chặn bằng Cloudflare; không vượt qua. Dùng bản Báo cáo thường niên 2025 lưu trên Vietstock (có in kèm BCTC hợp nhất kiểm toán) và 20-F của VinFast trên SEC EDGAR.
- **Petrovietnam – BCTC hợp nhất 2025 đã kiểm toán**: chưa có trên trang công bố thông tin của PVN (bản mới nhất là BCTC riêng giữa niên độ 2024). Dùng Báo cáo Phát triển bền vững 2025 của PVN (mức A, có LNTT/LNST hợp nhất, nộp ngân sách, sản lượng, sơ đồ sở hữu) và báo chí trích BCTC kiểm toán (mức C) cho doanh thu thuần 632.209 tỷ và các ý kiến ngoại trừ.
- **Petrovietnam – cơ cấu doanh thu hợp nhất theo mảng**: không tìm thấy nguồn công khai (BCTC có báo cáo bộ phận nhưng không lấy được bản 2025). Thay bằng sản lượng và doanh thu riêng của từng đơn vị; ghi rõ không cộng được.
- **Hòa Phát – trang lịch sử** (hoaphat.com.vn/gioi-thieu): nội dung từng mốc tải bằng AJAX; dùng mục "Lịch sử hình thành" trong Báo cáo thường niên 2025 thay thế.
- **Hòa Phát – BCTC kiểm toán 2019, 2021, 2023, 2025**: đều là bản scan; bản 2025 bị lật ngược 180 độ, đã xoay ảnh để đọc. Số liệu đọc từ ảnh trang, đã đối chiếu tổng (doanh thu thuần − giá vốn = lợi nhuận gộp).
- **Số dự án trong "12 dự án yếu kém ngành Công Thương"** liên quan PVN (PVSM, Ethanol, PVTex) và tình trạng xử lý đến 2025: chỉ thấy qua đoạn trích công cụ tìm kiếm, chưa mở được văn bản gốc (QĐ 1274/QĐ-TTg). Đã bỏ câu nhắc "12 dự án" khỏi mục.

## Mâu thuẫn giữa nguồn và cách xử lý

1. **Tăng trưởng LNTT 2025 của Viettel**: Báo Pháp luật VN ghi "gần 5%", Mekong ASEAN ghi "khoảng 10%". Không có số 2024 chính thức để tự tính. Ghi cả hai trong `facts.text`.
2. **Doanh thu nước ngoài của Viettel**: báo chí ghi Viettel Global "khoảng 3,3 tỷ USD"; BCTC hợp nhất kiểm toán của VGI là 44.271 tỷ đồng (≈ 1,76 tỷ USD theo tỷ giá 25.121). Giả thuyết (chưa xác nhận): 3,3 tỷ USD gồm cả Bitel (Peru) và Mytel (Myanmar) không hợp nhất. Ghi rõ là suy luận.
3. **LNST VGI 2025**: 11.250 tỷ (VietnamFinance, BBW 11.251) và 11.273 tỷ (một báo khác, chỉ thấy qua đoạn trích). Doanh thu 44.188 tỷ (báo cáo tự lập) và 44.271 tỷ (kiểm toán). Dùng số kiểm toán.
4. **Tỷ lệ thu hồi vốn các dự án nước ngoài của VGI**: 91% (VietnamFinance, tường thuật ĐHĐCĐ) và 92% (Báo Pháp luật VN). Dùng 91% kèm số 2024 (86%).
5. **Nộp ngân sách của Viettel năm 2024**: 46,3 nghìn tỷ (Vietnam Report qua VietnamFinance) và 42,6 nghìn tỷ (tiêu đề Tạp chí Công Thương, không rõ năm). Không dùng, vì không chắc phạm vi tính.
6. **Viettel còn hay đã rời Nexttel (Cameroon)?** ITWeb (5/2023) viết Viettel đã rời; thư Viettel gửi Tổng thống Cameroon (8/2026, Billionaires.Africa) khẳng định vẫn sở hữu 70%. Ghi cả hai, kết luận "mất quyền kiểm soát, tranh chấp chưa xong".
7. **Doanh thu Petrovietnam 2025**: 632.209 tỷ (doanh thu thuần, BCTC kiểm toán theo báo chí); 665,1 nghìn tỷ ("doanh thu hợp nhất" trong Báo cáo PTBV); 1.105,2 nghìn tỷ ("doanh thu toàn tập đoàn chưa hợp nhất"); vài báo ghi 651–654 nghìn tỷ (số ước trước kiểm toán). Dùng 632.209 tỷ cho ô `revenue`, giải thích các số còn lại.
8. **Nộp ngân sách PVN**: 165,9 nghìn tỷ (toàn tập đoàn, chưa hợp nhất) và 90,991 nghìn tỷ (hợp nhất). Ghi cả hai.
9. **Sản lượng xăng dầu PVN 2025**: bảng chỉ tiêu ghi 16,50 triệu tấn; phần thuyết minh ghi ~7,89 triệu tấn "chưa bao gồm NSRP" (Nghi Sơn). Không dùng con số này trong mục.
10. **Vốn đầu tư Ethanol Dung Quất**: 2.219 tỷ (VietNamNet 2025) và "gần 1.500 tỷ, sau tăng lên 2.100 tỷ" (SGGP 2016 dẫn kết luận Thanh tra Chính phủ). Dùng 2.219 tỷ cho riêng nhà máy, và tổng 3 dự án 4.300 → gần 5.400 tỷ theo Thanh tra Chính phủ.
11. **Năm và giá bán Technocom cho Nestlé**: Kyiv Post và Baking Business (đầu 2010) ghi Nestlé không công bố giá, giới phân tích ước 130–180 triệu USD; một số báo và Wikipedia ghi năm 2009 và 150 triệu USD. Ghi "khoảng năm 2010", giá ước 130–180 triệu USD. Năm của bài Kyiv Post suy từ nội dung, trang lưu trữ không hiện ngày rõ.
12. **Doanh thu VinFast 2025**: 90.427,6 tỷ (thông cáo sơ bộ chưa kiểm toán, 3/2026) và 90.178,6 tỷ (20-F đã kiểm toán, chuẩn mực Mỹ, 30/4/2026). Dùng số 20-F. Doanh thu mảng sản xuất trong BCTC Vingroup (chuẩn mực VN) là 91.050 tỷ, gồm cả xe buýt điện và dịch vụ liên quan; không trộn hai bộ số.
13. **Lỗ ròng VinFast 2025**: báo chí ghi "3,9 tỷ USD"; 20-F ghi 99.582,8 tỷ đồng (3.964,1 triệu USD, tỷ giá 25.121). Dùng 20-F.
14. **Doanh thu Vingroup 2025**: 332.770 tỷ (BCTC tự lập quý 4) và 331.838 tỷ (kiểm toán). Dùng số kiểm toán.
15. **Doanh thu Hòa Phát 2025**: báo chí hay dẫn 158.332 tỷ (tổng doanh thu trước giảm trừ); BCTC ghi doanh thu thuần 156.116 tỷ. Biểu đồ xuất khẩu trong BCTN 2025 lại ghi "doanh thu thuần" 2025 là 158.314 tỷ, lệch với BCTC; dùng số BCTC.
16. **Lỗ quý 4/2022 của Hòa Phát**: 1.992 tỷ (ABS), 1.998,8 tỷ (PHS), "gần 2.000 tỷ" (VnEconomy). Ghi "gần 2.000 tỷ".
17. **Đề bài liệt kê PLX là công ty con niêm yết của PVN**: không đúng. Petrolimex (PLX) do cổ đông nhà nước nắm 75,87% qua kênh khác (cuối 2025), ENEOS 13,08%. Mảng bán lẻ xăng dầu của PVN là PV OIL (PVN nắm 80,52%). Đã ghi rõ trong mục.
18. **Điện máy gia dụng của Hòa Phát**: BCTN nói là một trong 5 lĩnh vực, nhưng báo cáo bộ phận trong BCTC chỉ có thép, nông nghiệp, bất động sản. Không tìm được doanh thu riêng; ghi "không được báo cáo riêng".

## Số liệu đã loại và lý do

- "Viettel vượt PetroVietnam thành doanh nghiệp lãi nhất năm 2025" (bảng PROFIT500 của Vietnam Report): bảng này xếp theo số năm 2024; năm 2025 LNTT hợp nhất PVN (66,6 nghìn tỷ) cao hơn Viettel (56,8 nghìn tỷ). Loại để tránh hiểu nhầm.
- Tỷ lệ sở hữu 49% của VGI tại Mytel: chỉ thấy trong đoạn trích tìm kiếm (Total Telecom, Justice For Myanmar), chưa mở được trang có câu đó. Không đưa con số vào mục.
- Khoản nợ quá hạn 9,8 nghìn tỷ của Mytel với VGI và 8,8 nghìn tỷ đã trích lập: nguồn là nhóm vận động Justice For Myanmar dẫn BCTC bán niên của VGI; chưa đối chiếu được với BCTC gốc. Loại; trong mục chỉ ghi suy luận định tính, gắn nhãn "suy luận của tác giả".
- Tổng vốn Viettel đã rót vào Nexttel (gần 201 tỷ franc CFA) là số Viettel nêu trong thư, do báo châu Phi dẫn; giữ lại nhưng ở mức C.
- Chi phí dừng/khởi động mỗi lò cao (~40 tỷ) của Hòa Phát là ước tính của "chuyên gia" do Diễn đàn Doanh nghiệp dẫn; giữ lại, ghi rõ "báo chí ước".
- Số lao động Viettel: số mới nhất có nguồn chính thức là bình quân hợp nhất năm 2021 (40.590 người). Không dùng các con số "hơn 50.000 người" trôi nổi không rõ nguồn.

## Ghi chú kỹ thuật

- Lớp chữ của file Báo cáo thường niên 2025 Vingroup trên Vietstock bị lỗi mã phông (ví dụ "lN" thay cho "lỗ"). Các con số đọc rõ và khớp nhau giữa bảng tóm tắt và thuyết minh bộ phận. Câu trích ở nguồn 1 của mục Vingroup là dòng bảng số đã khôi phục dấu tiếng Việt; con số giữ nguyên.
- Các câu có nhãn "Suy luận của tác giả" là diễn giải, không phải số liệu có nguồn.
- Không gặp nội dung trang web nào ra lệnh cho AI. Trang viettelglobal.vn là trang quảng cáo vay tiền (không liên quan Viettel); chỉ ghi nhận, không dùng.
