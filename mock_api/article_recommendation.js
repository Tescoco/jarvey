const express = require("express");
const app = express.Router();

let config = { helpCenter: "jarvey", enabled: true };

let nextMsgId = 3;
let messages = [
  {
    id: 1,
    customer: "John D.",
    text: "How much does shipping cost?",
    recommended: { id: "ART-100", title: "How much does shipping cost?" },
    completed: false,
  },
  {
    id: 2,
    customer: "Emily R.",
    text: "Do you ship to Canada?",
    recommended: { id: "ART-101", title: "International shipping policy" },
    completed: false,
  },
];

let feedback = [];

app.get("/api/article-recommendation/messages", (req, res) => {
  const { q = "" } = req.query;
  const ql = String(q).toLowerCase();
  const data = messages.filter(
    (m) =>
      !ql ||
      m.text.toLowerCase().includes(ql) ||
      m.customer.toLowerCase().includes(ql)
  );
  res.json({ success: true, data });
});

app.post("/api/article-recommendation/feedback", (req, res) => {
  const { messageId, decision, note = "" } = req.body || {};
  const msg = messages.find((m) => m.id === Number(messageId));
  if (!msg)
    return res
      .status(404)
      .json({ success: false, message: "Message not found" });
  msg.completed = true;
  feedback.push({
    id: feedback.length + 1,
    messageId: msg.id,
    decision,
    note,
    timestamp: new Date().toISOString(),
  });
  res.json({ success: true, message: "Feedback recorded", data: msg });
});

app.get("/api/article-recommendation/config", (req, res) =>
  res.json({ success: true, data: config })
);
app.put("/api/article-recommendation/config", (req, res) => {
  config = { ...config, ...(req.body || {}) };
  res.json({ success: true, message: "Configuration updated", data: config });
});

module.exports = app;
