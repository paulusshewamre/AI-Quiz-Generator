import { useState } from "react";
import { generateQuiz } from "./services/api";

function App() {
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [error, setError] = useState("");

  async function handleGenerate() {
    if (!notes.trim()) {
      setError("Please enter notes");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const data = await generateQuiz(notes);
      setQuiz(data);
      setAnswers({});
      setScore(null);
    } catch (err) {
      setError("Failed to generate quiz");
    }

    setLoading(false);
  }

  function handleSelectAnswer(questionIndex, option) {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: option,
    }));
  }

  function calculateScore() {
    let s = 0;

    quiz.questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) {
        s++;
      }
    });

    setScore(s);
  }


  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "auto" }}>
      <h1>AI Study Quiz Generator</h1>

      {/* INPUT */}
      <textarea
        rows="8"
        style={{ width: "100%", marginTop: "10px" }}
        placeholder="Paste your study notes here..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <button onClick={handleGenerate} style={{ marginTop: "10px" }}>
        Generate Quiz
      </button>

      {/* LOADING */}
      {loading && <p>Generating quiz...</p>}

      {/* ERROR */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* QUIZ OUTPUT*/}
      {quiz && (
        <div style={{ marginTop: "20px" }}>
          <h2>Quiz</h2>

          {quiz.questions.map((q, index) => (
            <div
              key={index}
              style={{
                padding: "15px",
                border: "1px solid #ccc",
                marginBottom: "10px",
              }}
            >
              <h3>
                {index + 1}. {q.question}
              </h3>

              {q.options.map((opt, i) => (
                <label key={i} style={{ display: "block" }}>
                  <input
                    type="radio"
                    name={`q-${index}`}
                    value={opt}
                    checked={answers[index] === opt}
                    onChange={() => handleSelectAnswer(index, opt)}
                  />
                  {opt}
                </label>
              ))}
            </div>
          ))}

          <button onClick={calculateScore}>
            Submit Quiz
          </button>
        </div>
      )}

      {/* Score */}
      {score !== null && (
        <div style={{ marginTop: "20px" }}>
          <h2>Results</h2>

          <h3>
            Score: {score} / {quiz.questions.length}
          </h3>

          {quiz.questions.map((q, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <p>
                <b>Q{index + 1}:</b> {q.question}
              </p>

              <p>
                Your answer: {answers[index] || "Not answered"}
              </p>

              <p>
                Correct answer: <b>{q.correctAnswer}</b>
              </p>

              <hr />
            </div>
              ))}
            </div>
      )}
    </div>
  );
}

export default App;