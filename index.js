//fecth data from local JSON file using http request and callbacks
let questionT = document.getElementById("question");
let alts = document.querySelectorAll(".answer");
let num = document.querySelector(".qNumber");
//creating empty object
let currentQuestion = {};
let scoreText = document.querySelector(".scoreText");

//creating empty array
let totalOfQuestions = [];
let questions = [];
//set values to zero
let numerodePreg = 0;
let score = 0;

//Get data from question.JSON local file
var myRequest = new Request("questions.json"); //GET

//fectch data
fetch(myRequest)
  .then((res) => res.json())
  .then((loadedQuestions) => {
    //all questions from json file are added to questions array
    questions = loadedQuestions;
    //start quiz
    quiz();
  })
  .catch((err) => {
    //console.log any error for debug
    console.error(err);
  });

//quiz started
function quiz() {
  totalOfQuestions = [...questions]; //Spread operator

  //since numdePreg is set to cero, call next question with possible answers
  nextQuestions();
  showAlts();
}

function nextQuestions() {
  //checks questions will stop showing after question # 6.
  if (totalOfQuestions.length === 0 || numerodePreg === 6) {
    finalCard();
  }
  //increase question number and score
  numerodePreg += 1;
  num.innerText = `Question ${numerodePreg} / 6`;
  scoreText.innerHTML = `Score: ${score}`;

  //show questions randomly
  let qIndex = Math.floor(Math.random() * totalOfQuestions.length);
  currentQuestion = totalOfQuestions[qIndex]; //created an index to access each one of the questions
  questionT.innerText = currentQuestion.questiontitle;

  alts.forEach((alt) => {
    let number = alt.dataset["number"]; //an id of each choice in html file
    alt.innerText = currentQuestion["alternatives"][number]; //example: question 5[altermnatives][alternative 3]
  });

  totalOfQuestions.splice(qIndex, 1);
  //qindex is the position of the first item to be deleted
  //1 is the number of items to be deleted
}

//possible answers
function showAlts() {
  alts.forEach((alt) => {
    let number = alt.dataset["number"]; //an id of each choice in html file
    alt.innerText = currentQuestion["alternatives"][number]; //example: question 5[altermnatives][alternative 3]
    alt.addEventListener("click", function () {
      if (currentQuestion.correctAnswer == number) {
        //if correct, increase score and show next question
        score += 1;
        nextQuestions();
      } else {
        alt.textContent = "Try Again";
      }
    });
  });
}

//Timer Function
function time() {
  let time = 25; //25 seconds for the whole game
  let counting = document.getElementById("timer");
  function startCountdown() {
    let quizTimer = setInterval(function () {
      if (time == 0) {
        //stop counting when time == 0 and stop showing questions
        clearInterval(quizTimer);
        finalCard();
      } else {
        //show current time
        counting.innerHTML = `TIME: ${time}`;
      }
      time -= 1;
    }, 1000);
  }
  startCountdown();
}
time(25);

//display questions sections
function cardDisplay() {
  let card2 = (document.getElementById("card2").style.display = "none");
  let card = (document.getElementById("card").style.display = "block");
}

//You made it to the end
function finalCard() {
  var card = (document.getElementById("card").style.display = "none");
  var card3 = (document.getElementById("cardThree").style.display = "block");
}
