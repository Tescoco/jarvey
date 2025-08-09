const express = require("express");
const app = express.Router();

const summary = [
  {
    label: "Average CSAT",
    marketValue: "15",
    marketVariant: "success",
    title: "50%",
  },
  {
    label: "First Response Time",
    marketValue: "12",
    marketVariant: "success",
    title: "23:45:78",
  },
  {
    label: "Resolution Time",
    marketValue: "12",
    marketVariant: "success",
    title: "3 h",
  },
  {
    label: "Messages Per Ticket",
    marketValue: "12",
    marketVariant: "success",
    title: "50",
  },
];

const salesPerAgentRow = {
  Agent: "Alex Green",
  Assigned: "197",
  Converted: "32",
  Ratio: "16%",
  Sales: "31",
};

app.get("/api/dashboard/support/revenue/summary", (req, res) => {
  res.json({ success: true, data: summary });
});

app.get("/api/dashboard/support/revenue/sales-per-agent", (req, res) => {
  res.json({
    success: true,
    data: Array.from({ length: 8 }).map(() => salesPerAgentRow),
  });
});

module.exports = app;
