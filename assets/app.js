(() => {
  "use strict";
  const D = window.CAM_NANG;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fold = (s) => String(s ?? "").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase();

  const DIMS = {
    capital: { label: "Vốn khởi đầu", opts: { low: "Dưới 50 triệu", mid: "50–500 triệu", high: "Trên 500 triệu" } },
    breakeven: { label: "Hòa vốn", opts: { fast: "Dưới 6 tháng", mid: "6–18 tháng", slow: "Trên 18 tháng", unknown: "Chưa rõ" } },
    risk: { label: "Rủi ro", opts: { low: "Thấp", mid: "Vừa", high: "Cao" } },
    legal: { label: "Pháp lý", opts: { simple: "Đơn giản", conditional: "Có điều kiện", heavy: "Nhiều giấy phép" } },
    time: { label: "Thời gian chủ bỏ ra", opts: { part: "Làm thêm được", full: "Toàn thời gian" } },
    evidence: { label: "Chứng cứ", hint: "văn bản gốc · báo cáo ngành · báo chí/ước tính", opts: { A: "Mức A", B: "Mức B", C: "Mức C" } },
    outcome: { label: "Tập đoàn: kết cục", opts: { rising: "Đang vươn lên", survived: "Trụ vững qua chuyển đổi", declining: "Đang suy yếu", failed: "Sụp đổ / bị thâu tóm" } },
    age: { label: "Tập đoàn: tuổi đời", opts: { century: "Trên 100 năm", old: "50–99 năm", young: "Dưới 50 năm" } },
    owner: { label: "Tập đoàn: sở hữu", opts: { state: "Nhà nước", family: "Gia đình", founder: "Nhà sáng lập", public: "Cổ đông phân tán" } },
    reach: { label: "Tập đoàn: phạm vi", opts: { domestic: "Chủ yếu trong nước", multi: "Đa quốc gia" } },
  };
  const GRADE_TIP = {
    A: "Mức A: văn bản pháp luật, biểu phí/chính sách chính thức của nền tảng, thống kê nhà nước hoặc báo cáo tài chính đã kiểm toán",
    B: "Mức B: báo cáo ngành hoặc khảo sát có công bố phương pháp",
    C: "Mức C: báo chí, báo giá thị trường, case study đơn lẻ hoặc ước tính của tác giả có ghi công thức",
  };
  const TYPE_LABEL = {
    law: "văn bản pháp luật", policy: "chính sách nền tảng", price: "bảng giá chính thức", stats: "thống kê chính thức",
    report: "báo cáo ngành", financials: "báo cáo tài chính", press: "báo chí", quote: "báo giá thị trường", estimate: "ước tính",
  };
  const APPLIES = { all: "Mọi mô hình", online: "Bán online", food: "Thực phẩm", content: "Nội dung số", service: "Dịch vụ", agri: "Nông nghiệp" };
  const ORDER = {
    capital: ["low", "mid", "high"], breakeven: ["fast", "mid", "slow", "unknown"], risk: ["low", "mid", "high"],
    legal: ["simple", "conditional", "heavy"], evidence: ["A", "B", "C"],
    outcome: ["rising", "survived", "declining", "failed"], age: ["century", "old", "young"],
  };

  // ---------- Thuật ngữ: bọc chữ viết tắt lần đầu xuất hiện trong mỗi thẻ ----------
  const terms = (D.glossary || []).filter((t) => t.wrap !== false);
  const termMap = new Map(terms.map((t) => [t.term, t.def]));
  const termRe = terms.length
    ? new RegExp("(?<![\\p{L}\\p{N}_])(" + terms.map((t) => t.term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).sort((a, b) => b.length - a.length).join("|") + ")(?![\\p{L}\\p{N}_])", "gu")
    : null;
  let seen = new Set();
  const txt = (s) => {
    const h = esc(s);
    if (!termRe) return h;
    return h.replace(termRe, (m) => {
      if (seen.has(m)) return m;
      seen.add(m);
      return `<abbr class="term" tabindex="0" title="${esc(termMap.get(m))}">${m}</abbr>`;
    });
  };
  const paras = (s) => String(s ?? "").split(/\n{2,}/).filter(Boolean).map((p) => `<p>${txt(p)}</p>`).join("");

  const grade = (g) => (g && GRADE_TIP[g] ? `<span class="g g-${g}" title="${esc(GRADE_TIP[g])}">${g}</span>` : "");
  const refs = (it, list) => {
    const ids = new Set((it.sources || []).map((s) => s.id));
    const ok = (list || []).filter((n) => ids.has(n));
    return ok.length ? `<span class="refs">${ok.map((n) => `<a class="ref" href="#s-${it.id}-${n}" data-item="${it.id}" data-n="${n}" title="Xem nguồn ${n}">${n}</a>`).join("")}</span>` : "";
  };
  const isNone = (v) => !v || /^\s*chưa có số liệu/i.test(v);

  // ---------- Thẻ ----------
  function badges(it) {
    const t = it.tags || {};
    const out = [];
    if (it.kind === "rule") out.push(`<span class="badge kind-rule">Quy định chung</span>`);
    if (it.kind === "stage") out.push(`<span class="badge kind-rule">Nấc quy mô</span>`);
    if (t.outcome) out.push(`<span class="badge outcome-${t.outcome}">${DIMS.outcome.opts[t.outcome]}</span>`);
    if (t.age) out.push(`<span class="badge">${DIMS.age.opts[t.age]}</span>`);
    if (t.owner) out.push(`<span class="badge">Sở hữu: ${DIMS.owner.opts[t.owner].toLowerCase()}</span>`);
    if (t.reach) out.push(`<span class="badge">${DIMS.reach.opts[t.reach]}</span>`);
    if (t.risk) out.push(`<span class="badge risk-${t.risk}">Rủi ro ${DIMS.risk.opts[t.risk].toLowerCase()}</span>`);
    if (t.legal) out.push(`<span class="badge legal-${t.legal}">Pháp lý: ${DIMS.legal.opts[t.legal].toLowerCase()}</span>`);
    if (t.capital) out.push(`<span class="badge">Vốn ${DIMS.capital.opts[t.capital].toLowerCase()}</span>`);
    if (t.breakeven) out.push(`<span class="badge">Hòa vốn ${t.breakeven === "unknown" ? "chưa rõ" : DIMS.breakeven.opts[t.breakeven].toLowerCase()}</span>`);
    if (t.time) out.push(`<span class="badge">${DIMS.time.opts[t.time]}</span>`);
    if (Array.isArray(t.applies)) out.push(`<span class="badge">Áp dụng: ${t.applies.map((a) => APPLIES[a] || a).join(", ")}</span>`);
    if (t.evidence) out.push(`<span class="badge" title="${esc(GRADE_TIP[t.evidence])}">Chứng cứ ${t.evidence}</span>`);
    return `<div class="badges">${out.join("")}</div>`;
  }

  function spec(label, block, value) {
    const v = value ?? block?.range;
    if (isNone(v)) return `<div><dt>${label}</dt><dd class="none">Chưa có số liệu đáng tin</dd></div>`;
    return `<div><dt>${label}</dt><dd${v.length > 40 ? ' class="long"' : ""}><span>${esc(v)}</span>${grade(block?.grade)}</dd></div>`;
  }

  function row(k, html, cls = "") {
    return html ? `<div class="k ${cls}">${k}</div><div class="v">${html}</div>` : "";
  }

  function block(it, b, extra = "") {
    if (!b || (!b.text && !extra)) return "";
    const tail = `${grade(b.grade)}${refs(it, b.refs)}`;
    return `${extra}${b.text ? paras(b.text).replace(/<\/p>$/, ` ${tail}</p>`) : tail}`;
  }

  function sourcesHtml(it) {
    const src = it.sources || [];
    if (!src.length) return "";
    const lis = src.map((s) => {
      let host = "";
      try { const u = new URL(s.url); host = (u.hostname.replace(/^www\./, "") + u.pathname).replace(/\/$/, ""); } catch { host = String(s.url || ""); }
      if (host.length > 70) host = host.slice(0, 67) + "…";
      const meta = [
        s.url ? `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(host)}</a>` : "<span>tính toán của tác giả, công thức ở trên</span>",
        TYPE_LABEL[s.type] ? `<span>${TYPE_LABEL[s.type]}</span>` : "",
        !s.url ? "" : { page: "<span>đã mở trang đối chiếu</span>", snippet: "<span>đối chiếu qua trích đoạn tìm kiếm</span>", ui: "<span>chữ trong giao diện trang, phải đăng nhập</span>" }[s.verified] || "",
        s.accessed ? `<span>truy cập ${esc(s.accessed)}</span>` : "",
      ].join("");
      return `<li id="s-${it.id}-${s.id}"><i>${s.id}</i><div><div class="src-h">${grade(s.grade)}<b>${esc(s.org)}</b><span>${s.year ? `(${esc(s.year)})` : ""} ${esc(s.title)}</span></div>${s.quote ? `<span class="src-q">“${esc(s.quote)}”</span>` : ""}<div class="src-m">${meta}</div></div></li>`;
    }).join("");
    return `<details class="src" id="src-${it.id}"><summary>Nguồn <span>· ${src.length} nguồn</span></summary><ol>${lis}</ol></details>`;
  }

  function modelCard(it) {
    const m = it.margin || {};
    const marginVal = !isNone(m.net) ? `Ròng ${m.net}` : !isNone(m.gross) ? `Gộp ${m.gross}` : null;
    const specs = `<dl class="specs">
      ${spec("Vốn khởi tạo", it.capital)}
      ${spec("Chi phí cố định / tháng", it.burn)}
      ${spec("Hòa vốn", it.breakeven)}
      ${spec("Biên lợi nhuận", m, marginVal)}
    </dl>`;
    const bd = (it.capital?.breakdown || []).length
      ? `<table class="mini"><tbody>${it.capital.breakdown.map((b) => `<tr><td>${txt(b.item)}</td><td>${esc(b.value)}</td><td>${grade(b.grade)}${refs(it, b.refs)}</td></tr>`).join("")}</tbody></table>`
      : "";
    const capHtml = it.capital ? `${block(it, it.capital)}${bd}` : "";
    const marginHead = [!isNone(m.gross) ? `Biên gộp: <b>${esc(m.gross)}</b>` : "", !isNone(m.net) ? `Biên ròng: <b>${esc(m.net)}</b>` : ""].filter(Boolean).join(" · ");
    const marginHtml = (marginHead ? `<p>${marginHead}</p>` : "") + block(it, m);
    const risks = (it.risks || []).length
      ? `<ol class="risks">${it.risks.map((r) => `<li><div><b>${txt(r.title)}</b>${txt(r.text)}${refs(it, r.refs)}</div></li>`).join("")}</ol>`
      : "";
    const legal = (it.legal || []).length
      ? `<ul class="legal">${it.legal.map((l) => `<li><b>${txt(l.title)}</b>${l.basis ? `<span class="basis">${esc(l.basis)}</span>` : ""}<div>${txt(l.text)}${refs(it, l.refs)}</div></li>`).join("")}</ul>`
      : "";
    const seed = it.seed
      ? `<div class="seed"><div class="seed-t">Số liệu thực chiến${it.seed.by ? " · " + esc(it.seed.by) : ""}${it.seed.period ? " · " + esc(it.seed.period) : ""}</div>${it.seed.text ? paras(it.seed.text) : ""}${(it.seed.items || []).length ? `<table class="mini"><tbody>${it.seed.items.map((s) => `<tr><td>${txt(s.label)}</td><td>${esc(s.value)}</td><td>${esc(s.note || "")}</td></tr>`).join("")}</tbody></table>` : ""}</div>`
      : "";
    return `${specs}<div class="rows">
      ${row("Vốn", capHtml)}
      ${row("Chi phí tháng", block(it, it.burn))}
      ${row("Hòa vốn", block(it, it.breakeven))}
      ${row("Biên lợi nhuận", marginHtml)}
      ${row("Tử huyệt rủi ro", risks, "k-risk")}
      ${row("Ranh giới đỏ", legal, "k-legal")}
      ${row("Thực chiến", seed)}
      ${row("Ghi chú", it.notes ? paras(it.notes) : "")}
    </div>`;
  }

  function ruleCard(it) {
    return `<div class="rows">
      ${row("Áp dụng cho", block(it, it.who))}
      ${row("Quy định", block(it, it.rule))}
      ${row("Chi phí tuân thủ", block(it, it.cost))}
      ${row("Nếu vi phạm", block(it, it.penalty), "k-risk")}
      ${row("Hiệu lực", it.effective ? `<p>${txt(it.effective)}</p>` : "")}
      ${row("Ghi chú", it.notes ? paras(it.notes) : "")}
    </div>`;
  }

  function stageCard(it) {
    return `<div class="rows">
      ${row("Khi nào lên nấc", block(it, it.who))}
      ${row("Điều kiện pháp lý", block(it, it.rule))}
      ${row("Chi phí, nghĩa vụ thêm", block(it, it.cost), "k-risk")}
      ${row("Được gì", block(it, it.gain))}
      ${row("Căn cứ", it.effective ? `<p>${txt(it.effective)}</p>` : "")}
      ${row("Ghi chú", it.notes ? paras(it.notes) : "")}
    </div>`;
  }

  function caseCard(it) {
    const f = it.facts || {};
    const fact = (label, v) => (isNone(v) ? `<div><dt>${label}</dt><dd class="none">Chưa có số liệu đáng tin</dd></div>` : `<div><dt>${label}</dt><dd${String(v).length > 40 ? ' class="long"' : ""}><span>${esc(v)}</span>${label === "Thành lập" ? "" : grade(f.grade)}</dd></div>`);
    const specs = `<dl class="specs">${fact("Thành lập", f.founded)}${fact("Doanh thu", f.revenue)}${fact("Lợi nhuận", f.profit)}${fact("Nhân sự", f.people)}</dl>`;
    const seg = (it.engine?.segments || []).length
      ? `<table class="mini"><tbody>${it.engine.segments.map((s) => `<tr><td>${txt(s.item)}</td><td>${esc(s.value)}</td><td>${grade(s.grade)}${refs(it, s.refs)}</td></tr>`).join("")}</tbody></table>`
      : "";
    const timeline = (it.timeline || []).length
      ? `<ol class="timeline">${it.timeline.map((e) => `<li><span class="yr">${esc(e.year)}</span><div>${txt(e.event)}${refs(it, e.refs)}</div></li>`).join("")}</ol>`
      : "";
    const crises = (it.crises || []).length
      ? `<ol class="risks">${it.crises.map((r) => `<li><div><b>${txt(r.title)}</b>${txt(r.text)}${refs(it, r.refs)}</div></li>`).join("")}</ol>`
      : "";
    const lessons = (it.lessons || []).length
      ? `<ol class="lessons">${it.lessons.map((r) => `<li><div><b>${txt(r.title)}</b>${txt(r.text)}${refs(it, r.refs)}</div></li>`).join("")}</ol>`
      : "";
    return `${specs}<div class="rows">
      ${row("Số liệu", block(it, f))}
      ${row("Cách kiếm tiền", `${block(it, it.engine)}${seg}`)}
      ${row("Vì sao đứng vững", block(it, it.moat))}
      ${row("Các lần chuyển đổi", timeline)}
      ${row("Suýt chết vì", crises, "k-risk")}
      ${row("Bài học cho người làm nhỏ", lessons, "k-lesson")}
      ${row("Điểm yếu hiện nay", block(it, it.weak), "k-risk")}
      ${row("Ghi chú", it.notes ? paras(it.notes) : "")}
    </div>`;
  }

  function card(it) {
    seen = new Set();
    const body = { rule: ruleCard, stage: stageCard, case: caseCard }[it.kind]?.(it) ?? modelCard(it);
    return `<article class="card" id="m-${it.id}" data-id="${it.id}">
      <div class="card-h"><span class="idx">${it.no}</span><h3>${esc(it.title)}</h3><a class="anchor" href="#m-${it.id}" aria-label="Link tới mục này">#</a></div>
      ${badges(it)}
      ${it.summary ? `<p class="summary">${txt(it.summary)}</p>` : ""}
      ${body}
      ${sourcesHtml(it)}
    </article>`;
  }

  // ---------- Dựng trang ----------
  const items = D.items;
  const byId = new Map(items.map((it) => [it.id, it]));
  const hay = new Map(items.map((it) => [it.id, fold(JSON.stringify([it.title, it.summary, it.capital, it.burn, it.breakeven, it.margin, it.risks, it.legal, it.notes, it.who, it.rule, it.cost, it.penalty, it.gain, it.effective, it.facts, it.engine, it.moat, it.timeline, it.crises, it.lessons, it.weak]))]));

  const cardsEl = $("#cards");
  cardsEl.innerHTML = D.sections.map((sec) => {
    const its = items.filter((it) => it.section === sec.id);
    if (!its.length) return "";
    return `<section class="section" id="p-${sec.id}" data-sec="${sec.id}">
      <div class="section-h"><h2><span>${sec.id}</span>${esc(sec.title)}</h2>${sec.intro ? `<p>${esc(sec.intro)}</p>` : ""}</div>
      ${its.map(card).join("")}
    </section>`;
  }).join("");

  // Cột lọc
  const secList = $("#sec-list");
  secList.innerHTML = `<button class="sec-btn" data-sec="" aria-pressed="true"><span>Tất cả các phần</span><i data-count=""></i><span></span></button>` +
    D.sections.filter((s) => items.some((it) => it.section === s.id)).map((s) => `
      <button class="sec-btn" data-sec="${s.id}" aria-pressed="false"><span>${s.id}. ${esc(s.title)}</span><i data-count="${s.id}"></i><b class="fold" data-fold="${s.id}" title="Mở hoặc thu mục lục phần này"><svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg></b></button>
      <div class="toc" id="toc-${s.id}" hidden>${items.filter((it) => it.section === s.id).map((it) => `<a href="#m-${it.id}" data-go="${it.id}"><i>${it.no}</i><span>${esc(it.title)}</span></a>`).join("")}</div>`).join("");

  const filtersEl = $("#filters");
  filtersEl.innerHTML = Object.entries(DIMS).map(([k, d]) => `
    <div class="grp"><div class="grp-t">${d.label}${d.hint ? ` <small>${d.hint}</small>` : ""}</div>
    <div class="chips">${Object.entries(d.opts).map(([v, l]) => `<button class="chip" data-dim="${k}" data-v="${v}" aria-pressed="false">${l}</button>`).join("")}</div></div>`).join("") +
    `<button class="clear" id="clear" hidden>Xóa bộ lọc</button>`;

  // Thuật ngữ
  const gl = $("#gloss");
  if (gl) gl.innerHTML = (D.glossary || []).map((g) => `<dt>${esc(g.term)}</dt><dd>${esc(g.def)}</dd>`).join("");

  // Dòng thông tin
  const nKind = (k) => items.filter((i) => i.kind === k).length;
  const nSrc = items.reduce((a, i) => a + (i.sources || []).length, 0);
  $("#meta-line").innerHTML = [
    `Cập nhật ${esc(D.meta?.updated || "")}`,
    `${nKind("model")} mô hình`,
    `${nKind("rule")} quy định chung`,
    nKind("stage") ? `${nKind("stage")} nấc quy mô` : "",
    nKind("case") ? `${nKind("case")} tập đoàn` : "",
    `${nSrc} nguồn trích dẫn`,
  ].filter(Boolean).map((s) => `<span>${s}</span>`).join("");

  // ---------- Trạng thái lọc ----------
  const state = { sec: "", q: "", f: Object.fromEntries(Object.keys(DIMS).map((k) => [k, new Set()])), view: "cards", sort: null };
  try { const v = localStorage.getItem("cnkd-view"); if (v === "table" || v === "cards") state.view = v; } catch {}

  function passDims(it) {
    for (const [k, set] of Object.entries(state.f)) {
      if (!set.size) continue;
      const v = it.tags?.[k];
      if (!v || !set.has(v)) return false;
    }
    return true;
  }
  function passQuery(it) {
    if (!state.q) return true;
    const h = hay.get(it.id);
    return fold(state.q).split(/\s+/).filter(Boolean).every((w) => h.includes(w));
  }
  const visible = (it) => (!state.sec || it.section === state.sec) && passDims(it) && passQuery(it);

  function apply() {
    let shown = 0;
    for (const it of items) {
      const ok = visible(it);
      const el = document.getElementById("m-" + it.id);
      if (el) el.hidden = !ok;
      const a = $(`.toc a[data-go="${it.id}"]`);
      if (a) a.hidden = !(passDims(it) && passQuery(it));
      if (ok) shown++;
    }
    $$("#cards .section").forEach((s) => { s.hidden = !$$(".card", s).some((c) => !c.hidden); });
    $$("[data-count]").forEach((i) => {
      const sid = i.dataset.count;
      i.textContent = items.filter((it) => (!sid || it.section === sid) && passDims(it) && passQuery(it)).length;
    });
    $$(".sec-btn").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.sec === state.sec)));
    $$(".chip").forEach((c) => c.setAttribute("aria-pressed", String(state.f[c.dataset.dim].has(c.dataset.v))));
    const anyF = Object.values(state.f).some((s) => s.size) || state.q || state.sec;
    $("#clear").hidden = !anyF;
    $("#count").innerHTML = `Đang hiển thị <strong>${shown}</strong> / ${items.length} mục`;
    $("#empty").hidden = shown > 0;
    $("#cards").hidden = state.view !== "cards";
    $("#table").hidden = state.view !== "table";
    $$(".seg button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.view === state.view)));
    if (state.view === "table") renderTable();
  }

  // ---------- Bảng so sánh ----------
  const COLS = [
    { k: "no", label: "#", num: true },
    { k: "title", label: "Mô hình" },
    { k: "capital", label: "Vốn", num: true, val: (it) => it.capital?.range, sortTag: "capital" },
    { k: "burn", label: "Chi phí / tháng", num: true, val: (it) => it.burn?.range },
    { k: "breakeven", label: "Hòa vốn", num: true, val: (it) => it.breakeven?.range, sortTag: "breakeven" },
    { k: "margin", label: "Biên ròng", num: true, val: (it) => (!isNone(it.margin?.net) ? it.margin.net : !isNone(it.margin?.gross) ? `gộp ${it.margin.gross}` : null) },
    { k: "risk", label: "Rủi ro", sortTag: "risk" },
    { k: "legal", label: "Pháp lý", sortTag: "legal" },
    { k: "evidence", label: "Chứng cứ", sortTag: "evidence" },
  ];
  const CASE_COLS = [
    { k: "no", label: "#", num: true },
    { k: "title", label: "Tập đoàn" },
    { k: "founded", label: "Thành lập", num: true, val: (it) => it.facts?.founded },
    { k: "revenue", label: "Doanh thu", num: true, val: (it) => it.facts?.revenue },
    { k: "profit", label: "Lợi nhuận", num: true, val: (it) => it.facts?.profit },
    { k: "outcome", label: "Kết cục", sortTag: "outcome" },
    { k: "age", label: "Tuổi đời", sortTag: "age" },
    { k: "evidence", label: "Chứng cứ", sortTag: "evidence" },
  ];
  function renderTable() {
    const html = [
      tableFor(items.filter((it) => it.kind === "model" && visible(it)), COLS),
      tableFor(items.filter((it) => it.kind === "case" && visible(it)), CASE_COLS),
    ].filter(Boolean).join("");
    $("#table").innerHTML = html;
  }
  function tableFor(rows, COLS) {
    if (!rows.length) return "";
    const head = `<tr>${COLS.map((c) => `<th>${c.sortTag ? `<button data-sort="${c.sortTag}">${c.label}</button>` : c.label}</th>`).join("")}</tr>`;
    const sortable = state.sort && COLS.some((c) => c.sortTag === state.sort);
    if (sortable) {
      const o = ORDER[state.sort];
      rows = [...rows].sort((a, b) => o.indexOf(a.tags?.[state.sort]) - o.indexOf(b.tags?.[state.sort]));
    }
    let lastSec = null;
    const body = rows.map((it) => {
      let pre = "";
      if (!sortable && it.section !== lastSec) {
        lastSec = it.section;
        const s = D.sections.find((x) => x.id === it.section);
        pre = `<tr class="sec-row"><td colspan="${COLS.length}">${esc(s.id)}. ${esc(s.title)}</td></tr>`;
      }
      const t = it.tags || {};
      const cell = (c) => {
        if (c.k === "no") return `<td class="num">${it.no}</td>`;
        if (c.k === "title") return `<td><a href="#m-${it.id}" data-jump="${it.id}">${esc(it.title)}</a></td>`;
        if (c.k === "risk") return `<td><span class="badge risk-${t.risk}">${DIMS.risk.opts[t.risk] || "—"}</span></td>`;
        if (c.k === "legal") return `<td><span class="badge legal-${t.legal}">${DIMS.legal.opts[t.legal] || "—"}</span></td>`;
        if (c.k === "evidence") return `<td>${grade(t.evidence)}</td>`;
        if (c.k === "outcome") return `<td><span class="badge outcome-${t.outcome}">${DIMS.outcome.opts[t.outcome] || "—"}</span></td>`;
        if (c.k === "age") return `<td>${DIMS.age.opts[t.age] || "—"}</td>`;
        const v = c.val(it);
        return `<td class="num">${isNone(v) ? "—" : esc(v)}</td>`;
      };
      return pre + `<tr>${COLS.map(cell).join("")}</tr>`;
    }).join("");
    return `<div class="table-wrap"><table class="cmp"><thead>${head}</thead><tbody>${body}</tbody></table></div>`;
  }

  // ---------- Sự kiện ----------
  const side = $("#side");
  const scrim = $("#scrim");
  const closeSide = () => { side.classList.remove("open"); scrim.classList.remove("open"); $("#menu").setAttribute("aria-expanded", "false"); };
  $("#menu").addEventListener("click", () => {
    const open = !side.classList.contains("open");
    side.classList.toggle("open", open);
    scrim.classList.toggle("open", open);
    $("#menu").setAttribute("aria-expanded", String(open));
  });
  scrim.addEventListener("click", closeSide);

  secList.addEventListener("click", (e) => {
    const f = e.target.closest("[data-fold]");
    if (f) {
      e.stopPropagation();
      const toc = $("#toc-" + f.dataset.fold);
      toc.hidden = !toc.hidden;
      f.closest(".sec-btn").classList.toggle("open", !toc.hidden);
      return;
    }
    const a = e.target.closest("a[data-go]");
    if (a) { closeSide(); return; }
    const b = e.target.closest(".sec-btn");
    if (!b) return;
    state.sec = b.dataset.sec;
    apply();
    window.scrollTo({ top: 0 });
  });

  filtersEl.addEventListener("click", (e) => {
    if (e.target.id === "clear") {
      Object.values(state.f).forEach((s) => s.clear());
      state.q = ""; state.sec = ""; $("#q").value = "";
      apply();
      return;
    }
    const c = e.target.closest(".chip");
    if (!c) return;
    const set = state.f[c.dataset.dim];
    set.has(c.dataset.v) ? set.delete(c.dataset.v) : set.add(c.dataset.v);
    apply();
  });

  let qt;
  $("#q").addEventListener("input", (e) => { clearTimeout(qt); qt = setTimeout(() => { state.q = e.target.value.trim(); apply(); }, 120); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && !/input|textarea/i.test(document.activeElement?.tagName || "")) { e.preventDefault(); $("#q").focus(); }
    if (e.key === "Escape") closeSide();
  });

  $(".seg").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-view]");
    if (!b) return;
    state.view = b.dataset.view;
    try { localStorage.setItem("cnkd-view", state.view); } catch {}
    apply();
  });
  $("#table").addEventListener("click", (e) => {
    const s = e.target.closest("[data-sort]");
    if (s) { state.sort = state.sort === s.dataset.sort ? null : s.dataset.sort; renderTable(); return; }
    const j = e.target.closest("[data-jump]");
    if (j) { e.preventDefault(); reveal(j.dataset.jump); }
  });

  // Bấm số chú dẫn: mở danh sách nguồn, cuộn tới nguồn đó
  cardsEl.addEventListener("click", (e) => {
    const r = e.target.closest("a.ref");
    if (!r) return;
    e.preventDefault();
    const det = document.getElementById("src-" + r.dataset.item);
    if (det) det.open = true;
    const li = document.getElementById(`s-${r.dataset.item}-${r.dataset.n}`);
    if (li) {
      li.scrollIntoView({ block: "center", behavior: "smooth" });
      li.classList.add("flash");
      setTimeout(() => li.classList.remove("flash"), 1600);
    }
  });

  function reveal(id) {
    const it = byId.get(id);
    if (!it) return;
    if (!visible(it)) { Object.values(state.f).forEach((s) => s.clear()); state.q = ""; state.sec = ""; $("#q").value = ""; }
    state.view = "cards";
    apply();
    const el = document.getElementById("m-" + id);
    if (el) {
      if (location.hash !== "#m-" + id) history.replaceState(null, "", "#m-" + id);
      el.scrollIntoView({ block: "start" });
    }
  }
  function fromHash() {
    const h = decodeURIComponent(location.hash.slice(1));
    if (h.startsWith("m-")) reveal(h.slice(2));
    else if (h.startsWith("p-")) { state.sec = h.slice(2); state.view = "cards"; apply(); }
  }
  window.addEventListener("hashchange", fromHash);

  apply();
  fromHash();
  // Phông chữ tải xong làm đổi chiều cao thẻ: cuộn lại đúng mục trong link
  if (location.hash.startsWith("#m-") && document.fonts?.ready) {
    document.fonts.ready.then(() => document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView({ block: "start" }));
  }
})();
