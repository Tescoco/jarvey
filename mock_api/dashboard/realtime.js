const express = require("express");
const app = express.Router();

app.get("/api/dashboard/realtime/summary", (req, res) => {
  return res.json({
    success: true,
    data: {
      top: [
        {
          label: "Live Conversations Count",
          marketValue: "10",
          marketVariant: "success",
          title: "12,562",
        },
        {
          label: "Current Queue Time",
          marketValue: "20",
          marketVariant: "success",
          title: "00:30:14",
        },
      ],
      agents: [
        {
          label: "Agents Online",
          marketValue: "15",
          marketVariant: "success",
          title: "84,690",
        },
        {
          label: "Agents Offline",
          marketValue: "10",
          marketVariant: "success",
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
          marketVariant: "success",
          title: "342",
        },
      ],
      views: [
        {
          label: "Article Views",
          marketValue: "15",
          marketVariant: "success",
          title: "8",
        },
        {
          label: "Searches",
          marketValue: "12",
          marketVariant: "success",
          title: "10",
        },
      ],
      availability: [
        { label: "Agent Availability", title: "32,720k", unit: "Total" },
        {
          marketValue: "12",
          marketVariant: "success",
          title: "12,120k",
          unit: "Online",
        },
        {
          marketValue: "10",
          marketVariant: "success",
          title: "10,250k",
          unit: "Busy",
        },
        {
          marketValue: "10",
          marketVariant: "danger",
          title: "10,720k",
          unit: "Offline",
        },
      ],
    },
  });
});

app.get("/api/dashboard/realtime/charts", (req, res) => {
  return res.json({
    success: true,
    data: {
      productivity: {
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
            data: [40, 50, 38, 42, 33, 47, 39, 44, 37, 43, 31, 49],
            backgroundColor: "#7856FF",
            borderRadius: 40,
            borderSkipped: false,
            borderWidth: 0,
            borderColor: "#7856FF",
            maxBarThickness: 16,
          },
        ],
        max: 60,
        legend: false,
        yPercent: true,
      },
      sentimentAnalysis: [
        { name: "Positive", percent: 50, color: "#166448" },
        { name: "Neutral", percent: 35, color: "#7855FF" },
        { name: "Negative", percent: 15, color: "#FE4234" },
      ],
      searchResults: [
        { name: "No Articles Shown", percent: 75, color: "#166448" },
        { name: "Articles Shown", percent: 25, color: "#FFC563" },
      ],
      agentPerformance: {
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
            data: [-20, -25, -30, -28, -20, -10, 0, 10, 20, 18, 10, 0],
            borderColor: "#176448",
            backgroundColor: "#176448",
            tension: 0.5,
            pointBackgroundColor: "#176448",
            pointBorderColor: "#176448",
            pointRadius: 4,
          },
        ],
        legend: false,
        min: -80,
        max: 80,
      },
      supportVolume: {
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
            data: [32, 30, 29, 29, 31, 35, 40, 45, 48, 47, 43, 35],
            borderColor: "#7856FF",
            backgroundColor: "#7856FF",
            tension: 0.5,
            pointBackgroundColor: "#7856FF",
            pointBorderColor: "#7856FF",
            pointRadius: 4,
          },
          {
            label: "Ticket Replied",
            data: [25, 28, 32, 35, 38, 40, 40, 38, 37, 39, 44, 48],
            borderColor: "#FFC563",
            backgroundColor: "#FFC563",
            tension: 0.5,
            pointBackgroundColor: "#FFC563",
            pointBorderColor: "#FFC563",
            pointRadius: 4,
          },
          {
            label: "Ticket Closed",
            data: [15, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29],
            borderColor: "#FE4333",
            backgroundColor: "#FE4333",
            tension: 0.5,
            pointBackgroundColor: "#FE4333",
            pointBorderColor: "#FE4333",
            pointRadius: 4,
          },
        ],
        legend: true,
        min: 0,
        max: 60,
      },
      keyMetrics: {
        datasets: [
          {
            label: "Ticket Created",
            data: [
              { x: "Jan", y: 10, v: 30 },
              { x: "Jan", y: 20, v: 10 },
              { x: "Jan", y: 30, v: 40 },
            ],
          },
        ],
      },
    },
  });
});

module.exports = app;
