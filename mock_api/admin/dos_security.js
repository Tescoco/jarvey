const express = require("express");
const app = express.Router();

let dosSettings = {
  enabled: false,
  attemptsThreshold: 2,
  windowSeconds: 2,
  action: "captcha", // captcha | block_ip
};

app.get("/api/admin/security/dos", (req, res) => {
  return res.json({ success: true, data: dosSettings });
});

app.put("/api/admin/security/dos", (req, res) => {
  const { enabled, attemptsThreshold, windowSeconds, action } = req.body || {};
  dosSettings = {
    enabled: enabled ?? dosSettings.enabled,
    attemptsThreshold: attemptsThreshold ?? dosSettings.attemptsThreshold,
    windowSeconds: windowSeconds ?? dosSettings.windowSeconds,
    action: action ?? dosSettings.action,
  };
  return res.json({
    success: true,
    message: "DoS settings updated",
    data: dosSettings,
  });
});

module.exports = app;
