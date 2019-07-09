$(document).ready(function () {

    $('#start').on('click', function () {
        startGame();
    })
    $(document).on("click", ".answer-button", function(e) {
        answers(e);
       
      });

    var game = {
        incorrectAnswer: 0,
        correctAnswer: 0,
        notanswered:  0,
        counter:0,
        timer:  0,
        timerOn: false,
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

    function startGame() {
        console.log("Let's begin the game!");
        $('#start-button').remove();
        correctAnswer = 0;
        incorrectAnswer = 0;
        notanswered = 0;
        
    }
    
    function timeremaining(){

    }

    function nextQ() {
        console.log("Time for the next question!");
        var question = quizQuestions [game.currentQuestion].question;
        var choices  = quizQuestions [game.currentQuestion].choices;

    }

    function checkingIfTrue() {
        for (var i = 0; i < question.length; i++) {
            var response = window.prompt(questions[i].prompt);
            if (response == question[i].answer) {
                correctAnswer++;
                alert("Correct! Good job!")
            } 
            else {
                incorrectAnswer++;
                alert("Wrong!");
            }
        }

    }
    
})
