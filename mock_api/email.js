const express = require("express");
const app = express.Router();

let accounts = [
  {
    id: 1,
    name: "Jarvey Support",
    email: "support@jarvey.ai",
    store: "Quickstart-467uedh3uehry",
    default: true,
  },
];

let accountSettings = {
  1: {
    displayName: "Jarvey Support",
    signature: "Best regards, Jarvey Support",
    groupEmailsIntoConversations: true,
    tagWithGmailCategories: false,
  },
};

let deliveryPlatform = { provider: "jarvey", verified: false };

// Accounts
app.get("/api/email/accounts", (req, res) => {
  res.json({ success: true, data: accounts });
});

app.post("/api/email/accounts/:id/import", (req, res) => {
  const id = Number(req.params.id);
  const acc = accounts.find((a) => a.id === id);
  if (!acc)
    return res
      .status(404)
      .json({ success: false, message: "Account not found" });
  res.json({
    success: true,
    message: "Import started",
    data: { started: true },
  });
});

app.post("/api/email/accounts/:id/connect-store", (req, res) => {
  const id = Number(req.params.id);
  const acc = accounts.find((a) => a.id === id);
  if (!acc)
    return res
      .status(404)
      .json({ success: false, message: "Account not found" });
  const { store = acc.store } = req.body || {};
  acc.store = store;
  res.json({ success: true, message: "Store connected", data: acc });
});

// Account settings
app.get("/api/email/accounts/:id/settings", (req, res) => {
  const id = Number(req.params.id);
  const set = accountSettings[id];
  if (!set)
    return res.status(404).json({ success: false, message: "Not found" });
  res.json({ success: true, data: set });
});
app.put("/api/email/accounts/:id/settings", (req, res) => {
  const id = Number(req.params.id);
  const cur = accountSettings[id];
  if (!cur)
    return res.status(404).json({ success: false, message: "Not found" });
  accountSettings[id] = { ...cur, ...(req.body || {}) };
  res.json({
    success: true,
    message: "Settings updated",
    data: accountSettings[id],
  });
});

// Delivery platform (Outbound)
app.get("/api/email/delivery-platform", (req, res) =>
  res.json({ success: true, data: deliveryPlatform })
);
app.put("/api/email/delivery-platform", (req, res) => {
  deliveryPlatform = { ...deliveryPlatform, ...(req.body || {}) };
  res.json({
    success: true,
    message: "Delivery platform updated",
    data: deliveryPlatform,
  });
});

module.exports = app;
