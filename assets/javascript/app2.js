$(document).ready(function () {
    
    $('#start').on('click', function () {
        nextQuestion()
    })


    var correctAnswer =0;
    var incorrectAnswer = 0;
    var notanswered = 0;
    var timeremaining = 10;
    
    var questionBank = 
    {
        q1: 'India?',
        q1: ["Elephant", "Monkey", "Bengal Tiger", "Cheetah"],
        q1: 'Bengal Tiger',
    },
    {
        q2: 'Singapore?',
        q2: ["Merlion", "Cheetah", "Kangaroo", "Chimpanzee"],
        q2: 'Merlion',
    },
    {
        q3: 'South Korea?',
        q3: ["Merlion", "Cheetah", "Siberian tiger", "Monkey"],
        q3: 'Siberian tiger',
    },
    {
        q4: 'China?',
        q4: ["Merlion", "Cheetah", "Panda", "Rooster"],
        q4: 'Panda',
    },
    {
        q5: "Malaysia?",
        q5: ["Tiger", "Cheetah", "Kangaroo", "Monkey"],
        q5: 'Tiger',
    },
    {
        q6: 'Cambodia?',
        q6: ["Merlion", "Cheetah", "Kouprey", "Monkey"],
        q6: 'Kouprey',
    },
    {
        q7: "Thailand?",
        q7: ["Elephant", "Cheetah", "Rooster", "Mouse"],
        q7: 'Elephant',
    },
    {
        q8: "Laos?",
        q8: ["Elepahnt", "Cheetah", "Kangaroo", "Monkey"],
        q8: 'Elephant',
    }
}
    
function startGame () {
correctAnswer = 0;
incorrectAnswer = 0;
} 

function newQuestion ();

function timeremaining() ;

function checkingIfTrue ();
if .option = .answers {
    true;
    correctAnswers ++;

}
else if{
    false;
    incorrectAnswer++;
}
else {
    unanswered++; 
}

