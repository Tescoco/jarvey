const express = require("express");
const app = express.Router();

const summary = [
  {
    label: "Disputes Successfully",
    marketValue: "15",
    marketVariant: "success",
    title: "50,846.90",
  },
  {
    label: "Chargeback Prevention Rate",
    marketValue: "10",
    marketVariant: "success",
    title: "90%",
  },
  {
    label: "Total Refunds Issued",
    marketValue: "10",
    marketVariant: "success",
    title: "10,724",
  },
  {
    label: "Refund Metrics",
    marketValue: "12",
    marketVariant: "success",
    title: "12,720",
  },
];

const charts = {
  disputeTrends: {
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
        pointRadius: 4,
      },
    ],
    min: -80,
    max: 80,
    legend: false,
  },
  chargeBackSources: [
    { name: "Customer Complaints", percent: 50, color: "#7855FF" },
    { name: "Payment Issues", percent: 35, color: "#FFC563" },
    { name: "Fraud", percent: 15, color: "#FE4234" },
  ],
  outcomes: [
    { name: "Resolved", percent: 50, color: "#166448" },
    { name: "In Progress", percent: 35, color: "#FFC563" },
    { name: "Lost", percent: 15, color: "#FE4234" },
  ],
  chartbackSuccess: {
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
        label: "Chargeback Success",
        data: [40, 50, 38, 42, 33, 47, 39, 44, 37, 43, 31, 49],
        backgroundColor: "#7856FF",
        borderRadius: 40,
        borderSkipped: false,
        borderWidth: 0,
        maxBarThickness: 16,
      },
      {
        label: "Failure Rate",
        data: [30, 40, 28, 32, 23, 37, 29, 34, 27, 33, 21, 39],
        backgroundColor: "#FE4333",
        borderRadius: 40,
        borderSkipped: false,
        borderWidth: 0,
        maxBarThickness: 16,
      },
    ],
    max: 60,
    yPercent: false,
  },
  AIAutomation: [
    { name: "High Success", percent: 50, color: "#166448" },
    { name: "Moderate Success", percent: 35, color: "#FFC563" },
    { name: "Low Success", percent: 15, color: "#FE4234" },
  ],
};

const refunds = [
  {
    id: "FR-OO1",
    description: "Product not received",
    category: "Shipping",
    frequency: "High",
    status: { name: "In Progress", variant: "success" },
  },
  {
    id: "FR-002",
    description: "Defective/Damaged item",
    category: "Quality Issue",
    frequency: "High",
    status: { name: "Resolved", variant: "primary" },
  },
  {
    id: "FR-OO3",
    description: "Wrong item sent",
    category: "Order Error",
    frequency: "Medium",
    status: { name: "In Progress", variant: "success" },
  },
  {
    id: "FR-OO4",
    description: "Customer changed mind",
    category: "Buyer's Reason",
    frequency: "Medium",
    status: { name: "Pending", variant: "warning" },
  },
  {
    id: "FR-OO5",
    description: "Unauthorized transaction",
    category: "Fraud",
    frequency: "Low",
    status: { name: "Under Review", variant: "warning" },
  },
];

const highRisk = [
  {
    id: "C-OO1",
    name: "Emily R.",
    chargebacks: "3",
    refunds: "6",
    transactions: "12",
    level: "High",
    status: { name: "Flagged", variant: "danger" },
  },
  {
    id: "C-OO2",
    name: "John D.",
    chargebacks: "5",
    refunds: "8",
    transactions: "15",
    level: "High",
    status: { name: "Under Review", variant: "warning" },
  },
  {
    id: "C-OO3",
    name: "Alex T.",
    chargebacks: "2",
    refunds: "5",
    transactions: "18",
    level: "Medium",
    status: { name: "Under Review", variant: "warning" },
  },
];

const recommendations = [
  {
    label: "Clear Refund & Return Policy",
    des: "Display policies prominently at checkout.",
  },
  {
    label: "Order Confirmation & Tracking",
    des: "Send real-time updates via email/SMS.",
  },
  {
    label: "Fraud Detection System",
    des: "Flag high-risk transactions before processing.",
  },
  {
    label: "Product Quality Checks",
    des: "Ensure accurate descriptions & images.",
  },
  {
    label: "Transparent Pricing & Fees",
    des: "Avoid hidden charges to prevent disputes.",
  },
];

app.get("/api/dashboard/dispute-management/summary", (req, res) =>
  res.json({ success: true, data: summary })
);
app.get("/api/dashboard/dispute-management/charts", (req, res) =>
  res.json({ success: true, data: charts })
);
app.get("/api/dashboard/dispute-management/refunds", (req, res) =>
  res.json({ success: true, data: refunds })
);
app.get("/api/dashboard/dispute-management/high-risk", (req, res) =>
  res.json({ success: true, data: highRisk })
);
app.get("/api/dashboard/dispute-management/recommendations", (req, res) =>
  res.json({ success: true, data: recommendations })
);

module.exports = app;
