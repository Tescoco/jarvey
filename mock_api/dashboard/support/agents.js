const express = require("express");
const app = express.Router();

const bestPerformers = [
  {
    title: "Darlene Robertson",
    des: "Average CSAT",
    number: "45",
    img: "/assets/img/best/img-1.png",
  },
  {
    title: "Darlene Robertson",
    des: "First Response Time",
    number: "4m",
    img: "/assets/img/best/img-1.png",
  },
  {
    title: "Darlene Robertson",
    des: "Resolution Time",
    number: "45",
    img: "/assets/img/best/img-1.png",
  },
  {
    title: "AI Agent Bot",
    des: "Closed Tickets",
    number: "1",
    img: "/assets/img/best/img-2.png",
  },
];

const agentPerformance = [
  {
    name: "AI Agent Bot",
    First: "-",
    Resolution: "-",
    Touch: "-",
    Online: "24m 14s",
    Messages: "-",
    Tickets: "0.83",
    Closed: "-",
    Handle: "-",
    Zero: "7",
  },
  {
    name: "AI Agent Bot",
    First: "-",
    Resolution: "-",
    Touch: "-",
    Online: "-",
    Messages: "-",
    Tickets: "-",
    Closed: "-",
    Handle: "-",
    Zero: "1",
  },
  {
    name: "AI Agent Bot",
    First: "-",
    Resolution: "-",
    Touch: "-",
    Online: "1h 12m",
    Messages: "-",
    Tickets: "-",
    Closed: "-",
    Handle: "-",
    Zero: "1",
  },
];

app.get("/api/dashboard/support/agents/best-performers", (req, res) => {
  res.json({ success: true, data: bestPerformers });
});

app.get("/api/dashboard/support/agents/performance", (req, res) => {
  res.json({ success: true, data: agentPerformance });
});

module.exports = app;
