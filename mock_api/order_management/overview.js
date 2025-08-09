const express = require("express");
const app = express.Router();

let overview = {
  totals: {
    orders: 1200,
    processing: 230,
    shipped: 660,
    delivered: 230,
    cancelled: 36,
    returnRequested: 44,
  },
  onTimeDeliveryRate: 96,
};

let settings = {
  autoCancelUnpaidAfterHours: 48,
  allowReturnsWithinDays: 30,
  notifyOnDelay: true,
};

app.get("/api/order-management/overview", (req, res) =>
  res.json({ success: true, data: overview })
);
app.get("/api/order-management/settings", (req, res) =>
  res.json({ success: true, data: settings })
);
app.put("/api/order-management/settings", (req, res) => {
  settings = { ...settings, ...(req.body || {}) };
  res.json({ success: true, message: "Settings updated", data: settings });
});

module.exports = app;
