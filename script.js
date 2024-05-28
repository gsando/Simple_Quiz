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
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
            score++;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = "true";
    })
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = `Play again`;
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();