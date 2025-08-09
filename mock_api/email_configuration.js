const express = require("express");
const app = express.Router();

let outgoing = {
  provider: "jarvey",
  dkimVerified: false,
  fromDomain: "jarvey.ai",
  bounceHandling: "automatic",
};

let incoming = {
  provider: "gmail",
  forwardingAddress: "support@jarvey.ai",
  autoCreateTickets: true,
};

app.get("/api/email/config/outgoing", (req, res) =>
  res.json({ success: true, data: outgoing })
);
app.put("/api/email/config/outgoing", (req, res) => {
  outgoing = { ...outgoing, ...(req.body || {}) };
  res.json({ success: true, message: "Outgoing updated", data: outgoing });
});

app.get("/api/email/config/incoming", (req, res) =>
  res.json({ success: true, data: incoming })
);
app.put("/api/email/config/incoming", (req, res) => {
  incoming = { ...incoming, ...(req.body || {}) };
  res.json({ success: true, message: "Incoming updated", data: incoming });
});

module.exports = app;
