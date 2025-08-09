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
    marketValue: "10",
    marketVariant: "danger",
    title: "-20%",
  },
];

const achievedVsBreached = {
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
      label: "Achieved",
      data: [40, 50, 38, 42, 33, 47, 39, 44, 37, 43, 31, 49],
      backgroundColor: "#7856FF",
      borderRadius: 40,
      borderSkipped: false,
      borderWidth: 0,
      maxBarThickness: 20,
    },
    {
      label: "Breached",
      data: [30, 40, 28, 32, 23, 37, 29, 34, 27, 33, 21, 39],
      backgroundColor: "#FFC563",
      borderRadius: 40,
      borderSkipped: false,
      borderWidth: 0,
      maxBarThickness: 20,
    },
  ],
  max: 60,
  yPercent: false,
};

app.get("/api/dashboard/support/slas/summary", (req, res) => {
  res.json({ success: true, data: summary });
});
app.get("/api/dashboard/support/slas/achieved-vs-breached", (req, res) => {
  res.json({ success: true, data: achievedVsBreached });
});

module.exports = app;
