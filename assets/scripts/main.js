//Identify all variables
var navBar = document.getElementById("navigation-bar");
var timer = document.getElementById("timer");
//Container variables
var quizContainer = document.getElementById("quiz-container");
var cardHeader = document.getElementById("header");
var subHead = document.getElementById("sub-text");
var buttons = document.getElementById("buttons")
var start = document.getElementById("start");
//Questions container
var questionContainer = document.getElementById("question-container");
var questions = document.getElementById("question");
var answersA = document.getElementById("answerA");
var answersB = document.getElementById("answerB");
var answersC = document.getElementById("answerC");
var answersD = document.getElementById("answerD");
var answerCheck = document.getElementById("answer-check");
//Results container
var resultsContainer = document.getElementById("quiz-results");
var finalScore = document.getElementById("final-score");
var scoreName = document.getElementById("inlineFormInput");
var submitScore = document.getElementById("submit-score");
//High Score container
var highScoreContainer = document.getElementById("high-score");
var userRecord = document.getElementById("user-name");
var backButton = document.getElementById("back-button");
var clear = document.getElementById("clear-scores");

// Time 
var time;

//Start quiz
function startQuiz() {
    var timeInterval = setInterval(function () {
        time = 75;
        while (time > 0) {
            time--;
            timer.textContent = time;
            if (time === 0) {
                clearInterval(timeInterval);
            }
            return time;
        } 
    }, 1000);;
};

start.addEventListener("click", startQuiz);
console.log(event);