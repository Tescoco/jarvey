const express = require("express");
const app = express.Router();

let profile = {
  name: "Admin User",
  email: "admin@jarvey.ai",
  bio: "Administrator of the system.",
  avatarUrl: "",
  timezone: "UTC",
  dateFormat: "YYYY-MM-DD",
  timeFormat: "24h",
  macros: {
    prediction: true,
    suggestions: true,
    showSearchByDefault: false,
  },
  callForwarding: {
    enabled: true,
    phoneNumber: "+1 555 100 2000",
    forwardWhenOffline: true,
  },
};

app.get("/api/admin/profile", (req, res) => {
  return res.json({ success: true, data: profile });
});

app.put("/api/admin/profile", (req, res) => {
  const updates = req.body || {};
  profile = {
    ...profile,
    ...updates,
    macros: { ...profile.macros, ...(updates.macros || {}) },
    callForwarding: {
      ...profile.callForwarding,
      ...(updates.callForwarding || {}),
    },
  };
  return res.json({ success: true, message: "Profile updated", data: profile });
});

app.post("/api/admin/profile/avatar", (req, res) => {
  const { url } = req.body || {};
  if (!url)
    return res.status(400).json({ success: false, message: "url is required" });
  profile.avatarUrl = url;
  return res.json({
    success: true,
    message: "Avatar updated",
    data: { avatarUrl: profile.avatarUrl },
  });
});

module.exports = app;
