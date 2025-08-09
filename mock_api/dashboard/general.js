const express = require("express");
const app = express.Router();

// Top info metrics
app.get("/api/dashboard/general/summary", (req, res) => {
  return res.json({
    success: true,
    data: [
      {
        label: "Total Sales",
        title: "$50,846.90",
        marketValue: "12",
        marketVariant: "success",
      },
      {
        label: "Store Metrics",
        title: "19,720",
        marketValue: "12",
        marketVariant: "success",
      },
      {
        label: "FAQ Usage",
        title: "10,720k",
        marketValue: "10",
        marketVariant: "danger",
      },
      {
        label: "Deflected Ticket",
        title: "12,720k",
        marketValue: "12",
        marketVariant: "success",
      },
      {
        label: "Agents Ticket",
        title: "9,720k",
        marketValue: "09",
        marketVariant: "success",
      },
      {
        label: "Ticket Notes",
        title: "15,720k",
        marketValue: "15",
        marketVariant: "success",
      },
    ],
  });
});

// Doughnut charts and bar datasets
app.get("/api/dashboard/general/charts", (req, res) => {
  return res.json({
    success: true,
    data: {
      customerSupport: [
        { name: "Successful", percent: 75, color: "#166448" },
        { name: "Pending", percent: 25, color: "#FFC563" },
      ],
      costSaving: [
        { name: "Comparison of support", percent: 50, color: "#7855FF" },
        { name: "Self-service savings", percent: 25, color: "#166448" },
      ],
      ticketTrends: {
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
            label: "Viewed Articles",
            data: [40, 50, 38, 42, 33, 47, 39, 44, 37, 43, 31, 49],
            backgroundColor: "#176448",
            borderRadius: 40,
            borderSkipped: false,
            maxBarThickness: 14,
          },
          {
            label: "Resolution",
            data: [30, 50, 38, 42, 33, 47, 39, 44, 37, 43, 31, 49],
            backgroundColor: "#DCE8E4",
            borderRadius: 40,
            borderSkipped: false,
            maxBarThickness: 14,
          },
        ],
        legend: true,
        max: 60,
        yPercent: false,
      },
    },
  });
});

// Tables
app.get("/api/dashboard/general/stores", (req, res) => {
  return res.json({
    success: true,
    data: [
      {
        name: "Store A",
        revenue: "120,000",
        orders: "3,500",
        avg: "34",
        rating: "4.8",
      },
      {
        name: "Store B",
        revenue: "120,000",
        orders: "3,500",
        avg: "34",
        rating: "4.8",
      },
      {
        name: "Store C",
        revenue: "120,000",
        orders: "3,500",
        avg: "34",
        rating: "4.8",
      },
      {
        name: "Store D",
        revenue: "120,000",
        orders: "3,500",
        avg: "34",
        rating: "4.8",
      },
      {
        name: "Store E",
        revenue: "120,000",
        orders: "3,500",
        avg: "34",
        rating: "4.8",
      },
    ],
  });
});

app.get("/api/dashboard/general/feature-requests", (req, res) => {
  return res.json({
    success: true,
    data: [
      {
        id: "FR-OO1",
        feature: "Dark Mode",
        description: "Add a dark theme for better UX",
        priority: "High",
        status: { name: "Planned", variant: "warning" },
      },
      {
        id: "FR-002",
        feature: "Faster Checkout",
        description: "Reduce steps in the checkout flow",
        priority: "High",
        status: { name: "In Progress", variant: "success" },
      },
      {
        id: "FR-OO3",
        feature: "Multi-Language Support",
        description: "Support for multiple languages",
        priority: "Medium",
        status: { name: "Planned", variant: "warning" },
      },
      {
        id: "FR-OO4",
        feature: "Advanced Search Filters",
        description: "More filter options for products",
        priority: "High",
        status: { name: "Completed", variant: "primary" },
      },
      {
        id: "FR-OO5",
        feature: "Loyalty Rewards Program",
        description: "Points-based rewards for purchases",
        priority: "Medium",
        status: { name: "Planned", variant: "warning" },
      },
    ],
  });
});

app.get("/api/dashboard/general/messages-breakdown", (req, res) => {
  return res.json({
    success: true,
    data: [
      { name: "Without macro", total: "5", percentage: "50%", data: "100%" },
      {
        name: "Order Change/Cancel: Already Shipped",
        total: "1",
        percentage: "10%",
        data: "100%",
      },
      {
        name: "Return & Exchange: Damaged Items",
        total: "3",
        percentage: "30%",
        data: "100%",
      },
      {
        name: "Order Status: Not shipped - still in processing window",
        total: "1",
        percentage: "10%",
        data: "100%",
      },
      {
        name: "Generic: Sign off",
        total: "2",
        percentage: "20%",
        data: "100%",
      },
      {
        name: "Generic: How can I help?",
        total: "1",
        percentage: "10%",
        data: "100%",
      },
    ],
  });
});

module.exports = app;
