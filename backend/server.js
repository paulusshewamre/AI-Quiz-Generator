require("dotenv").config();

const app = require("./src/app");

const PORT = process.env.PORT || 5000;

const apiKey = process.env.GEMINI_API_KEY;
console.log("API KEY LOADED:", !!apiKey);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});