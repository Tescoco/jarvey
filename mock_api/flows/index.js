const express = require("express");
const app = express.Router();

let nextFlowId = 3;
let flows = [
  {
    id: 1,
    name: "Shipping policy",
    language: "en",
    updatedAt: "2025-01-09",
    thumbnailUrl: "/assets/flag.png",
  },
  {
    id: 2,
    name: "Shelf life information",
    language: "en",
    updatedAt: "2025-01-09",
    thumbnailUrl: "/assets/flag.png",
  },
];

let flowDetails = {
  1: {
    id: 1,
    name: "Shipping policy",
    language: "en",
    graph: { nodes: [], edges: [] },
    lastSavedAt: new Date().toISOString(),
  },
  2: {
    id: 2,
    name: "Shelf life information",
    language: "en",
    graph: { nodes: [], edges: [] },
    lastSavedAt: new Date().toISOString(),
  },
};

// LIST flows
app.get("/api/flows", (req, res) => {
  const rows = flows.map((f) => ({
    id: f.id,
    name: f.name,
    language: f.language,
    updatedAt: f.updatedAt,
    thumbnailUrl: f.thumbnailUrl,
  }));
  return res.json({ success: true, data: rows });
});

// CREATE flow
app.post("/api/flows", (req, res) => {
  const { name, language = "en", graph } = req.body || {};
  if (!name)
    return res
      .status(400)
      .json({ success: false, message: "name is required" });
  const id = nextFlowId++;
  const row = {
    id,
    name,
    language,
    updatedAt: new Date().toISOString().slice(0, 10),
    thumbnailUrl: "/assets/flag.png",
  };
  flows.push(row);
  flowDetails[id] = {
    id,
    name,
    language,
    graph: graph || { nodes: [], edges: [] },
    lastSavedAt: new Date().toISOString(),
  };
  return res
    .status(201)
    .json({ success: true, message: "Flow created", data: flowDetails[id] });
});

// VIEW flow
app.get("/api/flows/:id", (req, res) => {
  const id = Number(req.params.id);
  const detail = flowDetails[id];
  if (!detail)
    return res.status(404).json({ success: false, message: "Flow not found" });
  return res.json({ success: true, data: detail });
});

// UPDATE flow (name/language/graph)
app.put("/api/flows/:id", (req, res) => {
  const id = Number(req.params.id);
  const detail = flowDetails[id];
  if (!detail)
    return res.status(404).json({ success: false, message: "Flow not found" });
  const { name, language, graph } = req.body || {};
  if (name !== undefined) detail.name = name;
  if (language !== undefined) detail.language = language;
  if (graph !== undefined) detail.graph = graph;
  detail.lastSavedAt = new Date().toISOString();
  const row = flows.find((f) => f.id === id);
  if (row) {
    if (name !== undefined) row.name = name;
    if (language !== undefined) row.language = language;
    row.updatedAt = new Date().toISOString().slice(0, 10);
  }
  return res.json({ success: true, message: "Flow updated", data: detail });
});

// DELETE flow
app.delete("/api/flows/:id", (req, res) => {
  const id = Number(req.params.id);
  const exists = flows.some((f) => f.id === id);
  if (!exists)
    return res.status(404).json({ success: false, message: "Flow not found" });
  flows = flows.filter((f) => f.id !== id);
  delete flowDetails[id];
  return res.json({ success: true, message: "Flow deleted" });
});

// TEMPLATES list (for Create page)
app.get("/api/flows/templates", (req, res) => {
  const templates = [
    {
      id: "tpl-1",
      status: "Product Question",
      title: "Shelf life Information",
      description: "Provide guidance around the shelf life of your products.",
    },
    {
      id: "tpl-2",
      status: "Policy",
      title: "Shipping policy",
      description: "Explain your shipping policy.",
    },
  ];
  return res.json({ success: true, data: templates });
});

module.exports = app;
