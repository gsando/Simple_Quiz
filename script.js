const questions = [
    {
        question: "What is the largest living reptile?",
        answers: [
            { text: "Mugger Crocodile", correct: false },
            { text: "Saltwater Crocodile", correct: true },
            { text: "Black Caiman", correct: false },
            { text: "Leatherback sea turtle", correct: false }
        ]
    },
    {
        question: "Where was paper money first used?",
        answers: [
            { text: "USA", correct: false },
            { text: "Greece", correct: false },
            { text: "Turkey", correct: false },
            { text: "China", correct: true }
        ]
    },
    {
        question: "Which horoscope's sign is a fish?",
        answers: [
            { text: "Pisces", correct: true },
            { text: "Cancer", correct: false },
            { text: "Taurus", correct: false },
            { text: "Gemini", correct: false }
        ]
    },
    {
        question: "Which of these is not a fruit?",
        answers: [
            { text: "Tomatoes", correct: false },
            { text: "Pea pods", correct: false },
            { text: "Figs", correct: true },
            { text: "Corn", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerButtons");
const nextButton = document.getElementById("nextButton");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
}