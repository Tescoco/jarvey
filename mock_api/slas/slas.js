const express = require("express");
const app = express.Router();

let nextSlaId = 3;
let slas = [
  {
    id: 1,
    name: "Standard SLA",
    targetFirstResponseMins: 60,
    targetResolutionMins: 1440,
    active: true,
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "VIP SLA",
    targetFirstResponseMins: 15,
    targetResolutionMins: 240,
    active: false,
    updatedAt: new Date().toISOString(),
  },
];

let templates = [
  {
    id: 101,
    name: "E-commerce Default",
    description: "Baseline ecommerce timings",
    data: { firstResponse: 60, resolution: 1440 },
  },
  {
    id: 102,
    name: "Priority Support",
    description: "Aggressive timings",
    data: { firstResponse: 15, resolution: 240 },
  },
];

// LIST
app.get("/api/slas", (req, res) => {
  res.json({ success: true, data: slas });
});

// CREATE
app.post("/api/slas", (req, res) => {
  const {
    name,
    targetFirstResponseMins = 60,
    targetResolutionMins = 1440,
    active = false,
  } = req.body || {};
  if (!name)
    return res
      .status(400)
      .json({ success: false, message: "name is required" });
  const id = nextSlaId++;
  const now = new Date().toISOString();
  const item = {
    id,
    name,
    targetFirstResponseMins,
    targetResolutionMins,
    active,
    updatedAt: now,
  };
  slas.push(item);
  res.json({ success: true, message: "SLA created", data: item });
});

// UPDATE
app.put("/api/slas/:id", (req, res) => {
  const id = Number(req.params.id);
  const idx = slas.findIndex((s) => s.id === id);
  if (idx < 0)
    return res.status(404).json({ success: false, message: "Not found" });
  slas[idx] = {
    ...slas[idx],
    ...req.body,
    updatedAt: new Date().toISOString(),
  };
  res.json({ success: true, message: "SLA updated", data: slas[idx] });
});

// DELETE
app.delete("/api/slas/:id", (req, res) => {
  const id = Number(req.params.id);
  slas = slas.filter((s) => s.id !== id);
  res.json({ success: true, message: "SLA deleted" });
});

// TEMPLATES
app.get("/api/slas/templates", (req, res) => {
  res.json({ success: true, data: templates });
});

app.post("/api/slas/templates", (req, res) => {
  const { name, description = "", data = {} } = req.body || {};
  if (!name)
    return res
      .status(400)
      .json({ success: false, message: "name is required" });
  const id = Math.max(templates.map((t) => t.id)) + 1;
  const item = { id, name, description, data };
  templates.push(item);
  res.json({ success: true, message: "Template created", data: item });
});

app.put("/api/slas/templates/:id", (req, res) => {
  const id = Number(req.params.id);
  const idx = templates.findIndex((t) => t.id === id);
  if (idx < 0)
    return res.status(404).json({ success: false, message: "Not found" });
  templates[idx] = { ...templates[idx], ...req.body };
  res.json({
    success: true,
    message: "Template updated",
    data: templates[idx],
  });
});

app.delete("/api/slas/templates/:id", (req, res) => {
  const id = Number(req.params.id);
  templates = templates.filter((t) => t.id !== id);
  res.json({ success: true, message: "Template deleted" });
});

module.exports = app;
