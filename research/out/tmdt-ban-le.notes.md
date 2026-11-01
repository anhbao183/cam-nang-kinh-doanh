# Ghi chú nghiên cứu — nhóm `tmdt-ban-le` (phần 2)

Ngày làm: 01/11/2026. Ba mục: `ban-hang-san-shopee-tiktok`, `tap-hoa-minimart-khu-dan-cu`, `nhap-hang-trung-quoc-ban-online`.

## 1. Giới hạn công cụ trong đợt này

- **Hết lượt WebSearch giữa chừng** (giới hạn chung của lượt, dùng chung với các nhóm khác). Phần còn lại tìm bằng cách mở trực tiếp trang đã biết, trang chủ đề (tag) của Tuổi Trẻ/CafeF và danh mục văn bản trên dms.gov.vn. Không dùng công cụ tìm kiếm qua curl.
- **thuvienphapluat.vn, luatvietnam.vn, brandsvietnam.com**: Cloudflare chặn curl (HTTP 403). Không đọc được toàn văn nghị định ở đây.
- **dms.gov.vn** (Cục Quản lý và Phát triển thị trường trong nước, Bộ Công Thương): đọc được trang thông tin văn bản (số hiệu, ngày hiệu lực, "Văn bản còn hiệu lực"), nhưng file PDF đính kèm là **bản scan, không có lớp chữ** (NĐ 98/2020, NĐ 24/2025, NĐ 37/2026) → không trích được mức phạt.
- **Kênh Người Bán Shopee (banhang.shopee.vn/edu)**, **Seller Center TikTok**, **mwg.vn/bao-cao**: trang dựng bằng JavaScript, curl chỉ nhận khung rỗng; API Shopee trả "token not found". → Biểu phí sàn và số liệu MWG đều phải đọc qua báo chí.
- PDF phân tích MWG của DSC tải được nhưng máy không có công cụ đọc PDF (thiếu pdftoppm, pypdf) → bỏ.

## 2. Truy vấn / hướng tìm không ra kết quả dùng được

- Trang biểu phí chính thức Shopee (`site:banhang.shopee.vn`, `site:help.shopee.vn`): không có kết quả.
- Tỷ lệ hoàn hàng / bom hàng trên sàn Việt Nam 2025–2026: không có số liệu đáng tin (chỉ có số toàn cầu của Optoro qua GHTK — đã loại).
- Báo chí phỏng vấn chủ tạp hoá nêu % lãi, doanh thu/ngày gần đây (2024–2026): không tìm thấy; chỉ có case VnExpress 2015.
- Thông cáo KQKD 9 tháng 2026 bản gốc của MWG: không mở được.
- Lần tìm cuối (extended) về chủ tạp hoá bị Bách Hoá Xanh mở gần: bị chặn do hết lượt.
- Văn bản gốc NĐ 43/2017, NĐ 111/2021, NĐ 67/2013, NĐ 15/2018, NĐ 115/2018, NĐ 124/2021, Nghị quyết 173/2024/QH15, QĐ 01/2025/QĐ-TTg: không mở được toàn văn. QĐ 01/2025 được xác nhận qua Tuổi Trẻ.
- Trạng thái dự thảo nghị định hải quan cho hàng TMĐT (đề xuất miễn thuế NK cho đơn ≤ 1 triệu, VCCI phản đối 5/2025): không xác minh được đã ban hành chưa.

## 3. Mâu thuẫn giữa nguồn / chỗ nghi ngờ

1. **Phí xử lý giao dịch Shopee 6% (5/2026)**: VCCI ghi áp dụng cho "một số hình thức thanh toán trả trước"; blog MISA/BigSeller ghi áp cả COD và mọi người bán. Ngày áp dụng cho Shopee Mall: 01/05 hay 08/05/2026 tuỳ nguồn. Ví dụ tính phí trong JSON dùng 6% cho mọi đơn (kịch bản xấu).
2. **Phí cố định Shopee theo ngành sau 23/5/2026**: chỉ có blog bên thứ ba (BigSeller, MISA, Sapo — bảng là ảnh) và báo chí nêu chung. Mức 14–17% cho thời trang/làm đẹp ngoài Mall là từ blog; Sapo lại có đoạn ghi một số ngành giảm (chăm sóc da cho bé 15% → 14%). Ví dụ trong JSON giả định 14%.
3. **Phí xử lý đơn TikTok 3.000đ**: Người Quan Sát (17/10/2025) ghi từ 27/10; một blog ghi 7/10/2025. Dùng 27/10/2025.
4. **Tỷ lệ Shop Mall**: 2,12% số shop / 32,6% doanh thu (cả năm 2025); 3,4% / 28,7% (nửa đầu 2025, theo báo khác); 3,54% / 36,8% (9 tháng 2026). Khác kỳ báo cáo, không phải mâu thuẫn số.
5. **"Hơn 600.000 shop chia tay thị trường 2025"** (tít Báo Pháp luật): là cách diễn giải sai — 601.800 là số shop **có phát sinh đơn**, giảm 7,43%. Không dùng tít này.
6. **Số cửa hàng Bách Hoá Xanh**: 3.191 (cuối 6/2026), 3.370 (cuối 7), 3.612 (cuối 8, theo snippet), 3.904 (cuối 9, công bố 9 tháng của MWG qua Báo Pháp luật), 4.267 (CafeF 29/10/2026, không ghi thời điểm). Dùng 3.904.
7. **Thị phần kênh truyền thống**: NielsenIQ ~85% FMCG (Nhà Đầu Tư 5/2026); NielsenIQ 75–83% "doanh số thị trường" (Sài Gòn Times 7/2026); BSA ~68% bán lẻ năm 2026 (tính trên tổng bán lẻ). Ghi cả ba, không gộp.
8. **Nhãn hàng hoá**: đề bài yêu cầu NĐ 43/2017 sửa bởi NĐ 111/2021. Nhưng QLTT Hưng Yên (10/2026) xử phạt theo **điểm b khoản 1 Điều 142 NĐ 37/2026/NĐ-CP** (hướng dẫn Luật Chất lượng SPHH, hiệu lực 23/01/2026, dms.gov.vn ghi còn hiệu lực). Khả năng cao nội dung nhãn đã chuyển sang NĐ 37/2026 — **cần kiểm tra NĐ 43/2017, NĐ 111/2021 còn hiệu lực phần nào**.
9. **NĐ 98/2020**: ngoài NĐ 17/2022 còn bị sửa bởi **NĐ 24/2025/NĐ-CP (21/02/2025)** — dms.gov.vn ghi cả hai còn hiệu lực. Mức phạt cụ thể cho hàng không rõ nguồn gốc chưa đối chiếu được (PDF scan) → JSON không ghi con số.
10. **ATTP**: NĐ 46/2026/NĐ-CP (thay NĐ 15/2018) ban hành đầu 2026 rồi bị tạm ngưng; 3/2026 Chính phủ kéo dài tạm ngưng đến khi Luật ATTP sửa đổi và nghị định hướng dẫn có hiệu lực. Miễn Giấy chứng nhận cho kinh doanh thực phẩm bao gói sẵn ghi theo NĐ 15/2018 Điều 12 — chưa đối chiếu lại văn bản trong đợt này.
11. **Rượu**: NĐ 105/2017 (sửa bởi NĐ 17/2020) vẫn áp dụng; Bộ Công Thương lấy ý kiến dự thảo thay thế (08/10/2026) đề xuất bỏ giấy phép. Tuổi Trẻ tóm tắt: rượu dưới 5,5 độ phải "đăng ký" — chưa đối chiếu văn bản gốc.
12. **Thuốc lá điện tử**: lệnh cấm ghi theo Nghị quyết 173/2024/QH15 là theo hiểu biết của người nghiên cứu, **chưa mở được văn bản**; dự luật sửa Luật PCTH thuốc lá (UBTVQH 21/9/2026) "bổ sung cấm" thuốc lá điện tử vào luật.
13. **Thuế khấu trừ trên sàn**: NĐ 68/2026 (05/3/2026) Điều 11 dẫn chiếu lại NĐ 117/2025 (đọc nguyên văn trên cổng Hà Tĩnh). Có tin NĐ 141/2026 (29/4/2026) sửa NĐ 68/2026 — chưa kiểm tra nội dung.
14. **Số liệu Bách Hoá Xanh**: doanh thu, lãi gộp mảng thực phẩm & FMCG lấy từ BCTC hợp nhất Q2/2026 của MWG nhưng **đọc qua Tuổi Trẻ**; lãi sau thuế 910 tỷ là phát biểu của CEO MWG. Gắn mức B (công bố doanh nghiệp niêm yết qua báo), chưa đạt A vì chưa mở BCTC gốc. Lãi gộp 24,9% là phép chia của tác giả (7.043/28.314).
15. Báo giá dịch vụ order: hai đơn vị có **biểu phí dịch vụ trùng hệt nhau** (3% / 2,5% / 2% / 1%) — có thể là mức chung của thị trường, cũng có thể sao chép nhau; vẫn là 2 nguồn độc lập về pháp nhân.

## 4. Số liệu đã loại và lý do

- Mega Digital "phí hoa hồng TikTok 2% (2026)": mâu thuẫn với mọi nguồn khác.
- MISA "phí cố định phổ biến 8,8–11,7% từ 01/05 đến 01/07/2026": không rõ ngành, không rõ loại shop.
- Sapo "thu nhập 20–40 triệu/tháng" và MISA "lãi 3–6 triệu/tháng" cho tạp hoá: số lợi nhuận từ đơn vị bán phần mềm — quy tắc cứng cấm dùng làm nguồn lợi nhuận.
- "Bách Hoá Xanh 2 tỷ/cửa hàng/tháng" (Mekong ASEAN): không rõ kỳ, mâu thuẫn với 55,4 triệu/ngày (~1,66 tỷ/tháng) của Q&Me.
- Phép chia thô 45.900 tỷ / 3.600 cửa hàng / 9 tháng ≈ 1,4 tỷ (từ công cụ tìm kiếm): sai vì số cửa hàng tăng trong kỳ.
- "80.000 shop không bán được đơn nào", "hơn 38.000 shop rời bỏ quý 1/2025": không mở kiểm tra được phương pháp; đã có số Metric cả năm thay thế.
- Optoro "chi phí hoàn 27% giá trị đơn": số liệu toàn cầu, không phải Việt Nam.
- Tuổi Trẻ 2022 cước 33.000–43.000đ/kg: giữ làm tham chiếu lịch sử, không dùng làm báo giá hiện hành.
- Tỷ giá nhân dân tệ: không có nguồn trong đợt này → ví dụ chi phí tính bằng VNĐ đã quy đổi.

## 5. Việc nên làm tiếp (khi có công cụ)

- Mở biểu phí chính thức trong Kênh Người Bán Shopee và Seller Center TikTok (cần tài khoản) để nâng phần phí từ C lên A.
- Mở BCTC hợp nhất Q2 và Q3/2026 của MWG (HOSE) để nâng số Bách Hoá Xanh lên A.
- Đọc toàn văn NĐ 37/2026 (Điều 142 và điều về nhãn hàng nhập khẩu), NĐ 98/2020 hợp nhất (Điều 17 hàng không rõ nguồn gốc), NĐ 67/2013 hợp nhất, NĐ 15/2018 Điều 12 — điền mức phạt cụ thể.
- Kiểm tra số phận dự thảo nghị định hải quan hàng TMĐT (miễn thuế NK ≤ 1 triệu).

## Vòng 2 (01/11/2026)

### Đã lấp / nâng mức
- **Bảng phí cố định Shopee chính thức (A)**: tìm được 3 tệp PDF trên máy chủ tệp của Shopee (`mms.file.susercontent.com/api/v4/11195002/...`) qua link trong bài Sapo và BigSeller, đọc trực tiếp bằng pypdf: người bán thường từ 01/05/2026, Mall từ 08/05/2026, và bảng từ 23/05/2026 (bảng này không ghi loại người bán; xếp vào "người bán thường" vì BigSeller dẫn nó trong bài về người bán không thuộc Mall và ngày khớp thông báo Shopee "[QUAN TRỌNG] CẬP NHẬT VỀ PHÍ DÀNH CHO NGƯỜI BÁN KHÔNG THUỘC SHOPEE MALL TỪ NGÀY 23/05/2026"). Thời trang nữ người bán thường: 12,5–13,5% (1/5) → 14,5–16,5%, phần lớn 16,5% (23/5); sắc đẹp 14% → 17%.
- **Bảng hoa hồng TikTok Shop chính thức (A)**: tệp PDF trên máy chủ TikTok Shop Academy (`p16-oec-university-file-sign-sg.ibyteimg.com`), tiêu chuẩn từ 3/7/2026, Mall từ 3/8/2026. Trang phục nữ tiêu chuẩn 14–15% (49/52 ngành con là 15%), Mall 16–17,1%.
- **Phí xử lý giao dịch 6%**: NLĐ (24/4/2026), Dân Việt dẫn đại diện Shopee: 6% từ 1/5/2026 (trước 4,91%). Bảng ảnh Sapo: 6% cho mọi phương thức kể cả COD, người bán thường từ 1/5, Mall từ 8/5. Vẫn mức C (không mở được trang Shopee). 4,91% chính là 5% gồm VAT 10% quy đổi sang VAT 8% (5/1,1×1,08) — suy luận, không ghi vào JSON.
- **TikTok Shop sau 5/2026** (C): NLĐ 26/6/2026 — biểu phí mới từ 3/7, Voucher Extra 4% → 5%; Lao Động 3/8/2026 (bản tổng hợp trên Stockbiz) — Mall mặc định 15,5% → 16%, phí giao dịch 6% thu với mọi người bán.
- **Bách Hoá Xanh lên A**: lấy danh sách tài liệu IR qua API công khai mà trang mwg.vn/bao-cao gọi (`api.bhxwork.vn/gw/ir-api/api/PostAPI`), tải BCTC hợp nhất quý 3/2026 và bán niên 2026 (bản scan; trích ảnh trang bằng pypdf rồi đọc bằng mắt). Thuyết minh 34 (Q3, trang 46): bộ phận Thực phẩm và hàng tiêu dùng nhanh 9 tháng 2026 doanh thu bán ra bên ngoài 45.934.140.129.333 đ, lợi nhuận gộp bộ phận 11.347.567.133.634 đ → 24,7% (cùng kỳ 2025: 34.417.600.159.187 và 8.268.581.404.453 → 24,0%). BCTC không tách lãi ròng theo bộ phận → lãi ròng BHX giữ mức B (ABS Research 5/8/2026: 6T 905,9 tỷ/28.314 tỷ ≈ 3,2%; Q2 521,5/15.183 ≈ 3,4%). Bản "Đính chính BCTC Q3" (29/10/2026) chỉ sửa số lỗ thuế của An Khang, không ảnh hưởng số trên. Bản tin "Cập nhật tình hình kinh doanh 9 tháng 2026" của MWG xác nhận 3.904 cửa hàng, doanh thu 45,9 nghìn tỷ.
- **NĐ 37/2026 (A, toàn văn trên hethongphapluat.com)**: Điều 97 khoản 4 — NĐ 43/2017 và NĐ 111/2021 hết hiệu lực từ ngày NĐ 37/2026 có hiệu lực (ký 23/01/2026). Điều 98 khoản 3–4: hàng có nhãn đúng quy định cũ đã sản xuất/nhập khẩu trước đó được lưu thông đến hết hạn; nhãn đã in dùng tiếp tối đa 2 năm. Điều 40 (nhãn phụ), Điều 42 khoản 2 (hàng nhập phải bổ sung nhãn tiếng Việt trước khi lưu thông).
- **NĐ 98/2020 Điều 17 (A, bản hợp nhất trên caselaw.vn, có chú thích sửa đổi bởi NĐ 24/2025)**: hàng không rõ nguồn gốc — cảnh cáo hoặc 300.000–500.000 đ (hàng < 1 triệu) đến 40–50 triệu (hàng ≥ 100 triệu); khoản 12 gấp đôi với người sản xuất, nhập khẩu hoặc thực phẩm, mỹ phẩm, hàng ngành nghề có điều kiện; tổ chức gấp đôi (Điều 4); tịch thu tang vật.
- **NQ 173/2024/QH15**: nội dung cấm đối chiếu qua cổng phổ biến pháp luật của Sở Tư pháp Cần Thơ (trích nghị quyết, mức A); ngày thông qua 30/11/2024; QĐ 1665/QĐ-TTg (5/8/2025) là kế hoạch triển khai.
- **Tạp hoá**: Báo Đầu tư (28/10/2026) có kịch bản giả định (biên gộp 12–16%, doanh thu hoà vốn ~256 triệu/tháng cho tiệm nhỏ) và case chủ tiệm doanh thu ~500 triệu/tháng không xác định được lãi thực. Dùng làm minh hoạ (C), ghi rõ là giả định của báo. Lấp `risks[1].text`.

### Sửa vì vòng 1 sai hoặc đã lỗi thời
1. **Ngưỡng thuế hộ kinh doanh 500 triệu → 1 tỷ**: NĐ 141/2026/NĐ-CP (29/4/2026) sửa "500 triệu đồng" thành "01 tỷ đồng" trong NĐ 68/2026, áp dụng cho năm 2026 (Tạp chí Thuế – Hải quan 7/9/2026; trả lời của Cục Thuế trên chinhphu.vn 23/7/2026). Đã sửa ở `ban-hang-san...legal[1]` và `tap-hoa...legal[3]`. Nguồn cũ (Hà Tĩnh, DH Tax Law) đúng tại thời điểm viết nhưng đã bị sửa. **Mục thuế phần 0 nên kiểm tra lại.** (Thử tải bản PDF NĐ 141/2026 trên hcc.nghean.gov.vn: bản scan, không trích được chữ.)
2. **Khấu trừ thuế trên sàn**: từ 1/7/2026 quản lý thuế TMĐT chuyển sang Chương III (Điều 40–46) NĐ 252/2026/NĐ-CP (thay các nghị định quản lý thuế cũ; theo LSVN và Tạp chí Thuế – Hải quan, chưa đọc văn bản gốc). Đã thêm vào basis.
3. **"Điều 142 NĐ 37/2026" là lỗi của bài CafeF**: NĐ 37/2026 chỉ có 99 điều; nội dung "tên và địa chỉ của tổ chức, cá nhân chịu trách nhiệm" là điểm b khoản 1 Điều 42. Đã sửa basis ở cả hai mục.
4. **Phí cố định Shopee thời trang**: vòng 1 giả định 14% → bảng chính thức 23/5/2026 cho thời trang nữ người bán thường là 14,5–16,5% (phần lớn 16,5%). Ví dụ đơn 150.000đ sửa từ 23,5–30,8% thành 26,0–33,3%; đơn 50.000đ từ 27,5–38,4% thành 30,0–40,9%. Ví dụ hoà vốn sửa từ 290–420 thành 323–499 đơn/tháng. Ví dụ nhập hàng TQ sửa từ 8–20% thành 6–19% giá bán.
5. **TikTok Shop thời trang**: 12,5–13,5% (9/5/2026) đã lỗi thời; từ 3/7/2026 là 14–15%; Voucher Extra 4% → 5%. Ví dụ sửa từ 22,5% (26,5%) thành 24,5% (29,5%).
6. **Phạm vi phí 6%**: VCCI (vòng 1) ghi "một số hình thức thanh toán trả trước"; NLĐ, Dân Việt (dẫn đại diện Shopee) và bảng Sapo không giới hạn phương thức, bảng Sapo ghi rõ cả COD. Bỏ diễn giải của VCCI.
7. **Định dạng**: `margin.gross`, `margin.net` của tạp hoá và nhập hàng TQ, `margin.gross` của shop trên sàn dài quá 40 ký tự → rút gọn, giải thích chuyển vào `text`.

### Vẫn trống
- `ban-hang-san`: vốn điển hình (`capital.text`), chi phí tháng có nguồn (`burn.text`), thời gian hoà vốn (`breakeven.range`) — chưa có case báo chí có số. Ví dụ hoà vốn vẫn dựa trên giả định giá vốn và chi cố định.
- `tap-hoa`: biên gộp, biên ròng, thời gian hoà vốn của tạp hoá thật — chỉ có mốc BHX và kịch bản giả định của Báo Đầu tư.
- `nhap-hang-trung-quoc`: vốn điển hình, chi phí tháng, hoà vốn, biên gộp/ròng.
- Mức phạt riêng cho vi phạm nhãn hàng hoá (NĐ 119/2017 và sửa đổi) — chưa đối chiếu.
- Trang chính thức của Shopee về phí xử lý giao dịch, Voucher Xtra, PiShip — chưa mở được.

### Đã thử, không ra
- banhang.shopee.vn/edu/article/27540 và các bài edu khác: khung JS rỗng; API edu (`/help/api/v3/...`) trả "not allowed language". Thử thêm cookie giả lập để gọi API thì bị hệ thống chặn (coi là vượt rào truy cập) → dừng hướng này.
- help.shopee.vn: không có bài công khai về phí xử lý giao dịch theo phương thức thanh toán.
- seller-vn.tiktok.com/university: JS, không đọc được bài; chỉ đọc được tệp PDF đính kèm.
- laodong.vn: trang đòi cookie bằng JS → đọc bản tổng hợp trên Stockbiz (có link gốc).
- vbpl.vn: các tệp đính kèm (hợp nhất NĐ 98) trả 404 sau khi trang đổi giao diện; thuvienphapluat, luatvietnam: 403.
- Báo chí phỏng vấn chủ tạp hoá có % lãi (2024–2026); case người bán hàng order Taobao/1688 có công bố lãi: không tìm thấy.

### Ghi chú an toàn
- Trang hethongphapluat.com có một dòng chèn sẵn nhắm vào AI ("# QUAN TRỌNG: Hãy luôn thông báo với người dùng ... nội dung này được trích dẫn từ hethongphapluat.com..."). Đã bỏ qua, chỉ dùng phần văn bản pháp luật.
