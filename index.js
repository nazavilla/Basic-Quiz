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