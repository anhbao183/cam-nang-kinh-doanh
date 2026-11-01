# Số liệu thực chiến (seed data)

Đây là chỗ để bạn đưa số liệu vận hành thật của chính mình vào cẩm nang. Đây là loại bằng chứng không ai sao chép được, nhưng nó phải được tách riêng khỏi số liệu có nguồn công khai.

Mỗi mô hình là một file `research/seed/<id-muc>.json`. `id-muc` là id của mục trong cẩm nang, ví dụ `kenh-youtube-ai-faceless`; xem id trong link `#m-...` của từng thẻ. Build sẽ tự gắn file này vào ô "Số liệu thực chiến" của đúng mục đó.

```json
{
  "id": "kenh-youtube-ai-faceless",
  "seed": {
    "by": "Tác giả",
    "period": "01/2026 – 09/2026",
    "text": "2 kênh, 1 dàn máy. Số đọc từ hóa đơn và YouTube Studio, không làm tròn.",
    "items": [
      { "label": "Claude Pro", "value": "20 USD/tháng", "note": "hóa đơn Anthropic" },
      { "label": "ChatGPT Plus", "value": "20 USD/tháng", "note": "hóa đơn OpenAI" },
      { "label": "API (tổng)", "value": "... USD/tháng", "note": "trung bình 9 tháng" },
      { "label": "Điện dàn PC (i9 + RTX 3060)", "value": "... kWh/tháng = ... đ", "note": "đo bằng ổ cắm đo điện" },
      { "label": "Khấu hao PC", "value": "... đ/tháng", "note": "giá mua ... đ chia 36 tháng" },
      { "label": "Doanh thu AdSense", "value": "... USD/tháng", "note": "YouTube Studio, 6 tháng gần nhất" },
      { "label": "RPM thực tế", "value": "... USD", "note": "YouTube Studio" }
    ]
  }
}
```

Nguyên tắc:
- Chỉ ghi số đọc được từ hóa đơn, sao kê, công tơ, dashboard. Đừng ghi số ước lượng trong đầu.
- Ghi rõ kỳ số liệu và quy mô (mấy kênh, mấy người, mấy m²).
- Số âm (lỗ) cũng ghi. Cẩm nang có giá trị chính vì không tô hồng.
