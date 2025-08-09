const express = require("express");
const app = express.Router();

let users = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@jarvey.ai",
    role: "admin",
    status: "active",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Agent One",
    email: "agent1@jarvey.ai",
    role: "agent",
    status: "active",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Agent Two",
    email: "agent2@jarvey.ai",
    role: "agent",
    status: "inactive",
    createdAt: new Date().toISOString(),
  },
];
let nextId = 4;

function paginate(list, page = 1, pageSize = 10) {
  const start = (page - 1) * pageSize;
  const items = list.slice(start, start + pageSize);
  return { items, total: list.length, page, pageSize };
}

// LIST
app.get("/api/admin/users", (req, res) => {
  const { q = "", page = "1", pageSize = "10" } = req.query || {};
  const query = String(q).toLowerCase();
  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(query) ||
      u.email.toLowerCase().includes(query) ||
      u.role.toLowerCase().includes(query)
  );
  const { items, total } = paginate(filtered, Number(page), Number(pageSize));
  return res.json({
    success: true,
    data: items,
    meta: { total, page: Number(page), pageSize: Number(pageSize) },
  });
});

// CREATE
app.post("/api/admin/users", (req, res) => {
  const { name, email, role = "agent", status = "active" } = req.body || {};
  if (!name || !email)
    return res
      .status(400)
      .json({ success: false, message: "name and email are required" });
  const user = {
    id: nextId++,
    name,
    email,
    role,
    status,
    createdAt: new Date().toISOString(),
  };
  users.push(user);
  return res
    .status(201)
    .json({ success: true, message: "User created", data: user });
});

// VIEW
app.get("/api/admin/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);
  if (!user)
    return res.status(404).json({ success: false, message: "User not found" });
  return res.json({ success: true, data: user });
});

// UPDATE
app.put("/api/admin/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);
  if (!user)
    return res.status(404).json({ success: false, message: "User not found" });
  const { name, email, role, status } = req.body || {};
  if (name !== undefined) user.name = name;
  if (email !== undefined) user.email = email;
  if (role !== undefined) user.role = role;
  if (status !== undefined) user.status = status;
  return res.json({ success: true, message: "User updated", data: user });
});

// DELETE
app.delete("/api/admin/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const exists = users.some((u) => u.id === id);
  if (!exists)
    return res.status(404).json({ success: false, message: "User not found" });
  users = users.filter((u) => u.id !== id);
  return res.json({ success: true, message: "User deleted" });
});

module.exports = app;
