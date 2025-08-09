const express = require("express");
const app = express.Router();

let nextGroupId = 2;
let groups = [
  {
    id: 1,
    name: "Group 1",
    totalAgents: 1,
    priority: "Urgent",
    responseTime: "N/A",
    active: true,
  },
];

app.get("/api/manage/groups", (req, res) =>
  res.json({ success: true, data: groups })
);

app.post("/api/manage/groups", (req, res) => {
  const {
    name,
    totalAgents = 0,
    priority = "Normal",
    responseTime = "N/A",
    active = true,
  } = req.body || {};
  if (!name)
    return res.status(400).json({ success: false, message: "name required" });
  const id = nextGroupId++;
  const g = { id, name, totalAgents, priority, responseTime, active };
  groups.push(g);
  res.json({ success: true, message: "Group created", data: g });
});

app.put("/api/manage/groups/:id", (req, res) => {
  const id = Number(req.params.id);
  const idx = groups.findIndex((g) => g.id === id);
  if (idx < 0)
    return res.status(404).json({ success: false, message: "Not found" });
  groups[idx] = { ...groups[idx], ...(req.body || {}) };
  res.json({ success: true, message: "Group updated", data: groups[idx] });
});

app.delete("/api/manage/groups/:id", (req, res) => {
  const id = Number(req.params.id);
  groups = groups.filter((g) => g.id !== id);
  res.json({ success: true, message: "Group deleted" });
});

module.exports = app;
