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

    if(questions.matches("#first-question")) {
        var firstQuestion = document.getElementById("first-question");
        if (firstQuestion === "hidden") {
            questions.setAttribute(".start-page", "visible");
            var firstQuestion = questions.getAttribute(".first-question-answers");
            questions.textContent = firstQuestion
        } else {
            questions.setAttribute("hidden", "hidden");
            questions.textContent = " ";
        }
    }
});


// answerBtn.addEventListener("click", function(event))
    // var answers = event.target.matches(.first-question-answers);

// if(answers.matches("#second-question")) {
//     const state = answers.getAttribute("hidden");
//     if (state === "hidden") {
//         answers.setAttribute("third-question", "visible");
//         var secondQuestion = answers.getAttribute(".second-question-answers");
//         questions.textContent = secondQuestion
//     } else {
//        answers.setAttribute("hidden", "hidden");
//        answers.textContent = " ";
//     }
// }

// if(answers.matches("#third-question")) {
//     const state = answers.getAttribute("hidden");
//     if (state === "hidden") {
//         answers.setAttribute("fourth-question", "visible");
//         var thirdQuestion = answers.getAttribute(".third-question-answers");
//         answers.textContent = thirdQuestion
//     } else {
//        answers.setAttribute("hidden", "hidden");
//        answers.textContent = " ";
//     }
// }

// if(answers.matches("#fourth-question")) {
//     const state = answers.getAttribute("hidden");
//     if (state === "hidden") {
//         answers.setAttribute("fifth-question", "visible");
//         var fourthQuestion = answers.getAttribute(".fourth-question-answers");
//         answers.textContent = fourthQuestion
//     } else {
//         answers.setAttribute("hidden", "hidden");
//        answers.textContent = " ";
//     }
// }

// if(answers.matches("#fifth-question")) {
//     const state = answers.getAttribute("hidden");
//     if (state === "hidden") {
//         answers.setAttribute("all-done", "visible");
//         var fifthQuestion = answers.getAttribute(".fifth-question-answers");
//         answers.textContent = fifthQuestion
//     } else {
//         answers.setAttribute("hidden", "hidden");
//         answers.textContent = " ";
//     }
// }

// if(answers.matches("#all-done")) {
//     const state = answers.getAttribute("hidden");
//     if (state === "hidden") {
//         answers.setAttribute("hidden", "visible");
//         var firstQuestion = answers.getAttribute(".all-done");
//         answers.textContent = firstQuestion
//     } else {
//        answers.setAttribute("hidden", "hidden");
//        answers.textContent = " ";
//     }
// }