const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/docs", require("./routes/docRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));
app.use("/api/refs", require("./routes/refRoutes"));

module.exports = app;
