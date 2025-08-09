const express = require("express");
const app = express.Router();

let personalize = {
  toneOfVoice: "Friendly",
  signature: "This response was created by AI",
  channels: { email: true, chat: false },
  emailAddresses: ["tiger.s.ai.2024@gmail.com"],
};

let knowledge = {
  helpCenter: "jarvey",
  urls: [],
  documents: [], // filenames or urls
};

// Personalize
app.get("/api/agent/setup/personalize", (req, res) => {
  return res.json({ success: true, data: personalize });
});
app.put("/api/agent/setup/personalize", (req, res) => {
  const { toneOfVoice, signature, channels, emailAddresses } = req.body || {};
  personalize = {
    ...personalize,
    ...(toneOfVoice !== undefined ? { toneOfVoice } : {}),
    ...(signature !== undefined ? { signature } : {}),
    ...(channels !== undefined ? { channels } : {}),
    ...(emailAddresses !== undefined ? { emailAddresses } : {}),
  };
  return res.json({
    success: true,
    message: "Personalize updated",
    data: personalize,
  });
});

// Knowledge
app.get("/api/agent/setup/knowledge", (req, res) => {
  return res.json({ success: true, data: knowledge });
});
app.put("/api/agent/setup/knowledge", (req, res) => {
  const { helpCenter, urls, documents } = req.body || {};
  knowledge = {
    ...knowledge,
    ...(helpCenter !== undefined ? { helpCenter } : {}),
    ...(Array.isArray(urls) ? { urls } : {}),
    ...(Array.isArray(documents) ? { documents } : {}),
  };
  return res.json({
    success: true,
    message: "Knowledge updated",
    data: knowledge,
  });
});

module.exports = app;
