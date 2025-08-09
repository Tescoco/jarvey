const express = require("express");
const app = express.Router();

app.use(require("./about_system"));
app.use(require("./ai_configuration"));
app.use(require("./app_settings"));
app.use(require("./dos_security"));
app.use(require("./manage_user"));
app.use(require("./manage_language"));
app.use(require("./translate_language"));
app.use(require("./notification_setting"));
app.use(require("./profile"));
app.use(require("./system_configuration"));
app.use(require("./visitors"));
app.use(require("./global_template"));

module.exports = app;
