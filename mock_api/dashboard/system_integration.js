const express = require("express");
const app = express.Router();

const summary = [
  {
    label: "Total Integrations Monitored",
    marketValue: "15",
    marketVariant: "success",
    title: "50,846",
  },
  {
    label: "Successful vs. Failed Integrations",
    marketValue: "12",
    marketVariant: "success",
    title: "300 / 400",
  },
  {
    label: "Average Integration Response Time",
    marketValue: "12",
    marketVariant: "success",
    title: "00:30:14",
  },
];

const summaryTwo = [
  {
    label: "Error Resolution Rate",
    marketValue: "15",
    marketVariant: "success",
    title: "85%",
  },
  {
    label: "Average Fix Time",
    marketValue: "12",
    marketVariant: "success",
    title: "10 min",
  },
];

const charts = {
  breakdownData: {
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
        label: "Load Time",
        data: [30, 28, 25, 26, 28, 30, 32, 35, 40, 42, 46, 38, 32],
        borderColor: "#7855FF",
        backgroundColor: "#7855FF",
        tension: 0.5,
        pointBackgroundColor: "#7855FF",
        pointBorderColor: "#7855FF",
        pointRadius: 4,
      },
      {
        label: "API Response",
        data: [22, 25, 30, 26, 32, 35, 39, 36, 32, 38, 41, 49],
        borderColor: "#FFC563",
        backgroundColor: "#FFC563",
        tension: 0.5,
        pointBackgroundColor: "#FFC563",
        pointBorderColor: "#FFC563",
        pointRadius: 4,
      },
      {
        label: "Sync Errors",
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
  mostFrequently: {
    labels: ["Stripe", "PayPal", "Square", "Adyen"],
    datasets: [
      {
        label: "Stripe",
        data: [94, 0, 0, 0],
        backgroundColor: "#7856FF",
        borderRadius: 40,
        borderWidth: 0,
        borderColor: "#7856FF",
        maxBarThickness: 50,
      },
      {
        label: "PayPal",
        data: [0, 80, 0, 0],
        backgroundColor: "#176448",
        borderRadius: 40,
        borderWidth: 0,
        borderColor: "#7856FF",
        maxBarThickness: 50,
      },
      {
        label: "Square",
        data: [0, 0, 60, 0],
        backgroundColor: "#FFC563",
        borderRadius: 40,
        borderWidth: 0,
        borderColor: "#7856FF",
        maxBarThickness: 50,
      },
      {
        label: "Adyen",
        data: [0, 0, 0, 40],
        backgroundColor: "#0A0D14",
        borderRadius: 40,
        borderWidth: 0,
        borderColor: "#7856FF",
        maxBarThickness: 50,
      },
    ],
    legend: false,
  },
  ticketManagement: {
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
        borderColor: "#176448",
        backgroundColor: "#176448",
        tension: 0.5,
        pointBackgroundColor: "#176448",
        pointBorderColor: "#176448",
        pointRadius: 4,
      },
    ],
    legend: false,
    min: 0,
    max: 60,
    yPercent: true,
  },
};

const commonIntegration = [
  {
    id: "INT-OO1",
    type: "API Timeout",
    description: "API request taking too long to respond",
    frequency: "High",
    status: { name: "In Progress", variant: "success" },
  },
  {
    id: "INT-OO2",
    type: "Authentication Failure",
    description: "Invalid API key or token expiration",
    frequency: "High",
    status: { name: "Resolved", variant: "primary" },
  },
];

const highFailure = [
  {
    id: "INT-OO1",
    type: "API Timeout",
    name: "Payment Gateway A",
    rating: "25",
    status: { name: "Flagged", variant: "danger" },
  },
  {
    id: "INT-OO2",
    type: "Authentication Failure",
    name: "CRM System B",
    rating: "18",
    status: { name: "Under Review", variant: "warning" },
  },
];

const automationSuccess = [
  {
    id: "auto-OO1",
    type: "API Timeout",
    name: "Payment Gateway A",
    resolved: "25",
    intervention: "25",
    status: { name: "Optimized", variant: "success" },
  },
  {
    id: "auto-OO2",
    type: "Authentication Failure",
    name: "CRM System B",
    resolved: "25",
    intervention: "25",
    status: { name: "Needs Improvement", variant: "warning" },
  },
];

const recommendations = [
  {
    section: "Performance & Speed",
    items: [
      {
        label: "Optimize API Calls",
        des: "Reduce redundant requests and implement caching.",
      },
      {
        label: "Improve Load Times",
        des: "Compress images, minify code, and use CDNs.",
      },
      {
        label: "Database Indexing",
        des: "Ensure proper indexing for faster queries.",
      },
    ],
  },
  {
    section: "System Reliability",
    items: [
      {
        label: "Implement Error Logging & Monitoring",
        des: "Track failures in real-time.",
      },
      {
        label: "Set Up Automated Backups",
        des: "Prevent data loss with scheduled backups.",
      },
      {
        label: "Improve Scalability",
        des: "Use load balancing and cloud auto-scaling.",
      },
    ],
  },
];

app.get("/api/dashboard/system-integration/summary", (req, res) =>
  res.json({ success: true, data: summary })
);
app.get("/api/dashboard/system-integration/summary-two", (req, res) =>
  res.json({ success: true, data: summaryTwo })
);
app.get("/api/dashboard/system-integration/charts", (req, res) =>
  res.json({ success: true, data: charts })
);
app.get("/api/dashboard/system-integration/common-integration", (req, res) =>
  res.json({ success: true, data: commonIntegration })
);
app.get("/api/dashboard/system-integration/high-failure", (req, res) =>
  res.json({ success: true, data: highFailure })
);
app.get("/api/dashboard/system-integration/automation-success", (req, res) =>
  res.json({ success: true, data: automationSuccess })
);
app.get("/api/dashboard/system-integration/recommendations", (req, res) =>
  res.json({ success: true, data: recommendations })
);

module.exports = app;
