const express = require("express");
const app = express.Router();

let nextCustomerId = 4;

let customers = [
  {
    id: 1,
    name: "Jenny Wilson",
    email: "jenny.wilson@example.com",
    phone: "+33 7 35 5 46 14",
    createdAt: "2022-04-23",
    avatarUrl: "/assets/avatars/jenny.png",
    note: "",
    customerType: [], // e.g., ["VIP", "Collaborator"]
    emails: ["jenny.wilson@example.com"],
    phones: ["+33 7 35 5 46 14"],
    tags: [],
    addresses: [
      {
        type: "shipping",
        name: "Julien C",
        address1: "Heuvelring 40",
        address2: "-",
        city: "Tilburg",
        country: "Netherlands",
        province: "-",
        provinceCode: "-",
        zip: "5038 CL",
      },
    ],
    orders: [
      {
        id: 1009,
        status: ["UNFULFILLED", "PAID"],
        total: 1035.0,
        currency: "EUR",
        createdAt: "2025-01-05",
      },
    ],
    stats: { totalSpent: 1035.0, orders: 1, firstOrderAt: "2025-01-05" },
    tickets: [
      {
        id: 4399045,
        title: "Extend your Gorgias trial before it ends",
        status: "Open",
        date: "2025-10-05",
        aiIntent: "Other",
        messages: 1,
        meta: ["Unassigned"],
      },
    ],
    shopify: {
      executionId: "47d650a2-288d-47c0-8119-9fea105a56d0",
      message: "Rejected input, not processing the message.",
      reason: "store_configuration_not_found",
      details: "Store configuration not found",
    },
  },
  {
    id: 2,
    name: "Albert Flores",
    email: "albert.flores@example.com",
    phone: "+33 7 11 2 33 22",
    createdAt: "2022-04-23",
    avatarUrl: "/assets/avatars/albert.png",
    note: "Prefer contact via email.",
    customerType: ["VIP"],
    emails: ["albert.flores@example.com"],
    phones: ["+33 7 11 2 33 22"],
    tags: ["priority"],
    addresses: [],
    orders: [],
    stats: { totalSpent: 0, orders: 0, firstOrderAt: null },
    tickets: [],
    shopify: null,
  },
  {
    id: 3,
    name: "Jerome Bell",
    email: "jerome.bell@example.com",
    phone: "+33 7 99 8 77 66",
    createdAt: "2022-04-23",
    avatarUrl: "/assets/avatars/jerome.png",
    note: "",
    customerType: [],
    emails: ["jerome.bell@example.com"],
    phones: ["+33 7 99 8 77 66"],
    tags: [],
    addresses: [],
    orders: [],
    stats: { totalSpent: 0, orders: 0, firstOrderAt: null },
    tickets: [],
    shopify: null,
  },
];

function paginate(list, page = 1, pageSize = 10) {
  const start = (page - 1) * pageSize;
  const items = list.slice(start, start + pageSize);
  return { items, total: list.length, page, pageSize };
}

// LIST customers
app.get("/api/customers", (req, res) => {
  const { q = "", page = "1", pageSize = "10" } = req.query || {};
  const query = String(q).toLowerCase();
  const filtered = customers.filter((c) =>
    [c.name, c.email, c.phone].some((v) =>
      String(v || "")
        .toLowerCase()
        .includes(query)
    )
  );
  const { items, total } = paginate(filtered, Number(page), Number(pageSize));
  // shape for list
  const rows = items.map((c) => ({
    id: c.id,
    name: c.name,
    email: c.email,
    phone: c.phone,
    createdAt: c.createdAt,
    avatarUrl: c.avatarUrl,
  }));
  return res.json({
    success: true,
    data: rows,
    meta: { total, page: Number(page), pageSize: Number(pageSize) },
  });
});

// CREATE customer
app.post("/api/customers", (req, res) => {
  const { name, email, phone, note, avatarUrl } = req.body || {};
  if (!name)
    return res
      .status(400)
      .json({ success: false, message: "name is required" });
  const now = new Date().toISOString().slice(0, 10);
  const customer = {
    id: nextCustomerId++,
    name,
    email: email || "",
    phone: phone || "",
    createdAt: now,
    avatarUrl: avatarUrl || "",
    note: note || "",
    customerType: [],
    emails: email ? [email] : [],
    phones: phone ? [phone] : [],
    tags: [],
    addresses: [],
    orders: [],
    stats: { totalSpent: 0, orders: 0, firstOrderAt: null },
    tickets: [],
    shopify: null,
  };
  customers.push(customer);
  return res
    .status(201)
    .json({ success: true, message: "Customer created", data: customer });
});

// VIEW customer detail
app.get("/api/customers/:id", (req, res) => {
  const id = Number(req.params.id);
  const c = customers.find((x) => x.id === id);
  if (!c)
    return res
      .status(404)
      .json({ success: false, message: "Customer not found" });
  return res.json({ success: true, data: c });
});

// UPDATE customer
app.put("/api/customers/:id", (req, res) => {
  const id = Number(req.params.id);
  const c = customers.find((x) => x.id === id);
  if (!c)
    return res
      .status(404)
      .json({ success: false, message: "Customer not found" });
  const { name, email, phone, note, avatarUrl, customerType } = req.body || {};
  if (name !== undefined) c.name = name;
  if (email !== undefined) c.email = email;
  if (phone !== undefined) c.phone = phone;
  if (note !== undefined) c.note = note;
  if (avatarUrl !== undefined) c.avatarUrl = avatarUrl;
  if (Array.isArray(customerType)) c.customerType = customerType;
  return res.json({ success: true, message: "Customer updated", data: c });
});

// DELETE customer
app.delete("/api/customers/:id", (req, res) => {
  const id = Number(req.params.id);
  const exists = customers.some((x) => x.id === id);
  if (!exists)
    return res
      .status(404)
      .json({ success: false, message: "Customer not found" });
  customers = customers.filter((x) => x.id !== id);
  return res.json({ success: true, message: "Customer deleted" });
});

// TAGS
app.post("/api/customers/:id/tags", (req, res) => {
  const id = Number(req.params.id);
  const { tag } = req.body || {};
  const c = customers.find((x) => x.id === id);
  if (!c)
    return res
      .status(404)
      .json({ success: false, message: "Customer not found" });
  if (!tag)
    return res.status(400).json({ success: false, message: "tag is required" });
  if (!c.tags.includes(tag)) c.tags.push(tag);
  return res.json({ success: true, message: "Tag added", data: c.tags });
});
app.delete("/api/customers/:id/tags/:tag", (req, res) => {
  const id = Number(req.params.id);
  const { tag } = req.params;
  const c = customers.find((x) => x.id === id);
  if (!c)
    return res
      .status(404)
      .json({ success: false, message: "Customer not found" });
  c.tags = c.tags.filter((t) => t !== tag);
  return res.json({ success: true, message: "Tag removed", data: c.tags });
});

// EMAILS
app.post("/api/customers/:id/emails", (req, res) => {
  const id = Number(req.params.id);
  const { email } = req.body || {};
  const c = customers.find((x) => x.id === id);
  if (!c)
    return res
      .status(404)
      .json({ success: false, message: "Customer not found" });
  if (!email)
    return res
      .status(400)
      .json({ success: false, message: "email is required" });
  if (!c.emails.includes(email)) c.emails.push(email);
  return res.json({ success: true, message: "Email added", data: c.emails });
});
app.delete("/api/customers/:id/emails/:index", (req, res) => {
  const id = Number(req.params.id);
  const index = Number(req.params.index);
  const c = customers.find((x) => x.id === id);
  if (!c)
    return res
      .status(404)
      .json({ success: false, message: "Customer not found" });
  if (index < 0 || index >= c.emails.length)
    return res.status(400).json({ success: false, message: "invalid index" });
  c.emails.splice(index, 1);
  return res.json({ success: true, message: "Email removed", data: c.emails });
});

// PHONES
app.post("/api/customers/:id/phones", (req, res) => {
  const id = Number(req.params.id);
  const { phone } = req.body || {};
  const c = customers.find((x) => x.id === id);
  if (!c)
    return res
      .status(404)
      .json({ success: false, message: "Customer not found" });
  if (!phone)
    return res
      .status(400)
      .json({ success: false, message: "phone is required" });
  if (!c.phones.includes(phone)) c.phones.push(phone);
  return res.json({ success: true, message: "Phone added", data: c.phones });
});
app.delete("/api/customers/:id/phones/:index", (req, res) => {
  const id = Number(req.params.id);
  const index = Number(req.params.index);
  const c = customers.find((x) => x.id === id);
  if (!c)
    return res
      .status(404)
      .json({ success: false, message: "Customer not found" });
  if (index < 0 || index >= c.phones.length)
    return res.status(400).json({ success: false, message: "invalid index" });
  c.phones.splice(index, 1);
  return res.json({ success: true, message: "Phone removed", data: c.phones });
});

// ADDRESSES
app.get("/api/customers/:id/addresses", (req, res) => {
  const id = Number(req.params.id);
  const c = customers.find((x) => x.id === id);
  if (!c)
    return res
      .status(404)
      .json({ success: false, message: "Customer not found" });
  return res.json({ success: true, data: c.addresses });
});
app.post("/api/customers/:id/addresses", (req, res) => {
  const id = Number(req.params.id);
  const address = req.body || {};
  const c = customers.find((x) => x.id === id);
  if (!c)
    return res
      .status(404)
      .json({ success: false, message: "Customer not found" });
  c.addresses.push(address);
  return res
    .status(201)
    .json({ success: true, message: "Address added", data: address });
});

// ORDERS
app.get("/api/customers/:id/orders", (req, res) => {
  const id = Number(req.params.id);
  const c = customers.find((x) => x.id === id);
  if (!c)
    return res
      .status(404)
      .json({ success: false, message: "Customer not found" });
  return res.json({ success: true, data: c.orders });
});

// TICKETS (summary cards)
app.get("/api/customers/:id/tickets", (req, res) => {
  const id = Number(req.params.id);
  const c = customers.find((x) => x.id === id);
  if (!c)
    return res
      .status(404)
      .json({ success: false, message: "Customer not found" });
  return res.json({ success: true, data: c.tickets });
});

module.exports = app;
