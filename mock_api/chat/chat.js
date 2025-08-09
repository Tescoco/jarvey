const express = require("express");
const app = express.Router();

let chatConfig = {
  store: "Store 1",
  chatTitle: "Chat Title",
  defaultLanguage: "English",
  platformType: "E-commerce Platform", // or "Any other website"
  connectedStore: "Stores 1",
  connectType: "Allow Live chat messages", // or "Allow only offline capture messages"
  mainColor: "#7856FF",
  conversionColor: "#FE4234",
  launcherType: "Icon", // "Icon" | "Icon and Label"
  launcherLabel: "Chat with us",
  welcomeMessage: "We will replay in a few moments.",
  quickButtons: [
    "Track order",
    "Report Issue",
    "Cancel Order",
    "Product Questions",
    "Other",
  ],
  // Settings page extras
  welcomeMessageDuringHours: "We will replay in a few moments.",
  welcomeMessageOutsideHours:
    "We are currently offline. Leave us a message and we'll get back to you.",
  backgroundStyle: "Gradient",
  font: "Inter",
  keepMainColorOutside: false,
  showBotLabel: false,
};

// VIEW full config
app.get("/api/chat/config", (req, res) => {
  return res.json({ success: true, data: chatConfig });
});

// UPDATE full or partial config (used across steps)
app.put("/api/chat/config", (req, res) => {
  const updates = req.body || {};
  chatConfig = { ...chatConfig, ...updates };
  return res.json({
    success: true,
    message: "Chat config updated",
    data: chatConfig,
  });
});

// Optionally expose per-step routes
app.get("/api/chat/basics", (req, res) => {
  const {
    chatTitle,
    defaultLanguage,
    platformType,
    connectedStore,
    connectType,
  } = chatConfig;
  return res.json({
    success: true,
    data: {
      chatTitle,
      defaultLanguage,
      platformType,
      connectedStore,
      connectType,
    },
  });
});
app.put("/api/chat/basics", (req, res) => {
  const {
    chatTitle,
    defaultLanguage,
    platformType,
    connectedStore,
    connectType,
  } = req.body || {};
  chatConfig = {
    ...chatConfig,
    ...(chatTitle !== undefined ? { chatTitle } : {}),
    ...(defaultLanguage !== undefined ? { defaultLanguage } : {}),
    ...(platformType !== undefined ? { platformType } : {}),
    ...(connectedStore !== undefined ? { connectedStore } : {}),
    ...(connectType !== undefined ? { connectType } : {}),
  };
  return res.json({ success: true, message: "Basics saved", data: chatConfig });
});

app.get("/api/chat/customize", (req, res) => {
  const {
    mainColor,
    conversionColor,
    launcherType,
    launcherLabel,
    welcomeMessage,
  } = chatConfig;
  return res.json({
    success: true,
    data: {
      mainColor,
      conversionColor,
      launcherType,
      launcherLabel,
      welcomeMessage,
    },
  });
});
app.put("/api/chat/customize", (req, res) => {
  const {
    mainColor,
    conversionColor,
    launcherType,
    launcherLabel,
    welcomeMessage,
  } = req.body || {};
  chatConfig = {
    ...chatConfig,
    ...(mainColor !== undefined ? { mainColor } : {}),
    ...(conversionColor !== undefined ? { conversionColor } : {}),
    ...(launcherType !== undefined ? { launcherType } : {}),
    ...(launcherLabel !== undefined ? { launcherLabel } : {}),
    ...(welcomeMessage !== undefined ? { welcomeMessage } : {}),
  };
  return res.json({
    success: true,
    message: "Customize saved",
    data: chatConfig,
  });
});

// Placeholder endpoints for automate and install steps
app.get("/api/chat/automate", (req, res) => {
  return res.json({ success: true, data: { enabled: false, flows: [] } });
});
app.put("/api/chat/automate", (req, res) => {
  const { enabled, flows } = req.body || {};
  return res.json({
    success: true,
    message: "Automate saved",
    data: { enabled: !!enabled, flows: Array.isArray(flows) ? flows : [] },
  });
});

app.get("/api/chat/install", (req, res) => {
  return res.json({
    success: true,
    data: {
      snippet: '<script src="/mock-chat.js"></script>',
      status: "not_installed",
    },
  });
});
app.post("/api/chat/install", (req, res) => {
  return res.json({
    success: true,
    message: "Install triggered",
    data: { status: "installed" },
  });
});

module.exports = app;
