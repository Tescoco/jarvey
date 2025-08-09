const express = require("express");
const app = express.Router();

const summary = [
  {
    label: "Agent Productivity",
    marketValue: "10",
    marketVariant: "success",
    title: "90%",
  },
  {
    label: "Customer Satisfaction",
    marketValue: "20",
    marketVariant: "success",
    title: "100%",
  },
];

const analysis = [
  { label: "Agent Productivity", title: "32,720k", unit: "Total" },
  {
    marketValue: "12",
    marketVariant: "success",
    title: "12,120k",
    unit: "Positive",
  },
  {
    marketValue: "10",
    marketVariant: "success",
    title: "10,250k",
    unit: "Neutral",
  },
  {
    marketValue: "10",
    marketVariant: "danger",
    title: "10,720k",
    unit: "Negative",
  },
];

const charts = {
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
  intentsBreakdown: {
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
  },
};

const agentsActivity = [
  { id: "Mian Asad Ali", tickets: 5, massages: 2, open: 2, status: "online" },
  { id: "Robin Mchelpful", tickets: 2, massages: 1, open: 0, status: "online" },
  {
    id: "Darlene Robertson",
    tickets: 6,
    massages: 3,
    open: 3,
    status: "offline",
  },
  { id: "Annette Black", tickets: 3, massages: 1, open: 1, status: "offline" },
];

const macroBreakdown = [
  { id: "other/no_reply", total: 5, percentage: 50, delta: "100%" },
  { id: "product/question", total: 1, percentage: 5, delta: "100%" },
  { id: "refund/request", total: 3, percentage: 10, delta: "100%" },
  { id: "other/no_reply", total: 1, percentage: 5, delta: "100%" },
];

const flowsPerformance = [
  {
    flow: "Shelf life information",
    drop: "0",
    rate: "100",
    automated: "2",
    served: "0",
  },
  {
    flow: "Shipping policy",
    drop: "1",
    rate: "80",
    automated: "4",
    served: "0",
  },
  {
    flow: "Shelf life information",
    drop: "0",
    rate: "0",
    automated: "2",
    served: "1",
  },
];

const recommendations = [
  {
    label: "Article Recommendation Performance",
    des: "There is no data for this period.",
  },
  {
    label: "There is no data for this period.",
    des: "There is no data for this period.",
  },
  {
    label: "Products with most issues and return requests",
    des: "There is no data for this period.",
  },
];

app.get("/api/dashboard/agent-performance/summary", (req, res) =>
  res.json({ success: true, data: summary })
);
app.get("/api/dashboard/agent-performance/analysis", (req, res) =>
  res.json({ success: true, data: analysis })
);
app.get("/api/dashboard/agent-performance/charts", (req, res) =>
  res.json({ success: true, data: charts })
);
app.get("/api/dashboard/agent-performance/agents-activity", (req, res) =>
  res.json({ success: true, data: agentsActivity })
);
app.get("/api/dashboard/agent-performance/macro-breakdown", (req, res) =>
  res.json({ success: true, data: macroBreakdown })
);
app.get("/api/dashboard/agent-performance/flows-performance", (req, res) =>
  res.json({ success: true, data: flowsPerformance })
);
app.get("/api/dashboard/agent-performance/recommendations", (req, res) =>
  res.json({ success: true, data: recommendations })
);

module.exports = app;
