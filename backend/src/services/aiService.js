const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function generateQuiz(notes) {
  const prompt = `
Generate exactly 5 multiple-choice questions from the notes below.

Return ONLY valid JSON.

Format:

{
  "questions": [
    {
      "id": 1,
      "question": "",
      "options": ["","","",""],
      "correctAnswer": ""
    }
  ]
}

Notes:
${notes}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
}

module.exports = {
  generateQuiz,
};