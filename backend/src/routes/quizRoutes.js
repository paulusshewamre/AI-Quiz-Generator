const express = require("express");

const {
  generateQuizController,
} = require("../controllers/quizController");

const router = express.Router();

router.post(
  "/generate-quiz",
  generateQuizController
);

module.exports = router;