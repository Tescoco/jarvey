const express = require("express");
const app = express.Router();

let helpCenter = {
  id: 1,
  basics: {
    name: "Help Center",
    domain: "help.example.com",
    defaultLanguage: "English",
  },
  branding: {
    logoUrl: "",
    primaryColor: "#7856FF",
    secondaryColor: "#111111",
  },
  articles: [
    {
      id: 101,
      title: "Getting Started",
      category: "General",
      language: "English",
      published: true,
    },
  ],
  automated: { enabled: false },
  settings: {
    contact: { email: "support@example.com", formEnabled: true },
    appearance: { theme: "light", font: "Inter" },
    preferences: { searchEnabled: true, ratingsEnabled: true },
    customization: { css: "", js: "" },
    publishAndTrack: { status: "draft", analytics: { views: 0, likes: 0 } },
    automate: { enabled: false, flows: [] },
  },
};

// Creation steps
app.get("/api/help-center/basics", (req, res) =>
  res.json({ success: true, data: helpCenter.basics })
);
app.put("/api/help-center/basics", (req, res) => {
  helpCenter.basics = { ...helpCenter.basics, ...(req.body || {}) };
  return res.json({
    success: true,
    message: "Basics updated",
    data: helpCenter.basics,
  });
});
app.get("/api/help-center/branding", (req, res) =>
  res.json({ success: true, data: helpCenter.branding })
);
app.put("/api/help-center/branding", (req, res) => {
  helpCenter.branding = { ...helpCenter.branding, ...(req.body || {}) };
  return res.json({
    success: true,
    message: "Branding updated",
    data: helpCenter.branding,
  });
});
app.get("/api/help-center/articles", (req, res) =>
  res.json({ success: true, data: helpCenter.articles })
);
app.post("/api/help-center/articles", (req, res) => {
  const { title, category, language, published } = req.body || {};
  if (!title)
    return res
      .status(400)
      .json({ success: false, message: "title is required" });
  const id = Math.floor(Math.random() * 1e6);
  const article = {
    id,
    title,
    category: category || null,
    language: language || "English",
    published: !!published,
  };
  helpCenter.articles.push(article);
  return res
    .status(201)
    .json({ success: true, message: "Article added", data: article });
});
app.put("/api/help-center/articles/:id", (req, res) => {
  const id = Number(req.params.id);
  const a = helpCenter.articles.find((x) => x.id === id);
  if (!a)
    return res
      .status(404)
      .json({ success: false, message: "Article not found" });
  Object.assign(a, req.body || {});
  return res.json({ success: true, message: "Article updated", data: a });
});
app.delete("/api/help-center/articles/:id", (req, res) => {
  const id = Number(req.params.id);
  const exists = helpCenter.articles.some((x) => x.id === id);
  if (!exists)
    return res
      .status(404)
      .json({ success: false, message: "Article not found" });
  helpCenter.articles = helpCenter.articles.filter((x) => x.id !== id);
  return res.json({ success: true, message: "Article deleted" });
});
app.get("/api/help-center/automated", (req, res) =>
  res.json({ success: true, data: helpCenter.automated })
);
app.put("/api/help-center/automated", (req, res) => {
  helpCenter.automated = { ...helpCenter.automated, ...(req.body || {}) };
  return res.json({
    success: true,
    message: "Automated updated",
    data: helpCenter.automated,
  });
});

// Settings tabs
app.get("/api/help-center/settings/contact", (req, res) =>
  res.json({ success: true, data: helpCenter.settings.contact })
);
app.put("/api/help-center/settings/contact", (req, res) => {
  helpCenter.settings.contact = {
    ...helpCenter.settings.contact,
    ...(req.body || {}),
  };
  return res.json({
    success: true,
    message: "Contact updated",
    data: helpCenter.settings.contact,
  });
});
app.get("/api/help-center/settings/appearance", (req, res) =>
  res.json({ success: true, data: helpCenter.settings.appearance })
);
app.put("/api/help-center/settings/appearance", (req, res) => {
  helpCenter.settings.appearance = {
    ...helpCenter.settings.appearance,
    ...(req.body || {}),
  };
  return res.json({
    success: true,
    message: "Appearance updated",
    data: helpCenter.settings.appearance,
  });
});
app.get("/api/help-center/settings/preferences", (req, res) =>
  res.json({ success: true, data: helpCenter.settings.preferences })
);
app.put("/api/help-center/settings/preferences", (req, res) => {
  helpCenter.settings.preferences = {
    ...helpCenter.settings.preferences,
    ...(req.body || {}),
  };
  return res.json({
    success: true,
    message: "Preferences updated",
    data: helpCenter.settings.preferences,
  });
});
app.get("/api/help-center/settings/customization", (req, res) =>
  res.json({ success: true, data: helpCenter.settings.customization })
);
app.put("/api/help-center/settings/customization", (req, res) => {
  helpCenter.settings.customization = {
    ...helpCenter.settings.customization,
    ...(req.body || {}),
  };
  return res.json({
    success: true,
    message: "Customization updated",
    data: helpCenter.settings.customization,
  });
});
app.get("/api/help-center/settings/publish-track", (req, res) =>
  res.json({ success: true, data: helpCenter.settings.publishAndTrack })
);
app.put("/api/help-center/settings/publish-track", (req, res) => {
  helpCenter.settings.publishAndTrack = {
    ...helpCenter.settings.publishAndTrack,
    ...(req.body || {}),
  };
  return res.json({
    success: true,
    message: "Publish & Track updated",
    data: helpCenter.settings.publishAndTrack,
  });
});
app.get("/api/help-center/settings/automate", (req, res) =>
  res.json({ success: true, data: helpCenter.settings.automate })
);
app.put("/api/help-center/settings/automate", (req, res) => {
  const { enabled, flows } = req.body || {};
  helpCenter.settings.automate = {
    enabled: enabled ?? helpCenter.settings.automate.enabled,
    flows: Array.isArray(flows) ? flows : helpCenter.settings.automate.flows,
  };
  return res.json({
    success: true,
    message: "Automate updated",
    data: helpCenter.settings.automate,
  });
});

module.exports = app;
