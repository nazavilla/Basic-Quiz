//Show questions function using DOM
function showQuestion(q){
    //question
    let questionT = document.getElementById('question');
    questionT.textContent = q.questionTitle;
    //alternatives
    let alts = document.querySelectorAll('.answer');
    alts.forEach(function(element, index){
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

//Question 1 
let question1 = {
    numero: 1,
    questionTitle: "What is Earth's largest continent?",
    alternatives: ["Australia", "Asia", "Europe", "America"],
    correctAnswerIndex: 1
}

let question2 = {
    numero: 2,
    questionTitle: "Which country has the highest population?",
    alternatives: ["Irlanda", "Grecia", "China", "Chile"],
    correctAnswerIndex: 2
}

let question3 = {
    numero: 3,
    questionTitle: "What is the capital of Chile?",
    alternatives: ["Zacatecas", "Bogota", "Mendoza", "Santiago"],
    correctAnswerIndex: 3
}

let question4 = {
    numero: 4,
    questionTitle: "Where is the Eiffel Tower located? ",
    alternatives: ["Caracas", "New York", "Paris", "Seul"],
    correctAnswerIndex: 2
}

let question5 = {
    numero: 5,
    questionTitle: "in what country are the Pyramids of Giza located?",
    alternatives: ["Egypt", "Italy", "Germany", "Cuba"],
    correctAnswerIndex: 0
}

let question6 = {
    numero: 6,
    questionTitle: "Which country is also called The Netherlands? ",
    alternatives: ["Bellowzero", "Underground", "Holland", "Greenland"],
    correctAnswerIndex: 2
}


function ShowQuestions(){

function  nextQuest(q) {
        //next question
    let num = document.querySelector('.qNumber');
        num.textContent = `Question ${q.numero} / 6`;
}


    showQuestion(question1);
    nextQuest(question1)
    let btn = document.getElementById("btn");
    let nextoff = document.querySelector(".Next");
    let finish = document.querySelector(".finish");
    let card3 = document.querySelector(".card3");
    let card2 = document.getElementById("card2");
    let card = document.getElementById("card");


        btn.addEventListener("click", function(){
            showQuestion(question2);
            nextQuest(question2);
                btn.addEventListener("click", function(){
                showQuestion(question3);
                nextQuest(question3);
                    btn.addEventListener("click", function(){
                    showQuestion(question4);
                    nextQuest(question4);
                        btn.addEventListener("click", function(){
                        showQuestion(question5);
                        nextQuest(question5);
                            btn.addEventListener("click", function(){
                                showQuestion(question6);
                                nextQuest(question6);
                                nextoff.style.display = "none";
                                finish.style.display = "block";
                        })
                    })
                })
            })
        });
}

ShowQuestions();


function cardDisplay(){
    let card2 = document.getElementById("card2");
    let card = document.getElementById("card");
    card.style.display = "block";
    card2.style.display = "none";
}

function finish(){
    let card = document.getElementById("card");
    let card3 = document.querySelector(".card3");
    card3.style.display = "block";
    card.style.display = "none";
}