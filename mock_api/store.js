const express = require("express");
const app = express.Router();

let nextStoreId = 3;
let stores = [
  {
    id: 1,
    name: "Store 1",
    platform: "Shopify",
    connected: true,
    default: true,
  },
  {
    id: 2,
    name: "Store 2",
    platform: "Shopify",
    connected: false,
    default: false,
  },
];

app.get("/api/stores", (req, res) => res.json({ success: true, data: stores }));

app.post("/api/stores/connect", (req, res) => {
  const { name, platform = "Shopify", makeDefault = false } = req.body || {};
  if (!name)
    return res.status(400).json({ success: false, message: "name required" });
  const id = nextStoreId++;
  const item = { id, name, platform, connected: true, default: !!makeDefault };
  if (makeDefault) stores = stores.map((s) => ({ ...s, default: false }));
  stores.push(item);
  res.json({ success: true, message: "Store connected", data: item });
});

app.put("/api/stores/:id", (req, res) => {
  const id = Number(req.params.id);
  const idx = stores.findIndex((s) => s.id === id);
  if (idx < 0)
    return res.status(404).json({ success: false, message: "Not found" });
  const updates = req.body || {};
  if (updates.default === true)
    stores = stores.map((s) => ({ ...s, default: s.id === id }));
  stores[idx] = { ...stores[idx], ...updates };
  res.json({ success: true, message: "Store updated", data: stores[idx] });
});

app.delete("/api/stores/:id", (req, res) => {
  const id = Number(req.params.id);
  stores = stores.filter((s) => s.id !== id);
  res.json({ success: true, message: "Store disconnected" });
});

module.exports = app;
