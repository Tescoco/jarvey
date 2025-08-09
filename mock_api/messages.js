const express = require("express");
const app = express.Router();

let nextConversationId = 3;
let conversations = [
  {
    id: 1,
    name: "Eleanor Pena",
    lastMessageAt: new Date().toISOString(),
    avatar: "/assets/avatars/eleanor.png",
  },
  {
    id: 2,
    name: "Marvin McKinney",
    lastMessageAt: new Date().toISOString(),
    avatar: "/assets/avatars/marvin.png",
  },
];

let threads = {
  1: [
    {
      id: 1,
      from: "Eleanor Pena",
      direction: "from",
      text: "Hoi Ik heb besloten...",
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      from: "ME",
      direction: "to",
      text: "Thanks for reaching out!",
      createdAt: new Date().toISOString(),
    },
  ],
  2: [
    {
      id: 1,
      from: "Marvin McKinney",
      direction: "from",
      text: "Hoi Ik heb besloten...",
      createdAt: new Date().toISOString(),
    },
  ],
};

app.get("/api/messages/conversations", (req, res) => {
  res.json({ success: true, data: conversations });
});

app.get("/api/messages/conversations/:id", (req, res) => {
  const id = Number(req.params.id);
  const list = threads[id] || [];
  res.json({ success: true, data: list });
});

app.post("/api/messages/conversations/:id/messages", (req, res) => {
  const id = Number(req.params.id);
  const { text } = req.body || {};
  if (!text)
    return res.status(400).json({ success: false, message: "text required" });
  if (!threads[id]) threads[id] = [];
  const msg = {
    id: (threads[id].at(-1)?.id || 0) + 1,
    from: "ME",
    direction: "to",
    text,
    createdAt: new Date().toISOString(),
  };
  threads[id].push(msg);
  const conv = conversations.find((c) => c.id === id);
  if (conv) conv.lastMessageAt = msg.createdAt;
  res.json({ success: true, message: "Message sent", data: msg });
});

module.exports = app;
