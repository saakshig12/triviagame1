$(document).ready(function () {

    $('#start').on('click', function () {
        startGame();
    })
    $(document).on("click", ".answer-button", function () {
        answer();

    });

    var game = {
        incorrectAnswer: 0,
        correctAnswer: 0,
        notanswered: 0,
        counter: 10,
        timer: 0,
        timerOn: false,
        timerID: '',
        currentQ: 8,
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
        game.correctAnswer = 0;
        game.incorrectAnswer = 0;
        game.notanswered = 0;
        time = setInterval(countDown, 1000);

    }

    function timeUp() {
        clearInterval(timer);

        incorecct++;

    }
    function countDown() {
        game.counter--;
        $("#timer").html(questionBank.counter);
        if (timer <= 0) {
            timeup();
        }
    }

    function qchoices (choices){
        let result = "";
        for(let i=0; i <choices.length; i++){
            result +=("<button class='answer-button' id='button' data-name='" + choices[i]
            + "'>" + choices[i] + "</button>")
        }
        return result;

    }
function answers(e){
    console.log(e);
    if ($(e.target).attr("data-name") === questionBank[game.currentQ].correctAnswer) {
        game.correctAnswer++;
        console.log("correct");

      }
      else {
        game.incorrectAnswer++;
        console.log("incorrect");
      }
    
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
