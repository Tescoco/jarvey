const express = require("express");
const app = express.Router();

let nextScenarioId = 3;
let scenarios = [
  {
    id: 1,
    name: "Default Order Flow",
    status: "active",
    version: 1,
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Holiday Return Policy",
    status: "draft",
    version: 3,
    updatedAt: new Date().toISOString(),
  },
];

let scenarioDetails = {
  1: {
    id: 1,
    name: "Default Order Flow",
    status: "active",
    version: 1,
    graph: { nodes: [], edges: [] },
    settings: { entryPoint: "order_created", autoHandover: true },
    updatedAt: new Date().toISOString(),
  },
  2: {
    id: 2,
    name: "Holiday Return Policy",
    status: "draft",
    version: 3,
    graph: { nodes: [], edges: [] },
    settings: { entryPoint: "return_requested", autoHandover: false },
    updatedAt: new Date().toISOString(),
  },
};

// LIST
app.get("/api/order-management/scenarios", (req, res) => {
  const rows = scenarios.map((s) => ({
    id: s.id,
    name: s.name,
    status: s.status,
    version: s.version,
    updatedAt: s.updatedAt,
  }));
  res.json({ success: true, data: rows });
});

// CREATE
app.post("/api/order-management/scenarios", (req, res) => {
  const { name = "New Scenario" } = req.body || {};
  const id = nextScenarioId++;
  const now = new Date().toISOString();
  const base = { id, name, status: "draft", version: 1, updatedAt: now };
  scenarios.push(base);
  scenarioDetails[id] = {
    ...base,
    graph: { nodes: [], edges: [] },
    settings: { entryPoint: "order_created", autoHandover: false },
  };
  res.json({
    success: true,
    message: "Scenario created",
    data: scenarioDetails[id],
  });
});

// DETAIL
app.get("/api/order-management/scenarios/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = scenarioDetails[id];
  if (!item)
    return res.status(404).json({ success: false, message: "Not found" });
  res.json({ success: true, data: item });
});

// UPDATE (name, status, graph, settings)
app.put("/api/order-management/scenarios/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = scenarioDetails[id];
  if (!item)
    return res.status(404).json({ success: false, message: "Not found" });
  const updates = req.body || {};
  scenarioDetails[id] = {
    ...item,
    ...updates,
    graph: updates.graph ? updates.graph : item.graph,
    settings: updates.settings
      ? { ...item.settings, ...updates.settings }
      : item.settings,
    updatedAt: new Date().toISOString(),
  };
  const idx = scenarios.findIndex((s) => s.id === id);
  if (idx >= 0)
    scenarios[idx] = {
      id,
      name: scenarioDetails[id].name,
      status: scenarioDetails[id].status,
      version: scenarioDetails[id].version,
      updatedAt: scenarioDetails[id].updatedAt,
    };
  res.json({
    success: true,
    message: "Scenario updated",
    data: scenarioDetails[id],
  });
});

// DELETE
app.delete("/api/order-management/scenarios/:id", (req, res) => {
  const id = Number(req.params.id);
  scenarios = scenarios.filter((s) => s.id !== id);
  delete scenarioDetails[id];
  res.json({ success: true, message: "Scenario deleted" });
});

// PUBLISH (increment version, set active)
app.post("/api/order-management/scenarios/:id/publish", (req, res) => {
  const id = Number(req.params.id);
  const item = scenarioDetails[id];
  if (!item)
    return res.status(404).json({ success: false, message: "Not found" });
  item.status = "active";
  item.version = (item.version || 0) + 1;
  item.updatedAt = new Date().toISOString();
  const idx = scenarios.findIndex((s) => s.id === id);
  if (idx >= 0)
    scenarios[idx] = {
      id,
      name: item.name,
      status: item.status,
      version: item.version,
      updatedAt: item.updatedAt,
    };
  res.json({ success: true, message: "Scenario published", data: item });
});

module.exports = app;
