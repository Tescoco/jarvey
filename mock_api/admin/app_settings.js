const express = require("express");
const app = express.Router();

let appSettings = {
  basic: {
    siteName: "Jarvey AI",
    phone: "+1 555 123 4567",
    email: "admin@jarvey.ai",
    address: "123 AI Street, Silicon City",
    copyrightText: "© 2025 Jarvey AI",
    paginationNumber: 20,
    timeZone: "UTC",
    cookieText: "We use cookies to improve your experience",
    maintenanceTitle: "Maintenance Mode",
    maintenanceDescription: "We'll be back shortly",
  },
  agent: {
    avgResponseTimeMinutes: 5,
    minResponsesTickets: 50,
  },
  theme: {
    primaryColor: "#7856FF",
    secondaryColor: "#111111",
    textPrimaryColor: "#0A0D14",
    textSecondaryColor: "#525866",
  },
  storage: {
    provider: "local", // local | s3
    maxFilesPerUpload: 5,
    maxFileSizeKB: 2048,
    supportedFileTypes: ["png", "jpg", "jpeg", "pdf"],
  },
  pusher: {
    appId: "app-id",
    key: "app-key",
    secret: "app-secret",
    cluster: "mt1",
    channel: "events",
    event: "message",
  },
  recaptcha: {
    key: "recaptcha-public-key",
    secretKey: "recaptcha-secret-key",
    status: "Inactive", // Active | Inactive
  },
  oauth: {
    google: {
      clientId: "",
      clientSecret: "",
      status: "Inactive",
      callbackUrl: "",
    },
    facebook: {
      clientId: "",
      clientSecret: "",
      status: "Inactive",
      callbackUrl: "",
    },
    azure: {
      clientId: "",
      clientSecret: "",
      status: "Inactive",
      callbackUrl: "",
    },
  },
  logos: {
    siteLogoUrl: "",
    logoIconUrl: "",
    frontendLogoUrl: "",
    siteFaviconUrl: "",
  },
};

app.get("/api/admin/app-settings", (req, res) => {
  return res.json({ success: true, data: appSettings });
});

app.put("/api/admin/app-settings", (req, res) => {
  const updates = req.body || {};
  appSettings = {
    ...appSettings,
    ...updates,
    basic: { ...appSettings.basic, ...(updates.basic || {}) },
    agent: { ...appSettings.agent, ...(updates.agent || {}) },
    theme: { ...appSettings.theme, ...(updates.theme || {}) },
    storage: { ...appSettings.storage, ...(updates.storage || {}) },
    pusher: { ...appSettings.pusher, ...(updates.pusher || {}) },
    recaptcha: { ...appSettings.recaptcha, ...(updates.recaptcha || {}) },
    oauth: {
      ...appSettings.oauth,
      ...(updates.oauth || {}),
      google: { ...appSettings.oauth.google, ...(updates.oauth?.google || {}) },
      facebook: {
        ...appSettings.oauth.facebook,
        ...(updates.oauth?.facebook || {}),
      },
      azure: { ...appSettings.oauth.azure, ...(updates.oauth?.azure || {}) },
    },
    logos: { ...appSettings.logos, ...(updates.logos || {}) },
  };
  return res.json({
    success: true,
    message: "App settings updated",
    data: appSettings,
  });
});

// Logo upload simulation
app.post("/api/admin/app-settings/logo/:type", (req, res) => {
  const { type } = req.params; // siteLogoUrl | logoIconUrl | frontendLogoUrl | siteFaviconUrl
  const { url } = req.body || {};
  if (!url)
    return res.status(400).json({ success: false, message: "url is required" });
  if (!appSettings.logos.hasOwnProperty(type)) {
    return res
      .status(400)
      .json({ success: false, message: "invalid logo type" });
  }
  appSettings.logos[type] = url;
  return res.json({
    success: true,
    message: "Logo updated",
    data: appSettings.logos,
  });
});

app.delete("/api/admin/app-settings/logo/:type", (req, res) => {
  const { type } = req.params;
  if (!appSettings.logos.hasOwnProperty(type)) {
    return res
      .status(400)
      .json({ success: false, message: "invalid logo type" });
  }
  appSettings.logos[type] = "";
  return res.json({
    success: true,
    message: "Logo removed",
    data: appSettings.logos,
  });
});

module.exports = app;
