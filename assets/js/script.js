var timer = document.getElementById("time");
var mainEl = document.getElementById("main");
var startQuizBtn = document.querySelector("#start-quiz");
var startPage = document.querySelector("#start-page");

function countdown() {
    var secondsLeft = 75;

    var timeInterval = setInterval(function() {
    
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft
        if(secondsLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}

countdown();

startQuizBtn.addEventListener("click", function() {
    startPage.setAttribute("class", "hidden");
    renderFirstQuestion()
});

function renderFirstQuestion() {
    var heading = document.querySelector("#heading")
    var choicesContainer = document.querySelector("#choices")
    var questionTitle = document.querySelector("#heading").children
    var choices = document.querySelector("#choices").children
    heading.classList.remove("hidden")
    choicesContainer.classList.remove("hidden")
    questionTitle[0].classList.remove("hidden")
    choices[0].classList.remove("hidden")
}

choice[0].addEventListener("click", function() {
    questionTitle[1].classList.remove("hidden")
    renderSecondQuestion()
})

function renderSecondQuestion() {
    heading.classList.remove("hidden")
    choicesContainer.classList.remove("hidden")
    questionTitle[1].classList.remove("hidden")
    choices[1].classList.remove("hidden")
}

choice[1].addEventListener("click", function() {
    questionTitle[2].classList.remove("hidden")
    renderThirdQuestion()
})

function renderThirdQuestion() {
    heading.classList.remove("hidden")
    choicesContainer.classList.remove("hidden")
    questionTitle[2].classList.remove("hidden")
    choices[2].classList.remove("hidden")
}

choice[2].addEventListener("click", function() {
    questionTitle[3].classList.remove("hidden")
    renderFourthQuestion()
})

function renderFourthQuestion() {
    heading.classList.remove("hidden")
    choicesContainer.classList.remove("hidden")
    questionTitle[3].classList.remove("hidden")
    choices[3].classList.remove("hidden")
}

choice[3].addEventListener("click", function() {
    questionTitle[4].classList.remove("hidden")
    renderFifthQuestion()
})

function renderFifthQuestion() {
    heading.classList.remove("hidden")
    choicesContainer.classList.remove("hidden")
    questionTitle[4].classList.remove("hidden")
    choices[4].classList.remove("hidden")
}

choice[4].addEventListener("click", function() {
    questionTitle[5].classList.remove("hidden")
    renderAllDone()
})

function allDone() {

}

// function answers() {
//     if (userChoice = question[0].answer) {
//         answer1.textContent = ("Correct!")
// }   else {
//         answer1.textContent = ("Wrong!")
// }
// }

function gameOver() {
    if(countdown === 0) {
        clearInterval(timeInterval)
        gameOver.textContent = "Game Over!"
    }
}