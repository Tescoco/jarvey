const express = require("express");
const app = express.Router();

const summary = [
  {
    label: "Total Active Conversations",
    marketValue: "15",
    marketVariant: "success",
    title: "50,846h",
  },
  {
    label: "Current Queue Times",
    marketValue: "12",
    marketVariant: "success",
    title: "5 min",
  },
  {
    label: "Live Agent Availability",
    marketValue: "12",
    marketVariant: "success",
    title: "12,462k",
  },
  {
    label: "Current Longest Wait Time",
    marketValue: "12",
    marketVariant: "success",
    title: "10 min",
  },
];

const avgResponseChart = {
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
      label: "Monthly Data",
      data: [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 44, 48],
      borderColor: "#7856FF",
      backgroundColor: "#7856FF",
      tension: 0.5,
      pointBackgroundColor: "#7856FF",
      pointBorderColor: "#7856FF",
      pointRadius: 4,
    },
  ],
  min: 0,
  max: 60,
  legend: false,
};

const ongoingTickets = [
  {
    id: "TCK-001",
    name: "John D.",
    issue: "Payment Issue",
    priority: "High",
    assigned: "Agent A",
    status: { name: "In Progress", variant: "success" },
    updated: "2025-02-27.10:15 AM",
  },
  {
    id: "TCK-002",
    name: "Emily R.",
    issue: "Order Not Received",
    priority: "High",
    assigned: "Agent B",
    status: { name: "Pending", variant: "warning" },
    updated: "2025-02-27.11:15 AM",
  },
];

const channels = [
  {
    name: "Live Chat",
    averageTime: "2 min",
    longestTime: "8 min",
    active: "12",
    status: { name: "Normal", variant: "success" },
  },
  {
    name: "Email Support",
    averageTime: "4 hrs",
    longestTime: "12 hrs",
    active: "35",
    status: { name: "High Load", variant: "warning" },
  },
];

app.get("/api/dashboard/proactive-engagement/summary", (req, res) =>
  res.json({ success: true, data: summary })
);
app.get("/api/dashboard/proactive-engagement/avg-response-chart", (req, res) =>
  res.json({ success: true, data: avgResponseChart })
);
app.get("/api/dashboard/proactive-engagement/ongoing", (req, res) =>
  res.json({ success: true, data: ongoingTickets })
);
app.get("/api/dashboard/proactive-engagement/channels", (req, res) =>
  res.json({ success: true, data: channels })
);

module.exports = app;
