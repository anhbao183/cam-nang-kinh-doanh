# Ghi chú nhóm `tram-nam-chau-a` (phần 8, 4 mục `case`)

Ngày làm: 01/11/2026. Mục: `nintendo`, `toyota`, `samsung`, `tata-group`. `node tools/build.mjs` chạy không có lỗi hay cảnh báo nào thuộc file này. Mọi `quote` đã được đối chiếu tự động với văn bản trang hoặc PDF đã tải (sau khi chuẩn hóa khoảng trắng).

## Công cụ và truy cập
- Hết hạn mức WebSearch giữa chừng (lúc tìm nguồn về Nano). Thông báo của công cụ cấm dùng curl tới công cụ tìm kiếm để thay thế, nên tôi không dùng DuckDuckGo. Các nguồn còn lại lấy bằng cách mở trực tiếp URL đã biết, hoặc lấy URL từ danh mục tham khảo của Wikipedia rồi mở trang gốc (Wikipedia không dùng làm nguồn).
- Bị chặn truy cập tự động: tcs.com (Access Denied, kể cả fact sheet và thông cáo kết quả Q4 FY26), sec.gov (20-F của Toyota), justice.gov (thông cáo DOJ 2014 về Toyota). Lấy số thay thế từ báo cáo thường niên Tata Sons, Business Today, NBC News.
- PDF của Nintendo mã hóa AES, pypdf thiếu `cryptography`; đọc bằng `pdftotext` (poppler) có sẵn.
- Không gặp đoạn văn bản nào ra lệnh cho AI trong các trang đã đọc.

## Nintendo
- Đề bài nêu "mì gói". Nguồn kiểm chứng được (The Week dẫn Financial Times, 2013; PBS 2013 dẫn một nhà báo game) đều nói "cơm ăn liền" (instant rice). "Popeye Ramen" chỉ có trên wiki của người hâm mộ (NintendoWiki, blog) và không có ảnh sản phẩm; không dùng.
- Khách sạn tình yêu: nguồn gốc là sách *Game Over* (David Sheff, 1993). 3DJuegos (2023) ghi nhận không có ảnh, giấy tờ hay báo cáo tài chính chứng minh. Trong mục chỉ ghi "theo một số nguồn".
- Năm của các thử nghiệm đa ngành (taxi Daiya, cơm ăn liền) không có trên trang lịch sử chính thức; các nguồn thứ cấp ghi 1960 hoặc 1963–1968, không thống nhất. Mục chỉ ghi "sau 1949".
- Bản tin kết quả FY3/2026 (8/5/2026) ghi rõ "not subject to audit"; Annual Report 2026 (dựa trên Báo cáo chứng khoán thường niên) có cùng số.
- Tỷ trọng doanh thu theo vùng (Châu Mỹ khoảng 40%) đọc từ biểu đồ tròn trong tài liệu giải trình, nhãn và số bị tách khi trích xuất; không đưa vào mục, chỉ dùng "ngoài Nhật 76,9%" có trong văn bản.
- FY3/2012 lỗ hoạt động 37,3 tỷ yên xảy ra trước khi Wii U ra mắt; mục không quy khoản lỗ này cho Wii U.
- Không tìm được nguồn chính thức cho "Switch là máy bán chạy nhất lịch sử Nintendo" (trang dữ liệu lịch sử của Nintendo không tải được nội dung), nên không ghi.

## Toyota
- Ngày bắt đầu đình công 1950 mâu thuẫn ngay trong trang "75 Years of Toyota": item 6(c) nói công đoàn hành động từ 9/4, item 6(d) nói "began on April 11, 1950". Mục ghi "tháng 4–6/1950". Số người mất việc dùng số chính thức 2.146; các nguồn khác ghi 1.500 hoặc 1.600 (loại).
- Số xe thu hồi 2009–2010: AP (2/2010) "some 8 million"; nhiều nguồn khác ghi 8,5 triệu, chưa mở được trang gốc. Dùng 8 triệu.
- Ảnh hưởng của động đất 2011 lên lợi nhuận: WardsAuto (qua snippet) có hai số khác nhau (70 tỷ yên cả năm và 320 tỷ yên nửa năm), không đối chiếu được; loại. Chỉ dùng số trong tài liệu kết quả của Toyota.
- Mốc "Toyota mất 3 tuần mới xác định thiệt hại chuỗi cung ứng" chỉ thấy ở nguồn thứ cấp (snippet); không dùng.
- Dự báo FY3/2027: bản 5/2026 là LN hoạt động 3.000 tỷ yên; bản sửa 8/2026 (tài liệu Q1) là 3.400 tỷ yên. Mục dùng bản mới nhất.
- Tag `owner = public` dù gia đình Toyoda vẫn có vai trò lãnh đạo; `age = old` theo mốc 1937.

## Samsung
- Bảng kết quả theo mảng trong PDF quý 4/2025 bị mất dấu ngoặc của một số số âm khi trích xuất. Mảng MX/NW 12,9 và DX 12,9 nghìn tỷ won lệch 0,2 nghìn tỷ so với phép cộng mảng; giữ số như bảng, ghi "≈".
- Tài liệu "2023_4Q_conference_eng.pdf" tải về thực chất có chữ Hàn (font không trích được); chỉ dùng các con số trong dòng DS và tổng.
- Không dùng tỷ lệ sở hữu trực tiếp của Lee Jae-yong tại Samsung Electronics vì bảng cổ đông bị vỡ cột; chỉ dùng các số chắc chắn: Samsung Life 8,51%, Samsung C&T 5,05%, Lee Jae-yong 19,93% Samsung C&T (21,00% từ 2/1/2026).
- "SK hynix vượt Samsung về thị phần DRAM quý 1/2025" (Counterpoint) chỉ thấy qua SamMobile và trang tổng hợp; không dùng. Thị phần HBM quý 2/2025 lấy qua BusinessKorea.
- Số nhân viên: 259.149 (toàn cầu, Báo cáo phát triển bền vững 2026) khác 128.881 (trụ sở Hàn Quốc, Báo cáo kinh doanh). Dùng số toàn cầu cho `facts.people`.
- Sơ bộ ngày 8/1/2026 Samsung ước 2025 doanh thu 332,77 và LN hoạt động 43,53 nghìn tỷ won; số chính thức 29/1/2026 là 333,6 và 43,6. Dùng số 29/1/2026.

## Tata
- Lợi nhuận hợp nhất của Tata Sons FY26: Outlook Business ghi 26,616 crore (−35%), trang khác ghi 17,923 crore (−35,7%). Không dùng con số nào. Lợi nhuận tổng nhóm 1,70,525 crore là phép cộng các công ty, tăng 51,9% một phần nhờ lãi tách Tata Motors (Tata Sons ghi chú).
- Doanh thu TCS: báo cáo Tata Sons 2,71,423 crore; TCS tự công bố (qua Business Today) 2,67,021 crore. Có thể khác nhau do tính thu nhập khác; bảng mảng dùng số Tata Sons, phần mô tả dùng cả hai và ghi rõ.
- Tỷ lệ các quỹ trong Tata Sons: cộng các dòng trong bảng cổ đông sáng lập ra khoảng 65,3%, tata.com ghi 66%. Mục ghi "tổng cộng 66% (theo tata.com)".
- Nano ngừng sản xuất năm 2018 (chỉ 1 chiếc sản xuất tháng 6/2018) theo Wikipedia dẫn Bloomberg Opinion; chưa mở được nguồn gốc nên không ghi. Mốc cuối dùng là số bán tháng 3/2017 (Business Standard).
- Chưa tìm được nguồn về rạn nứt nội bộ Tata Trusts năm 2025 (hết lượt tìm kiếm); không đưa vào `weak`.
- Tai nạn AI171: dùng số tử vong trong báo cáo sơ bộ của AAIB (12 + 229 + 19 = 260). Không nêu nguyên nhân vì điều tra chưa có kết luận cuối cùng trong nguồn đã đọc.
- Thông cáo Corus của Tata Steel đọc qua mục "press releases" của Business Standard, nên chấm B thay vì A.
- Tag `owner = family` là gần đúng: chủ sở hữu thực là các quỹ từ thiện do người nhà Tata đứng đầu.
