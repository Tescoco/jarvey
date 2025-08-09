const express = require("express");
const app = express.Router();

const summary = [
  {
    label: "Average CSAT",
    marketValue: "15",
    marketVariant: "success",
    title: "50%",
  },
  {
    label: "First Response Time",
    marketValue: "12",
    marketVariant: "success",
    title: "23:45:78",
  },
  {
    label: "Resolution Time",
    marketValue: "12",
    marketVariant: "success",
    title: "3h",
  },
  {
    label: "Messages Per Ticket",
    marketValue: "12",
    marketVariant: "success",
    title: "50",
  },
  {
    label: "Created Tickets",
    marketValue: "15",
    marketVariant: "success",
    title: "528",
  },
  {
    label: "Closed Tickets",
    marketValue: "12",
    marketVariant: "success",
    title: "50",
  },
  {
    label: "Open Tickets",
    marketValue: "12",
    marketVariant: "success",
    title: "07",
  },
  {
    label: "Tickets Replied",
    marketValue: "15",
    marketVariant: "success",
    title: "5,281k",
  },
  {
    label: "Messages Sent",
    marketValue: "12",
    marketVariant: "success",
    title: "3,400k",
  },
  {
    label: "Ticket Handle Time",
    marketValue: "12",
    marketVariant: "success",
    title: "00:30:14",
  },
  {
    label: "One Touch Tickets",
    marketValue: "12",
    marketVariant: "success",
    title: "5,000",
  },
  {
    label: "Zero Touch Tickets",
    marketValue: "12",
    marketVariant: "success",
    title: "07,00",
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

const ticketsReplied = {
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
      data: [32, 30, 29, 29, 32, 36, 41, 46, 49, 47, 42, 35],
      borderColor: "#176448",
      backgroundColor: "#176448",
      tension: 0.5,
      pointBackgroundColor: "#176448",
      pointBorderColor: "#176448",
      pointRadius: 4,
    },
  ],
  min: 0,
  max: 60,
  legend: false,
};

const messagesSent = {
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
};

app.get("/api/dashboard/support/overview/summary", (req, res) => {
  res.json({ success: true, data: summary });
});
app.get("/api/dashboard/support/overview/created-vs-closed", (req, res) => {
  res.json({ success: true, data: createdVsClosed });
});
app.get("/api/dashboard/support/overview/tickets-replied", (req, res) => {
  res.json({ success: true, data: ticketsReplied });
});
app.get("/api/dashboard/support/overview/messages-sent", (req, res) => {
  res.json({ success: true, data: messagesSent });
});

module.exports = app;
