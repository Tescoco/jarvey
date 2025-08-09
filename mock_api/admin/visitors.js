const express = require("express");
const app = express.Router();

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let visitorStats = {
  labels: months,
  datasets: [
    {
      label: "Created Tickets",
      data: [30, 28, 25, 26, 28, 30, 32, 35, 40, 42, 46, 38],
    },
    {
      label: "Closed Tickets",
      data: [22, 25, 30, 26, 32, 35, 39, 36, 32, 38, 41, 49],
    },
  ],
  min: 0,
  max: 60,
  legend: false,
};

let visitors = [
  {
    ip: "137.45.44.217",
    blocked: false,
    lastVisited: new Date(Date.now() - 1000).toISOString(),
  },
  {
    ip: "10.0.0.5",
    blocked: false,
    lastVisited: new Date(Date.now() - 5000).toISOString(),
  },
  {
    ip: "192.168.1.22",
    blocked: true,
    lastVisited: new Date(Date.now() - 15000).toISOString(),
  },
];

function paginate(list, page = 1, pageSize = 10) {
  const start = (page - 1) * pageSize;
  const items = list.slice(start, start + pageSize);
  return { items, total: list.length, page, pageSize };
}

app.get("/api/admin/visitors/stats", (req, res) => {
  return res.json({ success: true, data: visitorStats });
});

app.get("/api/admin/visitors", (req, res) => {
  const { q = "", page = "1", pageSize = "10" } = req.query || {};
  const query = String(q).toLowerCase();
  const filtered = visitors.filter((v) => v.ip.toLowerCase().includes(query));
  const { items, total } = paginate(filtered, Number(page), Number(pageSize));
  return res.json({
    success: true,
    data: items,
    meta: { total, page: Number(page), pageSize: Number(pageSize) },
  });
});

app.put("/api/admin/visitors/:ip", (req, res) => {
  const { ip } = req.params;
  const { blocked } = req.body || {};
  const v = visitors.find((x) => x.ip === ip);
  if (!v)
    return res.status(404).json({ success: false, message: "IP not found" });
  if (blocked !== undefined) v.blocked = !!blocked;
  v.lastVisited = new Date().toISOString();
  return res.json({ success: true, message: "Visitor updated", data: v });
});

app.post("/api/admin/visitors/reset", (req, res) => {
  visitors = [];
  return res.json({ success: true, message: "Visitors reset", data: visitors });
});

module.exports = app;
