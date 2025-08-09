const express = require("express");
const app = express.Router();

let settings = {
  toneOfVoice: "Friendly",
  chatEnabled: false,
  emailEnabled: true,
  emailAddresses: ["tiger.s.ai.2024@gmail.com"],
  signature: "This response was created by AI",
  handover: {
    tellCustomers: true,
    topics: ["refunds", "payments"],
  },
  tagging: { enabled: false, tag: null },
};

let guidance = [
  {
    id: 1,
    category: "Order Management",
    title: "When a customer asks for a return or exchange",
    enabled: true,
    updatedAt: "2025-01-19",
  },
  {
    id: 2,
    category: "Order Status",
    title: "When a customer asks for a return or exchange",
    enabled: true,
    updatedAt: "2025-01-19",
  },
];
let nextGuidanceId = 3;

let actions = []; // rule builder structures

// Settings
app.get("/api/agent/settings", (req, res) => {
  return res.json({ success: true, data: settings });
});
app.put("/api/agent/settings", (req, res) => {
  const updates = req.body || {};
  settings = {
    ...settings,
    ...updates,
    handover: { ...settings.handover, ...(updates.handover || {}) },
    tagging: { ...settings.tagging, ...(updates.tagging || {}) },
  };
  return res.json({
    success: true,
    message: "Settings updated",
    data: settings,
  });
});

// Guidance CRUD
app.get("/api/agent/guidance", (req, res) => {
  return res.json({ success: true, data: guidance });
});
app.post("/api/agent/guidance", (req, res) => {
  const { category, title, enabled = true } = req.body || {};
  if (!title)
    return res
      .status(400)
      .json({ success: false, message: "title is required" });
  const item = {
    id: nextGuidanceId++,
    category: category || "General",
    title,
    enabled: !!enabled,
    updatedAt: new Date().toISOString().slice(0, 10),
  };
  guidance.push(item);
  return res
    .status(201)
    .json({ success: true, message: "Guidance created", data: item });
});
app.put("/api/agent/guidance/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = guidance.find((g) => g.id === id);
  if (!item)
    return res
      .status(404)
      .json({ success: false, message: "Guidance not found" });
  const { category, title, enabled } = req.body || {};
  if (category !== undefined) item.category = category;
  if (title !== undefined) item.title = title;
  if (enabled !== undefined) item.enabled = !!enabled;
  item.updatedAt = new Date().toISOString().slice(0, 10);
  return res.json({ success: true, message: "Guidance updated", data: item });
});
app.delete("/api/agent/guidance/:id", (req, res) => {
  const id = Number(req.params.id);
  const exists = guidance.some((g) => g.id === id);
  if (!exists)
    return res
      .status(404)
      .json({ success: false, message: "Guidance not found" });
  guidance = guidance.filter((g) => g.id !== id);
  return res.json({ success: true, message: "Guidance deleted" });
});

// Actions CRUD
app.get("/api/agent/actions", (req, res) => {
  return res.json({ success: true, data: actions });
});
app.post("/api/agent/actions", (req, res) => {
  const { rule } = req.body || {};
  if (!rule)
    return res
      .status(400)
      .json({ success: false, message: "rule is required" });
  const item = { id: Date.now(), rule };
  actions.push(item);
  return res
    .status(201)
    .json({ success: true, message: "Action rule created", data: item });
});
app.put("/api/agent/actions/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = actions.find((a) => a.id === id);
  if (!item)
    return res
      .status(404)
      .json({ success: false, message: "Action rule not found" });
  const { rule } = req.body || {};
  if (rule !== undefined) item.rule = rule;
  return res.json({
    success: true,
    message: "Action rule updated",
    data: item,
  });
});
app.delete("/api/agent/actions/:id", (req, res) => {
  const id = Number(req.params.id);
  const exists = actions.some((a) => a.id === id);
  if (!exists)
    return res
      .status(404)
      .json({ success: false, message: "Action rule not found" });
  actions = actions.filter((a) => a.id !== id);
  return res.json({ success: true, message: "Action rule deleted" });
});

module.exports = app;
