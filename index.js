//fecth data from local JSON file using http request and callbacks
let questionT = document.getElementById("question");
let alts = document.querySelectorAll(".answer");
let num = document.querySelector(".qNumber");
let currentQuestion = {};
let scoreText = document.querySelector(".scoreText");

let totalOfQuestions = [];
let numerodePreg = 0;
let score = 0;

let questions = [];
//Get data from question.JSON local file
var myRequest = new Request("questions.json"); //GET

fetch(myRequest)
  .then((res) => res.json())
  .then((loadedQuestions) => {
    questions = loadedQuestions;
    quiz();
  })
  .catch((err) => {
    console.error(err);
  });


function quiz() {
  totalOfQuestions = [...questions]; //Spread operator
  nextQuestions();
}

function nextQuestions() {
  //checks questions will stop showing after question # 6.
  if (totalOfQuestions.length === 0 || numerodePreg === 6) {
    finalCard()
  }
    numerodePreg ++;
    num.innerText = `Question ${numerodePreg} / 6`;
    scoreText.innerHTML = `Score: ${score}`

  //show questions randomly
  //CHANGE THIS PART SO IT DOES NOT SHOW RANDOMLY TO AVOID REPETITIONs
  let qIndex = Math.floor(Math.random() * totalOfQuestions.length);
  currentQuestion = totalOfQuestions[qIndex]; //created an index to access each one of the questions
  questionT.innerText = currentQuestion.questiontitle;

  //alternatives
  alts.forEach((alt) => {
    let number = alt.dataset["number"]; //an id of each choice in html file
    alt.innerText = currentQuestion["alternatives"][number]; //example: question 5[altermnatives][alternative 3]
    alt.addEventListener("click", function () {
      if (currentQuestion.correctAnswer == number) {
        alt.textContent = "Correct Answer";
        scoreUp()
        setTimeout(() => {
          nextQuestions();
        }, 1000);
      } else {
        alt.textContent = "Try Again";
      }
    });
  });

  totalOfQuestions.splice(qIndex, 1);
}

function scoreUp(){
    score+= 1;
    scoreText.innerText = `Score: ${score}`;
}



//Game timer

//Timer Function
function time() {
    let time = 25;
    let counting = document.getElementById("timer");

    function startCountdown() {
        let quizTimer = setInterval(function () {
            if (time == 0) {
                clearInterval(quizTimer);
                finalCard()
            } else {
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
function finalCard(){
    var card = (document.getElementById("card").style.display = "none");
    var card3 = (document.getElementById("cardThree").style.display = "block");
}