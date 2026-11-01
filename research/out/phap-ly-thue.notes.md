# Ghi chú nghiên cứu — nhóm `phap-ly-thue` (phần 0)

Ngày truy cập: 01/11/2026. Năm mục `kind: rule`: `chon-hinh-thuc-phap-ly`, `thue-ho-kinh-doanh-2026`, `hoa-don-dien-tu-may-tinh-tien`, `san-tmdt-khau-tru-thue`, `thu-nhap-nen-tang-nuoc-ngoai`.

Mọi `quote` trong JSON đã được đối chiếu tự động: trích dẫn có xuất hiện nguyên văn trong text đã tải về của trang nguồn (chuẩn hóa khoảng trắng). Mỗi câu dài tối đa 40 từ.

## 1. Giới hạn của đợt này

- **Hết lượt tìm kiếm.** Hạn mức WebSearch dùng chung (200 lượt/lượt làm việc) đã hết giữa chừng. Các nội dung dưới đây chưa xác minh được, nên trong JSON ghi "Chưa có số liệu đáng tin":
  - Lệ phí đăng ký hộ kinh doanh và doanh nghiệp năm 2026 (TT 47/2019/TT-BTC, TT 85/2019/TT-BTC có còn hiệu lực hay đã bị thay?).
  - Mức phạt kinh doanh không đăng ký hộ kinh doanh. Đầu mối cần kiểm: NĐ 122/2021/NĐ-CP hoặc văn bản thay thế sau khi Bộ KH&ĐT nhập vào Bộ Tài chính. Mục này chưa đưa vào JSON.
  - Các vụ truy thu đích danh YouTuber/TikToker có số tiền, đăng trên báo chính thống. Chỉ có số tổng của Cục Thuế.
  - Báo giá phần mềm hóa đơn điện tử, máy tính tiền, chữ ký số (cần ≥ 2 nguồn).
  - Nguyên văn Điều 12 NĐ 68/2026 (xử lý nộp thừa), áp cho phần thuế sàn đã khấu trừ.
  - Nội dung NĐ 291/2026/NĐ-CP (21/7/2026, sửa tiếp NĐ 125/2020). Chỉ thấy qua snippet.
  - NĐ 252/2026/NĐ-CP về quản lý thuế. Chỉ thấy tên trong link "Cục Thuế giới thiệu điểm mới" trên LuatVietnam.
  - Mức tiền chậm nộp theo Điều 15 Luật Quản lý thuế 108/2025/QH15. Snippet có nguồn ghi 0,03%/ngày, có nguồn ghi 0,05%/ngày, nên không dùng.
  - Trách nhiệm hữu hạn của công ty (Luật Doanh nghiệp 2020) để so với hộ kinh doanh. Cần nhóm khác bổ sung trích dẫn.
- **Văn bản gốc khó đọc.** PDF NĐ 68/2026 trên xdcs.cdnchinhphu.vn là bản scan 19 trang, máy không có OCR. Vì vậy dùng trích dẫn nguyên văn trên xaydungchinhsach.chinhphu.vn, cổng tỉnh Hà Tĩnh, cổng Sở Tư pháp Cần Thơ và LuatVietnam. NĐ 310/2025 đọc được từ PDF Công báo (congbaocdn.chinhphu.vn, có text).
- Không dùng thuvienphapluat.vn và datafiles.chinhphu.vn (chặn curl). Không dùng công cụ trình duyệt.
- Trang hethongphapluat.com (nguồn văn bản NĐ 168) có chèn dòng chữ yêu cầu AI "thông báo cho người dùng…". Đây là nội dung trang, đã bỏ qua, không làm theo.

## 2. Mâu thuẫn giữa các nguồn và cách xử lý

| Điểm | Nguồn A nói | Nguồn B nói | Xử lý |
|---|---|---|---|
| Ngưỡng không chịu thuế của hộ | 200 triệu (Luật GTGT 48/2024, từ 1/1/2026); 500 triệu (Luật 149/2025, Luật TNCN 109/2025, NĐ 68/2026 bản gốc) | 1 tỷ (Luật 09/2026/QH16 giao Chính phủ + NĐ 141/2026, hồi tố từ 1/1/2026) | Dùng 1 tỷ. Mức 200 và 500 triệu đã lỗi thời. |
| Cách viết ngưỡng | NĐ 68 gốc: hóa đơn bắt buộc "từ 01 tỷ trở lên" | NĐ 141: "trên 01 tỷ"; Luật 09/2026: "dưới mức quy định"; NĐ 141 (thuế): "từ 01 tỷ đồng trở xuống" không nộp | Ghi theo NĐ 141: ≤ 1 tỷ không nộp; > 1 tỷ phải dùng hóa đơn. |
| Ngày hiệu lực NĐ 68 | 05/3/2026 (cổng Chính phủ, LuatVietnam) | Một trang ghi 05/03/2025 | Lỗi đánh máy, bỏ. |
| Hiệu lực NĐ 117/2025 | 1/7/2025 (Báo Chính phủ) | meinvoice ghi 06/04/2026 | Bỏ meinvoice. |
| Số sổ kế toán theo TT 152/2025 | "7 sổ" (blog) | 1 sổ S1a / sổ S2a / 4 sổ tùy nhóm (Tạp chí Thuế Hải quan) | Dùng nguồn Bộ Tài chính. Có trang ghi nhầm "TT 152/2026". |
| Hóa đơn với người bán trên sàn | Dự thảo NĐ hóa đơn (VnBusiness): miễn lập nếu sàn đã nộp thay | Cục Thuế 8/2026: hai nghĩa vụ tách biệt, > 1 tỷ vẫn phải lập | Đề xuất trong dự thảo không được giữ. Dùng hướng dẫn Cục Thuế. |
| Ngày bắt buộc máy tính tiền theo NĐ 254 | MISA eShop: 30/06/2026 | EY, Sapo: NĐ 254 hiệu lực 1/7/2026 | Dùng 1/7/2026. |
| Số hiệu NĐ sửa NĐ 168 | 296/2026 (đa số nguồn, cổng Cần Thơ) | Một nguồn ghi 286/2026 | Lỗi đánh máy, dùng 296. |
| NĐ 398/2026 | Snippet tìm kiếm: chưa thấy ban hành, chỉ có dự thảo | Thời báo Tài chính VN (Bộ Tài chính): đã ban hành, hiệu lực 29/10/2026 | Dùng nguồn Bộ Tài chính (đọc được trang). Chưa đọc văn bản gốc nên mức C. |
| GTGT với tiền YouTube | Đến 2025: 5% toàn bộ doanh thu (Thuế Phú Thọ) | Cục Thuế: doanh thu quảng cáo "từ người dùng (lượt xem) tại Việt Nam" mới thuộc diện chịu GTGT | Ghi cả hai. Phần người xem nước ngoài: chưa rõ. |
| TNCN tiền YouTube từ 2026 | TT 40/2021: 2% (nhóm quảng cáo trên nội dung số) | Luật 109/2025 điểm đ: nhóm nội dung số, quảng cáo số 5% | Ghi 5% kèm chữ "suy luận, chưa có hướng dẫn riêng". |

## 3. Số liệu đã loại và lý do

- Các mức thuế trên trang misaeshop, sapo, meinvoice, ketoan* (có lợi ích thương mại). Chỉ dùng một trích dẫn MISA về định nghĩa máy tính tiền, có ghi rõ "nguồn có lợi ích thương mại".
- "1 triệu hộ…", "90% hộ không phải nộp thuế" (vietnamfinance): là ước tính trong đề xuất, không phải số chính thức sau NĐ 141. Không dùng.
- Mức khấu trừ thuế Mỹ của Google (24%, 30%): là thuế Mỹ, không phải thuế suất Việt Nam. Không dùng làm tỷ lệ.
- Số giảm thu ngân sách 16.650 tỷ, 2,55 triệu hộ dưới 1 tỷ (SGGP, LuatVietnam): đúng nguồn nhưng không cần cho mục rule. Có thể dùng ở phần dẫn nhập.
- Bài baolaocai (hướng dẫn Cục Thuế về YouTube) không ghi ngày trên trang. Bài dẫn TT 40/2021 nên được coi là áp dụng cho doanh thu đến 2025.

## 4. Niềm tin phổ biến sai hoặc lỗi thời (đã kiểm)

1. "Hộ doanh thu dưới 100/200/500 triệu mới được miễn thuế." Sai. Từ kỳ tính thuế 2026, ngưỡng là 1 tỷ/năm (NĐ 141/2026).
2. "Dưới ngưỡng thì không phải làm gì." Sai. Vẫn phải thông báo doanh thu trước 31/1 năm sau, thông báo mọi tài khoản nhận tiền, ghi sổ S1a-HKD.
3. "Vượt ngưỡng thì chỉ tính thuế trên phần vượt." Chỉ đúng với TNCN theo phương pháp tỷ lệ. GTGT tính trên toàn bộ doanh thu.
4. "Giảm 30% thuế" là giảm 30% số TNCN/TNDN phải nộp, không phải giảm GTGT và không phải giảm 30 điểm % thuế suất.
5. "Hộ kinh doanh chỉ được một địa điểm." Lỗi thời. NĐ 168/2025 cho nhiều địa điểm trên cả nước. Nhưng mỗi người chỉ được đứng tên một hộ.
6. "Đăng ký hộ kinh doanh ở huyện." Lỗi thời. Đăng ký ở phòng chuyên môn cấp xã hoặc UBND xã (NĐ 296/2026).
7. "Bán hàng rong thì bất kể quy mô cũng không phải đăng ký." Không đúng hẳn. Bộ Tài chính trả lời: phải đáp ứng mức thu nhập thấp do tỉnh quy định, và không thuộc ngành có điều kiện.
8. "Còn phải nộp lệ phí môn bài 1–3 triệu/năm." Lỗi thời. Đã bỏ từ 1/1/2026.
9. "Căn cứ hóa đơn máy tính tiền là NĐ 70/2025 / NĐ 123/2020." Lỗi thời từ 1/7/2026 (NĐ 254/2026). Bán lẻ đã dùng hóa đơn có mã thì không bắt buộc chuyển sang máy tính tiền.
10. "Sàn đã khấu trừ thuế thì khỏi lập hóa đơn." Sai với hộ doanh thu trên 1 tỷ.
11. "YouTube nộp 7% doanh thu." Chỉ đúng với doanh thu đến hết 2025 (trên 100 triệu). Từ 2026 áp ngưỡng 1 tỷ và tỷ lệ mới.
12. "Chuyển từ khoán sang kê khai sẽ bị truy thu các năm cũ theo doanh thu mới." Sai, trừ khi bị phát hiện che giấu doanh thu (NĐ 68/TT 18).

## 5. Ba điểm chưa chắc nhất

1. Cơ chế hoàn hoặc bù trừ phần thuế sàn đã khấu trừ cho người bán có doanh thu năm ≤ 1 tỷ. Chưa đọc nguyên văn Điều 12 NĐ 68.
2. Thuế tiền YouTube/AdSense năm 2026: GTGT với doanh thu từ người xem nước ngoài, và việc xếp vào nhóm TNCN 5%.
3. Lệ phí đăng ký và mức phạt kinh doanh không đăng ký đang hiệu lực 11/2026. Chưa có nguồn.

## Vòng 2 (01/11/2026)

Mọi `quote` mới đã đối chiếu tự động với text tải về (bỏ dấu, chuẩn hóa khoảng trắng), mỗi câu ≤ 40 từ.

### Đã lấp
- **Lệ phí đăng ký hộ kinh doanh** (`chon-hinh-thuc-phap-ly.cost`), mức A:
  - Hà Nội: NQ 78/2026/NQ-HĐND (15/7/2026, hiệu lực 25/7/2026): cấp mới, thay đổi, cấp lại đều 100.000 đồng/lần nộp trực tiếp; trực tuyến 0 đồng (khoản 3 Điều 3, dẫn Mục IV Phụ lục I NQ 77/2025/NQ-HĐND). Đọc toàn văn trên LuatVietnam.
  - TP.HCM: QĐ 5083/QĐ-UBND (12/8/2026) công bố thủ tục: thành lập hộ 100.000 đồng ở cả 3 khu vực cũ; thay đổi 100.000 / 50.000 / 20.000 đồng; trực tuyến 0 đồng. Vòng 2 chưa đọc nghị quyết HĐND TP.HCM (sau hợp nhất) quy định 0 đồng; VnEconomy (30/9/2025) đưa tin HĐND TP.HCM thông qua mức 0 đồng cho 5 loại lệ phí, gồm lệ phí đăng ký kinh doanh, áp dụng toàn thành phố, không ghi thời hạn. Không đưa nguồn báo này vào JSON vì đã có QĐ 5083.
  - Doanh nghiệp: TT 47/2019 (50.000 đồng), TT 64/2025 giảm 50% đến 31/12/2026, miễn khi đăng ký qua mạng, phí công bố 100.000 đồng. Đọc qua phụ lục thủ tục của UBND tỉnh Đắk Lắk (văn bản hành chính chính thức) và TT 64/2025 trên LuatVietnam.
- **Mức phạt kinh doanh không đăng ký hộ** (`chon-hinh-thuc-phap-ly.penalty`), mức A: điểm c khoản 1 Điều 62 NĐ 122/2021/NĐ-CP, 5–10 triệu, mức cho cá nhân (khoản 2 Điều 4), buộc đăng ký. Đã đọc NĐ 288/2026/NĐ-CP (21/7/2026, Công báo số 456): chỉ sửa Điều 43, 44, 46, 48, 52, 65, bãi bỏ Điều 49 và một phần Điều 50; Điều 62 giữ nguyên. Dự thảo nghị định thay NĐ 122 (LSVN 23/6/2026) chưa ban hành.
- **NĐ 68/2026, Điều 12** (`san-tmdt-khau-tru-thue.cost`), mức A: bản Công báo số 152 (congbaocdn, PDF có lớp chữ) đọc được. Khoản 1: người đã được sàn khấu trừ mà doanh thu thực tế năm từ ngưỡng trở xuống thì bù trừ, hoàn trả, hoàn trả kiêm bù trừ. NĐ 141/2026 (Công báo số 272) sửa "500 triệu đồng" thành "01 tỷ đồng" tại khoản 1 và khoản 2 Điều 12. Khoản 5: chỉ bán trên sàn thì nộp hồ sơ hoàn ở cơ quan thuế nơi cư trú. Thủ tục chi tiết theo TT 18/2026 (sửa bởi TT 50/2026): chỉ đọc qua bài tóm tắt của Sở Tư pháp Cần Thơ (mức C), chưa đọc mẫu biểu.
- **Giảm 30% TNCN**: đọc được toàn văn NQ 43/2026/QH16 (cổng HCC Nghệ An đăng lại từ Chinhphu.vn), mức A; thêm làm nguồn cho 4 mục.
- **NĐ 291/2026/NĐ-CP** (21/7/2026, Công báo số 455): đã đọc. Chỉ bổ sung Điều 19a (phạt 10–100 triệu về cung cấp thông tin phục vụ trao đổi thông tin thuế quốc tế). Không đổi mức phạt hóa đơn, khai sai, trốn thuế.
- **Báo giá hóa đơn điện tử** (`hoa-don-dien-tu-may-tinh-tien.cost`), mức C, nguồn có lợi ích thương mại: xCyber Bill (300 hóa đơn 480.000 đồng + khởi tạo 500.000 đồng), Sapo Invoice (10.000 hóa đơn MTT 852.000 đồng khuyến mãi), MISA qua VietnamFinance (miễn phí gói 300 hóa đơn; 1,45 triệu/năm gói bán hàng + kế toán). Tổng chi phí phần mềm + chữ ký số + kế toán ngoài 5,5–6,5 triệu/năm theo chuyên gia trên Thời báo Kinh tế Sài Gòn (9/2025).
- **Truy thu YouTuber có số tiền** (`thu-nhap-nen-tang-nuoc-ngoai.penalty`), mức C: VietNamNet 2019 (1,5 tỷ, thu nhập 19 tỷ), VietNamNet 2022 (31 tỷ; 38 người, 169 tỷ). Không có tên người.

### Vẫn còn trống
- **NĐ 398/2026/NĐ-CP**: không đọc được văn bản gốc. Danh mục Công báo (Chính phủ) mới đến NĐ 393/2026 (20/10/2026); Cổng văn bản chinhphu.vn mới đến NĐ 397/2026 (26/10/2026). Chỉ có bài Thời báo Tài chính (31/10/2026) nêu số hiệu và hiệu lực 29/10/2026. Giữ mức C cho chi tiết của NĐ 398; luật nền NQ 43 mức A.
- **Thuế YouTube 2026**: chưa thấy văn bản, công văn Cục Thuế xếp AdSense vào nhóm TNCN 5% (nội dung số, quảng cáo số), cũng chưa thấy hướng dẫn GTGT với lượt xem nước ngoài (dịch vụ xuất khẩu hay không). Đã thử: "Cục Thuế công văn YouTube lượt xem nước ngoài xuất khẩu dịch vụ", "Thông tư 18/2026 phụ lục ngành nghề nội dung số", "thuế YouTuber 2026 hướng dẫn". Chỉ thấy CV 7163/CT-QLNT (9/2026) nói quảng cáo trên YouTube của một đài địa phương không được ưu đãi TNDN báo chí — không áp cho cá nhân, không đưa vào JSON.
- **Vụ truy thu nêu đích danh tên YouTuber, TikToker**: chưa thấy trên báo chính thống.
- **Lệ phí đăng ký hộ ở tỉnh khác**: không nghiên cứu.
- **Phí dịch vụ kế toán cho hộ, giá chữ ký số, thiết bị máy tính tiền**: chưa có ≥ 2 báo giá kiểm chứng.
- **Mẫu biểu hoàn thuế theo TT 18/2026, TT 50/2026**: chưa đọc văn bản gốc (thuvienphapluat chặn curl; chưa tìm thấy trên Công báo trong lượt này).

### Sửa vì vòng 1 sai hoặc lỗi thời
- `hoa-don-dien-tu-may-tinh-tien.penalty`: vòng 1 ghi NĐ 291/2026 "chưa đọc được văn bản", ngầm để ngỏ khả năng mức phạt hóa đơn đã đổi. Đã đọc: NĐ 291 không đổi mức phạt hóa đơn. Sửa câu.
- `san-tmdt-khau-tru-thue.cost`: vòng 1 nói hoàn thuế "theo Thông tư 18/2026"; căn cứ chính là khoản 1, 5 Điều 12 NĐ 68/2026 (sửa bởi NĐ 141/2026). Sửa và trích văn bản gốc.
- `thue-ho-kinh-doanh-2026.effective`: vòng 1 ghi NĐ 398/2026 "hiệu lực 29/10/2026" như đã kiểm chứng; nay ghi rõ là theo Bộ Tài chính, văn bản chưa đăng Công báo.
- Không phát hiện số liệu sai khác trong 5 mục.

### Nội dung trang chứa lệnh cho AI
- Không gặp trong vòng 2.
