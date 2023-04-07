var timeEl = document.getElementById("time");
var mainEl = document.getElementById("main");

function countdown() {
    var secondsLeft = 75;

    var timeInterval = setInterval(function() {
    
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft
        if(secondsLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}

countdown();

var startQuizBtn = document.querySelector("#start-quiz");

startQuizBtn.addEventListener("click", function(event) {
    var questions = event.target;

    if(questions.matches(".start-page")) {
        const state = questions.getAttribute("data-state");
        if (state === "hidden") {
            questions.setAttribute("data-state", "visible");
            var firstQuestion = questions.getAttribute(".start-page");
            questions.textContent = firstQuestion
        } else {
            questions.setAttribute("data-state", "hidden");
            questions.textContent = " ";
        }
    }

    if(questions.matches(".first-question")) {
        const state = questions.getAttribute("data-state");
        if (state === "hidden") {
            questions.setAttribute("data-state", "visible");
            var firstQuestion = questions.getAttribute(".first-question-answers");
            questions.textContent = firstQuestion
        } else {
            questions.setAttribute("data-state", "hidden");
            questions.textContent = " ";
        }
    }

    if(questions.matches(".second-question")) {
        const state = questions.getAttribute("data-state");
        if (state === "hidden") {
            questions.setAttribute("data-state", "visible");
            var firstQuestion = questions.getAttribute(".second-question-answers");
            questions.textContent = firstQuestion
        } else {
            questions.setAttribute("data-state", "hidden");
            questions.textContent = " ";
        }
    }

    if(questions.matches(".third-question")) {
        const state = questions.getAttribute("data-state");
        if (state === "hidden") {
            questions.setAttribute("data-state", "visible");
            var firstQuestion = questions.getAttribute(".third-question-answers");
            questions.textContent = firstQuestion
        } else {
            questions.setAttribute("data-state", "hidden");
            questions.textContent = " ";
        }
    }

    if(questions.matches(".fourth-question")) {
        const state = questions.getAttribute("data-state");
        if (state === "hidden") {
            questions.setAttribute("data-state", "visible");
            var firstQuestion = questions.getAttribute(".fourth-question-answers");
            questions.textContent = firstQuestion
        } else {
            questions.setAttribute("data-state", "hidden");
            questions.textContent = " ";
        }
    }

    if(questions.matches(".fifth-question")) {
        const state = questions.getAttribute("data-state");
        if (state === "hidden") {
            questions.setAttribute("data-state", "visible");
            var firstQuestion = questions.getAttribute(".fifth-question-answers");
            questions.textContent = firstQuestion
        } else {
            questions.setAttribute("data-state", "hidden");
            questions.textContent = " ";
        }
    }

    if(questions.matches(".all-done")) {
        const state = questions.getAttribute("data-state");
        if (state === "hidden") {
            questions.setAttribute("data-state", "visible");
            var firstQuestion = questions.getAttribute(".all-done");
            questions.textContent = firstQuestion
        } else {
            questions.setAttribute("data-state", "hidden");
            questions.textContent = " ";
        }
    }
});