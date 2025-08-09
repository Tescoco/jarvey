const express = require("express");
const app = express.Router();

let nextTicketId = 1003;
let tickets = [
  {
    id: 1001,
    subject: "Order not received",
    status: "open",
    priority: "high",
    requester: "jenny.w@example.com",
    assignee: "agent1@jarvey.ai",
    createdAt: new Date().toISOString(),
  },
  {
    id: 1002,
    subject: "Refund request",
    status: "pending",
    priority: "medium",
    requester: "alex.t@example.com",
    assignee: null,
    createdAt: new Date().toISOString(),
  },
];

let ticketDetails = {
  1001: {
    id: 1001,
    subject: "Order not received",
    status: "open",
    priority: "high",
    requester: "jenny.w@example.com",
    assignee: "agent1@jarvey.ai",
    tags: ["outside-business-hours"],
    customFields: { orderId: "ORD-1001" },
    messages: [
      {
        id: 1,
        author: "jenny.w@example.com",
        body: "I haven't received my order.",
        createdAt: new Date(Date.now() - 3600000).toISOString(),
        attachments: [],
      },
      {
        id: 2,
        author: "agent1@jarvey.ai",
        body: "We are checking with the carrier.",
        createdAt: new Date().toISOString(),
        attachments: [],
      },
    ],
    attachments: [],
  },
  1002: {
    id: 1002,
    subject: "Refund request",
    status: "pending",
    priority: "medium",
    requester: "alex.t@example.com",
    assignee: null,
    tags: [],
    customFields: { orderId: "ORD-1002" },
    messages: [],
    attachments: [],
  },
};

// LIST
app.get("/api/tickets", (req, res) => {
  const { q = "" } = req.query;
  const ql = String(q).toLowerCase();
  const rows = tickets.filter(
    (t) => !ql || t.subject.toLowerCase().includes(ql)
  );
  res.json({ success: true, data: rows, meta: { total: rows.length } });
});

// CREATE
app.post("/api/tickets", (req, res) => {
  const { subject, requester, priority = "low" } = req.body || {};
  if (!subject || !requester)
    return res
      .status(400)
      .json({ success: false, message: "subject and requester are required" });
  const id = nextTicketId++;
  const base = {
    id,
    subject,
    status: "open",
    priority,
    requester,
    assignee: null,
    createdAt: new Date().toISOString(),
  };
  tickets.unshift(base);
  ticketDetails[id] = {
    ...base,
    tags: [],
    customFields: {},
    messages: [],
    attachments: [],
  };
  res.json({
    success: true,
    message: "Ticket created",
    data: ticketDetails[id],
  });
});

// DETAIL
app.get("/api/tickets/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = ticketDetails[id];
  if (!item)
    return res.status(404).json({ success: false, message: "Not found" });
  res.json({ success: true, data: item });
});

// UPDATE
app.put("/api/tickets/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = ticketDetails[id];
  if (!item)
    return res.status(404).json({ success: false, message: "Not found" });
  const updates = req.body || {};
  ticketDetails[id] = { ...item, ...updates };
  const idx = tickets.findIndex((t) => t.id === id);
  if (idx >= 0) tickets[idx] = { ...tickets[idx], ...updates };
  res.json({
    success: true,
    message: "Ticket updated",
    data: ticketDetails[id],
  });
});

// DELETE
app.delete("/api/tickets/:id", (req, res) => {
  const id = Number(req.params.id);
  tickets = tickets.filter((t) => t.id !== id);
  delete ticketDetails[id];
  res.json({ success: true, message: "Ticket deleted" });
});

// MESSAGES
app.get("/api/tickets/:id/messages", (req, res) => {
  const id = Number(req.params.id);
  const item = ticketDetails[id];
  if (!item)
    return res.status(404).json({ success: false, message: "Not found" });
  res.json({ success: true, data: item.messages });
});
app.post("/api/tickets/:id/messages", (req, res) => {
  const id = Number(req.params.id);
  const { author, body } = req.body || {};
  const item = ticketDetails[id];
  if (!item)
    return res.status(404).json({ success: false, message: "Not found" });
  const msg = {
    id: (item.messages.at(-1)?.id || 0) + 1,
    author,
    body,
    createdAt: new Date().toISOString(),
    attachments: [],
  };
  item.messages.push(msg);
  res.json({ success: true, message: "Message added", data: msg });
});

// TAGS
app.post("/api/tickets/:id/tags", (req, res) => {
  const id = Number(req.params.id);
  const { tag } = req.body || {};
  const item = ticketDetails[id];
  if (!item)
    return res.status(404).json({ success: false, message: "Not found" });
  if (!tag)
    return res.status(400).json({ success: false, message: "tag required" });
  if (!item.tags.includes(tag)) item.tags.push(tag);
  res.json({ success: true, data: item.tags });
});
app.delete("/api/tickets/:id/tags/:tag", (req, res) => {
  const id = Number(req.params.id);
  const tag = req.params.tag;
  const item = ticketDetails[id];
  if (!item)
    return res.status(404).json({ success: false, message: "Not found" });
  item.tags = item.tags.filter((t) => t !== tag);
  res.json({ success: true, data: item.tags });
});

// ATTACHMENTS (metadata only)
app.get("/api/tickets/:id/attachments", (req, res) => {
  const id = Number(req.params.id);
  const item = ticketDetails[id];
  if (!item)
    return res.status(404).json({ success: false, message: "Not found" });
  res.json({ success: true, data: item.attachments });
});
app.post("/api/tickets/:id/attachments", (req, res) => {
  const id = Number(req.params.id);
  const { filename } = req.body || {};
  const item = ticketDetails[id];
  if (!item)
    return res.status(404).json({ success: false, message: "Not found" });
  const att = {
    id: (item.attachments.at(-1)?.id || 0) + 1,
    filename,
    uploadedAt: new Date().toISOString(),
  };
  item.attachments.push(att);
  res.json({ success: true, data: att });
});

// FIELDS (configuration lists used by CreateField/TicketFields)
let fieldDefinitions = [
  { key: "orderId", label: "Order ID", type: "text", required: true },
  {
    key: "channel",
    label: "Channel",
    type: "select",
    options: ["email", "chat", "phone"],
    required: false,
  },
];
app.get("/api/tickets/fields", (req, res) =>
  res.json({ success: true, data: fieldDefinitions })
);
app.post("/api/tickets/fields", (req, res) => {
  const { key, label, type, options = [], required = false } = req.body || {};
  if (!key || !label || !type)
    return res
      .status(400)
      .json({ success: false, message: "key, label, type required" });
  fieldDefinitions.push({ key, label, type, options, required });
  res.json({ success: true, message: "Field added", data: fieldDefinitions });
});
app.put("/api/tickets/fields/:key", (req, res) => {
  const { key } = req.params;
  const idx = fieldDefinitions.findIndex((f) => f.key === key);
  if (idx < 0)
    return res.status(404).json({ success: false, message: "Not found" });
  fieldDefinitions[idx] = { ...fieldDefinitions[idx], ...req.body };
  res.json({
    success: true,
    message: "Field updated",
    data: fieldDefinitions[idx],
  });
});
app.delete("/api/tickets/fields/:key", (req, res) => {
  const { key } = req.params;
  fieldDefinitions = fieldDefinitions.filter((f) => f.key !== key);
  res.json({ success: true, message: "Field deleted" });
});

// PRIORITIES
let priorities = [
  { key: "low", label: "Low" },
  { key: "medium", label: "Medium" },
  { key: "high", label: "High" },
];
app.get("/api/tickets/priorities", (req, res) =>
  res.json({ success: true, data: priorities })
);
app.post("/api/tickets/priorities", (req, res) => {
  const { key, label } = req.body || {};
  if (!key || !label)
    return res
      .status(400)
      .json({ success: false, message: "key and label required" });
  if (priorities.some((p) => p.key === key))
    return res.status(409).json({ success: false, message: "priority exists" });
  priorities.push({ key, label });
  res.json({ success: true, message: "Priority added", data: priorities });
});

// CONFIGURATION (TicketConfiguration.jsx)
let ticketConfiguration = {
  autoCloseDays: 14,
  allowAttachments: true,
  allowPublicReplies: true,
};
app.get("/api/tickets/configuration", (req, res) =>
  res.json({ success: true, data: ticketConfiguration })
);
app.put("/api/tickets/configuration", (req, res) => {
  ticketConfiguration = { ...ticketConfiguration, ...(req.body || {}) };
  res.json({
    success: true,
    message: "Configuration updated",
    data: ticketConfiguration,
  });
});

module.exports = app;
