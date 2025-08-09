const express = require("express");
const app = express.Router();

const summary = [
  {
    label: "Total Sales Per Store",
    marketValue: "15",
    marketVariant: "success",
    title: "$50,846",
  },
  {
    label: "Average Order Value",
    marketValue: "12",
    marketVariant: "success",
    title: "$300",
  },
  {
    label: "Customer Retention Rate",
    marketValue: "12",
    marketVariant: "success",
    title: "90%",
  },
  {
    label: "Store Profitability Index ",
    marketValue: "12",
    marketVariant: "success",
    title: "+45,427 / -24,281",
  },
];

const charts = {
  overall: {
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
        label: "",
        data: [-35, -22, -10, 2, 12, 20, 22, 18, 15, 16, 28, 42],
        borderColor: "#7856FF",
        backgroundColor: "#7856FF",
        tension: 0.5,
        pointBackgroundColor: "#7856FF",
        pointBorderColor: "#7856FF",
        pointRadius: 4,
      },
    ],
    min: -80,
    max: 80,
    legend: false,
  },
  keyMetrics: {
    datasets: [
      {
        label: "Foot Traffic",
        data: [
          { x: "Jan", y: 10, v: 30 },
          { x: "Jan", y: 20, v: 10 },
          { x: "Jan", y: 30, v: 40 },
        ],
        backgroundColor: "#176448",
        borderColor: "#fff",
        borderWidth: 0,
        width: 20,
        height: 20,
        borderRadius: 2,
      },
      {
        label: "Online Traffic",
        data: [
          { x: "Jan", y: 10, v: 30 },
          { x: "Feb", y: 20, v: 60 },
        ],
        backgroundColor: "#74A291",
        borderColor: "#fff",
        borderWidth: 0,
        width: 20,
        height: 20,
        borderRadius: 2,
      },
    ],
    legend: true,
    max: 100,
  },
  customer: [
    { name: "Revenue", percent: 75, color: "#166448" },
    { name: "Units Sold", percent: 25, color: "#FFC563" },
  ],
  marketing: [
    { name: "marketing", percent: 75, color: "#166448" },
    { name: "Spend", percent: 25, color: "#FE4333" },
  ],
  performing: {
    labels: ["Store A", "Store B", "Store C", "Store D"],
    datasets: [
      {
        label: "Revenue",
        data: [94, 0, 0, 0],
        backgroundColor: "#7856FF",
        borderRadius: 40,
        borderWidth: 0,
        borderColor: "#7856FF",
        maxBarThickness: 50,
      },
      {
        label: "Growth",
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
    legend: true,
  },
};

const storesTable = [
  {
    id: "ST-OOI",
    name: "A",
    totalSales: "3,500",
    totalRevenue: "120,000",
    totalOrder: "34",
    return: "5",
    customer: "4.8",
  },
  {
    id: "ST-002",
    name: "B",
    totalSales: "3,200",
    totalRevenue: "110,500",
    totalOrder: "35",
    return: "6",
    customer: "4.6",
  },
  {
    id: "ST-OO3",
    name: "C",
    totalSales: "2,800",
    totalRevenue: "98,750",
    totalOrder: "36.3",
    return: "4",
    customer: "4.7",
  },
  {
    id: "ST-OO4",
    name: "D",
    totalSales: "2,600",
    totalRevenue: "89,200",
    totalOrder: "34.3",
    return: "7",
    customer: "4.4",
  },
  {
    id: "ST-OO5",
    name: "E",
    totalSales: "2,100",
    totalRevenue: "75,900",
    totalOrder: "36.1",
    return: "4",
    customer: "4.5",
  },
];

const recommendations = [
  {
    title: "Whitman College",
    des: "A list of integration techniques, including substitution, integration by parts, and trigonometric substitutions ",
  },
  {
    title: "Byjus",
    des: "A guide to integration by parts, including the ILATE rule ",
  },
  { title: "Wikihow", des: "A step-by-step guide to integration by parts " },
  {
    title: "Electronics Tutorials",
    des: "A guide to integration by substitution ",
  },
  {
    title: "Razorpay Learn",
    des: "A guide to writing integration guides, including step-by-step instructions for users",
  },
];

app.get("/api/dashboard/custom-reports/summary", (req, res) =>
  res.json({ success: true, data: summary })
);
app.get("/api/dashboard/custom-reports/charts", (req, res) =>
  res.json({ success: true, data: charts })
);
app.get("/api/dashboard/custom-reports/stores", (req, res) =>
  res.json({ success: true, data: storesTable })
);
app.get("/api/dashboard/custom-reports/recommendations", (req, res) =>
  res.json({ success: true, data: recommendations })
);

module.exports = app;
