const express = require("express");
const app = express.Router();

const summary = [
  {
    label: "Total Conversations",
    marketValue: "15",
    marketVariant: "success",
    title: "50,846h",
  },
  {
    label: "Average Time to First Message",
    marketValue: "12",
    marketVariant: "success",
    title: "00:30:14",
  },
  {
    label: "Unanswered Conversations Count",
    marketValue: "12",
    marketVariant: "success",
    title: "200 /300",
  },
];

const charts = {
  conversationVolume: {
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
        label: "Chat",
        data: [30, 28, 25, 26, 28, 30, 32, 35, 40, 42, 46, 38, 32],
        borderColor: "#7855FF",
        backgroundColor: "#7855FF",
        tension: 0.5,
        pointBackgroundColor: "#7855FF",
        pointBorderColor: "#7855FF",
        pointRadius: 4,
      },
      {
        label: "Email",
        data: [14, 17, 20, 22, 24, 26, 28, 30, 32, 30, 32, 35],
        borderColor: "#176448",
        backgroundColor: "#176448",
        tension: 0.5,
        pointBackgroundColor: "#176448",
        pointBorderColor: "#176448",
        pointRadius: 4,
      },
      {
        label: "Social Media",
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
  },
  trend: {
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
  },
};

const unanswered = [
  {
    id: "CONV-OOI",
    customer: "John D.",
    reason: "No Agent Available",
    timestamp: "2025-02-27.10:15 AM",
    status: { name: "Pending", variant: "warning" },
  },
  {
    id: "CONV-002",
    customer: "Emily R.",
    reason: "Customer Left Before Response",
    timestamp: "2025-02-27.11:15 AM",
    status: { name: "Resolved", variant: "primary" },
  },
  {
    id: "CONV-OO3",
    customer: "Alex T.",
    reason: "Long Wait Time",
    timestamp: "2025-02-27.12:30 PM",
    status: { name: "Pending", variant: "warning" },
  },
  {
    id: "CONV-004",
    customer: "Sarah M.",
    reason: "System Error",
    timestamp: "2025-02-27.01:10 PM",
    status: { name: "Resolved", variant: "primary" },
  },
  {
    id: "CONV-005",
    customer: "Mike L.",
    reason: "Agent Disconnected",
    timestamp: "2025-02-27.02:45 PM",
    status: { name: "Pending", variant: "warning" },
  },
];

const tagsTop = [
  { name: "outside-business-hours", value: 7, per: 0 },
  { name: "auto-close", value: 7, per: 0 },
  { name: "non-support-related", value: 7, per: 0 },
  { name: "aLhandover", value: 7, per: 0 },
  { name: "ai-close", value: 7, per: 0 },
  { name: "during-business-hours", value: 7, per: 0 },
  { name: "ai_answered", value: 7, per: 0 },
  { name: "PRODUCT", value: 7, per: 0 },
];

const usedTags = [
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
];

app.get("/api/dashboard/conversations-analytics/summary", (req, res) =>
  res.json({ success: true, data: summary })
);
app.get("/api/dashboard/conversations-analytics/charts", (req, res) =>
  res.json({ success: true, data: charts })
);
app.get("/api/dashboard/conversations-analytics/unanswered", (req, res) =>
  res.json({ success: true, data: unanswered })
);
app.get("/api/dashboard/conversations-analytics/tags-top", (req, res) =>
  res.json({ success: true, data: tagsTop })
);
app.get("/api/dashboard/conversations-analytics/used-tags", (req, res) =>
  res.json({ success: true, data: usedTags })
);

module.exports = app;
