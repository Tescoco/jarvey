const express = require("express");
const app = express.Router();

let nextUserId = 6;
let users = [
  {
    id: 1,
    name: "Kathryn Murphy",
    email: "adamk@me.com",
    phone: "+33 7 35 5 46 14",
    active: true,
  },
  {
    id: 2,
    name: "Jane Cooper",
    email: "larry@verizon.net",
    phone: "+33 6 55 53 19 16",
    active: true,
  },
  {
    id: 3,
    name: "Jenny Wilson",
    email: "shawnce@att.net",
    phone: "+33 6 55 51 30 35",
    active: true,
  },
  {
    id: 4,
    name: "Courtney Henry",
    email: "godeke@live.com",
    phone: "+33 7 00 55 56 79",
    active: false,
  },
  {
    id: 5,
    name: "Jerome Bell",
    email: "evans@me.com",
    phone: "+33 7 00 55 59 27",
    active: true,
  },
];

app.get("/api/manage/users", (req, res) =>
  res.json({ success: true, data: users })
);

app.post("/api/manage/users", (req, res) => {
  const { name, email, phone = "" } = req.body || {};
  if (!name || !email)
    return res
      .status(400)
      .json({ success: false, message: "name and email required" });
  const id = nextUserId++;
  const user = { id, name, email, phone, active: true };
  users.push(user);
  res.json({ success: true, message: "User created", data: user });
});

app.put("/api/manage/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const idx = users.findIndex((u) => u.id === id);
  if (idx < 0)
    return res.status(404).json({ success: false, message: "Not found" });
  users[idx] = { ...users[idx], ...(req.body || {}) };
  res.json({ success: true, message: "User updated", data: users[idx] });
});

app.delete("/api/manage/users/:id", (req, res) => {
  const id = Number(req.params.id);
  users = users.filter((u) => u.id !== id);
  res.json({ success: true, message: "User deleted" });
});

module.exports = app;
