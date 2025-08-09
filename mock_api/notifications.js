const express = require("express");
const app = express.Router();

let nextNotifId = 4;
let notifications = [
  {
    id: 1,
    title: "Snooze expired",
    message: "Let’s send your first message!",
    description: "We’re here to help.",
    read: false,
  },
  {
    id: 2,
    title: "Snooze expired",
    message: "Let’s send your first message!",
    description: "We’re here to help.",
    read: false,
  },
  {
    id: 3,
    title: "Snooze expired",
    message: "Let’s send your first message!",
    description: "We’re here to help.",
    read: true,
  },
];

app.get("/api/notifications", (req, res) =>
  res.json({ success: true, data: notifications })
);

app.post("/api/notifications/mark-all-read", (req, res) => {
  notifications = notifications.map((n) => ({ ...n, read: true }));
  res.json({ success: true, message: "All marked as read" });
});

app.post("/api/notifications/:id/read", (req, res) => {
  const id = Number(req.params.id);
  const idx = notifications.findIndex((n) => n.id === id);
  if (idx < 0)
    return res.status(404).json({ success: false, message: "Not found" });
  notifications[idx].read = true;
  res.json({
    success: true,
    message: "Marked as read",
    data: notifications[idx],
  });
});

module.exports = app;
