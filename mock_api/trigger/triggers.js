const express = require("express");
const app = express.Router();

let nextTriggerId = 4;
let triggers = [
  {
    id: 1,
    name: "Auto-assign new tickets",
    active: true,
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Escalate high-priority",
    active: true,
    updatedAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Close resolved after 7 days",
    active: false,
    updatedAt: new Date().toISOString(),
  },
];

let triggerDetails = {
  1: {
    id: 1,
    name: "Auto-assign new tickets",
    active: true,
    conditions: [{ field: "status", op: "equals", value: "new" }],
    actions: [{ type: "assign", to: "round_robin" }],
  },
  2: {
    id: 2,
    name: "Escalate high-priority",
    active: true,
    conditions: [{ field: "priority", op: "equals", value: "high" }],
    actions: [{ type: "notify", channel: "email", to: "team_leads" }],
  },
  3: {
    id: 3,
    name: "Close resolved after 7 days",
    active: false,
    conditions: [
      { field: "status", op: "equals", value: "resolved" },
      { field: "age_days", op: ">=", value: 7 },
    ],
    actions: [{ type: "close_ticket" }],
  },
};

// LIST
app.get("/api/triggers", (req, res) => {
  res.json({ success: true, data: triggers });
});

// CREATE
app.post("/api/triggers", (req, res) => {
  const {
    name = "New Trigger",
    active = false,
    conditions = [],
    actions = [],
  } = req.body || {};
  const id = nextTriggerId++;
  const now = new Date().toISOString();
  const base = { id, name, active, updatedAt: now };
  triggers.unshift(base);
  triggerDetails[id] = { id, name, active, conditions, actions };
  res.json({
    success: true,
    message: "Trigger created",
    data: triggerDetails[id],
  });
});

// DETAIL
app.get("/api/triggers/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = triggerDetails[id];
  if (!item)
    return res.status(404).json({ success: false, message: "Not found" });
  res.json({ success: true, data: item });
});

// UPDATE
app.put("/api/triggers/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = triggerDetails[id];
  if (!item)
    return res.status(404).json({ success: false, message: "Not found" });
  const updates = req.body || {};
  triggerDetails[id] = { ...item, ...updates };
  const idx = triggers.findIndex((t) => t.id === id);
  if (idx >= 0)
    triggers[idx] = {
      ...triggers[idx],
      name: triggerDetails[id].name,
      active: triggerDetails[id].active,
      updatedAt: new Date().toISOString(),
    };
  res.json({
    success: true,
    message: "Trigger updated",
    data: triggerDetails[id],
  });
});

// DELETE
app.delete("/api/triggers/:id", (req, res) => {
  const id = Number(req.params.id);
  triggers = triggers.filter((t) => t.id !== id);
  delete triggerDetails[id];
  res.json({ success: true, message: "Trigger deleted" });
});

// TEMPLATES
let templates = [
  {
    id: 101,
    name: "Auto-assign",
    conditions: [{ field: "status", op: "equals", value: "new" }],
    actions: [{ type: "assign", to: "round_robin" }],
  },
  {
    id: 102,
    name: "Escalation",
    conditions: [{ field: "priority", op: "equals", value: "high" }],
    actions: [{ type: "notify", channel: "email", to: "team_leads" }],
  },
];
app.get("/api/triggers/templates", (req, res) =>
  res.json({ success: true, data: templates })
);

// SETTINGS (TriggerSetting.jsx)
let triggerSettings = { enabled: true, maxActionsPerMinute: 60 };
app.get("/api/triggers/settings", (req, res) =>
  res.json({ success: true, data: triggerSettings })
);
app.put("/api/triggers/settings", (req, res) => {
  triggerSettings = { ...triggerSettings, ...(req.body || {}) };
  res.json({
    success: true,
    message: "Settings updated",
    data: triggerSettings,
  });
});

module.exports = app;
