var timeEl = document.querySelector(".time");

var mainEl = document.getElementById("main");

var secondsLeft = 75;

var timeInterval = setInterval(function() {
    
    var timeLeft = secondsLeft - 1000;
    timeEl.textContent = "Time: " + secondsLeft

    if (timeLeft < 0) {
        clearInterval(timeInterval);
    }
}, 1000);

var startQuizBtn = document.querySelector("#start-quiz");

startQuizBtn.addEventListener("click", );