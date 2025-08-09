const express = require("express");
const app = express.Router();

let systemConfiguration = {
  emailNotification: true,
  smsNotification: true,
  captchaValidations: true,
  databaseNotifications: true,
  slackNotifications: true,
  cookieActivation: true,
  automaticTicketAssign: false,
  groupBaseTicketAssign: false,
  ticketSecurity: false,
  userRegistration: false,
  userNotifications: true,
  emailVerifications: true,
  agentChatModule: true,
  appDebug: true,
  termsConditionsValidation: true,
  automatedBestAgentIdentification: true,
  siteMaintenanceMode: true,
  forceSSL: true,
};

app.get("/api/admin/system-configuration", (req, res) => {
  return res.json({ success: true, data: systemConfiguration });
});

app.put("/api/admin/system-configuration", (req, res) => {
  const updates = req.body || {};
  systemConfiguration = { ...systemConfiguration, ...updates };
  return res.json({
    success: true,
    message: "System configuration updated",
    data: systemConfiguration,
  });
});

module.exports = app;
