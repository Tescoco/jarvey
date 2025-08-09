const express = require("express");
const app = express.Router();

let nextAgentId = 6;
let agents = [
  {
    id: 1,
    name: "Debra",
    email: "debra@example.com",
    responseTime: "N/A",
    active: true,
    best: false,
  },
  {
    id: 2,
    name: "Ronald",
    email: "ronald@example.com",
    responseTime: "N/A",
    active: true,
    best: true,
  },
  {
    id: 3,
    name: "Darrell",
    email: "darrell@example.com",
    responseTime: "N/A",
    active: true,
    best: false,
  },
  {
    id: 4,
    name: "Cody",
    email: "cody@example.com",
    responseTime: "N/A",
    active: false,
    best: false,
  },
  {
    id: 5,
    name: "Aubrey",
    email: "aubrey@example.com",
    responseTime: "N/A",
    active: true,
    best: false,
  },
];

app.get("/api/manage/agents", (req, res) =>
  res.json({ success: true, data: agents })
);

app.post("/api/manage/agents", (req, res) => {
  const { name, email, active = true } = req.body || {};
  if (!name || !email)
    return res
      .status(400)
      .json({ success: false, message: "name and email required" });
  const id = nextAgentId++;
  const agent = { id, name, email, responseTime: "N/A", active, best: false };
  agents.push(agent);
  res.json({ success: true, message: "Agent created", data: agent });
});

app.put("/api/manage/agents/:id", (req, res) => {
  const id = Number(req.params.id);
  const idx = agents.findIndex((a) => a.id === id);
  if (idx < 0)
    return res.status(404).json({ success: false, message: "Not found" });
  agents[idx] = { ...agents[idx], ...(req.body || {}) };
  res.json({ success: true, message: "Agent updated", data: agents[idx] });
});

app.delete("/api/manage/agents/:id", (req, res) => {
  const id = Number(req.params.id);
  agents = agents.filter((a) => a.id !== id);
  res.json({ success: true, message: "Agent deleted" });
});

module.exports = app;
