# Ghi chú nhóm tap-doan-vn-2 (phần 7: FPT, Vinamilk, Thế Giới Di Động)

Ngày làm: 01/11/2026. Ba mục `kind: "case"`. `node tools/build.mjs` chạy không có lỗi hay cảnh báo nào thuộc file này.

## Nguồn chính đã đọc trực tiếp (PDF tải về, bóc chữ bằng pypdf)
- FPT: Báo cáo thường niên 2025 (232 trang, gồm BCTC hợp nhất kiểm toán); Báo cáo KQKD tháng 12/2024, tháng 12/2025, tháng 9/2026; BCTN 2018; trang lịch sử fpt.com/vi/ve-fpt/lich-su (đọc dữ liệu JSON nhúng trong trang).
- Vinamilk: BCTN 2025, BCTN 2023, BCTN 2021; tài liệu giới thiệu doanh nghiệp 11/08/2026; bản tin nhà đầu tư quý 3/2026.
- MWG: BCTN 2025, 2024, 2023; BCTC hợp nhất kiểm toán 2025 và 2023 (bản scan, đọc trang ảnh JPEG lấy từ luồng /DCTDecode: trang P&L 2025 và thuyết minh số nhân viên 2023, 2025); tóm tắt KQKD cả năm 2025; cập nhật 9 tháng 2026; tài liệu họp nhà đầu tư quý 4/2025. Danh mục file lấy qua API công khai của trang IR mwg.vn (api.bhxwork.vn/gw/ir-api).

## Truy vấn không ra / không đọc được
- Vinamilk: không tìm được chuỗi thị phần gốc NielsenIQ theo năm. Từ BCTN 2021 Vinamilk chỉ công bố mức thay đổi thị phần (2021: +0,9 điểm về giá trị), không công bố mức. Bản tin IR quý 3/2023 (link cũ static/uploads/...) nay trả về trang HTML, không tải được.
- Vinamilk: không tìm thấy bản tin nhà đầu tư quý 4/2025 trên trang IR (danh sách chỉ còn 2025 Q1–Q3 và 2026); biên gộp 2025 lấy từ tài liệu giới thiệu doanh nghiệp 8/2026.
- MWG: lợi nhuận riêng của Bách Hóa Xanh 2025 nằm trong biểu đồ dạng hình vẽ của tài liệu họp nhà đầu tư, pypdf không bóc được số. Dùng số DSC (755 tỷ). Một bài trên elibook.vn dẫn VCBS ghi 812 tỷ, chỉ đọc được tiêu đề qua công cụ tìm kiếm nên không dùng.
- MWG: không tìm được số lỗ lũy kế Bách Hóa Xanh từ tài liệu công ty. Một kết quả tìm kiếm nói "lũy kế 2016–2023 lỗ hơn 8.600 tỷ" nhưng không mở được trang chứa câu đó, nên không dùng.
- MWG: BCTC kiểm toán là bản scan; không kiểm được thuyết minh bộ phận (nếu có). Doanh thu theo chuỗi lấy từ BCTN và bản tóm tắt KQKD của công ty (chưa kiểm toán theo chuỗi).
- FPT: không có số lợi nhuận riêng mảng Nhật Bản; chỉ có doanh thu.

## Mâu thuẫn giữa nguồn
- FPT tên gốc 1988: Báo Đầu tư (2013) ghi "Công ty Công nghệ Thực phẩm (Food Processing Technology)", Diễn đàn Doanh nghiệp ghi "CTCP Chế biến thực phẩm"; đề bài ghi "Công ty Công nghệ Chế biến Thực phẩm". Trang lịch sử chính thức không nêu tên gốc. Mục dùng tên theo Báo Đầu tư kèm tên tiếng Anh.
- FPT LNTT 2025: 13.039 tỷ (báo cáo KQKD 1/2026, chưa kiểm toán) và 13.044 tỷ (BCTN, kiểm toán). Dùng 13.044.
- FPT doanh thu mảng Giáo dục 7.009 tỷ (KQKD) lớn hơn doanh thu cả khối Giáo dục, Đầu tư và Khác 6.132 tỷ. FPT không giải thích; có thể do loại trừ doanh thu nội bộ. Mục chỉ dùng số khối.
- FPT doanh thu theo thị trường: biểu đồ ghi 8.173 và 8.163 tỷ cho Mỹ và châu Á – Thái Bình Dương nhưng chữ bị xáo khi bóc. Đối chiếu với số 2024 (7.751 và 8.240) thì nhiều khả năng Mỹ 8.163 (+5,3%), APAC 8.173 (−0,8%), châu Âu +36,3%. Vì không chắc thứ tự, mục ghi gộp "mỗi nơi khoảng 8.170 tỷ".
- FPT phân bổ doanh thu theo khu vực địa lý toàn tập đoàn trong BCTN (Việt Nam 48,9%, Nhật 22,8%...) khác cách tính với doanh thu CNTT nước ngoài theo thị trường (Nhật 44% mảng). Mục dùng số mảng CNTT nước ngoài.
- Vinamilk thị phần: 58–59% (TGĐ nói 11/2018, công ty tự công bố); "hơn 60% theo sản lượng" (VCSC dẫn qua VnExpress 3/2022); "gần một nửa" cuối 2024 (VIRAC dẫn qua VIR 8/2025). Phương pháp khác nhau (giá trị/sản lượng, phạm vi ngành), không ghép thành xu hướng.
- Vinamilk doanh thu 2025: tổng doanh thu 63.724 tỷ (BCTN), doanh thu thuần 63.646 tỷ (tài liệu giới thiệu), bản IFRS ghi 54.249 tỷ do phân loại khác. Dùng VAS.
- Vinamilk nhân sự: 9.906 (BCTN 2025) và "~10K" (tài liệu giới thiệu).
- MWG doanh thu 2025: 155.928 tỷ (BCTC kiểm toán, doanh thu thuần), 156.166 tỷ (tóm tắt KQKD), 156.458 tỷ (tài liệu họp nhà đầu tư). Dùng số kiểm toán. LNST 7.073 (kiểm toán) và 7.075 (tài liệu họp).
- MWG lợi nhuận BHX 2025: DSC 755 tỷ; VCBS (qua elibook) 812 tỷ; CEO nói 11/2025 "trên 600 tỷ". Chênh lệch chưa giải được.
- MWG số cửa hàng 5 năm trong BCTN 2025 (5.316; 5.306; 5.762; 5.491; 6.225) không gắn rõ với từng năm khi bóc chữ; không dùng. Dùng mốc "hơn 5.700" (2022), "hơn 5.500" (2023) từ BCTN 2023 và 6.225 (2025).
- MWG số cửa hàng đóng 8 tháng 2024 theo báo chí không thống nhất (một nguồn 55 TGDĐ, 159 ĐMX, 201 An Khang; nguồn khác 70 cửa hàng). Không dùng; thay bằng số công ty công bố "ít hơn 221 cửa hàng so với cuối 2023" (BCTN 2024).

## Số liệu đã loại và lý do
- FPT giá cổ phiếu 55.400 đồng (27/10/2026, "thấp nhất hơn 3 năm") và khối ngoại bán ròng 16.800 tỷ: chỉ thấy qua tóm tắt công cụ tìm kiếm, không mở trang gốc; FPT phát hành cổ phiếu tăng vốn 9/2026 nên giá trước/sau không so trực tiếp được. Dùng mốc 62.900 đồng (Báo Pháp Luật, 27/7/2026) đã mở trang.
- Vinamilk: kế hoạch SCIC giữ vốn Vinamilk giai đoạn 2026–2030 (stockbiz.vn) đã đọc nhưng không đưa vào vì nguồn là cổng tổng hợp; chỉ giữ số cổ tức SCIC nhận từ TheLEADER.
- MWG: số lỗ BHX 2023 (1.200 tỷ) là ước tính của SSI dẫn qua báo, ghi rõ là ước tính trong mục.
- Không quy đổi USD ở cả ba mục; các số USD trong mục là số công ty hoặc báo tự ghi.

## Nhãn phân loại
- FPT `owner: public`: cổ đông lớn nhất là ông Trương Gia Bình 6,89%, SCIC 5,67%; nước ngoài 38,73% (BCTN 2025). `outcome: rising` vì lợi nhuận vẫn tăng 15–19%/năm, dù có rủi ro AI.
- Vinamilk `owner: state`: SCIC 36% là cổ đông lớn nhất nhưng không quá bán; nhóm F&N khoảng 25%.
- MWG `owner: founder`, `reach: domestic`: Erablue (Indonesia) là liên doanh MWG nắm 45%, hạch toán theo vốn chủ; Campuchia đã đóng.

## Nội dung web ra lệnh cho AI
- Không gặp câu nào ra lệnh cho AI trong các trang đã đọc.
