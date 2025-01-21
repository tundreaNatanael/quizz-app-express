const express = require('express');
const app = express();

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/quiz', (req, res) => {
    const quizData = [
        {
            id: 1,
            question: "Which planet in the Solar System is the smallest?",
            options: ["Pluto", "Earth", "Mercury", "Mars"],
            answer: "Mercury",
        },
        {
            id: 2,
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris",
        },
        {
            id: 3,
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
            answer: "Leonardo da Vinci",
        },
    ];
    res.json(quizData);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
