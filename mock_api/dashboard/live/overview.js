const express = require("express");
const app = express.Router();

const summary = [
  {
    label: "Agents Online",
    marketValue: "15",
    marketVariant: "success",
    title: "84,690",
  },
  {
    label: "Agents Offline",
    marketValue: "10",
    marketVariant: "danger",
    title: "12,408",
  },
  {
    label: "Assigned Open Tickets",
    marketValue: "10",
    marketVariant: "success",
    title: "6,342",
  },
  {
    label: "Unassigned Open Tickets",
    marketValue: "12",
    marketVariant: "danger",
    title: "342",
  },
];

const supportVolume = {
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
      label: "Ticket Created",
      data: [30, 28, 25, 26, 28, 30, 32, 35, 40, 42, 46, 38, 32],
      borderColor: "#7856FF",
      backgroundColor: "#7856FF",
      tension: 0.5,
      pointBackgroundColor: "#7856FF",
      pointBorderColor: "#7856FF",
      pointRadius: 4,
    },
    {
      label: "Ticket Replied",
      data: [22, 25, 30, 26, 32, 35, 39, 36, 32, 38, 41, 49],
      borderColor: "#FFC563",
      backgroundColor: "#FFC563",
      tension: 0.5,
      pointBackgroundColor: "#FFC563",
      pointBorderColor: "#FFC563",
      pointRadius: 4,
    },
    {
      label: "Ticket Closed",
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

app.get("/api/dashboard/live/overview/summary", (req, res) => {
  res.json({ success: true, data: summary });
});

app.get("/api/dashboard/live/overview/support-volume", (req, res) => {
  res.json({ success: true, data: supportVolume });
});

module.exports = app;
