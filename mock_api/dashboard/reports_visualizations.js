const express = require("express");
const app = express.Router();

app.get("/api/dashboard/reports-visualizations/ready", (req, res) => {
  res.json({ success: true, data: { ready: true } });
});

module.exports = app;
