const express = require("express");
const app = express.Router();

// In-memory state
let aiConfig = {
  openAiApiKey: "sk-xxxxxxxxxxxxxxxxxxxx",
  status: "Active", // Active | Inactive
};

// VIEW
app.get("/api/admin/ai-configuration", (req, res) => {
  return res.json({ success: true, data: aiConfig });
});

// UPDATE
app.put("/api/admin/ai-configuration", (req, res) => {
  const { openAiApiKey, status } = req.body || {};
  aiConfig = {
    openAiApiKey: openAiApiKey ?? aiConfig.openAiApiKey,
    status: status ?? aiConfig.status,
  };
  return res.json({
    success: true,
    message: "AI configuration updated",
    data: aiConfig,
  });
});

module.exports = app;
