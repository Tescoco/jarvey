const express = require("express");
const app = express.Router();

const flows = [
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

const mostFrequentIssues = [
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
    id: "FR-OO5",
    category: "Billing",
    description: "Points-based rewards for purchases",
    priority: "Medium",
    status: { name: "Pending", variant: "warning" },
  },
  {
    id: "FR-OO4",
    category: "Shipping",
    description: "More filter options for products",
    priority: "High",
    status: { name: "Resolved", variant: "primary" },
  },
];

const categoryRequestsCustomer = [
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

app.get("/api/dashboard/automate/performance/flows", (req, res) => {
  res.json({ success: true, data: flows });
});

app.get("/api/dashboard/automate/performance/recommendations", (req, res) => {
  res.json({ success: true, data: recommendations });
});

app.get(
  "/api/dashboard/automate/performance/most-frequent-issues",
  (req, res) => {
    res.json({ success: true, data: mostFrequentIssues });
  }
);

app.get("/api/dashboard/automate/performance/category-requests", (req, res) => {
  res.json({ success: true, data: categoryRequestsCustomer });
});

module.exports = app;
