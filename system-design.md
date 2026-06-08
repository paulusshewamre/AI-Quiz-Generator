# AI Study Quiz Generator - System Design

## 1. Overview

The AI Study Quiz Generator allows students to paste study notes and generate multiple-choice quiz questions using AI.

The application consists of:

* React frontend
* Express backend
* OpenAI API integration

---

## 2. Architecture

Frontend (React)
|
| HTTP Request
v
Backend (Express)
|
| AI Request
v
OpenAI API
|
v
Quiz JSON
|
v
Frontend

### Flow

1. User enters study notes.
2. Frontend sends notes to backend.
3. Backend sends prompt to AI.
4. AI generates quiz questions.
5. Backend returns quiz JSON.
6. Frontend displays quiz.
7. User answers questions.
8. Frontend calculates score.
9. Results are displayed.

---

## 3. Folder Structure

### Root Structure

ai-study-quiz-generator/

├── requirements.md

├── use-cases.md

├── api-design.md

├── project-plan.md

├── system-design.md

├── frontend/

└── backend/

---

### Backend Structure

backend/

├── src/

│ ├── routes/

│ │ └── quizRoutes.js

│ │

│ ├── controllers/

│ │ └── quizController.js

│ │

│ ├── services/

│ │ └── aiService.js

│ │

│ └── app.js

│

├── server.js

├── package.json

└── .env

---

### Frontend Structure

frontend/

├── src/

│ ├── components/

│ │ ├── NotesForm.jsx

│ │ ├── Quiz.jsx

│ │ └── Results.jsx

│ │

│ ├── services/

│ │ └── api.js

│ │

│ ├── App.jsx

│ └── main.jsx

│

├── package.json

└── vite.config.js

---

## 4. Component Design

### NotesForm

Responsibilities:

* Accept study notes
* Trigger quiz generation

Inputs:

* Notes text

Outputs:

* Generate quiz request

---

### Quiz

Responsibilities:

* Display questions
* Capture user answers

Inputs:

* Questions array

Outputs:

* User answers

---

### Results

Responsibilities:

* Display score
* Display correct answers

Inputs:

* Score
* Questions
* Answers

Outputs:

* Final quiz results

---

## 5. State Management

Application state will be stored in App.jsx.

State Variables:

notes

questions

answers

score

Purpose:

notes -> stores user notes

questions -> stores generated quiz questions

answers -> stores selected answers

score -> stores final score

---

## 6. API Design

Endpoint:

POST /api/generate-quiz

Request:

{
"notes": "TCP is a connection-oriented protocol."
}

Response:

{
"questions": [
{
"id": 1,
"question": "Which protocol is connection-oriented?",
"options": [
"UDP",
"TCP",
"FTP",
"SMTP"
],
"correctAnswer": "TCP"
}
]
}

---

## 7. AI Prompt Design

Prompt Template:

Generate exactly 5 multiple-choice questions from the notes below.

Return ONLY valid JSON.

Format:

{
"questions": [
{
"id": 1,
"question": "",
"options": [],
"correctAnswer": ""
}
]
}

Notes:

{{NOTES}}

---

## 8. Screen Design

### Screen 1

AI Study Quiz Generator

[ Notes Text Area ]

[ Generate Quiz ]

---

### Screen 2

Quiz

Question 1

Question 2

Question 3

Question 4

Question 5

[ Submit ]

---

### Screen 3

Results

Score: X/5

Correct Answers

Question Review

---

## 9. Error Handling

### Empty Notes

Condition:

User submits empty notes.

Expected Result:

Display error message.

"Please enter study notes."

---

### AI Failure

Condition:

AI service unavailable.

Expected Result:

Display error message.

"Unable to generate quiz. Please try again."

---

### Invalid Response

Condition:

AI returns invalid JSON.

Expected Result:

Display error message.

"Quiz generation failed."

---

## 10. Future Improvements

* User authentication
* Quiz history
* Difficulty levels
* Flashcard generation
* Study analytics
* PDF uploads
* Multiple quiz types
* Dashboard
