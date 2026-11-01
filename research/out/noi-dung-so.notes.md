# Ghi chú nghiên cứu — nhóm `noi-dung-so` (phần 1)

Ngày làm: 01/11/2026. Ba mục: `kenh-youtube-ai-faceless`, `trang-facebook-reels-kiem-tien`, `affiliate-shopee-tiktok-shop`.

## 1. Giới hạn của phiên này

- **Hết lượt WebSearch giữa chừng** (giới hạn 200 lượt/lượt làm việc, dùng chung với các nhóm khác). Sau đó chỉ đọc trực tiếp các URL chính thức đã biết hoặc đi theo link nội bộ của trang. Không dùng công cụ tìm kiếm qua curl.
- Hậu quả: **chưa kiểm chứng** được (a) tỷ lệ/ngưỡng thuế VN 2026 cho thu nhập YouTube/Meta, (b) căn cứ pháp lý cụ thể của khấu trừ 10% trên hoa hồng affiliate, (c) số hiệu và điều khoản Luật Quảng cáo sửa đổi 2025, (d) điều khoản chính thức TikTok Shop Affiliate, (e) bảng tỷ lệ hoa hồng Shopee theo ngành hàng, (f) báo chí VN về trang Facebook Việt bị hạn chế kiếm tiền. Các chỗ này trong JSON ghi rõ "chưa kiểm chứng" / "Chưa có số liệu đáng tin" hoặc trỏ sang mục phần 0, không đoán.

## 2. Cách đọc các trang khó

- **Meta Business Help Centre** (facebook.com/business/help/...): trang dựng bằng JS; nội dung bài nằm trong chuỗi JSON nhúng trong HTML. Đã giải mã chuỗi đó (không chạy JS) để đọc nguyên văn — coi là `verified: page`.
- **affiliate.shopee.vn**: ứng dụng JS, không có nội dung HTML. Các câu trích (thuế 250.000 đ/10%, đối soát ngày 20, hóa đơn theo ngày trả thứ Ba/thứ Năm, hạn mức hoa hồng, Hoa hồng Xtra, khoá tài khoản) được đọc từ **tệp ngôn ngữ giao diện tiếng Việt** (JS bundle trên deo.shopeemobile.com) mà trang tải về. Đây là văn bản do Shopee viết nhưng có thể gồm nhiều phiên bản giao diện cùng tồn tại (ví dụ cả đối soát theo tháng lẫn hóa đơn theo ngày). Placeholder như `{threshold}`, `{cap}`, `{switchDate}` cho thấy giá trị thật chỉ hiện khi đăng nhập.
- **help.shopee.vn**: chỉ một số bài portal 10 trả HTML (180808, 125482, 154889, 178455). Bài 172955 (link “xem chi tiết thuế” trong giao diện) chỉ tải bằng JS, không đọc được.
- **Vietcombank**: dùng endpoint `vietcombank.com.vn/api/exchangerates?date=2026-10-30` (trang chính thức của ngân hàng) — USD: mua tiền mặt 25.580, mua chuyển khoản 25.610, bán 25.990.

## 3. Truy vấn / trang không ra kết quả

- EVN: `evn.com.vn/c3/evn-va-khach-hang/Bieu-gia-ban-le-dien-9-79.aspx` chuyển về trang chủ → dùng LuatVietnam (trích QĐ 1279/QĐ-BCT) + VTC News 06/2026 để xác nhận biểu giá 6 bậc vẫn áp dụng năm 2026. Không thấy quyết định điều chỉnh giá điện nào trong 2026 (NĐ 278/2026/NĐ-CP ngày 9/7/2026 chỉ sửa cơ chế điều chỉnh — theo snippet tìm kiếm, chưa đọc văn bản). Có đề xuất biểu giá 5 bậc của Bộ Công Thương (LSVN 10/2026) — chưa ban hành, không dùng.
- thuvienphapluat.vn: 403 với curl (TT 111/2013/TT-BTC).
- OpenAI: `openai.com/chatgpt/pricing` 403; `chatgpt.com/pricing` render giá bằng JS → dùng help.openai.com (20 USD/tháng).
- Midjourney: `midjourney.com/plans` 403; `docs.midjourney.com` đọc được.
- Leonardo, Ideogram: 403. Kling: trang tải bằng JS, không thấy giá.
- shopee.vn/affiliate/... (điều khoản chương trình): 503 “Temporary shopping jam” (chặn bot).
- TikTok Shop: `seller-vn.tiktok.com/university`, `affiliate.tiktok.com` tải bằng JS; `shop.tiktok.com/vn` trả “Security Check”; URL điều khoản đoán thử trả 404.
- Facebook: không tìm thấy danh sách quốc gia đủ điều kiện cho Facebook content monetisation. Trang Creator Fast Track hiện “not available in your country” khi truy cập từ máy ở Việt Nam — chỉ là tín hiệu theo IP, ghi trong notes, không dùng làm kết luận.
- Intel ARK: lần đầu 403 với UA trình duyệt; đọc được với UA curl mặc định.
- Giá i9-12900K tại An Phát: “Liên hệ” → dùng giá i9-12900KF (cùng 125 W/241 W, không có iGPU).
- Vỏ case: không lấy được báo giá → không cộng vào tổng, ghi rõ “chưa gồm”.

## 4. Mâu thuẫn / chỗ nghi ngờ

- **Ngưỡng khấu trừ thuế affiliate**: giao diện Shopee ghi khấu trừ 10% khi “Hoa hồng hợp lệ ≥ 250.000 VND”. Ngưỡng quen thuộc trong văn bản cũ (khấu trừ 10% với khoản chi từ 2 triệu đồng/lần, Điều 25 TT 111/2013) khác hẳn. Chưa xác định được là do văn bản mới, do Shopee áp dụng theo hóa đơn ngày, hay chuỗi giao diện cũ. Cần mục phần 0 đối chiếu.
- **Shopee chu kỳ trả tiền**: giao diện vừa có “kết thúc đối soát ngày 20 hàng tháng”, vừa có thông báo “nâng cấp lên hóa đơn theo ngày, chi trả thứ Ba và thứ Năm”. Ghi cả hai, khuyên người dùng kiểm tra tài khoản.
- **RPM/CPM Việt Nam** lệch nhau theo nguồn và theo định nghĩa: Dynamoi RPM 0,18 USD (đến 27/10/2026, mẫu kênh kết nối chủ yếu nhạc, theo nước người xem), playback CPM 1,14 USD; AIR Media-Tech CPM 0,85 USD (2025, hơn 3.000 kênh của MCN). Cả hai có lợi ích thương mại → mức C. Không có nguồn có phương pháp công khai (mức B) cho Việt Nam.
- **YouTube Premium Lite từ 1/2/2027**: trang trợ giúp ghi “60% … Premium Lite” và “30% … Premium views” — câu chữ dễ hiểu sai, nên không đưa tỷ lệ vào JSON.
- **Trang trợ giúp gắn nhãn AI của YouTube** đã đổi tên thành “Disclosing use of GenAI content”, mục cài đặt là “AI use” (không còn “altered content”). Một số nguồn thứ ba vẫn dùng tên cũ.

## 5. Số liệu đã loại và lý do

- FPT Shop “1 triệu view ≈ 300–500 USD”: blog nhà bán lẻ, không phương pháp, lẫn CPM/RPM → loại.
- Giá ChatGPT Plus 520–550 nghìn đ/tháng và “OpenAI áp VAT 5% cho người dùng VN”: chỉ từ blog/affiliate (gptprompts.ai, findskill.ai…) → loại; JSON ghi “chưa tính VAT/phí thẻ”.
- vnreview (diễn đàn): “nhiều người sáng tạo chân chính bị tắt kiếm tiền nhầm”, trích “đại diện Google Việt Nam” → diễn đàn, không kiểm chứng → loại.
- Silvermouse CPM Việt Nam 1,57 USD, MediaCube 1–3,5 USD: không ngày/không phương pháp → loại.
- Blog vidIQ, unil.ink về YPP: đã thay bằng trang trợ giúp chính thức.
- Home Credit “biểu giá điện rút còn 5 bậc theo QĐ 14/2025/QĐ-TTg”: mâu thuẫn với LuatVietnam/VTC 2026 (vẫn 6 bậc theo QĐ 1279/QĐ-BCT) → loại.

## 6. Giả định trong mô hình chi phí (mức C) — người làm thật nên thay

| Giả định | Giá trị dùng | Thay bằng |
|---|---|---|
| Công suất trung bình dàn máy | 0,35 kW (cơ sở), 0,47 kW (nặng) | Đo bằng ổ cắm có đồng hồ |
| Giờ chạy/ngày | 8 giờ (cơ sở), 12 giờ (nặng) | Giờ render/xuất thực tế |
| Linh kiện ngoài CPU+GPU | ≈ 55–60 W | Số đo |
| Giá điện biên | bậc 4–6: 2.998–3.460 đ/kWh + VAT 8% | Bậc trên hoá đơn của hộ |
| Gói công cụ | 92 USD (Claude Pro, ChatGPT Plus, ElevenLabs Creator, Midjourney Standard) | Gói thực dùng; trả năm rẻ hơn |
| Giá máy | ≈ 47,4–47,8 triệu, chưa gồm case/màn hình | Hoá đơn thực / máy sẵn có |
| Khấu hao | 36 tháng, không giá trị còn lại | Thời gian dùng thực, giá bán lại |
| Tỷ giá | bán 25.990 / mua CK 25.610 (VCB 30/10/2026) | Tỷ giá ngày trừ tiền thẻ |
| RPM | 0,18 USD (VN) hoặc 1,04 USD (trung vị mẫu) | RPM trong YouTube Studio |
| Chưa tính | internet, công làm, VAT/phí thẻ nước ngoài | Tự cộng |

## Vòng 2 (01/11/2026)

### Đã lấp / nâng mức
- **Thuế VN với thu nhập YouTube (A)**: trả lời của Cục Thuế trên xaydungchinhsach.chinhphu.vn (23/7/2026), căn cứ khoản 1 Điều 8 NĐ 68/2026 sửa bởi Điều 1 NĐ 141/2026: tự kê khai; doanh thu năm ≤ 1 tỷ chỉ thông báo doanh thu (hạn 31/1 năm sau); > 1 tỷ khai, nộp từ quý vượt ngưỡng. Lấp `legal[2]` của mục YouTube. Mục Facebook dùng cùng nguồn làm tham chiếu, ghi rõ là suy luận cho tiền Meta.
- **Affiliate — thuế (sửa lớn)**: Cục Thuế (chinhphu.vn 23/7/2026, mức A) xác nhận: không đăng ký kinh doanh thì hoa hồng affiliate Shopee là thu nhập có tính chất tiền lương, tiền công, Shopee khấu trừ (căn cứ khoản 6 Điều 7, điểm c khoản 2 Điều 8 NĐ 253/2026). VietnamFinance (15/9/2026, C): **từ 1/10/2026 Shopee khấu trừ 5% GTGT + 5% TNCN** với cá nhân, cá nhân kinh doanh, hộ kinh doanh. VietnamFinance (1/10/2026, C): TikTok hiện không khấu trừ thuế khi chi trả; Thuế cơ sở 3 TP.HCM: hộ kinh doanh làm affiliate TikTok áp TNCN 2%. Các câu hỏi của người dân trên portal.mof.gov.vn (mục hỏi đáp) mô tả cùng thay đổi của Shopee — chỉ là câu hỏi, chưa có trả lời, không dùng làm nguồn.
- **NQ 204/2025/QH15 (VAT 8% đến 31/12/2026)**: nguồn 34 (LuatVietnam, snippet) không mở được; đã đối chiếu toàn văn trên hcc.nghean.gov.vn (nguồn 36, page). Giữ nguồn 34, thêm nguồn 36.
- **Case YouTube faceless**: VnExpress International (9/7/2025): một người ở TP.HCM làm 5 kênh AI thu "vài nghìn USD/tháng" kể cả tài trợ, thuê 2 nhân viên — không có chi phí, nên vẫn không tính được biên. Chỉ thêm vào `margin.text`.

### Sửa vì vòng 1 sai hoặc đã lỗi thời
1. **Affiliate Shopee**: tóm tắt và `legal[0]` ghi "khấu trừ 10% TNCN khi hoa hồng ≥ 250.000 đ" là cách áp dụng trước 1/10/2026 (và là chữ giao diện, mức B). Đã sửa: từ 1/10/2026 khấu trừ 5% GTGT + 5% TNCN; ngưỡng 250.000 đ không có trong văn bản thuế nào tìm được (văn bản cũ TT 111/2013 dùng ngưỡng 2 triệu/lần) — ghi là cách Shopee áp dụng, có thể đã đổi.
2. **Ngưỡng thuế hộ/cá nhân kinh doanh**: nay là 1 tỷ đồng/năm (NĐ 141/2026 sửa NĐ 68/2026), không phải 500 triệu. Liên quan mục thuế phần 0.
3. **Dynamoi**: trang cập nhật hằng ngày. Ngày 01/11/2026 đọc được: RPM Việt Nam 0,18 USD (đến 28/10/2026), hạng 67/76, trung vị mẫu 1,02 USD (vòng 1: 68/75, 1,04 USD, đến 27/10). Đã cập nhật; lượt xem hoà vốn theo trung vị sửa từ ≈ 152.000 thành ≈ 155.000/tháng.
4. **Định dạng**: các `capital.range`, `burn.range`, `breakeven.range` dài quá 40 ký tự (YouTube, Facebook, affiliate) → rút gọn, chuyển giải thích vào `text`.

### Vẫn trống
- Biên lợi nhuận kênh YouTube faceless và trang Facebook: không có case nào công bố cả doanh thu lẫn chi phí.
- Biên lợi nhuận affiliate: không có case có số.
- TikTok Shop Affiliate: tỷ lệ hoa hồng, điều kiện tham gia, chu kỳ trả — không đọc được trang chính thức; con số "1.000 người theo dõi, 18 tuổi" chỉ có trên blog, không dùng.
- Văn bản gốc thông báo thuế affiliate của Shopee (1/10/2026) và Công văn 7403/CT-TMĐT (06/10/2026, chỉ thấy trên một trang luật sư) — chưa đọc.
- RPM/CPM Việt Nam: không có nguồn có phương pháp công khai cho riêng Việt Nam. AIR Media-Tech có nghiên cứu 300 kênh (3.595 tháng-kênh, đọc từ YouTube Studio) nhưng không tách Việt Nam. Giữ Dynamoi và AIR (mức C).

### Đã thử, không ra
- Tìm case YouTuber/chủ trang Facebook Việt công bố thu nhập và chi phí (VnExpress, Tuổi Trẻ, Thanh Niên, Lao Động): chỉ có số tổng (kênh trên 1 tỷ đồng tăng 35%) hoặc ước tính thu nhập người nổi tiếng.
- TikTok Shop affiliate trên seller-vn.tiktok.com, affiliate.tiktok.com: tải bằng JS.
- Ngưỡng "250.000" trong văn bản thuế: không có kết quả.
