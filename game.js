

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");
const timeEl = document.getElementById("time");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = 0;

let questions = [
    {
                question: "what is 2 + 2?",
                choice1: "2",
                choice2: "4",
                choice3: "5",
                choice4: "8",
                answer: 2,
            },
            {
                question: "what is my dogs name?",
                choice1: "Riley",
                choice2: "Dogmeat",
                choice3: "Pookie",
                choice4: "Cuddle-Bug",
                answer: 1,
            },
            {
                question: "Is my dog a good boy?",
                choice1: "nah, he's fat",
                choice2: "ew, I don't like him",
                choice3: "He's ok, I guess...",
                choice4: "OMG! Yes. I love him.",
                answer: 4,
            },
            {
                question: "what this educational?",
                choice1: "91.412 million miles",
                choice2: "7.837 billion as of 2021",
                choice3: "It was educational for me to build this and that's what really mattered",
                choice4: "The Triassic Period",
                answer: 3,
            },
        ];

const CORRECT_BONUS = 100;
const MAX_QUESTIONS = 4;

    startGame = () => {

        questionCounter = 0;
        score = 0;
        availableQuestions = [...questions];
        getNewQuestion();
    };
    getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign("/end.html");
    }
    questionCounter++;
    questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    //connect the choices to the question
    choices.forEach( choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    })
    //take the array and remove the questions that have already been displayed
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;

    // if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    //     return window.location.assign("/end.html");
    // }
};

//todo click on the p choices

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        // const classToApply = "incorrect";
        // if(selectedAnswer == currentQuestion.answer) {
        //      classToApply = "correct";
            const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : 'incorrect'
          //! need help with if else. Right now only correct will apply css, and call getNewQuestion() ternary worked but i dont really understand it. 

            if(classToApply == "correct") {
                incrementScore(CORRECT_BONUS);
            }

            selectedChoice.parentElement.classList.add(classToApply);
                setTimeout( () => {
                    
                    selectedChoice.parentElement.classList.remove(classToApply);
                    getNewQuestion();
                }, 1000);
        // }
        // console.log(selectedAnswer, currentQuestion.answer);
    });

});
//! needs to be called by the start button/ and returns to 
var secondsLeft = 100;
//todo i know theres a cleaner way to combine the timer and end of questions return window
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if(secondsLeft === 0) {
        localStorage.setItem("mostRecentScore", score);
      // Stops execution of action at set interval
      return window.location.assign("/end.html");
     
    //   sendMessage();
    }

  }, 1000);
}

setTime();

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}
    startGame();