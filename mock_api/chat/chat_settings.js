const express = require("express");
const app = express.Router();

// Underlying settings state
let settings = {
  chatTitle: "Chat Title",
  defaultLanguage: "English",
  mainColor: "#7856FF",
  conversionColor: "#FE4234",
  launcherType: "Icon",
  launcherLabel: "Chat with us",
  welcomeMessage: "We will replay in a few moments.",
  welcomeMessageDuringHours: "We will replay in a few moments.",
  welcomeMessageOutsideHours:
    "We are currently offline. Leave us a message and we'll get back to you.",
  backgroundStyle: "Gradient",
  font: "Inter",
  keepMainColorOutside: false,
  showBotLabel: false,
  quickButtons: [
    "Track order",
    "Report Issue",
    "Cancel Order",
    "Product Questions",
    "Other",
  ],
  // Preferences-like controls
  liveChatMode: "offline", // 'agents_available' | 'business_hours' | 'offline'
  requireAutomatedInteraction: true,
  visibility: {
    hideChat: false,
    hideOutsideBusiness: false,
    hideOnMobile: false,
  },
  emailCapture: { enabled: false, required: false },
  autoReply: { enabled: false, policy: "dynamic" }, // 'dynamic' | 'minutes' | 'hours'
  privacyDisclaimer: {
    enabled: false,
    text: "By using this chat, you consent to our Privacy Policy.",
  },
  connectEmail: { sender: "support@jarvey.ai", sendTranscripts: true },
  // Languages tab
  languages: [{ code: "en", name: "English", default: true }],
  // Campaigns tab
  campaigns: [],
  // Installation tab
  installation: {
    snippet: '<script src="/mock-chat.js"></script>',
    status: "not_installed",
  },
  // Automate tab
  automate: { enabled: false, flows: [] },
};

// Appearances
app.get("/api/chat/settings/appearances", (req, res) => {
  const {
    chatTitle,
    defaultLanguage,
    mainColor,
    conversionColor,
    launcherType,
    launcherLabel,
    welcomeMessage,
    welcomeMessageDuringHours,
    welcomeMessageOutsideHours,
    backgroundStyle,
    font,
    keepMainColorOutside,
    showBotLabel,
    quickButtons,
  } = settings;
  return res.json({
    success: true,
    data: {
      chatTitle,
      defaultLanguage,
      mainColor,
      conversionColor,
      launcherType,
      launcherLabel,
      welcomeMessage,
      welcomeMessageDuringHours,
      welcomeMessageOutsideHours,
      backgroundStyle,
      font,
      keepMainColorOutside,
      showBotLabel,
      quickButtons,
    },
  });
});
app.put("/api/chat/settings/appearances", (req, res) => {
  const updates = req.body || {};
  settings = { ...settings, ...updates };
  return res.json({
    success: true,
    message: "Appearances updated",
    data: settings,
  });
});

// Preferences
app.get("/api/chat/settings/preferences", (req, res) => {
  const {
    liveChatMode,
    requireAutomatedInteraction,
    visibility,
    emailCapture,
    autoReply,
    privacyDisclaimer,
    connectEmail,
  } = settings;
  return res.json({
    success: true,
    data: {
      liveChatMode,
      requireAutomatedInteraction,
      visibility,
      emailCapture,
      autoReply,
      privacyDisclaimer,
      connectEmail,
    },
  });
});
app.put("/api/chat/settings/preferences", (req, res) => {
  const updates = req.body || {};
  settings = {
    ...settings,
    ...updates,
    visibility: { ...settings.visibility, ...(updates.visibility || {}) },
    emailCapture: { ...settings.emailCapture, ...(updates.emailCapture || {}) },
    autoReply: { ...settings.autoReply, ...(updates.autoReply || {}) },
    privacyDisclaimer: {
      ...settings.privacyDisclaimer,
      ...(updates.privacyDisclaimer || {}),
    },
    connectEmail: { ...settings.connectEmail, ...(updates.connectEmail || {}) },
  };
  return res.json({
    success: true,
    message: "Preferences updated",
    data: settings,
  });
});

// Languages
app.get("/api/chat/settings/languages", (req, res) => {
  return res.json({ success: true, data: settings.languages });
});
app.post("/api/chat/settings/languages", (req, res) => {
  const { code, name, isDefault } = req.body || {};
  if (!code || !name)
    return res
      .status(400)
      .json({ success: false, message: "code and name are required" });
  if (settings.languages.some((l) => l.code === code))
    return res
      .status(409)
      .json({ success: false, message: "language already exists" });
  const lang = { code, name, default: !!isDefault };
  if (lang.default)
    settings.languages = settings.languages.map((l) => ({
      ...l,
      default: false,
    }));
  settings.languages.push(lang);
  return res
    .status(201)
    .json({ success: true, message: "Language added", data: lang });
});
app.put("/api/chat/settings/languages/:code", (req, res) => {
  const { code } = req.params;
  const lang = settings.languages.find((l) => l.code === code);
  if (!lang)
    return res
      .status(404)
      .json({ success: false, message: "language not found" });
  const { name, isDefault } = req.body || {};
  if (name !== undefined) lang.name = name;
  if (isDefault === true)
    settings.languages = settings.languages.map((l) => ({
      ...l,
      default: l.code === code,
    }));
  return res.json({ success: true, message: "Language updated", data: lang });
});
app.delete("/api/chat/settings/languages/:code", (req, res) => {
  const { code } = req.params;
  const exists = settings.languages.some((l) => l.code === code);
  if (!exists)
    return res
      .status(404)
      .json({ success: false, message: "language not found" });
  settings.languages = settings.languages.filter((l) => l.code !== code);
  return res.json({ success: true, message: "Language deleted" });
});

// Campaigns
app.get("/api/chat/settings/campaigns", (req, res) => {
  return res.json({ success: true, data: settings.campaigns });
});
app.post("/api/chat/settings/campaigns", (req, res) => {
  const { name, trigger, content } = req.body || {};
  if (!name)
    return res
      .status(400)
      .json({ success: false, message: "name is required" });
  const item = {
    id: Date.now(),
    name,
    trigger: trigger || null,
    content: content || {},
  };
  settings.campaigns.push(item);
  return res
    .status(201)
    .json({ success: true, message: "Campaign added", data: item });
});
app.delete("/api/chat/settings/campaigns/:id", (req, res) => {
  const id = Number(req.params.id);
  const exists = settings.campaigns.some((c) => c.id === id);
  if (!exists)
    return res
      .status(404)
      .json({ success: false, message: "campaign not found" });
  settings.campaigns = settings.campaigns.filter((c) => c.id !== id);
  return res.json({ success: true, message: "Campaign deleted" });
});

// Installation
app.get("/api/chat/settings/installation", (req, res) => {
  return res.json({ success: true, data: settings.installation });
});
app.post("/api/chat/settings/installation", (req, res) => {
  settings.installation.status = "installed";
  return res.json({
    success: true,
    message: "Installed",
    data: settings.installation,
  });
});

// Automate
app.get("/api/chat/settings/automate", (req, res) => {
  return res.json({ success: true, data: settings.automate });
});
app.put("/api/chat/settings/automate", (req, res) => {
  const { enabled, flows } = req.body || {};
  settings.automate = {
    enabled: enabled ?? settings.automate.enabled,
    flows: Array.isArray(flows) ? flows : settings.automate.flows,
  };
  return res.json({
    success: true,
    message: "Automate updated",
    data: settings.automate,
  });
});

module.exports = app;
