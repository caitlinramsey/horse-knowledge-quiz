var timer = document.getElementById("time");
var mainEl = document.getElementById("main");
var startQuizBtn = document.querySelector("#start-quiz");
var startPage = document.querySelector("#start-page");
var questionTitle = document.querySelector("#heading").children;
var heading = document.querySelector("#heading");
var choicesContainer = document.querySelector("#choices");
var submitBtn = document.querySelector("#submit");
var clearHighScoresBtn = document.querySelector("#clear-high-scores");
var choicesEl = document.querySelector("#choices");
var answer = document.querySelector("#answers");

function countdown() {
    var secondsLeft = 75;

    var timeInterval = setInterval(function() {
    
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft
        if(secondsLeft === 0) {
            clearInterval(timeInterval);
            setTimeout(gameOver(), 3000);
        }
    }, 1000);
}

countdown();

startQuizBtn.addEventListener("click", function() {
    startPage.setAttribute("class", "hidden");
    renderFirstQuestion()
});

function renderFirstQuestion() {
    var choices = document.querySelector("#choices").children
    heading.classList.remove("hidden")
    choicesContainer.classList.remove("hidden")
    questionTitle[0].classList.remove("hidden")
    choices[0].classList.remove("hidden")
    choices[1].classList.remove("hidden")
    choices[2].classList.remove("hidden")
    choices[3].classList.remove("hidden")
    heading.textContent = questions[0].question
    choices[0].textContent = questions[0].choice_A
    choices[1].textContent = questions[0].choice_B
    choices[2].textContent = questions[0].choice_C
    choices[3].textContent = questions[0].choice_D
}

// choices.addEventListener("click", function() {
//     questionTitle[1].classList.remove("hidden")
//     renderSecondQuestion()
// })

function renderSecondQuestion() {
    var choices = document.querySelector("#choices").children
    heading.classList.remove("hidden")
    choicesContainer.classList.remove("hidden")
    questionTitle[1].classList.remove("hidden")
    choices[0].classList.remove("hidden")
    choices[1].classList.remove("hidden")
    choices[2].classList.remove("hidden")
    choices[3].classList.remove("hidden")
    heading.textContent = questions[0].question
    choices[0].textContent = questions[0].choice_A
    choices[1].textContent = questions[0].choice_B
    choices[2].textContent = questions[0].choice_C
    choices[3].textContent = questions[0].choice_D
}

// choices.addEventListener("click", function() {
//     questionTitle[2].classList.remove("hidden")
//     renderThirdQuestion()
// })

function renderThirdQuestion() {
    var choices = document.querySelector("#choices").children
    heading.classList.remove("hidden")
    choicesContainer.classList.remove("hidden")
    questionTitle[2].classList.remove("hidden")
    choices[0].classList.remove("hidden")
    choices[1].classList.remove("hidden")
    choices[2].classList.remove("hidden")
    choices[3].classList.remove("hidden")
    heading.textContent = questions[0].question
    choices[0].textContent = questions[0].choice_A
    choices[1].textContent = questions[0].choice_B
    choices[2].textContent = questions[0].choice_C
    choices[3].textContent = questions[0].choice_D
}

// choices.addEventListener("click", function() {
//     questionTitle[3].classList.remove("hidden")
//     renderFourthQuestion()
// })

function renderFourthQuestion() {
    var choices = document.querySelector("#choices").children
    heading.classList.remove("hidden")
    choicesContainer.classList.remove("hidden")
    questionTitle[3].classList.remove("hidden")
    choices[0].classList.remove("hidden")
    choices[1].classList.remove("hidden")
    choices[2].classList.remove("hidden")
    choices[3].classList.remove("hidden")
    heading.textContent = questions[0].question
    choices[0].textContent = questions[0].choice_A
    choices[1].textContent = questions[0].choice_B
    choices[2].textContent = questions[0].choice_C
    choices[3].textContent = questions[0].choice_D
}

// choices.addEventListener("click", function() {
//     questionTitle[4].classList.remove("hidden")
//     renderFifthQuestion()
// })

function renderFifthQuestion() {
    var choices = document.querySelector("#choices").children
    heading.classList.remove("hidden")
    choicesContainer.classList.remove("hidden")
    questionTitle[4].classList.remove("hidden")
    choices[0].classList.remove("hidden")
    choices[1].classList.remove("hidden")
    choices[2].classList.remove("hidden")
    choices[3].classList.remove("hidden")
    heading.textContent = questions[0].question
    choices[0].textContent = questions[0].choice_A
    choices[1].textContent = questions[0].choice_B
    choices[2].textContent = questions[0].choice_C
    choices[3].textContent = questions[0].choice_D
}

// choices.addEventListener("click", function() {
//     questionTitle[5].classList.remove("hidden")
//     renderAllDone()
// })

var currentQuestionIndex = 0

function createQuestion() {
    console.log(questions)
    var currentQuestion = questions[currentQuestionIndex];


    for (var i = 0; i<currentQuestion.choices.length; i++) {

    }

    currentQuestionIndex++

}

function answerCheck(event) {

    var userChoice = event.target

    if (userChoice = questions.answer) {
        answer.textContent = "Correct!"
    } else {
        answer.textContent = "Wrong!"
    }

    currentQuestionIndex++

    createQuestion();
}

function allDone() {

}

function gameOver() {
    if(countdown === 0) {
        clearInterval(timeInterval)
        gameOver.textContent = "Game Over!"
        alert = "Game Over!"
    }
}

// submitBtn.addEventListener("click", function(event) {
// event.preventDefault();

// var highScore = localStorage.getItem("high-scores")

// localStorage.setItem("highScore", JSON.stringify(highScore))
// window.location.href = "./high-scores.html"

// });

// clearHighScoresBtn.addEventListener("click", function() {
//     localStorage.clear();
// })

choicesEl.onclick = answerCheck