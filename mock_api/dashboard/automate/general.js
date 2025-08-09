const express = require("express");
const app = express.Router();

const summary = [
  {
    label: "Automation Rate",
    marketValue: "12",
    marketVariant: "success",
    title: "50%",
  },
  {
    label: "Automated Interactions",
    marketValue: "12",
    marketVariant: "success",
    title: "3",
  },
  {
    label: "Cost Saved By Using Jarvey AI",
    marketValue: "12",
    marketVariant: "success",
    title: "$234",
  },
  {
    label: "Overall Time Saved by AI Agent",
    marketValue: "12",
    marketVariant: "success",
    title: "0h 0m",
  },
  {
    label: "Decrease in Resolution Time",
    marketValue: "09",
    marketVariant: "success",
    title: "24d 14h",
  },
  {
    label: "Decrease in First Response Time",
    marketValue: "15",
    marketVariant: "success",
    title: "1d 17h",
  },
];

const automatedInteractions = {
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
      backgroundColor: "#176448",
      borderRadius: 40,
      borderSkipped: false,
      borderWidth: 0,
      borderColor: "#176448",
      maxBarThickness: 25,
    },
  ],
  max: 60,
  legend: false,
  yPercent: true,
};

const interactionsByFeature = [
  { feature: "Flows", automated: 10, servedByAgentAfter: 2 },
  { feature: "Macros", automated: 3, servedByAgentAfter: 0 },
];

app.get("/api/dashboard/automate/general/summary", (req, res) => {
  res.json({ success: true, data: summary });
});

app.get(
  "/api/dashboard/automate/general/automated-interactions",
  (req, res) => {
    res.json({ success: true, data: automatedInteractions });
  }
);

app.get(
  "/api/dashboard/automate/general/interactions-by-feature",
  (req, res) => {
    res.json({ success: true, data: interactionsByFeature });
  }
);

module.exports = app;
