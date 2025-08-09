const express = require("express");
const app = express.Router();

const channelPerformance = [
  {
    Channel: "Email",
    CreatedTickets: 6,
    OfCreatedTickets: "100%",
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
    OfCreatedTickets: null,
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
    OfCreatedTickets: null,
    ClosedTickets: 2,
    TicketHandleTime: null,
    FirstResponseTime: null,
    ResolutionTime: null,
    TicketsReplied: "0",
    MessagesSent: "0",
    AverageCSAT: null,
  },
];

app.get("/api/dashboard/support/channels/performance", (req, res) => {
  res.json({ success: true, data: channelPerformance });
});

module.exports = app;
