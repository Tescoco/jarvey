const express = require("express");
const app = express.Router();

// In-memory state
let plans = [
  { id: "help_desk", title: "Help desk", unit: "agent", priceMonthly: 60 },
  {
    id: "automate",
    title: "Automate",
    unit: "interactions",
    priceMonthly: 143,
  },
  { id: "sms", title: "SMS", unit: "messages", priceMonthly: 0.02 },
  { id: "call", title: "Call", unit: "minutes", priceMonthly: 0.05 },
];

let subscription = {
  items: [{ planId: "automate", quantity: 150 }],
  totalMonthly: 203,
  currency: "USD",
  status: "active",
};

let paymentMethod = {
  brand: "visa",
  last4: "4242",
  expMonth: 12,
  expYear: 2030,
  cardholderName: "Jenny Wilson",
  billingEmail: "billing@example.com",
  billingAddress: {
    name: "Jenny Wilson",
    city: "Paris",
    address1: "123 Rue de Paris",
    address2: "",
  },
};

let nextInvoiceId = 1001;
let invoices = Array.from({ length: 27 }).map((_, i) => ({
  id: (1000 + i + 1).toString(),
  date: "2025-01-10",
  amount: 90,
  currency: "USD",
  status: i % 3 === 0 ? "not_paid" : "paid",
  description: "start for the period from 2025-01-10 to 2025-02-10",
}));

// GET available plans
app.get("/api/billing/plans", (req, res) => {
  res.json({ success: true, data: plans });
});

// Subscribe/update subscription
app.post("/api/billing/subscribe", (req, res) => {
  const { items = [] } = req.body || {};
  subscription.items = items;
  // naive total compute
  const total = items.reduce((sum, it) => {
    const plan = plans.find((p) => p.id === it.planId);
    if (!plan) return sum;
    const unitPrice = plan.priceMonthly;
    const qty = Number(it.quantity || 1);
    return sum + (typeof unitPrice === "number" ? unitPrice * (qty || 1) : 0);
  }, 0);
  subscription.totalMonthly = Math.round(total * 100) / 100;
  subscription.status = "active";

  // create invoice record
  const id = (nextInvoiceId++).toString();
  invoices.unshift({
    id,
    date: new Date().toISOString().slice(0, 10),
    amount: subscription.totalMonthly,
    currency: "USD",
    status: "paid",
    description: "Subscription update",
  });

  res.json({
    success: true,
    message: "Subscription updated",
    data: subscription,
  });
});

// Payment method
app.get("/api/billing/payment-method", (req, res) => {
  res.json({ success: true, data: paymentMethod });
});
app.put("/api/billing/payment-method", (req, res) => {
  paymentMethod = { ...paymentMethod, ...(req.body || {}) };
  res.json({
    success: true,
    message: "Payment method updated",
    data: paymentMethod,
  });
});

// Payment history with pagination
app.get("/api/billing/history", (req, res) => {
  const page = Math.max(1, Number(req.query.page || 1));
  const pageSize = Math.max(1, Math.min(50, Number(req.query.pageSize || 10)));
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const slice = invoices.slice(start, end);
  res.json({
    success: true,
    data: slice,
    meta: { total: invoices.length, page, pageSize },
  });
});

// Invoice PDF (returns a fake url)
app.get("/api/billing/invoices/:id/pdf", (req, res) => {
  const invoice = invoices.find((i) => i.id === req.params.id);
  if (!invoice)
    return res
      .status(404)
      .json({ success: false, message: "Invoice not found" });
  res.json({
    success: true,
    data: { url: `https://example.com/invoices/${invoice.id}.pdf` },
  });
});

module.exports = app;
