const express = require("express");
const app = express.Router();

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const hours = [
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
];
const schedule = [
  { day: "Wednesday", hour: "16:00", count: 1 },
  { day: "Saturday", hour: "07:00", count: 100 },
  { day: "Thursday", hour: "15:00", count: 11 },
];

app.get("/api/dashboard/support/busiest-times", (req, res) => {
  res.json({ success: true, data: { days, hours, schedule } });
});

module.exports = app;
