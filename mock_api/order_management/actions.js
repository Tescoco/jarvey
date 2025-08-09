const express = require("express");
const app = express.Router();

// Simple in-memory store for order actions
let orders = [
  {
    orderId: "ORD-1001",
    status: "processing",
    canCancel: true,
    canReturn: true,
    carrier: "UPS",
    trackingNumber: "1Z999AA10123456784",
  },
  {
    orderId: "ORD-1002",
    status: "shipped",
    canCancel: false,
    canReturn: true,
    carrier: "FedEx",
    trackingNumber: "449044304137821",
  },
];

// TRACK
app.get("/api/order-management/orders/:orderId/track", (req, res) => {
  const { orderId } = req.params;
  const order = orders.find((o) => o.orderId === orderId) || orders[0];
  return res.json({
    success: true,
    data: {
      orderId,
      carrier: order.carrier,
      trackingNumber: order.trackingNumber,
      checkpoints: [
        {
          time: new Date(Date.now() - 86400000).toISOString(),
          status: "Package received at facility",
        },
        {
          time: new Date(Date.now() - 43200000).toISOString(),
          status: "In transit",
        },
        { time: new Date().toISOString(), status: "Out for delivery" },
      ],
    },
  });
});

// CANCEL
app.post("/api/order-management/orders/:orderId/cancel", (req, res) => {
  const { orderId } = req.params;
  const order = orders.find((o) => o.orderId === orderId);
  if (!order)
    return res.status(404).json({ success: false, message: "Order not found" });
  if (!order.canCancel)
    return res
      .status(400)
      .json({ success: false, message: "Order cannot be cancelled" });
  order.status = "cancelled";
  return res.json({
    success: true,
    message: "Order cancelled",
    data: { orderId, status: order.status },
  });
});

// RETURN
app.post("/api/order-management/orders/:orderId/return", (req, res) => {
  const { orderId } = req.params;
  const { reason = "Not specified" } = req.body || {};
  const order = orders.find((o) => o.orderId === orderId);
  if (!order)
    return res.status(404).json({ success: false, message: "Order not found" });
  order.status = "return_requested";
  return res.json({
    success: true,
    message: "Return initiated",
    data: { orderId, status: order.status, reason },
  });
});

// REPORT
app.get("/api/order-management/report", (req, res) => {
  return res.json({
    success: true,
    data: {
      range: "last_30_days",
      totals: {
        orders: 1200,
        cancellations: 36,
        returns: 48,
        onTimeDeliveryRate: 96,
      },
      byStatus: [
        { status: "processing", count: 230 },
        { status: "shipped", count: 660 },
        { status: "delivered", count: 230 },
        { status: "cancelled", count: 36 },
        { status: "return_requested", count: 44 },
      ],
    },
  });
});

module.exports = app;
