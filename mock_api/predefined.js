const express = require("express");
const app = express.Router();

let nextRespId = 4;
let categories = [
  { id: 1, name: "Refund" },
  { id: 2, name: "Shipping" },
];

let responses = [
  {
    id: 1,
    title: "Refund policy",
    categoryId: 1,
    content: "We offer refunds within 30 days...",
  },
  {
    id: 2,
    title: "Shipping cost",
    categoryId: 2,
    content: "Shipping costs depend on region...",
  },
  {
    id: 3,
    title: "Exchange policy",
    categoryId: 1,
    content: "Exchanges are possible within 30 days...",
  },
];

// Categories
app.get("/api/predefined/categories", (req, res) =>
  res.json({ success: true, data: categories })
);

// Responses
app.get("/api/predefined/responses", (req, res) => {
  const { q = "" } = req.query;
  const ql = String(q).toLowerCase();
  const data = responses.filter(
    (r) =>
      !ql ||
      r.title.toLowerCase().includes(ql) ||
      r.content.toLowerCase().includes(ql)
  );
  res.json({ success: true, data });
});

app.post("/api/predefined/responses", (req, res) => {
  const { title, categoryId, content = "" } = req.body || {};
  if (!title || !categoryId)
    return res
      .status(400)
      .json({ success: false, message: "title and categoryId required" });
  const id = nextRespId++;
  const item = { id, title, categoryId, content };
  responses.unshift(item);
  res.json({ success: true, message: "Response created", data: item });
});

app.put("/api/predefined/responses/:id", (req, res) => {
  const id = Number(req.params.id);
  const idx = responses.findIndex((r) => r.id === id);
  if (idx < 0)
    return res.status(404).json({ success: false, message: "Not found" });
  responses[idx] = { ...responses[idx], ...(req.body || {}) };
  res.json({
    success: true,
    message: "Response updated",
    data: responses[idx],
  });
});

app.delete("/api/predefined/responses/:id", (req, res) => {
  const id = Number(req.params.id);
  responses = responses.filter((r) => r.id !== id);
  res.json({ success: true, message: "Response deleted" });
});

module.exports = app;
