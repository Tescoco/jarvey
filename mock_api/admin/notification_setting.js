const express = require("express");
const app = express.Router();

let notificationSettings = {
  notify: [
    {
      event: "There is a New Ticket/Conversation",
      channels: { email: true, sms: false, browser: true, slack: false },
    },
    {
      event: "There is a New Ticket/Conversation",
      channels: { email: false, sms: false, browser: false, slack: false },
    },
  ],
  agent: [
    {
      event: "Assign a Ticket To Other Agents",
      channels: { email: true, sms: false, browser: false, slack: false },
    },
    {
      event: "Replied To On Of My Conversations",
      channels: { email: false, sms: true, browser: true, slack: false },
    },
  ],
  customer: [
    {
      event: "Replied to ON of my converison",
      channels: { email: true, sms: false, browser: true, slack: false },
    },
    {
      event: "Start A New Chat (Message With Me)",
      channels: { email: true, sms: false, browser: false, slack: false },
    },
    {
      event: "Replied To a Agent Conversations",
      channels: { email: false, sms: true, browser: true, slack: true },
    },
  ],
};

app.get("/api/admin/notification-settings", (req, res) => {
  return res.json({ success: true, data: notificationSettings });
});

app.put("/api/admin/notification-settings", (req, res) => {
  const updates = req.body || {};
  notificationSettings = {
    ...notificationSettings,
    ...updates,
  };
  return res.json({
    success: true,
    message: "Notification settings updated",
    data: notificationSettings,
  });
});

module.exports = app;
