const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());

// Enable CORS
app.use(cors());

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
        {
            id: 3,
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
            answer: "Leonardo da Vinci",
        },
        {
            id: 4,
            question: "What is the largest mammal in the world?",
            options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            answer: "Blue Whale",
        },
        {
            id: 5,
            question: "What is the largest ocean in the world?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "Pacific Ocean",
        },
        {
            id: 6,
            question: "What is the largest planet in the Solar System?",
            options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
            answer: "Jupiter",
        },
        {
            id: 7,
            question: "What is the smallest country in the world?",
            options: ["Monaco", "Maldives", "Vatican City", "San Marino"],
            answer: "Vatican City",
        },
        {
            id: 8,
            question: "What is the hottest planet in the Solar System?",
            options: ["Mercury", "Venus", "Mars", "Jupiter"],
            answer: "Venus",
        },
        {
            id: 9,
            question: "What is the largest country in the world?",
            options: ["Canada", "China", "Russia", "United States"],
            answer: "Russia",
        },
        {
            id: 10,
            question: "What is the longest river in the world?",
            options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
            answer: "Nile River",
        },
    ];
    res.json(quizData.slice().sort(() => 0.5 - Math.random()).slice(0, 5));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
