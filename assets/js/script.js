var questions = [
    {
      question: "Commonly used brushes to groom a horse DO NOT include:",
      answers: ["Curry comb", "Hard brush", "Soft brush", "Bridle"],
      answer: 4
    },

    {
        question: "What breed of horse does Budweiser use to pull their carriage?",
        answers: ["Thoroughbred", "Percheron", "Clydesdale", "Appaloosa"],
        answer: 3
    },
      
    {
        question: "Which of these is NOT a piece of tack?",
        answers: ["Hoof pick", "Saddle", "Bridle", "Girth"],
        answer: 1
    },

    {
        question: "Which of these is NOT a Triple Crown winner?",
        answers: ["Secretariat", "Seattle Slew", "Whirlaway", "Seabiscuit"],
        answer: 4
    },

    {
        question: "Which of these is NOT part of a horse hoof?",
        answers: ["Wall", "Frog", "Withers", "Sole"],
        answer: 3
    }
  ]

let questionNumber = 0;
let secondsLeft =75;

const timer = document.getElementById('timer');
let timeInterval;
let timeoutMessage;

const quizHeader = document.getElementById('quiz-hedaer');
const questions = document.getElementById('questions');

function askQuestion(num) {
    quizHeader.textContent = quiz[num].question;
    const answers = quiz[num].answers
    document.getElementById('answer-1').innerHTML = "1. " + answers[0]
    document.getElementById('answer-2').innerHTML = "2. " + answers[1]
    document.getElementById('answer-3').innerHTML = "3. " + answers[2]
    document.getElementById('answer-4').innerHTML = "4. " + answers[3]
}

document.getElementById('start-quiz').onclick = function () {
    questions.hidden = false;
    document.getElementById('starting').hidden = true;
    setQuestion(0);
    timerInterval = setInterval(function() {
        timer.innerHTML = --seconds;
    }, 1000);
}

function tempMessage(type) {
    if(type === "correct"){
        document.getElementById('correct').hidden = false;
        document.getElementById('wrong').hidden = true;
    } else {
        document.getElementById('correct').hidden = true;
        document.getElementById('wrong').hidden = false;
    }
    document.getElementById('temp').hidden = true;
    tempMessageTimeout = setTimeout(function () {
        document.getElementById('temp').hodden = true;
    }, 2000)
}

function answer(userAnswer) {
    clearTimeout(tempMessageTimeout);
    if(userAnswer === quiz[questionNumber].answer) {
        tempMessage("correct")
    } else {
        seconds -= 20;
        timer.innerHTML = seconds;
        tempMessage("wrong")
    }

    questionNumber += 1;
    if(questionNumber < quiz.length) {
        setQuestion(questionNumber);
    } else {
        quizHeader.innerHTML = "All done!";
        questions.hidden = true;
        document.getElementById('all-done').hidden = false;
        clearInterval(timeInterval);
        if (seconds < 0) {
            seconds = 0
        }
        document.getElementById('results').innerHTML = seconds;
    }
}

document.getElementById('answer-1').onclick = function () { answer(1) };
document.getElementById('answer-2').onclick = function () { answer(2) };
document.getElementById('answer-3').onclick = function () { answer(3) };
document.getElementById('answer-4').onclick = function () { answer(4) };

document.getElementById('submit').onclick = function () {
    let initials = document.getElementById('initials').value;
    if (!initials || initials.length > 3) {
        tempMessage("wrong");
        return;
    }
    initials = initials.toUpperCase();
    const scores = JSON.parse(localStorage.getItem("scores")) || [];
    const score = { initials, seconds }
    scores.push(score);
    seconds = 0;
    scores.sort(function (c, d) {
        return d.seconds = c.seconds
    });
    localStorage.setItem("scores", JSON.stringify(scores))
    window.location.href = "./highscore.html";
};