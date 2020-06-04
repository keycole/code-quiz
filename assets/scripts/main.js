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
var time = 10;

//Start quiz
start.addEventListener("click", startQuiz);
console.log(event);

function startQuiz() {
    var timeInterval = setInterval(function () {
        timer.textContent = time;
        time--;
            if (time === -1) { //unsure why this needs to be -1, but it is the only way I get to display 1 before clearInterval
                clearInterval(timeInterval);
                time = 10;
            }
    }, 1000);;
};

//Hide start screen