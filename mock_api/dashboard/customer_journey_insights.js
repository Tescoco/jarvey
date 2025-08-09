const express = require("express");
const app = express.Router();

const summary = [
  {
    label: "Tracked Customer Journeys",
    marketValue: "15",
    marketVariant: "success",
    title: "50,846.90",
  },
  {
    label: "Steps Before Support",
    marketValue: "10",
    marketVariant: "success",
    title: "100 / 200",
  },
  {
    label: "Most Frequent Exit Points",
    marketValue: "10",
    marketVariant: "success",
    title: "200 / 300",
  },
  {
    label: "Avg. Time per Step",
    marketValue: "12",
    marketVariant: "success",
    title: "5 min",
  },
];

const charts = {
  interactionFlow: {
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
  topJourneys: [
    { name: "Main checkout journey", percent: 50, color: "#166448" },
    { name: "Support-related journey", percent: 35, color: "#FFC563" },
    { name: "Alternative checkout path", percent: 15, color: "#FE4234" },
  ],
};

app.get("/api/dashboard/customer-journey-insights/summary", (req, res) =>
  res.json({ success: true, data: summary })
);
app.get("/api/dashboard/customer-journey-insights/charts", (req, res) =>
  res.json({ success: true, data: charts })
);

module.exports = app;
