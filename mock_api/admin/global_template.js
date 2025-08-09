const express = require("express");
const app = express.Router();

let globalTemplate = {
  sendFromEmail: "no-reply@jarvey.ai",
  colors: {
    headerColor: "#3B82F6",
    accentColor: "#7856FF",
  },
  shortcodes: [
    { name: "Username", value: "{{username}}" },
    { name: "Mail Body", value: "{{message}}" },
    { name: "Site Name", value: "{{site_name}}" },
    { name: "Site Logo", value: "{{logo}}" },
  ],
};

app.get("/api/admin/global-template", (req, res) => {
  return res.json({ success: true, data: globalTemplate });
});

app.put("/api/admin/global-template", (req, res) => {
  const updates = req.body || {};
  globalTemplate = {
    ...globalTemplate,
    ...updates,
    colors: { ...globalTemplate.colors, ...(updates.colors || {}) },
    shortcodes: Array.isArray(updates.shortcodes)
      ? updates.shortcodes
      : globalTemplate.shortcodes,
  };
  return res.json({
    success: true,
    message: "Global template updated",
    data: globalTemplate,
  });
});

module.exports = app;
