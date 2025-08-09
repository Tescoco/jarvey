// Mock API for About System page
const express = require("express");
const app = express.Router();

app.get("/api/admin/about-system", (req, res) => {
  // Return mock data that matches the structure used in AboutSystem.jsx
  return res.json({
    serverInfo: [
      {
        title: "Server Information",
        list: [
          {
            name: "PHP versions",
            value: "8.2.4",
            status: null,
          },
          {
            name: "Laravel versions",
            value: "8.83.29",
            status: null,
          },
          {
            name: "HTTP host",
            value: "jarvey.ai",
            status: null,
          },
        ],
      },
      {
        title: "Extensions",
        list: [
          {
            name: "openssl",
            value: null,
            status: true,
          },
          {
            name: "pfo",
            value: null,
            status: false,
          },
          {
            name: "mbstring",
            value: null,
            status: true,
          },
          {
            name: "tokenizer",
            value: null,
            status: true,
          },
        ],
      },
    ],
    config: [
      {
        name: "File Upload",
        current: "on",
        recommend: "on",
        status: true,
      },
      {
        name: "Max input time",
        current: "20",
        recommend: "20+",
        status: false,
      },
      {
        name: "File Upload",
        current: "on",
        recommend: "on",
        status: true,
      },
      {
        name: "Max input time",
        current: "20",
        recommend: "20+",
        status: false,
      },
      {
        name: "File Upload",
        current: "on",
        recommend: "on",
        status: true,
      },
      {
        name: "Max input time",
        current: "20",
        recommend: "20+",
        status: false,
      },
      {
        name: "File Upload",
        current: "on",
        recommend: "on",
        status: true,
      },
      {
        name: "Max input time",
        current: "20",
        recommend: "20+",
        status: false,
      },
    ],
  });
});

module.exports = app;
