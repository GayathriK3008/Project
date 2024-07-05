const quizData = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "Who wrote 'Hamlet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "Leo Tolstoy", correct: false },
            { text: "Charles Dickens", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Neptune", correct: false },
            { text: "Mars", correct: false }
        ]
    }
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

function buildQuiz() {
    quizData.forEach((questionObj, index) => {
        const questionElem = document.createElement('div');
        questionElem.classList.add('question');
        questionElem.innerHTML = `
            <div class="question-text">${index + 1}. ${questionObj.question}</div>
            <div class="answers">
                ${questionObj.answers.map(answer => `
                    <label>
                        <input type="radio" name="question${index}" value="${answer.text}">
                        ${answer.text}
                    </label>
                `).join('')}
            </div>
        `;
        quizContainer.appendChild(questionElem);
    });
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let score = 0;

    quizData.forEach((questionObj, index) => {
        const answerContainer = answerContainers[index];
        const selector = `input[name=question${index}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === questionObj.answers.find(answer => answer.correct).text) {
            score++;
        }
    });

    alert(`You scored ${score} out of ${quizData.length}`);
}

buildQuiz();

submitButton.addEventListener('click', showResults);
