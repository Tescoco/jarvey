const express = require("express");
const app = express.Router();

let languages = [
  {
    name: "Bangladesh",
    code: "bd",
    flag: "https://flagcdn.com/w320/bd.png",
    set: false,
    status: true,
  },
  {
    name: "English",
    code: "en",
    flag: "https://flagcdn.com/w320/us.png",
    set: true,
    status: true,
  },
];

app.get("/api/admin/languages", (req, res) => {
  return res.json({ success: true, data: languages });
});

app.post("/api/admin/languages", (req, res) => {
  const { name, code, flag } = req.body || {};
  if (!name || !code)
    return res
      .status(400)
      .json({ success: false, message: "name and code are required" });
  if (languages.some((l) => l.code === code))
    return res
      .status(409)
      .json({ success: false, message: "language code already exists" });
  const lang = { name, code, flag: flag || "", set: false, status: true };
  languages.push(lang);
  return res
    .status(201)
    .json({ success: true, message: "Language added", data: lang });
});

app.put("/api/admin/languages/:code", (req, res) => {
  const { code } = req.params;
  const lang = languages.find((l) => l.code === code);
  if (!lang)
    return res
      .status(404)
      .json({ success: false, message: "Language not found" });
  const { name, flag, status, setDefault } = req.body || {};
  if (name !== undefined) lang.name = name;
  if (flag !== undefined) lang.flag = flag;
  if (status !== undefined) lang.status = !!status;
  if (setDefault === true) {
    languages = languages.map((l) => ({ ...l, set: l.code === code }));
  }
  return res.json({ success: true, message: "Language updated", data: lang });
});

app.delete("/api/admin/languages/:code", (req, res) => {
  const { code } = req.params;
  const exists = languages.some((l) => l.code === code);
  if (!exists)
    return res
      .status(404)
      .json({ success: false, message: "Language not found" });
  languages = languages.filter((l) => l.code !== code);
  return res.json({ success: true, message: "Language deleted" });
});

module.exports = app;
