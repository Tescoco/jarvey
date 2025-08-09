const express = require("express");
const app = express.Router();

app.get("/api/dashboard/support/summary", (req, res) => {
  return res.json({
    success: true,
    data: [
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
        title: "30%",
      },
      {
        label: "Resolution Time",
        marketValue: "12",
        marketVariant: "success",
        title: "40%",
      },
      {
        label: "Messages Per Ticket",
        marketValue: "12",
        marketVariant: "success",
        title: "50%",
      },
      {
        label: "Closed Tickets",
        marketValue: "12",
        marketVariant: "success",
        title: "50",
      },
      {
        label: "Tickets Replied",
        marketValue: "12",
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
        title: "00,00",
      },
      {
        label: "Zero Touch Tickets",
        marketValue: "12",
        marketVariant: "success",
        title: "07,00",
      },
    ],
  });
});

app.get("/api/dashboard/support/created-vs-closed", (req, res) => {
  return res.json({
    success: true,
    data: {
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
          data: [30, 28, 25, 26, 28, 30, 32, 35, 40, 42, 46, 38, 32],
          borderColor: "#7856FF",
          backgroundColor: "#7856FF",
          tension: 0.5,
          pointBackgroundColor: "#7856FF",
          pointBorderColor: "#7856FF",
          pointRadius: 4,
        },
        {
          label: "Closed Tickets",
          data: [22, 25, 30, 26, 32, 35, 39, 36, 32, 38, 41, 49],
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
    },
  });
});

app.get("/api/dashboard/support/tickets-replied", (req, res) => {
  return res.json({
    success: true,
    data: {
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
          data: [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 44, 48],
          borderColor: "#7856FF",
          backgroundColor: "#7856FF",
          tension: 0.5,
          pointBackgroundColor: "#7856FF",
          pointBorderColor: "#7856FF",
          pointRadius: 4,
        },
      ],
      min: 0,
      max: 60,
      legend: false,
      yPercent: false,
    },
  });
});

app.get("/api/dashboard/support/messages-sent", (req, res) => {
  return res.json({
    success: true,
    data: {
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
          data: [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 44, 48],
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
      yPercent: false,
    },
  });
});

app.get("/api/dashboard/support/agent-performance", (req, res) => {
  return res.json({
    success: true,
    data: [
      {
        name: "AI Agent Bot",
        firstResponseTime: null,
        resolutionTime: "",
        oneTouchTickets: null,
        onlineTime: "24m 14s",
        messagesSentPerHour: null,
        ticketsRepliedPerHour: null,
        closedTicketsPerHour: "0.83",
        ticketHandleTime: null,
        zeroTouchTickets: "1",
      },
      {
        name: "AI Agent Bot",
        firstResponseTime: null,
        resolutionTime: null,
        oneTouchTickets: null,
        onlineTime: "24m 14s",
        messagesSentPerHour: null,
        ticketsRepliedPerHour: null,
        closedTicketsPerHour: "0.83",
        ticketHandleTime: null,
        zeroTouchTickets: "1",
      },
    ],
  });
});

app.get("/api/dashboard/support/channel-performance", (req, res) => {
  return res.json({
    success: true,
    data: [
      {
        Channel: "Email",
        CreatedTickets: 6,
        OfCreatedTickets: 100,
        ClosedTickets: 5,
        TicketHandleTime: null,
        FirstResponseTime: null,
        ResolutionTime: null,
        TicketsReplied: 1,
        MessagesSent: 1,
        AverageCSAT: null,
      },
      {
        Channel: "Email",
        CreatedTickets: 2,
        OfCreatedTickets: 100,
        ClosedTickets: 1,
        TicketHandleTime: null,
        FirstResponseTime: null,
        ResolutionTime: null,
        TicketsReplied: "0",
        MessagesSent: 1,
        AverageCSAT: null,
      },
      {
        Channel: "Email",
        CreatedTickets: 1,
        OfCreatedTickets: 100,
        ClosedTickets: 2,
        TicketHandleTime: null,
        FirstResponseTime: null,
        ResolutionTime: null,
        TicketsReplied: "0",
        MessagesSent: "0",
        AverageCSAT: null,
      },
    ],
  });
});

module.exports = app;
