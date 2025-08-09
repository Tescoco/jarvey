const express = require("express");
const app = express.Router();

const agentPerformance = [
  {
    name: "AI Agent Bot",
    closed: "1",
    ofClosed: "100",
    average: null,
    replied: "1",
    massage: "1",
    firstResponseTime: "11s",
    resolutionTime: null,
    oneTouchTickets: null,
    onlineTime: null,
    messagesSentPerHour: null,
    ticketsRepliedPerHour: null,
    closedTicketsPerHour: null,
    ticketHandleTime: null,
    zeroTouchTickets: "1",
  },
  {
    name: "AI Agent Bot",
    closed: "1",
    ofClosed: "100",
    average: null,
    replied: "1",
    massage: "1",
    firstResponseTime: "11s",
    resolutionTime: null,
    oneTouchTickets: null,
    onlineTime: null,
    messagesSentPerHour: null,
    ticketsRepliedPerHour: null,
    closedTicketsPerHour: null,
    ticketHandleTime: null,
    zeroTouchTickets: "1",
  },
  {
    name: "AI Agent Bot",
    closed: "1",
    ofClosed: "100",
    average: null,
    replied: "1",
    massage: "1",
    firstResponseTime: "11s",
    resolutionTime: null,
    oneTouchTickets: null,
    onlineTime: null,
    messagesSentPerHour: null,
    ticketsRepliedPerHour: null,
    closedTicketsPerHour: null,
    ticketHandleTime: null,
    zeroTouchTickets: "1",
  },
];

const createdVsClosed = {
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
      label: "Created Tickets",
      data: [32, 30, 29, 29, 32, 36, 41, 46, 49, 47, 42, 35],
      borderColor: "#7856FF",
      backgroundColor: "#7856FF",
      tension: 0.5,
      pointBackgroundColor: "#7856FF",
      pointBorderColor: "#7856FF",
      pointRadius: 4,
    },
    {
      label: "Closed Tickets",
      data: [22, 26, 30, 34, 38, 41, 42, 40, 39, 39, 43, 48],
      borderColor: "#FFC563",
      backgroundColor: "#FFC563",
      tension: 0.5,
      pointBackgroundColor: "#FFC563",
      pointBorderColor: "#FFC563",
      pointRadius: 4,
    },
  ],
  min: 0,
  max: 60,
  legend: true,
};

const topUsedValues = [
  { label: "Close > Without message", total: 1 },
  { label: "Handover > With message", total: 1 },
];

const allUsedValues = [
  {
    value: "Close",
    total: "1",
    li1: null,
    li2: null,
    li3: null,
    li4: null,
    li5: null,
  },
  {
    value: "Handover",
    total: "1",
    li1: null,
    li2: null,
    li3: null,
    li4: null,
    li5: null,
  },
  {
    value: "Close",
    total: "1",
    li1: null,
    li2: null,
    li3: null,
    li4: null,
    li5: null,
  },
];

const automatedOverTime = {
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

app.get("/api/dashboard/automate/ai-agent/agent-performance", (req, res) => {
  res.json({ success: true, data: agentPerformance });
});

app.get("/api/dashboard/automate/ai-agent/created-vs-closed", (req, res) => {
  res.json({ success: true, data: createdVsClosed });
});

app.get("/api/dashboard/automate/ai-agent/top-used-values", (req, res) => {
  res.json({ success: true, data: topUsedValues });
});

app.get("/api/dashboard/automate/ai-agent/all-used-values", (req, res) => {
  res.json({ success: true, data: allUsedValues });
});

app.get("/api/dashboard/automate/ai-agent/automated-over-time", (req, res) => {
  res.json({ success: true, data: automatedOverTime });
});

module.exports = app;
