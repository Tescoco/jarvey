const express = require("express");
const app = express.Router();

let translations = {
  en: [
    { key: "Back to home", value: "Back to home" },
    { key: "Submit", value: "Submit" },
  ],
  bd: [{ key: "Back to home", value: "বাড়িতে ফিরে যান" }],
};

function ensureLang(lang) {
  if (!translations[lang]) translations[lang] = [];
}

// LIST
app.get("/api/admin/translations/:lang", (req, res) => {
  const { lang } = req.params;
  ensureLang(lang);
  return res.json({ success: true, data: translations[lang] });
});

// CREATE
app.post("/api/admin/translations/:lang", (req, res) => {
  const { lang } = req.params;
  const { key, value = "" } = req.body || {};
  if (!key)
    return res.status(400).json({ success: false, message: "key is required" });
  ensureLang(lang);
  if (translations[lang].some((t) => t.key === key)) {
    return res
      .status(409)
      .json({ success: false, message: "key already exists" });
  }
  const item = { key, value };
  translations[lang].push(item);
  return res
    .status(201)
    .json({ success: true, message: "Translation added", data: item });
});

// BULK UPDATE
app.put("/api/admin/translations/:lang", (req, res) => {
  const { lang } = req.params;
  const { items } = req.body || {};
  if (!Array.isArray(items))
    return res
      .status(400)
      .json({
        success: false,
        message: "items must be an array of {key,value}",
      });
  ensureLang(lang);
  const map = new Map(translations[lang].map((t) => [t.key, t.value]));
  for (const it of items) {
    if (!it || typeof it.key !== "string") continue;
    map.set(it.key, it.value ?? map.get(it.key) ?? "");
  }
  translations[lang] = Array.from(map.entries()).map(([key, value]) => ({
    key,
    value,
  }));
  return res.json({
    success: true,
    message: "Translations updated",
    data: translations[lang],
  });
});

// DELETE
app.delete("/api/admin/translations/:lang/:key", (req, res) => {
  const { lang, key } = req.params;
  ensureLang(lang);
  const exists = translations[lang].some((t) => t.key === key);
  if (!exists)
    return res.status(404).json({ success: false, message: "key not found" });
  translations[lang] = translations[lang].filter((t) => t.key !== key);
  return res.json({ success: true, message: "Translation deleted" });
});

module.exports = app;
