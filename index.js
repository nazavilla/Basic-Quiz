//Show questions function using DOM
function showQuestion(q){
    let questionT = document.getElementById('question').textContent = q.questionTitle;
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

//add async/await and promises to ShowQuestions
//fix timer to repeat in every question
//if the correct answer is clicked, the timer should stop

const delay = (seconds) => {
    new Promise ((resolve) => {
        setTimeout(resolve, seconds * 1000)
    });
}

console.log("Zero Seconds");
delay(10).then(() => console.log("10 seconds"));



function ShowQuestions(){

        function  nextQuest(q) {
            //next question
            let num = document.querySelector('.qNumber').textContent = `Question ${q.numero} / 6`;
        }
            const timeout = () => {
                showQuestion(question2);
                nextQuest(question2);
                timer(19)
            }
            setTimeout(timeout, 20000);

            const timeout2 = () => {
                showQuestion(question3);
                nextQuest(question3);
                timer(19);
            }
            setTimeout(timeout2, 40000);

            
            const timeout3 = () => {
                showQuestion(question4);
                nextQuest(question4);
                timer(19);
            }
            setTimeout(timeout3, 60000);
            
            const timeout4 = () => {
                showQuestion(question5);
                nextQuest(question5);
                timer(19);
            }
            setTimeout(timeout4, 80000);


            const timeout5 = () => {
                showQuestion(question6);
                nextQuest(question6);
                timer(19);
            }
            setTimeout(timeout5, 100000);

            const timeout6 = () => {
                let card = document.getElementById("card").style.display = "none";
                let card3 = document.querySelector(".card3").style.display = "block";
                timer(19);
            }
            setTimeout(timeout6, 60000);
    }

ShowQuestions();

function cardDisplay(){
    let card2 = document.getElementById("card2").style.display = "none";
    let card = document.getElementById("card").style.display = "block";
    showQuestion(question1),
    nextQuest(question1)

}

function timer() {

//CountDown
let time = 20;
let counting = document.getElementById("timer");

function startCountdown() {
    let quizTimer = setInterval(function() {
        if (time <= 0) {
            clearInterval(quizTimer);
            showScores();
        } else {
            counting.innerHTML = `TIME: ${time}`;
        }
        time -= 1;
    }, 1000);
}

startCountdown();

}

timer(19)