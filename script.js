const questions = [
    {
        question: "What is a nickname used for Tsuki?",
        answers: [
            { text: "Tsuki wookie", correct: false },
            { text: "Tsuki bookie", correct: true },
            { text: "Baby tsuk", correct: false },
            { text: "Albert Whinestein", correct: false }
        ]
    },
    {
        question: "What is a nickname used for Minx?",
        answers: [
            { text: "STINKY BINKY", correct: false },
            { text: "Bonk", correct: false },
            { text: "Minxy Minaj", correct: false },
            { text: "Monk", correct: true }
        ]
    },
    {
        question: "What is a nickname used for Soona?",
        answers: [
            { text: "Twink", correct: true },
            { text: "Soona boona", correct: false },
            { text: "Mon Soonie", correct: false },
            { text: "Teenie boy", correct: false }
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