//Timer Function
function time() {
let time = 20;
let counting = document.getElementById("timer");

function startCountdown() {
    let quizTimer = setInterval(function() {
        if (time <= 0) {
            clearInterval(quizTimer);
        } else {
            counting.innerHTML = `TIME: ${time}`;
        }
        time -= 1;
    }, 1000);
}

startCountdown();

}
time(20)


//Show questions function using DOM
function showQuestion(q){
    time(20)
    let questionT = document.getElementById('question').textContent = q.questionTitle;
    let num = document.querySelector('.qNumber').textContent = `Question ${q.numero} / 6`;
    let alts = document.querySelectorAll('.answer').forEach(function(element, index){
            element.textContent = q.alternatives[index];
            element.addEventListener("click", function(){
            //check answer condition
                if(q.correctAnswerIndex == index ){
                    element.textContent = "Correct Answer"
                }
                else {element.textContent ="Incorrect Answer"}
            })
        });
    }

//Question class
class Quest {
    constructor(numero, questionTitle, alternatives, correctAnswerIndex) {
        this.numero = numero;
        this.questionTitle = questionTitle;
        this.alternatives = alternatives;
        this.correctAnswerIndex = correctAnswerIndex;
    }

}

let question1 = new Quest(1, "What is Earth's largest continent?", ["Australia", "Asia", "Europe", "America"], 1);

let question2 = new Quest(2, "Which country has the highest population?", ["Irlanda", "Grecia", "China", "Chile"], 2);

let question3 = new Quest(3, "What is the capital of Chile?", ["Zacatecas", "Bogota", "Mendoza", "Santiago"], 3);

let question4 = new Quest(4, "Where is the Eiffel Tower located? ", ["Caracas", "New York", "Paris", "Seul"], 2 );

let question5 = new Quest(5, "in what country are the Pyramids of Giza located?", ["Egypt", "Italy", "Germany", "Cuba"], 0);

let question6 = new Quest(6, "Which country is also called The Netherlands? ", ["Bellowzero", "Underground", "Holland", "Greenland"], 2);



//display questions sections
function cardDisplay(){
    let card2 = document.getElementById("card2").style.display = "none";
    let card = document.getElementById("card").style.display = "block";
}

const finalcard = () => {
    var card = document.getElementById("card").style.display = "none";
    var card3 = document.getElementById("cardThree").style.display = "block";
}

//Display questions using setTimeout Method

const delay = (seconds) =>
    new Promise((resolve) =>
    setTimeout(resolve, seconds * 1000)
);
    delay(1).then(() => showQuestion(question1));
    delay(22).then(() => showQuestion(question2)); 
    delay(42).then(() => showQuestion(question3)); 
    delay(62).then(() => showQuestion(question4));
    delay(82).then(() => showQuestion(question5));
    delay(102).then(() => showQuestion(question6));
    delay(122).then(() => finalcard());
