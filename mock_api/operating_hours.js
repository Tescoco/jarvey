const express = require("express");
const app = express.Router();

let operatingHours = {
  timezone: "UTC",
  week: {
    monday: { open: true, intervals: [{ from: "09:00", to: "17:00" }] },
    tuesday: { open: true, intervals: [{ from: "09:00", to: "17:00" }] },
    wednesday: { open: true, intervals: [{ from: "09:00", to: "17:00" }] },
    thursday: { open: true, intervals: [{ from: "09:00", to: "17:00" }] },
    friday: { open: true, intervals: [{ from: "09:00", to: "17:00" }] },
    saturday: { open: false, intervals: [] },
    sunday: { open: false, intervals: [] },
  },
};

app.get("/api/operating-hours", (req, res) =>
  res.json({ success: true, data: operatingHours })
);
app.put("/api/operating-hours", (req, res) => {
  operatingHours = { ...operatingHours, ...(req.body || {}) };
  res.json({
    success: true,
    message: "Operating hours updated",
    data: operatingHours,
  });
});

module.exports = app;
