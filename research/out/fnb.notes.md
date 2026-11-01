# Ghi chú nghiên cứu — nhóm `fnb` (phần 4)

Ngày làm: 01/11/2026. Bốn mục: `quan-ca-phe-nho-mang-di`, `quan-an-binh-dan`, `nhuong-quyen-tra-sua-do-uong`, `xe-day-kiot-luu-dong`.

## 1. Giới hạn của phiên này

- **Hết lượt tìm kiếm giữa chừng.** Hạn mức WebSearch dùng chung cho cả phiên đã hết sau khoảng 25 truy vấn của nhóm này. Phần sau chỉ đọc được những trang đã biết URL (trang chính thức của iPOS, các trang văn bản trên hethongphapluat.com, trang nhượng quyền của từng thương hiệu, bài báo dẫn từ các trang đã mở). Vì vậy còn thiếu: báo giá xe đẩy, số liệu riêng cho quán cơm/phở, BCTC của chuỗi niêm yết.
- **Không dùng trình duyệt**, theo yêu cầu. Báo cáo đầy đủ của iPOS phải điền form có thông tin cá nhân nên không tải từ ipos.vn.
- Để đọc PDF, đã cài `pypdf` vào thư mục tạm của phiên (không đụng môi trường Python chung).

## 2. Nguồn chính và độ tin cậy

- **Báo cáo iPOS.vn & Nestlé Professional năm 2025** (phát hành 8–9/4/2026, VIRAC thẩm định dữ liệu): đọc toàn văn 92 trang từ **bản PDF do bên thứ ba lưu** (supabase, thư mục `mentee_docs`). Nội dung khớp thông cáo chính thức trên ipos.vn: 329.500 cửa hàng, 726.500 tỷ, 65,58%, 69,38%, 57,11%, và có "Phần năm … tỷ lệ chuẩn đối sánh". Vẫn nên đối chiếu với bản gốc khi có.
- **Thông cáo 6 tháng đầu 2026 của iPOS** (10/9/2026): chỉ có thông cáo, không có toàn văn báo cáo.
- **Số liệu "F&B Benchmark 2025"** (tr. 88–90) nằm trong biểu đồ tròn. Khi bóc chữ chỉ được 4 con số mỗi biểu đồ mà không có nhãn đi kèm. Đã gán nhãn bằng cách đọc màu và góc từng lát cắt trong nội dung PDF, rồi đối chiếu với màu chú thích:
  - Đồ ăn HN: nhân sự 14,50 | nguyên liệu 29,96 | mặt bằng/điện nước/marketing… 41,90 | lợi nhuận 13,65
  - Đồ uống HN: 15,31 | 28,74 | 40,78 | 15,16
  - Đồ ăn HCM: 14,77 | 30,91 | 41,64 | 12,69
  - Đồ uống HCM: 15,32 | 29,80 | 41,50 | 13,38
  - **Cảnh báo:** lần gán đầu (chỉ dựa vị trí chữ) đã đảo hai số 14,77 và 12,69 của biểu đồ "Đồ ăn HCM". Phép đo góc lát cắt đã sửa lại. Nên có người nhìn tận mắt trang 90 để xác nhận.
  - Mẫu gồm 200 cửa hàng vừa và nhỏ ở HN/HCM, lãi gộp trên 10%, chạy từ 1 năm trở lên. Đây là **thiên lệch người sống sót**, nên không dùng làm biên lãi của quán mới mở.
  - Báo cáo ghi dữ liệu thu từ 01/02–01/03/2026 nhưng lại viết "bao quát thị trường F&B trong năm 2023". Nhiều khả năng là lỗi chép từ bản cũ; đã hiểu là năm 2025.

## 3. Pháp lý — các điểm đã kiểm chứng và còn mở

- **ATTP:** NĐ 46/2026/NĐ-CP (ban hành 26/1/2026, thay NĐ 15/2018) bị NQ 09/2026/NQ-CP tạm ngưng đến 15/4/2026. Sau đó NQ 15/2026/NQ-CP (06/4/2026) tạm ngưng tiếp **cho tới khi Luật ATTP sửa đổi và nghị định hướng dẫn có hiệu lực**. Trong thời gian này NĐ 15/2018 tiếp tục áp dụng (nguồn: Cổng PBGDPL Cần Thơ, PLO). Dự án Luật ATTP sửa đổi dự kiến cho ý kiến ở kỳ họp tháng 10/2026, thông qua 5/2027; thông tin này chỉ có ở mức snippet, chưa xác nhận kết quả kỳ họp. → **Cần kiểm tra lại trước khi xuất bản.**
- **Hộ kinh doanh ăn uống có phải xin GCN không:** Danh sách miễn ở khoản 1 Điều 12 NĐ 15/2018 **không có** "dịch vụ ăn uống" nói chung, nên quán có địa điểm cố định phải có GCN. Thực tế có nơi lại cho "cơ sở kinh doanh dịch vụ ăn uống không thuộc diện cấp GCN" ký cam kết (công văn xã Ngọc Lặc, Thanh Hóa, 4/2026). Giữa văn bản trung ương và cách làm ở địa phương có độ vênh; mục đã ghi "hỏi UBND xã".
- **Mức phạt thiếu GCN:** khoản 1 Điều 18 NĐ 115/2018 ghi 20–30 triệu. Theo khoản 2 Điều 3 (bản trên hethongphapluat, đã gồm sửa đổi của NĐ 124/2021), Điều 18 là **mức cho tổ chức**, nên cá nhân/hộ kinh doanh chịu 10–15 triệu. Bản hợp nhất 02/VBHN-BYT (luatvietnam) không tải được để đối chiếu. Bộ Y tế đang soạn nghị định thay NĐ 115/2018 (tin 4/2026 và 7/2026, mức phạt đề xuất tăng), nhưng **chưa thấy ban hành**.
- **Cơ quan cấp GCN sau khi bỏ cấp huyện:** không có quy định thống nhất toàn quốc, do UBND tỉnh phân cấp. TP.HCM: Sở ATTP đang cấp và đề xuất ủy quyền cho UBND xã đến 28/2/2027. Lý do: NĐ 148/2025/NĐ-CP hết hiệu lực từ 1/3/2027 (theo báo cáo của Sở ATTP, dẫn trên báo Đại biểu Nhân dân 29/6/2026). Chưa đọc nguyên văn NĐ 148/2025.
- **Phí thẩm định cấp GCN** (Thông tư 67/2021/TT-BTC): không mở được văn bản nên không đưa con số nào.
- **Nhượng quyền:** NĐ 08/2018 **không** sửa phần đăng ký; nó chỉ sửa Điều 5 (bỏ điều kiện "đã đăng ký") và bãi bỏ Điều 6–7. Việc miễn đăng ký cho nhượng quyền trong nước là do **Điều 17a, bổ sung bởi NĐ 120/2011/NĐ-CP**. Đã sửa căn cứ cho đúng so với đề bài.
- **Mức phạt vi phạm về nhượng quyền** (Điều 75 NĐ 98/2020/NĐ-CP, đã sửa đổi): chưa kiểm chứng nguyên văn nên không đưa vào.
- **Vỉa hè:** Điều 12 NĐ 168/2024/NĐ-CP (hiệu lực 1/1/2025): bán hàng rong ở phố cấm 200–250 nghìn (điểm e khoản 2); dùng trái phép lòng đường, vỉa hè để kinh doanh ăn uống 2–3 triệu cá nhân, 4–6 triệu tổ chức (khoản 7); dùng tạm vỉa hè cần phép mà không có phép 10–15 triệu, 20–30 triệu (khoản 12). Chưa kiểm tra được có văn bản nào sửa NĐ 168/2024 trong 2025–2026 không.
- **Miễn đăng ký hộ kinh doanh:** khoản 3 Điều 82 NĐ 168/2025/NĐ-CP. Điều này có vế "trừ ngành, nghề đầu tư kinh doanh có điều kiện", nên với hàng rong thực phẩm cách hiểu có thể khác nhau. Chưa đối chiếu Phụ lục IV Luật Đầu tư.
- **PCCC, bản quyền âm nhạc, thuế:** chỉ ghi chỉ dẫn 1 dòng. Đã kiểm số hiệu và hiệu lực: Luật 55/2024/QH15 và NĐ 105/2025 hiệu lực 1/7/2025; Luật SHTT sửa đổi 07/2022/QH15, Điều 20. NQ 198/2025/QH15 (bỏ thuế khoán từ 1/1/2026) mới chỉ thấy qua báo cáo iPOS, chưa đọc văn bản gốc.

## 4. Truy vấn không ra kết quả

- "iPOS báo cáo hoàn vốn quán cà phê / thời gian hoàn vốn trung bình": không có. iPOS không công bố thời gian hoàn vốn hay vốn đầu tư trung bình.
- "iPOS 2025 vốn mở quán dưới 500 triệu": không có số liệu.
- "hệ số tham chiếu iPOS … % doanh thu" trên báo chí: không bài nào đăng số benchmark, phải đọc thẳng PDF.
- Báo giá xe đẩy/ki-ốt (≥2 nguồn), BCTC Jollibee/Highlands, Masan/Phúc Long, cáo bạch Mixue: không làm được vì hết lượt tìm kiếm. Các tên miền mixue.vn, mixue.com.vn, dingtea.com.vn không phân giải được.
- thuvienphapluat.vn và luatvietnam.vn chặn (403). vbpl.moj.gov.vn không phân giải được tên miền.

## 5. Mâu thuẫn và cách xử lý

- **"329.500 cửa hàng, +2%" và "299.900, −7,1%"** không mâu thuẫn: con số sau là cuối quý II/2025 (sau đợt đóng 50.000 cửa hàng), con số đầu là cả năm 2025. Cả hai đều có trong báo cáo.
- **Tỷ lệ tiền thuê:** Milano/chuỗi 20 cửa hàng nói khoảng 18% doanh thu (2023). Một chủ quán (VTC 2026) nói "thường 25–30%". Ý kiến cá nhân này không được dùng làm số liệu. Benchmark iPOS gộp mặt bằng với điện nước và marketing thành khoảng 41%, nên không tách riêng được.
- **Dự phóng của Viên Viên** có điểm không khớp: "4.000 lượt khách/tháng" lại ghi "tương đương 211 ly/ngày" (≈6.330 ly/tháng). Đã dùng 211 ly/ngày để suy ra giá bình quân ~19.000 đ/ly. Dòng thuế 0,5 triệu/tháng chưa phản ánh chế độ kê khai từ 2026. Lãi 27% gần gấp đôi benchmark của cửa hàng khỏe, nên chỉ giữ như báo giá mức C.
- **Mức vốn của Tocotoco** chỉ là các khoảng chọn trong form tư vấn, không phải bảng giá. "Hoàn vốn từ 4 tháng" là lời quảng cáo, chỉ trích như một lời hứa của bên bán.

## 6. Số liệu đã loại

- "Giá vốn ly cà phê 20–25%" (quản lý Highlands, Paris Coffee trên Brandsvietnam): bài quá cũ, không rõ năm.
- "Doanh thu ngành F&B 2024 dự báo 655.000 tỷ" (dự báo cũ): đã có số thực 688,8 nghìn tỷ.
- "Chi phí lao động 20–40% doanh thu" (bài trên FPT Shop): nguồn bán hàng, không có phương pháp.
- Con số "gần 30.000 cửa hàng mới mở" nửa đầu 2025: chỉ thấy trong phần tóm tắt của công cụ tìm kiếm, không mở được trang để kiểm.
- Các trường hợp "ký cam kết ATTP" ở Bình Dương (Chỉ thị 12/2012, đã hết hiệu lực) và Hà Nội (công văn xã): chỉ thấy snippet. Chỉ giữ case Thanh Hóa vì đã đọc được toàn văn.

## 7. Việc nên làm tiếp (khi có lại lượt tìm kiếm)

1. Xác nhận kết quả kỳ họp Quốc hội tháng 10/2026 về Luật ATTP sửa đổi, và xem nghị định thay NĐ 115/2018 đã ban hành chưa.
2. Tìm ≥2 báo giá xe đẩy/ki-ốt và ít nhất một case xe đẩy có số liệu doanh thu, chi phí.
3. Lấy số cửa hàng và doanh thu từ báo cáo thường niên của Jollibee Foods Corp (Highlands) và Masan (Phúc Long) để làm mốc cho chuỗi.
4. Kiểm tra mức phí thẩm định GCN theo Thông tư 67/2021/TT-BTC (hoặc văn bản thay thế).
5. Xem trực quan trang 89–90 của báo cáo iPOS 2025 để xác nhận cách gán nhãn biểu đồ.

## Vòng 2 (01/11/2026)

### Đã lấp
- **Hoàn vốn, cả 4 mục.** iPOS (báo cáo 2024, 2025, thông cáo 2026) không công bố thời gian hoàn vốn. Vì vậy dùng ước tính có công thức (mức C), mỗi đầu vào có nguồn riêng, ghi ở nguồn `type: "estimate"`:
  - Cà phê nhỏ: ≈ 8–22 tháng. Vốn 150–350 triệu ÷ lãi (120 triệu doanh thu theo dự phóng kiosk Viên Viên × 13,38–15,16% iPOS). Doanh thu 120 triệu là số lạc quan của bên bán. Case VTC 9/2026 cho thấy quán ở điểm hòa vốn thì không bao giờ hoàn vốn. Tag `mid`.
  - Quán ăn: ≈ 10–20 tháng. Vốn 226–260 triệu (200 triệu case VTC + 2 tháng cọc) ÷ lãi (100 suất × 35–50 nghìn × 30 ngày × 12,7–14,8%). Case thật chậm hơn: bún cá Láng còn 3–5 triệu/tháng năm 2026. Tag `mid`.
  - Nhượng quyền: giữ ước tính 20–23 tháng của vòng 1, thêm phép thử với lãi ròng 10,3% của Phúc Long (~30 tháng). Tag `slow`.
  - Xe đẩy: 2 case thật (Bánh mì Má Hải hoàn vốn 2 tháng, bài 2023; anh Đức ở Hà Nội mất hơn 20 triệu, 2025) và công thức theo ngưỡng 50 ly/ngày: vượt 10 ly/ngày thì 3–5 tháng. Tag `fast`, kèm cảnh báo trong notes của mục.
- **Xe đẩy, ki-ốt (C, nguồn có lợi ích thương mại).** Xe cà phê inox: Inox Kiệt Phát 4,6–11 triệu; Nhã Inox 4,8–8 triệu, có mẫu 13,9 triệu. Ki-ốt lưu động: Gia Thành Decor 15–50 triệu (12/2025); DSDhome 58 triệu cho đơn từ 5 ki-ốt (6/2025). Case báo chí: Người Quan Sát và VietNamNet (9/2025), VnExpress International (10/2023), VietNamNet (3/2026, quầy bún chả Hoàn Kiếm).
- **Quán ăn bình dân (C).** Vốn: case bánh xèo ~200 triệu (VTC 2025) và case cơm văn phòng 200 m² ở Cầu Giấy, Hà Nội ~650 triệu (VnBusiness 6/2026); mốc trên là nhà hàng mặt phố Hà Nội gần 2 tỷ (VietNamNet 3/2026). Chi phí tháng: thuê 13 triệu (Đống Đa) và 30 triệu (Linh Đàm, hơn 30 m²), lương ~10,6 triệu/người (case Cầu Giấy) → ước tính 24–51 triệu/tháng. Mọi case là Hà Nội, thành phố của case bánh xèo không nêu.
- **Mốc chuỗi (để so, quy mô khác hẳn).** Phúc Long 2025 (thông cáo Masan 28/01/2026, B): doanh thu 1.891 tỷ, biên EBITDA 18,7%, lãi ròng 10,3%, 202 cửa hàng độc lập, doanh thu bình quân 22,8 triệu/ngày/cửa hàng cùng kỳ. Highlands 2025: 985 cửa hàng (thông cáo JFC, B). EBITDA ~2,48 tỷ peso lấy từ Tuổi Trẻ News (C); doanh thu SuperFoods ~4.946 tỷ đ lấy từ index.vn (C, trang tổng hợp tin). JFC không công bố doanh thu riêng của Highlands. Tỷ lệ EBITDA ≈ 22% và doanh thu ≈ 5 tỷ/cửa hàng/năm là tác giả tính thô.
- **Pháp lý.**
  - Điều 75 NĐ 98/2020/NĐ-CP: đọc nguyên văn trên cơ sở dữ liệu văn bản của VCCI. NĐ 17/2022 và NĐ 24/2025 (bản ký số, 37 trang) có sửa NĐ 98/2020 nhưng không có chỗ nào nhắc Điều 75. NĐ 24/2025 sửa điểm b khoản 4 Điều 4, giữ quy tắc tổ chức bị phạt gấp đôi cá nhân; Điều 75 không nằm trong danh sách ngoại lệ.
  - Luật ATTP sửa đổi: Quốc hội thảo luận ở tổ ngày 24/10/2026 (LSVN), dự kiến thông qua ở kỳ họp thứ 3 (5/2027) theo quy trình 2 kỳ họp (Đại biểu Nhân dân 30/9/2026). NĐ 15/2018 vẫn áp dụng.
  - Nghị định thay NĐ 115/2018: đến 1/11/2026 chưa thấy ban hành, mới có dự thảo. Dự thảo sửa đổi lấy ý kiến 10/2025 đề xuất tăng lỗi thức ăn đường phố lên 1–2 triệu. Dự thảo Luật ATTP (Điều 68) đề xuất mức phạt tối đa 1 tỷ với cá nhân, 2 tỷ với tổ chức (LSVN 7/8/2026, chưa đưa vào JSON).

### Sửa chỗ vòng 1 sai hoặc chưa chắc
- **iPOS 2025, trang 90, biểu đồ "Đồ ăn – HCM".** Vòng 2 đã render trang thành ảnh (PyMuPDF, cài vào thư mục tạm) và nhìn trực tiếp. Nhãn in trên trang ghi **nhân sự 12,69%, lợi nhuận 14,77%**. Đo lại đường vector thì lát xanh (nhân sự) chiếm 53,5°, tức ≈ 14,9%, còn lát cam (lợi nhuận) chiếm 46,3°, tức ≈ 12,9%. Nghĩa là **chính báo cáo tự mâu thuẫn**, không phải vòng 1 đọc sai. Vòng 1 coi cách gán theo vị trí chữ là "đảo số" rồi chỉ giữ theo góc lát cắt; điều đó chưa đúng, vì cách gán theo vị trí chữ khớp với nhãn in. Đã sửa mục quán ăn: lãi ròng từ "12,7–13,7%" thành "12,7–14,8%", nhân sự thành 12,7–14,8%, có ghi rõ chỗ mâu thuẫn. Ba biểu đồ còn lại (đồ ăn HN, đồ uống HN, đồ uống HCM) khớp cả nhãn lẫn lát cắt, sai lệch dưới 0,5 điểm %, nên giữ nguyên. Không tìm thấy bài báo nào trích các số benchmark này.
- **Dải thông số dài quá 40 ký tự** (capital/burn/breakeven/margin ở mục cà phê và mục nhượng quyền): đã rút gọn và chuyển phần giải thích vào `text`. Số liệu không đổi.
- Mục quán ăn: `burn.grade` từ B xuống C, vì dải số nay là ước tính từ case. Tỷ lệ iPOS vẫn dẫn trong `text`.

### Vẫn trống
- Xe đẩy: `burn.range`, `margin.gross`, `margin.net`. Không có số chi phí tháng hay biên lãi kiểm chứng được. Câu "lãi 50–70% mỗi ly" chỉ là lời quảng cáo của bên bán, kể lại qua báo, nên không dùng làm số.
- Quán ăn: chưa có case TP.HCM có vốn và chi phí cụ thể. Bài VnExpress 6/2025 (phở 22 triệu tiền thuê ở TP.HCM) là bài ý kiến của bạn đọc, không có vốn, nên không dùng.
- Vẫn chưa có khảo sát về vốn trung bình hay tỷ lệ đóng cửa của quán mới mở.

### Đã thử mà không ra
- "iPOS hoàn vốn / thu hồi vốn" cho các năm 2023–2025: không có. Truy vấn trích benchmark "15,16% / 13,65% / 12,69%": không bài nào đăng.
- DuckDuckGo HTML bị chặn giữa phiên (trả trang trống). news.laodong.vn không đọc được (trang trống), nên bỏ 2 bài về thuê vỉa hè ở TP.HCM.
- Ki-ốt của xưởng Thiên Phúc (xedaybanhang.com, 23,5–36 triệu): trang đăng năm 2019, nên không dùng. Inox Kim Nguyên có bảng giá trùng y hệt Nhã Inox, nên chỉ tính là một nguồn.
- Không gặp câu nào trong các trang đã đọc ra lệnh cho AI.
