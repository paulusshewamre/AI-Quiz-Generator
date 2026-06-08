const express = require("express");
const cors = require("cors");

const quizRoutes = require("./routes/quizRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "AI Study Quiz Generator API"
  });
});

app.use("/api", quizRoutes);

module.exports = app;