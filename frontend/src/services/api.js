export async function generateQuiz(notes) {
  const res = await fetch("http://localhost:5000/api/generate-quiz", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ notes }),
  });

  if (!res.ok) {
    throw new Error("API error");
  }

  return res.json();
}