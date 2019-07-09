$(document).ready(function () {
    
    $('#start').on('click', function () {
        nextQuestion()
    })

    var game = {
    correctAnswer =0,
    incorrectAnswer = 0,
    notanswered = 0,
    timer = 0,
    timerOn = false, 
    timerID: '', 
    }
    
    var questionBank = [
    {
        question: "India?",
        option: ["Elephant", "Monkey", "Bengal Tiger", "Cheetah"],
        answer: "Bengal Tiger",
    },
    {
        question: "Singapore?",
        option: ["Merlion", "Cheetah", "Kangaroo", "Chimpanzee"],
        answer: "Merlion",
    },
    {
        question: 'South Korea?',
        option: ["Merlion", "Cheetah", "Siberian tiger", "Monkey"],
        answer: "Siberian tiger",
    },
    {
        question: "China?",
        option: ["Merlion", "Cheetah", "Panda", "Rooster"],
        answer: "Panda",
    },
    {
        question: "Malaysia?",
        option: ["Tiger", "Cheetah", "Kangaroo", "Monkey"],
        answer: 'Tiger',
    },
    {
        question: 'Cambodia?',
        option: ["Merlion", "Cheetah", "Kouprey", "Monkey"],
        answer: 'Kouprey',
    },
    {
        question: "Thailand?",
        option: ["Elephant", "Cheetah", "Rooster", "Mouse"],
        answer: 'Elephant',
    },
    {
        question: "Laos?",
        option: ["Elepahnt", "Cheetah", "Kangaroo", "Monkey"],
        answer: 'Elephant',
    }
 ]
    
function startGame () {
    console.log("Let's begin the game!");
    $('#start-button').remove();
    correctAnswer = 0;
    incorrectAnswer = 0;
    notanswered = 0;
} 

function newQuestion ();

function timeremaining() ;

function checkingIfTrue (); 
})
