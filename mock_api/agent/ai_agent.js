const express = require("express");
const app = express.Router();

// Static cards for the AI Agent landing page
const dashboardCards = [
  { title: "Update your Shopify integration", url: "/" },
  { title: "Connect an email to this store", url: "/" },
  { title: "Create or import a Help Center", url: "#" },
  { title: "Add 20+ articles to your Help Center", url: "#" },
];

app.get("/api/agent/dashboard-cards", (req, res) => {
  return res.json({ success: true, data: dashboardCards });
});

module.exports = app;
