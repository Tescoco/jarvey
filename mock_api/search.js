const express = require("express");
const app = express.Router();

app.get("/api/search", (req, res) => {
  const { q = "" } = req.query;
  const query = String(q).toLowerCase();
  const tickets = [
    { id: 1001, subject: "Order not received" },
    { id: 1002, subject: "Refund request" },
  ].filter((t) => !query || t.subject.toLowerCase().includes(query));
  const customers = [
    { id: 1, name: "Jenny Wilson", email: "jenny.w@example.com" },
    { id: 2, name: "John Doe", email: "john.doe@example.com" },
  ].filter(
    (c) =>
      !query ||
      c.name.toLowerCase().includes(query) ||
      c.email.toLowerCase().includes(query)
  );
  const articles = [
    { id: "ART-100", title: "Shipping cost" },
    { id: "ART-101", title: "Refund policy" },
  ].filter((a) => !query || a.title.toLowerCase().includes(query));
  res.json({ success: true, data: { tickets, customers, articles } });
});

module.exports = app;
