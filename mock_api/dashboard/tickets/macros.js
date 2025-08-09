const express = require("express");
const app = express.Router();

const breakdownTable = [
  { id: "other/no_reply", total: 5, percentage: 50, delta: "100%" },
  { id: "product/question", total: 1, percentage: 5, delta: "100%" },
  { id: "refund/request", total: 3, percentage: 10, delta: "100%" },
  { id: "other/no_reply", total: 1, percentage: 5, delta: "100%" },
];

app.get("/api/dashboard/tickets/macros/breakdown-table", (req, res) => {
  res.json({ success: true, data: breakdownTable });
});

module.exports = app;
