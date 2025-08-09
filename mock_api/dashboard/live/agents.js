const express = require("express");
const app = express.Router();

const activity = [
  {
    Agent: "Mian Asad Ali",
    Tickets: "5",
    Messages: "2",
    Open: "2",
    Status: "Online",
  },
  {
    Agent: "Robin Mchelpful",
    Tickets: "2",
    Messages: "1",
    Open: "0",
    Status: "Online",
  },
  {
    Agent: "Darlene Robertson",
    Tickets: "6",
    Messages: "3",
    Open: "3",
    Status: "Offline",
  },
  {
    Agent: "Annette Black",
    Tickets: "3",
    Messages: "1",
    Open: "1",
    Status: "Offline",
  },
];

app.get("/api/dashboard/live/agents/activity", (req, res) => {
  res.json({ success: true, data: activity });
});

module.exports = app;
