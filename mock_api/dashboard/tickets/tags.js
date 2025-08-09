const express = require("express");
const app = express.Router();

const topTags = [
  { name: "outside-business-hours", value: 7, per: 0 },
  { name: "auto-close", value: 7, per: 0 },
  { name: "non-support-related", value: 7, per: 0 },
  { name: "aLhandover", value: 7, per: 0 },
  { name: "ai-close", value: 7, per: 0 },
  { name: "during-business-hours", value: 7, per: 0 },
  { name: "ai_answered", value: 7, per: 0 },
  { name: "PRODUCT", value: 7, per: 0 },
];

const trend = {
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
      label: "Outside-Business-Hours",
      data: [32, 30, 29, 29, 31, 35, 40, 45, 48, 47, 43, 35],
      borderColor: "#7855FF",
      backgroundColor: "#7855FF",
      tension: 0.5,
      pointBackgroundColor: "#7855FF",
      pointBorderColor: "#7855FF",
      pointRadius: 4,
    },
    {
      label: "Auto-Close",
      data: [25, 28, 32, 35, 38, 40, 40, 38, 37, 39, 44, 48],
      borderColor: "#F7B844",
      backgroundColor: "#F7B844",
      tension: 0.5,
      pointBackgroundColor: "#F7B844",
      pointBorderColor: "#F7B844",
      pointRadius: 4,
    },
    {
      label: "Non-Support-Related",
      data: [25, 28, 32, 35, 38, 40, 40, 38, 37, 39, 44, 48],
      borderColor: "#FFC563",
      backgroundColor: "#FFC563",
      tension: 0.5,
      pointBackgroundColor: "#FFC563",
      pointBorderColor: "#FFC563",
      pointRadius: 4,
    },
  ],
  min: 0,
  max: 60,
  legend: true,
};

const allUsed = [
  {
    total: 1,
    tue: "-",
    wed: "-",
    thu: 1,
    fri: "-",
    sat: "-",
    status: { name: "PRODUCT", variant: "primary" },
  },
  {
    total: 1,
    tue: "-",
    wed: "-",
    thu: 5,
    fri: "-",
    sat: "-",
    status: { name: "ai_answered", variant: "success" },
  },
  {
    total: 1,
    tue: "-",
    wed: "-",
    thu: 2,
    fri: "-",
    sat: "-",
    status: { name: "during-business-hours", variant: "warning" },
  },
  {
    total: 1,
    tue: "-",
    wed: "-",
    thu: 7,
    fri: "-",
    sat: "-",
    status: { name: "ai-close", variant: "danger" },
  },
  {
    total: 1,
    tue: "-",
    wed: "-",
    thu: 1,
    fri: "-",
    sat: "-",
    status: { name: "aLhandover", variant: "primary" },
  },
  {
    total: 1,
    tue: "-",
    wed: "-",
    thu: 4,
    fri: "-",
    sat: "-",
    status: { name: "non-support-related", variant: "success" },
  },
  {
    total: 1,
    tue: "-",
    wed: "-",
    thu: 2,
    fri: "-",
    sat: "-",
    status: { name: "auto-close", variant: "warning" },
  },
  {
    total: 1,
    tue: "-",
    wed: "-",
    thu: 7,
    fri: "-",
    sat: "-",
    status: { name: "outside-business-hours", variant: "danger" },
  },
];

app.get("/api/dashboard/tickets/tags/top", (req, res) => {
  res.json({ success: true, data: topTags });
});
app.get("/api/dashboard/tickets/tags/trend", (req, res) => {
  res.json({ success: true, data: trend });
});
app.get("/api/dashboard/tickets/tags/all-used", (req, res) => {
  res.json({ success: true, data: allUsed });
});

module.exports = app;
