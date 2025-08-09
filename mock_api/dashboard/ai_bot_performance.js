const express = require("express");
const app = express.Router();

const summary = [
  {
    label: "Total Bot Interactions",
    marketValue: "15",
    marketVariant: "success",
    title: "50,846",
  },
  {
    label: "Bot Resolution Rate ",
    marketValue: "12",
    marketVariant: "success",
    title: "90%",
  },
  {
    label: "Bot Handoff Rate",
    marketValue: "12",
    marketVariant: "success",
    title: "60%",
  },
  {
    label: "Customer Satisfaction Score",
    marketValue: "12",
    marketVariant: "success",
    title: "4/5",
  },
];

const summary2 = [
  {
    label: "Achievement Rate",
    marketValue: "15",
    marketVariant: "success",
    title: "60%",
  },
  {
    label: "Tickets with Breached SLAs ",
    marketValue: "10",
    marketVariant: "danger",
    title: "-20%",
  },
];

const summary3 = [
  {
    label: "Cost Saved",
    marketValue: "12",
    marketVariant: "success",
    title: "$234",
  },
  {
    label: "Overall Time Saved by AI Agent ",
    marketValue: "12",
    marketVariant: "success",
    title: "Overall Time Saved by AI Agent",
  },
  {
    label: "Decrease in Resolution Time",
    marketValue: "09",
    marketVariant: "success",
    title: "24d 14h",
  },
  {
    label: "Decrease in First Response Time ",
    marketValue: "15",
    marketVariant: "success",
    title: "1d 17h",
  },
];

const charts = {
  timeSavedAIvsHuman: {
    labels: [
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
    ],
    datasets: [
      {
        label: "AI",
        data: [32, 30, 29, 29, 32, 36, 41, 46, 49, 47, 42, 35],
        borderColor: "#7856FF",
        backgroundColor: "#7856FF",
        tension: 0.5,
        pointBackgroundColor: "#7856FF",
        pointBorderColor: "#7856FF",
        pointRadius: 4,
      },
      {
        label: "Human Agents",
        data: [22, 26, 30, 34, 38, 41, 42, 40, 39, 39, 43, 48],
        borderColor: "#176448",
        backgroundColor: "#176448",
        tension: 0.5,
        pointBackgroundColor: "#176448",
        pointBorderColor: "#176448",
        pointRadius: 4,
      },
    ],
    min: 0,
    max: 60,
    legend: true,
  },
  mostCommonQueries: {
    labels: ["FAQs", "Order", "Sales", "Refund"],
    datasets: [
      {
        data: [94, 80, 65, 50],
        backgroundColor: ["#7855FF", "#166448", "#FFC563", "#0A0C14"],
        borderRadius: 40,
        borderWidth: 0,
        borderColor: "#7856FF",
        maxBarThickness: 24,
      },
    ],
    legend: false,
  },
  topHandoffReasons: {
    labels: [
      "Complexity",
      "Customer Request",
      "AI Confidence Level",
      "Escalated Cases",
    ],
    datasets: [
      {
        data: [94, 80, 65, 50],
        backgroundColor: ["#7855FF", "#166448", "#FFC563", "#0A0C14"],
        borderRadius: 40,
        borderWidth: 0,
        borderColor: "#7856FF",
        maxBarThickness: 24,
      },
    ],
    legend: false,
  },
  handoffTrends: {
    labels: [
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
    ],
    datasets: [
      {
        label: "",
        data: [-35, -22, -10, 2, 12, 20, 22, 18, 15, 16, 28, 42],
        borderColor: "#7856FF",
        backgroundColor: "#7856FF",
        tension: 0.5,
        pointBackgroundColor: "#7856FF",
        pointBorderColor: "#7856FF",
        pointRadius: 4,
      },
    ],
    min: -80,
    max: 80,
    legend: false,
  },
  customerSentiment: [
    { name: "Customers", percent: 75, color: "#166448" },
    { name: "Complaints", percent: 25, color: "#FE4234" },
  ],
  achievedVsBreached: {
    labels: [
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
    ],
    datasets: [
      {
        label: "Chargeback Success",
        data: [40, 50, 38, 42, 33, 47, 39, 44, 37, 43, 31, 49],
        backgroundColor: "#7856FF",
        borderRadius: 40,
        borderSkipped: false,
        borderWidth: 0,
        maxBarThickness: 16,
      },
      {
        label: "Failure Rate",
        data: [30, 40, 28, 32, 23, 37, 29, 34, 27, 33, 21, 39],
        backgroundColor: "#FE4333",
        borderRadius: 40,
        borderSkipped: false,
        borderWidth: 0,
        maxBarThickness: 16,
      },
    ],
    max: 60,
    yPercent: false,
  },
  automatedInteractions: {
    labels: [
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
    ],
    datasets: [
      {
        label: "Monthly Data",
        data: [40, 50, 38, 42, 33, 47, 39, 44, 37, 43, 31, 49],
        backgroundColor: "#176448",
        borderRadius: 40,
        borderSkipped: false,
        borderWidth: 0,
        borderColor: "#176448",
        maxBarThickness: 25,
      },
    ],
    max: 60,
    legend: false,
    yPercent: true,
  },
};

const botTraining = [
  {
    id: "AI-OOI",
    struggle: "Complex Queries",
    description: "Difficulty understanding multi-part questions",
    suggested: "Improve NLP & Context Retention",
    priority: "High",
  },
  {
    id: "AI-002",
    struggle: "Sentiment Detection",
    description: "Misinterprets sarcasm or emotions",
    suggested: "Enhance Sentiment Analysis Model",
    priority: "High",
  },
  {
    id: "AI-003",
    struggle: "Industry-Specific Terms",
    description: "Industry-Specific Terms",
    suggested: "Train on Specialized Datasets",
    priority: "Medium",
  },
  {
    id: "AI-004",
    struggle: "Multi-Language Support",
    description: "Inaccurate responses in some languages",
    suggested: "Expand Language Training Set",
    priority: "Medium",
  },
  {
    id: "AI-005",
    struggle: "Handling Ambiguity",
    description: "Needs clarification for vague queries",
    suggested: "Implement Smart Follow-Ups",
    priority: "High",
  },
];

const agentPerformanceTable = [
  {
    name: "AI Agent Bot",
    closed: "1",
    ofClosed: "100",
    average: "-",
    replied: "1",
    massage: "1",
    firstResponseTime: "11s",
    resolutionTime: "-",
    oneTouchTickets: "-",
    onlineTime: "-",
    messagesSentPerHour: "-",
    ticketsRepliedPerHour: "-",
    closedTicketsPerHour: "-",
    ticketHandleTime: "-",
    zeroTouchTickets: "1",
  },
  {
    name: "AI Agent Bot",
    closed: "1",
    ofClosed: "100",
    average: "-",
    replied: "1",
    massage: "1",
    firstResponseTime: "11s",
    resolutionTime: "-",
    oneTouchTickets: "-",
    onlineTime: "-",
    messagesSentPerHour: "-",
    ticketsRepliedPerHour: "-",
    closedTicketsPerHour: "-",
    ticketHandleTime: "-",
    zeroTouchTickets: "1",
  },
  {
    name: "AI Agent Bot",
    closed: "1",
    ofClosed: "100",
    average: "-",
    replied: "1",
    massage: "1",
    firstResponseTime: "11s",
    resolutionTime: "-",
    oneTouchTickets: "-",
    onlineTime: "-",
    messagesSentPerHour: "-",
    ticketsRepliedPerHour: "-",
    closedTicketsPerHour: "-",
    ticketHandleTime: "-",
    zeroTouchTickets: "1",
  },
];

const ticketInsightsTop = [
  { label: "Close > Without message", total: 1 },
  { label: "Handover > With message", total: 1 },
];
const createdVsClosed = {
  labels: [
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
  ],
  datasets: [
    {
      label: "Created Tickets",
      data: [32, 30, 29, 29, 32, 36, 41, 46, 49, 47, 42, 35],
      borderColor: "#7856FF",
      backgroundColor: "#7856FF",
      tension: 0.5,
      pointBackgroundColor: "#7856FF",
      pointBorderColor: "#7856FF",
      pointRadius: 4,
    },
    {
      label: "Closed Tickets",
      data: [22, 26, 30, 34, 38, 41, 42, 40, 39, 39, 43, 48],
      borderColor: "#FFC563",
      backgroundColor: "#FFC563",
      tension: 0.5,
      pointBackgroundColor: "#FFC563",
      pointBorderColor: "#FFC563",
      pointRadius: 4,
    },
  ],
  min: 0,
  max: 60,
  legend: true,
};
const allUsedValues = [
  {
    value: "Close",
    total: "1",
    li1: "-",
    li2: "-",
    li3: "-",
    li4: "-",
    li5: "-",
  },
  {
    value: "Handover",
    total: "1",
    li1: "-",
    li2: "-",
    li3: "-",
    li4: "-",
    li5: "-",
  },
  {
    value: "Close",
    total: "1",
    li1: "-",
    li2: "-",
    li3: "-",
    li4: "-",
    li5: "-",
  },
];
const flowsPerformance = [
  {
    flow: "Shelf life information",
    drop: "0",
    rate: "100",
    automated: "2",
    served: "0",
  },
  {
    flow: "Shipping policy",
    drop: "1",
    rate: "80",
    automated: "4",
    served: "0",
  },
  {
    flow: "Shelf life information",
    drop: "0",
    rate: "0",
    automated: "2",
    served: "1",
  },
];

app.get("/api/dashboard/ai-bot-performance/summary", (req, res) =>
  res.json({ success: true, data: summary })
);
app.get("/api/dashboard/ai-bot-performance/summary2", (req, res) =>
  res.json({ success: true, data: summary2 })
);
app.get("/api/dashboard/ai-bot-performance/summary3", (req, res) =>
  res.json({ success: true, data: summary3 })
);
app.get("/api/dashboard/ai-bot-performance/charts", (req, res) =>
  res.json({ success: true, data: charts })
);
app.get("/api/dashboard/ai-bot-performance/bot-training", (req, res) =>
  res.json({ success: true, data: botTraining })
);
app.get(
  "/api/dashboard/ai-bot-performance/agent-performance-table",
  (req, res) => res.json({ success: true, data: agentPerformanceTable })
);
app.get("/api/dashboard/ai-bot-performance/ticket-insights-top", (req, res) =>
  res.json({ success: true, data: ticketInsightsTop })
);
app.get("/api/dashboard/ai-bot-performance/created-vs-closed", (req, res) =>
  res.json({ success: true, data: createdVsClosed })
);
app.get("/api/dashboard/ai-bot-performance/all-used-values", (req, res) =>
  res.json({ success: true, data: allUsedValues })
);
app.get("/api/dashboard/ai-bot-performance/flows-performance", (req, res) =>
  res.json({ success: true, data: flowsPerformance })
);

module.exports = app;
