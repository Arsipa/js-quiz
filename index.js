const quizData = [
    {
        question: "Что является ягодой?",
        a: "Дыня",
        b: "Арбуз",
        c: "Морковь",
        d: "Огурец",
        correct: "b",
    },
    {
        question: "Где восходит солнце?",
        a: "На Востоке",
        b: "На Западе",
        c: "На Юге",
        d: "На Севере",
        correct: "a",
    },
    {
        question: "При какой температуре замерзает вода?",
        a: "1°С",
        b: "-1°С",
        c: "0°С",
        d: "-5°С",
        correct: "c",
    },
    {
        question: "В каком году началась Вторая мировая война?",
        a: "1945",
        b: "1941",
        c: "1939",
        d: "1940",
        correct: "c",
    },
    {
        question: "Как называется наша галактика?",
        a: "Кошачий глаз",
        b: "Тумманость",
        c: "Андромеда",
        d: "Млечный путь",
        correct: "d",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
 
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Вы ответили правильно на ${score}/${quizData.length} вопросов.</h2>
                <button onclick="location.reload()">Перезагрузить</button>`;
        }
    }
});
