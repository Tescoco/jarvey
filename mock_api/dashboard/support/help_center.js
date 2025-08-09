const express = require("express");
const app = express.Router();

const summary = [
  {
    label: "Article Views",
    marketValue: "15",
    marketVariant: "success",
    title: "8",
  },
  {
    label: "Searches",
    marketValue: "12",
    marketVariant: "success",
    title: "10",
  },
];

const searchResults = [
  { name: "No Articles Shown", percent: 75, color: "#166448" },
  { name: "Articles Shown", percent: 25, color: "#FFC563" },
];

const articleViews = {
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
};

const searchTermsResults = Array.from({ length: 4 }).map(() => ({
  team: "h",
  count: 1,
  clicked: 0,
  rate: 0,
}));

const articlesPerformance = [
  {
    id: "How much does shipping cost? copy",
    views: 1,
    rating: "-",
    like: { like: "0", desLike: "0" },
    update: "Thursday",
  },
  {
    id: "Do you offer refunds or exchanges?",
    views: 1,
    rating: "-",
    like: { like: "0", desLike: "0" },
    update: "Thursday",
  },
  {
    id: "How much does shipping cost? copy",
    views: 1,
    rating: "-",
    like: { like: "0", desLike: "0" },
    update: "Thursday",
  },
];

const noSearchResults = [
  { name: "return", value: 1 },
  { name: "shel", value: 1 },
  { name: "shelf", value: 1 },
  { name: "returr", value: 1 },
  { name: "poli", value: 1 },
  { name: "ret", value: 1 },
];

app.get("/api/dashboard/support/help-center/summary", (req, res) => {
  res.json({ success: true, data: summary });
});
app.get("/api/dashboard/support/help-center/search-results", (req, res) => {
  res.json({ success: true, data: searchResults });
});
app.get("/api/dashboard/support/help-center/article-views", (req, res) => {
  res.json({ success: true, data: articleViews });
});
app.get(
  "/api/dashboard/support/help-center/search-terms-results",
  (req, res) => {
    res.json({ success: true, data: searchTermsResults });
  }
);
app.get("/api/dashboard/support/help-center/no-search-results", (req, res) => {
  res.json({ success: true, data: noSearchResults });
});
app.get(
  "/api/dashboard/support/help-center/articles-performance",
  (req, res) => {
    res.json({ success: true, data: articlesPerformance });
  }
);

module.exports = app;
