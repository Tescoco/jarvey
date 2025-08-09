const express = require("express");
const app = express.Router();

app.get("/api/dashboard/revenue-cost/summary", (req, res) => {
  return res.json({
    success: true,
    data: [
      {
        label: "Ticket Created",
        marketValue: "15",
        marketVariant: "success",
        title: "508",
      },
      {
        label: "Total Revenue",
        marketValue: "15",
        marketVariant: "success",
        title: "$50,846.90",
      },
      {
        label: "Revenue by Customer Support",
        marketValue: "12",
        marketVariant: "success",
        title: "$10,982.10",
      },
      {
        label: "Cost saving",
        marketValue: "12",
        marketVariant: "success",
        title: "$10,342",
      },
    ],
  });
});

app.get("/api/dashboard/revenue-cost/charts", (req, res) => {
  return res.json({
    success: true,
    data: {
      revenue: {
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
        yPercent: true,
      },
      cost: {
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
        min: 0,
        max: 60,
        legend: false,
        yPercent: true,
      },
    },
  });
});

app.get("/api/dashboard/revenue-cost/sales-per-agent", (req, res) => {
  const row = {
    agent: "Alex Green",
    assigned: "197",
    converted: "32",
    ratio: "16%",
    sales: "31",
  };
  return res.json({
    success: true,
    data: Array.from({ length: 8 }).map(() => row),
  });
});

module.exports = app;
