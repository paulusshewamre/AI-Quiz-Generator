# API Design

## POST /api/generate-quiz

### Request

{
"notes": "TCP is a connection-oriented protocol."
}

### Response

{
"questions": [
{
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

## Future Endpoints

GET /api/quiz/:id

POST /api/save-quiz

POST /api/login

These are not part of the MVP.
