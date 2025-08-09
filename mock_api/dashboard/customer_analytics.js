const express = require("express");
const app = express.Router();

const summary = [
  {
    label: "Total Ticket Volume",
    marketValue: "15",
    marketVariant: "success",
    title: "$50,846.90",
  },
  {
    label: "Response Times",
    marketValue: "12",
    marketVariant: "success",
    title: "00:30:14",
  },
  {
    label: "Agent Performance",
    marketValue: "10",
    marketVariant: "danger",
    title: "12,720k",
  },
  {
    label: "Automation Rate",
    marketValue: "09",
    marketVariant: "success",
    title: "90%",
  },
];

const charts = {
  breakdownByStatus: {
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
        label: "Open",
        data: [30, 28, 25, 26, 28, 30, 32, 35, 40, 42, 46, 38, 32],
        borderColor: "#7856FF",
        backgroundColor: "#7856FF",
        tension: 0.5,
        pointBackgroundColor: "#7856FF",
        pointBorderColor: "#7856FF",
        pointRadius: 4,
      },
      {
        label: "Pending",
        data: [22, 25, 30, 26, 32, 35, 39, 36, 32, 38, 41, 49],
        borderColor: "#FFC563",
        backgroundColor: "#FFC563",
        tension: 0.5,
        pointBackgroundColor: "#FFC563",
        pointBorderColor: "#FFC563",
        pointRadius: 4,
      },
      {
        label: "Closed",
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
  customerDoughnutData: [
    { name: "Order Inquiries", percent: 50, color: "#7855FF" },
    { name: "Returns", percent: 35, color: "#FFC563" },
    { name: "Complaints", percent: 15, color: "#FE4234" },
  ],
  complaintsDoughnutData: [
    { name: "Customers", percent: 50, color: "#166448" },
    { name: "Complaints", percent: 25, color: "#FE4234" },
  ],
};

const mostIssues = [
  {
    id: "FR-OO1",
    category: "Dark Mode",
    description: "Billing",
    priority: "High",
    status: { name: "In Progress", variant: "success" },
  },
  {
    id: "FR-002",
    category: "Account Access",
    description: "Reduce steps in the checkout flow",
    priority: "High",
    status: { name: "Resolved", variant: "primary" },
  },
  {
    id: "FR-OO3",
    category: "Performance",
    description: "Support for multiple languages",
    priority: "Medium",
    status: { name: "In Progress", variant: "success" },
  },
  {
    id: "FR-OO4",
    category: "Shipping",
    description: "More filter options for products",
    priority: "High",
    status: { name: "Resolved", variant: "primary" },
  },
  {
    id: "FR-OO5",
    category: "Billing",
    description: "Points-based rewards for purchases",
    priority: "Medium",
    status: { name: "Pending", variant: "warning" },
  },
];

const categoryRequests = [
  {
    name: "Product A",
    type: "Defective Parts",
    generate: "520",
    avg: "34",
    rating: "18",
    status: { name: "Flagged", variant: "danger" },
  },
  {
    name: "Product B",
    type: "Late Delivery",
    generate: "430",
    avg: "34",
    rating: "10",
    status: { name: "Under Review", variant: "warning" },
  },
  {
    name: "Product C",
    type: "Malfunctioning",
    generate: "390",
    avg: "34",
    rating: "15",
    status: { name: "Flagged", variant: "danger" },
  },
  {
    name: "Product D",
    type: "Incorrect Item",
    generate: "350",
    avg: "34",
    rating: "12",
    status: { name: "Under Review", variant: "warning" },
  },
  {
    name: "Product E",
    type: "Poor Quality",
    generate: "310",
    avg: "34",
    rating: "12",
    status: { name: "Not Flagged", variant: "primary" },
  },
];

app.get("/api/dashboard/customer-analytics/summary", (req, res) =>
  res.json({ success: true, data: summary })
);
app.get("/api/dashboard/customer-analytics/charts", (req, res) =>
  res.json({ success: true, data: charts })
);
app.get("/api/dashboard/customer-analytics/most-issues", (req, res) =>
  res.json({ success: true, data: mostIssues })
);
app.get("/api/dashboard/customer-analytics/category-requests", (req, res) =>
  res.json({ success: true, data: categoryRequests })
);

module.exports = app;
