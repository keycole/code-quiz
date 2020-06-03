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
var
//Results container
var resultsContainer = document.getElementById("quiz-results");
var finalScore = document.getElementById("final-score");
var nameField  = document.getElementById("inlineFormInput");
var submitScore = document.getElementById("submit-score");
//High Score container
var highScoreContainer = document.getElementById("high-score");
var userRecord = document.getElementById("user-name");
var backButton = document.getElementById("back-button");
var clear = document.getElementById("clear-scores");

// Time 
var time;

timer.textContent = time;

//Start quiz

start.addEventListener("click",  startTimer());

function startTimer () {
    time = 75;
    setInterval(function(){
        time--;
    } if (time === 0) {
        clearInterval(startTimer);
    }
};