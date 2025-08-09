const express = require("express");
const app = express.Router();

let steps = [
  { key: "ai-test", title: "AI Test", completed: false },
  {
    key: "add-support-channels",
    title: "Add Support Channels",
    completed: false,
  },
  { key: "answer-ticket", title: "Answer a Ticket", completed: false },
  { key: "connect-support", title: "Connect Support", completed: false },
  { key: "invite-team", title: "Invite Team", completed: false },
  { key: "connect-store", title: "Connect Store", completed: false },
  { key: "slas", title: "SLAs", completed: false },
  { key: "ai-guidance", title: "AI Guidance", completed: false },
  { key: "ai-power", title: "AI Power", completed: false },
  { key: "help-center", title: "Help Center", completed: false },
  { key: "install-flows", title: "Install Flows", completed: false },
  { key: "install-triggers", title: "Install Triggers", completed: false },
  {
    key: "predefined-responses",
    title: "Predefined Responses",
    completed: false,
  },
  { key: "complete", title: "Complete", completed: false },
];

function findStep(key) {
  return steps.find((s) => s.key === key);
}

app.get("/api/onboarding/steps", (req, res) => {
  return res.json({ success: true, data: steps });
});

app.get("/api/onboarding/steps/:key", (req, res) => {
  const step = findStep(req.params.key);
  if (!step)
    return res.status(404).json({ success: false, message: "step not found" });
  return res.json({ success: true, data: step });
});

app.post("/api/onboarding/steps/:key/complete", (req, res) => {
  const step = findStep(req.params.key);
  if (!step)
    return res.status(404).json({ success: false, message: "step not found" });
  step.completed = true;
  return res.json({ success: true, message: "Step completed", data: step });
});

app.get("/api/onboarding/next", (req, res) => {
  const next = steps.find((s) => !s.completed) || null;
  return res.json({ success: true, data: next });
});

module.exports = app;
