const express = require("express");
const app = express.Router();

const summary = [
  {
    label: "Most Frequent Intent",
    marketValue: "15",
    marketVariant: "success",
    title: "other/no_reply",
  },
  {
    label: "Percentage of Correction",
    marketValue: "10",
    marketVariant: "danger",
    title: "0%",
  },
];

const breakdownChart = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Other/No Reply",
      data: [30, 28, 25, 26, 28, 30, 32, 35, 40, 42, 46, 38, 32],
      borderColor: "#7856FF",
      backgroundColor: "#7856FF",
      tension: 0.5,
      pointBackgroundColor: "#7856FF",
      pointBorderColor: "#7856FF",
      pointRadius: 4,
    },
    {
      label: "Product/Question",
      data: [22, 25, 30, 26, 32, 35, 39, 36, 32, 38, 41, 49],
      borderColor: "#FFC563",
      backgroundColor: "#FFC563",
      tension: 0.5,
      pointBackgroundColor: "#FFC563",
      pointBorderColor: "#FFC563",
      pointRadius: 4,
    },
    {
      label: "Refund/Request",
      data: [14, 17, 20, 22, 24, 26, 28, 30, 32, 30, 32, 35],
      borderColor: "#FE4234",
      backgroundColor: "#FE4234",
      tension: 0.5,
      pointBackgroundColor: "#FE4234",
      pointBorderColor: "#FE4234",
      pointRadius: 4,
    },
  ],
  min: 0,
  max: 60,
  legend: true,
};

const breakdownTable = [
  { id: "other/no_reply", total: 5, percentage: 50, delta: "100%" },
  { id: "product/question", total: 1, percentage: 5, delta: "100%" },
  { id: "refund/request", total: 3, percentage: 10, delta: "100%" },
  { id: "other/no_reply", total: 1, percentage: 5, delta: "100%" },
];

app.get("/api/dashboard/tickets/customer-intentions/summary", (req, res) => {
  res.json({ success: true, data: summary });
});
app.get(
  "/api/dashboard/tickets/customer-intentions/breakdown-chart",
  (req, res) => {
    res.json({ success: true, data: breakdownChart });
  }
);
app.get(
  "/api/dashboard/tickets/customer-intentions/breakdown-table",
  (req, res) => {
    res.json({ success: true, data: breakdownTable });
  }
);

module.exports = app;
