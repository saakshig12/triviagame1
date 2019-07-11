$(document).ready(function () {

    $('#start').on('click', function () {
        $(this).hide();
        counter = setInterval(timer, 1000);
        startGame();
        showQuestion();
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
        showQuestion();
        time = setInterval(count, 1000);

    }

    function count() {
        timer--;
        if (count <= 0) {
            clearInterval(counter);
            timeUp();
        }
    }

    function timeUp() {
        timer--;
        if (timer == 0) {
            resettimer = 10;
            notanswered++;
            showQuestion++;
        }
    }




    function showQuestion() {
        console.log("Let's begin");
        for (var i = 0; i < questionBank.length; i++) {
            option = [];
            checkIfTrue();

        }
    }

    function checkIfTrue() {
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
