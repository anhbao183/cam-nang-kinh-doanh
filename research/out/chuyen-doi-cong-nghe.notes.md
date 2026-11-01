# Ghi chú nhóm `chuyen-doi-cong-nghe` (phần 8, 4 mục `case`)

Ngày làm: 01/11/2026. Mục: `fujifilm`, `kodak`, `nokia`, `ibm`.

## Vì sao bên này sống, bên kia chết (tóm tắt có nguồn trong JSON)

- Fujifilm và Kodak cùng mất phim. Khác biệt có bằng chứng: (1) Fujifilm có sẵn Fuji Xerox, mảng tài liệu có doanh thu lớn hơn mảng ảnh ngay từ 2005 (Impress 2006), trong khi Kodak đã bán các mảng y tế từ 1994 để "dồn toàn lực cho mảng hình ảnh" (Kodak Milestones). (2) Fujifilm cắt 5.000 người và chi 165 tỷ yên tái cấu trúc ngay năm 2006 khi còn lãi; Kodak tự nhận năm 2012 là mảng truyền thống giảm nhanh hơn dự kiến và không cắt chi phí kịp (8-K 1/2012). (3) Fujifilm mua năng lực gần công nghệ sẵn có (dược, CDMO, mỹ phẩm); Kodak bù lỗ bằng tiền bằng sáng chế (904 triệu USD năm 2010, 128 triệu năm 2011).
- Nokia sống vì bán mảng điện thoại sớm (5,44 tỷ euro, 2013) và giữ lại mạng lưới cùng bằng sáng chế; bên mua ghi giảm 7,6 tỷ USD hai năm sau.
- IBM sống vì nhiều lần rời mảng đã thành hàng phổ thông (PC) nhưng giữ nhóm khách doanh nghiệp lớn và máy chủ lớn, chuyển sang dịch vụ rồi phần mềm có doanh thu định kỳ.
- Lời giải thích "vì sao thành công" của Komori (Fujifilm) và Gerstner là từ phỏng vấn/sách của chính họ hoặc báo chí; đã ghi rõ trong JSON.

## Lựa chọn phân loại

- `fujifilm.tags.age = "old"`: 1934–2026 là 92 năm, chưa đủ 100. Ví dụ trong SCHEMA.md ghi `century` cho Fujifilm là sai theo chính định nghĩa của khung.
- `kodak.tags.outcome = "failed"`: Kodak phá sản theo Chương 11 (19/1/2012) và mất hẳn mảng chính. Pháp nhân vẫn tồn tại, niêm yết lại trên NYSE, doanh thu ~1 tỷ USD, nên có thể xếp `declining`. Chọn `failed` vì khung định nghĩa failed = phá sản. Nếu biên tập muốn phản ánh trạng thái hiện tại, đổi sang `declining` không cần sửa nội dung khác.
- Năm tài chính Fujifilm: công ty gọi 4/2025–3/2026 là "FY2025"; cẩm nang ghi "FY3/2026" theo đề bài.

## Truy vấn / trang không mở được

- The Economist "The last Kodak moment?" (2012): chặn cả curl và WebFetch. Không dùng.
- Reuters gốc về hồ sơ phá sản Kodak, CNN Money (503), Stabroek News (403), Rochester Business Journal (403): không mở được. Số 5,1 tỷ USD tài sản / 6,75 tỷ USD nợ lấy qua Popular Photography (dẫn Reuters), mức C.
- HBR "Kodak's Downfall Wasn't About Technology" (2016): tường phí, chỉ đọc được phần mở đầu. Không dùng.
- Japan Times 2006 (Komori nói nhu cầu phim giảm hơn 20%/năm): 403. Thay bằng phỏng vấn Bunshun 2020 (20–30%/năm).
- Thông cáo gốc tháng 1/2006 của Fujifilm (fujifilm.com/news/n060131.html) không còn nội dung, Wayback không có bản lưu. Dùng bài Impress Digital Camera Watch 1/2/2006.
- Britannica mục Nokia: 403. Thay bằng trang lịch sử tiếng Phần Lan của Nokia (trang tiếng Anh `/about-us/our-history/` hiện chỉ có lịch sử Bell Labs).
- IBM newsroom các URL cũ (Red Hat 2019, Kyndryl 2020/2021) trả 404. Thay bằng bản thông cáo nộp kèm 8-K trên SEC.
- PDF trình bày kết quả của Fujifilm mã hóa AES; pypdf trong thư mục đã cho báo thiếu thư viện `cryptography`. Đã đọc bằng `pdftotext` (poppler đi kèm Git for Windows).
- Tài liệu SEC: curl với User-Agent trình duyệt bị chặn, với User-Agent mô tả công cụ thì mở được.

## Mâu thuẫn giữa nguồn

- Bê bối kế toán Fuji Xerox 2017: The Register ghi khoản điều chỉnh 37,5 tỷ yên trên lợi nhuận ròng sáu năm; một số báo New Zealand/Úc (qua kết quả tìm kiếm, chưa mở) ghi tổng 28,1 tỷ yên ảnh hưởng vốn chủ sở hữu (18,5 tỷ NZ + 9,6 tỷ Úc). Hai con số có thể đo hai thứ khác nhau (lợi nhuận lũy kế và vốn chủ sở hữu). JSON dùng số của The Register và có ghi chú.
- IBM cắt việc làm: AP (1995) ghi khoảng 45.000 việc làm mất năm 1993 và 35.000 năm 1994; Fortune/Bloomberg (2025) ghi Gerstner cho nghỉ 35.000 trên 300.000 nhân viên. Dùng số AP cho năm 1993.
- IBM "lỗ lớn nhất": Fortune viết hội đồng quản trị buộc John Akers rời đi tháng 1/1993 "just as the company was reporting its largest annual loss" (tức khoản lỗ năm 1992); khoản lỗ 1993 (8,1 tỷ USD) còn lớn hơn. Không gọi khoản lỗ 1993 là "kỷ lục" vì chưa mở được nguồn khẳng định.
- Nokia năm 1865: đề bài ghi "nhà máy giấy"; trang của Nokia ghi puusellutehdas (nhà máy bột gỗ). Một số nguồn khác gọi là nhà máy giấy. Theo nguồn công ty.
- Kodak năm thành lập: Eastman Dry Plate Company lập 1881, tên Kodak có từ 1888. Ghi "1888 (tiền thân từ 1881)".
- Kodak doanh thu 2025: tổng 1,069 tỷ USD; ba mảng báo cáo cộng lại 1,054 tỷ. Phần chênh là Eastman Business Park (không phải mảng báo cáo), không phải lỗi số liệu.
- Nokia doanh thu theo mảng là số "so sánh được" (tổng 19.904 triệu euro), lệch nhẹ với doanh thu IFRS 19.889 triệu euro; tỷ trọng % tính trên 19.889.

## Số liệu đã loại và vì sao

- Kodak đỉnh nhân sự 145.300 người (1988): chỉ thấy qua kết quả tìm kiếm của RBJ (403) và các trang tổng hợp. Thay bằng số chính thức "hơn 120.000 nhân viên năm 1973" (Kodak Milestones) và 26.900 (2007, 10-K 2011).
- Kodak doanh thu đỉnh ~16 tỷ USD (1996): không tìm được nguồn mở được.
- Kodak chiếm 90% thị trường phim, 85% máy ảnh ở Mỹ năm 1976: con số phổ biến nhưng nguồn duy nhất định dùng (The Economist) bị chặn. Thay bằng câu của NYT "virtual monopoly".
- Nhu cầu phim màu toàn cầu giảm còn 1/10 sau 10 năm: chỉ thấy ở trang phân tích the-shashi.com (không rõ tác giả). Thay bằng lời Komori (20–30%/năm, tự công bố).
- Giá Fujifilm mua 25% Fuji Xerox (2,3 tỷ USD, 2019): thông cáo của Xerox bị 403; chỉ ghi mốc "sở hữu 100% từ 11/2019" theo trang lịch sử Fujifilm.
- Doanh thu 19 tỷ USD của Kyndryl lúc tách: chỉ có ở nguồn thứ cấp, không có trong thông cáo gốc đã mở. Dùng 4.600 khách và 60 tỷ USD hợp đồng chưa thực hiện từ thông cáo gốc.
- Nokia nhân sự cuối 2025 là 78.005 người (stockanalysis.com): nguồn thứ ba, không dùng; dùng số bình quân ~78.000 trong báo cáo thường niên.
- Kodak nợ dài hạn 108 triệu USD tại 30/6/2026: đọc được qua WebFetch trên bảng cân đối của 10-Q quý 2/2026 nhưng chưa thấy đoạn thuyết minh về khoản vay sau sửa đổi tháng 3/2026; chỉ dùng số cuối 2025 (dư nợ vay 200 triệu USD) từ 10-K.
- Thị phần điện thoại thông minh của Nokia theo Gartner/IDC: chưa tìm; dùng số lượng máy bán ra trong báo cáo của chính Nokia (77,3 → 35,1 triệu chiếc).

## Số do tác giả tính (đã ghi trong JSON)

- Fujifilm: mảng con Bio CDMO ≈ 254,2 tỷ yên, thiết bị y tế ≈ 701,6 tỷ yên, LS Solutions ≈ 143,2 tỷ yên, vật liệu bán dẫn ≈ 294,7 tỷ yên = cộng 4 quý trong bảng doanh thu theo quý (trang 27 tài liệu trình bày). Imaging ≈ 41% lợi nhuận các mảng = 160,0 / (63,6 + 100,9 + 63,7 + 160,0).
- Nokia Technologies ≈ một nửa lợi nhuận hoạt động so sánh được = 1.059 / 2.024 triệu euro.
- IBM phần mềm ≈ 60% lợi nhuận các mảng = 9.920 / 16.363 triệu USD.
- Kodak doanh thu 2007–2011 giảm 42% = (10.301 − 6.022) / 10.301.

## Nội dung có dạng câu lệnh cho AI

Không gặp trong các trang đã đọc.

## Kiểm tra

- `node tools/build.mjs`: không có LỖI nào thuộc `chuyen-doi-cong-nghe.json`; 4 mục được nhận là "tập đoàn". Hai cảnh báo còn lại thuộc mục `ban-quyen-am-nhac-quan-va-video` của nhóm khác.
- Mọi `refs` trỏ tới nguồn có thật; nguồn nào cũng được trích ít nhất một lần; mọi trích dẫn ≤ 40 từ, `verified: "page"`.
