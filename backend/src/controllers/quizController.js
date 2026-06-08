const { generateQuiz } = require("../services/aiService");

async function generateQuizController(req, res) {
  try {
    const { notes } = req.body;

    if (!notes) {
      return res.status(400).json({
        error: "Notes are required",
      });
    }

    const quizText = await generateQuiz(notes);

    const cleanedText = quizText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const quiz = JSON.parse(cleanedText);

    res.json(quiz);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to generate quiz",
    });
  }
}

module.exports = {
  generateQuizController,
};