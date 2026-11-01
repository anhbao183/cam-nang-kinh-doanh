// Gom dữ liệu nghiên cứu -> kiểm tra -> sinh data/data.js, index.html và dist/cam-nang.html (bản một file).
// Chạy: node tools/build.mjs
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const p = (...a) => join(ROOT, ...a);
const readJson = (f) => JSON.parse(readFileSync(f, "utf8").replace(/^﻿/, ""));

const sections = readJson(p("research", "sections.json"));
const glossary = readJson(p("research", "glossary.json"));
const outDir = process.env.CNKD_OUT || p("research", "out");
const files = existsSync(outDir) ? readdirSync(outDir).filter((f) => f.endsWith(".json")).sort() : [];

const errors = [];
const warns = [];
const ENUM = {
  capital: ["low", "mid", "high"],
  breakeven: ["fast", "mid", "slow", "unknown"],
  risk: ["low", "mid", "high"],
  legal: ["simple", "conditional", "heavy"],
  time: ["part", "full"],
  evidence: ["A", "B", "C"],
};
const GRADES = ["A", "B", "C"];
const TYPES = ["law", "policy", "price", "stats", "report", "financials", "press", "quote", "estimate"];

let items = [];
for (const f of files) {
  let arr;
  try {
    arr = readJson(join(outDir, f));
  } catch (e) {
    errors.push(`${f}: JSON lỗi: ${e.message}`);
    continue;
  }
  if (!Array.isArray(arr)) arr = arr.items || [];
  for (const it of arr) items.push({ ...it, _file: f });
}

// Số liệu thực chiến của tác giả: research/seed/<id>.json -> gắn vào mục cùng id
const seedDir = p("research", "seed");
if (existsSync(seedDir)) {
  for (const f of readdirSync(seedDir).filter((f) => f.endsWith(".json"))) {
    const s = readJson(join(seedDir, f));
    const it = items.find((x) => x.id === (s.id || f.replace(/\.json$/, "")));
    if (it) it.seed = s.seed || s;
    else warns.push(`seed/${f}: không có mục id tương ứng`);
  }
}

const ids = new Set();
const secIds = new Set(sections.map((s) => s.id));
for (const it of items) {
  const w = (m) => errors.push(`${it._file} › ${it.id || "(không id)"}: ${m}`);
  if (!it.id || !/^[a-z0-9-]+$/.test(it.id)) w("id phải là slug a-z0-9-");
  if (ids.has(it.id)) w("trùng id");
  ids.add(it.id);
  if (!["model", "rule"].includes(it.kind)) w(`kind không hợp lệ: ${it.kind}`);
  if (!secIds.has(String(it.section))) w(`section không có: ${it.section}`);
  it.section = String(it.section);
  if (!it.title) w("thiếu title");
  const t = it.tags || {};
  for (const [k, v] of Object.entries(t)) {
    if (ENUM[k] && !ENUM[k].includes(v)) w(`tags.${k} = ${v} không hợp lệ`);
  }
  if (it.kind === "model") for (const k of ["capital", "breakeven", "risk", "legal", "time", "evidence"]) if (!t[k]) w(`thiếu tags.${k}`);
  if (it.kind === "model" && (it.risks || []).length !== 3) warns.push(`${it.id}: có ${(it.risks || []).length} tử huyệt (chuẩn là 3)`);

  const src = it.sources || [];
  if (!src.length) w("không có nguồn nào");
  const sids = new Set();
  for (const s of src) {
    if (!Number.isInteger(s.id)) w(`nguồn id không phải số: ${s.id}`);
    if (sids.has(s.id)) w(`trùng id nguồn ${s.id}`);
    sids.add(s.id);
    // Ước tính của tác giả không có link, nhưng bắt buộc ghi công thức trong quote
    if (s.type === "estimate" && !s.url) {
      if (!s.quote) w(`nguồn ${s.id} là ước tính nhưng không ghi công thức`);
      if (s.grade !== "C") w(`nguồn ${s.id} là ước tính thì phải mức C`);
    } else if (!/^https?:\/\//.test(s.url || "")) w(`nguồn ${s.id} thiếu url`);
    if (!GRADES.includes(s.grade)) w(`nguồn ${s.id} grade = ${s.grade}`);
    if (s.type && !TYPES.includes(s.type)) warns.push(`${it.id}: nguồn ${s.id} type lạ "${s.type}"`);
    if (!s.org || !s.title) warns.push(`${it.id}: nguồn ${s.id} thiếu org/title`);
  }
  // Mọi refs phải trỏ tới nguồn có thật
  const used = new Set();
  const walk = (o, path) => {
    if (!o || typeof o !== "object") return;
    if (Array.isArray(o.refs)) {
      for (const r of o.refs) {
        if (!sids.has(r)) w(`${path}.refs trỏ tới nguồn ${r} không tồn tại`);
        used.add(r);
      }
    }
    if (o.grade !== undefined && path !== "sources" && !GRADES.includes(o.grade)) w(`${path}.grade = ${o.grade}`);
    for (const [k, v] of Object.entries(o)) if (k !== "sources" && v && typeof v === "object") walk(v, `${path}.${k}`);
  };
  walk({ ...it, sources: undefined }, "item");
  for (const s of src) if (!used.has(s.id)) warns.push(`${it.id}: nguồn ${s.id} không được trích ở đâu`);
}

// Sắp xếp theo phần, giữ thứ tự trong file; đánh số "phần.mục"
const order = new Map(sections.map((s, i) => [s.id, i]));
items = items
  .map((it, i) => ({ it, i }))
  .sort((a, b) => order.get(a.it.section) - order.get(b.it.section) || a.i - b.i)
  .map(({ it }) => it);
const counter = {};
for (const it of items) {
  counter[it.section] = (counter[it.section] || 0) + 1;
  it.no = `${it.section}.${counter[it.section]}`;
  delete it._file;
}

const today = new Date().toISOString().slice(0, 10).split("-").reverse().join("/");
const data = { meta: { updated: today }, sections, glossary, items };
const js = "window.CAM_NANG = " + JSON.stringify(data).replace(/</g, "\\u003c") + ";\n";
mkdirSync(p("data"), { recursive: true });
writeFileSync(p("data", "data.js"), js);

// index.html (bản đầy đủ để chạy local / GitHub Pages)
const page = readFileSync(p("src", "page.html"), "utf8");
const stamp = Date.now().toString(36);
const [head, body] = page
  .replace(/(assets\/app\.(?:css|js)|data\/data\.js)"/g, `$1?v=${stamp}"`)
  .split("<!--BODY-->");
writeFileSync(
  p("index.html"),
  `<!doctype html>\n<html lang="vi">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n${head.trim()}\n</head>\n<body>\n${body.trim()}\n</body>\n</html>\n`
);

// dist/cam-nang.html (một file, nhúng sẵn CSS/JS/dữ liệu, không có khung html/head/body)
const css = readFileSync(p("assets", "app.css"), "utf8");
const app = readFileSync(p("assets", "app.js"), "utf8");
const single = page
  .replace("<!--BODY-->", "")
  .replace('<link rel="stylesheet" href="assets/app.css">', () => `<style>\n${css}</style>`)
  .replace('<script src="data/data.js"></script>', () => `<script>${js}</script>`)
  .replace('<script src="assets/app.js"></script>', () => `<script>\n${app.replace(/<\/script/gi, "<\\/script")}</script>`);
mkdirSync(p("dist"), { recursive: true });
writeFileSync(p("dist", "cam-nang.html"), single);

const nSrc = items.reduce((a, i) => a + (i.sources || []).length, 0);
console.log(`Mục: ${items.length} (${items.filter((i) => i.kind === "model").length} mô hình, ${items.filter((i) => i.kind === "rule").length} quy định) · nguồn: ${nSrc} · file: ${files.join(", ") || "(chưa có)"}`);
if (warns.length) console.log(`\nCẢNH BÁO (${warns.length}):\n- ` + warns.join("\n- "));
if (errors.length) {
  console.log(`\nLỖI (${errors.length}):\n- ` + errors.join("\n- "));
  process.exitCode = 1;
}
