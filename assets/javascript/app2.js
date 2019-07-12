$(document).ready(function () {

    var counter;
    var countingDown;
    var game = {
        incorrectAnswer: 0,
        correctAnswer: 0,
        notanswered: 0,
        counter: 10,
        timer: 10,
        timerOn: false,
        timerID: '',
        currentQ: 0,
    }

    var questionBank = [
        {
            question: "India?",
            options: ["Elephant", "Monkey", "Bengal Tiger", "Cheetah"],
            answer: "Bengal Tiger",
        },
        {
            question: "Singapore?",
            options: ["Merlion", "Cheetah", "Kangaroo", "Chimpanzee"],
            answer: "Merlion",
        },
        {
            question: 'South Korea?',
            options: ["Merlion", "Cheetah", "Siberian tiger", "Monkey"],
            answer: "Siberian tiger",
        },
        {
            question: "China?",
            options: ["Merlion", "Cheetah", "Panda", "Rooster"],
            answer: "Panda",
        },
        {
            question: "Malaysia?",
            options: ["Tiger", "Cheetah", "Kangaroo", "Monkey"],
            answer: 'Tiger',
        },
        {
            question: 'Cambodia?',
            options: ["Merlion", "Cheetah", "Kouprey", "Monkey"],
            answer: 'Kouprey',
        },
        {
            question: "Thailand?",
            options: ["Elephant", "Cheetah", "Rooster", "Mouse"],
            answer: 'Elephant',
        },
        {
            question: "Laos?",
            options: ["Elephant", "Cheetah", "Kangaroo", "Monkey"],
            answer: 'Elephant',
        }
    ]

    $('#start').on('click', function () {
        $(this).hide();
        startGame();
    });

    function startGame() {
        console.log("Let's begin the game!");
        $('#start-button').remove();
        game.correctAnswer = 0;
        game.incorrectAnswer = 0;
        game.notanswered = 0;
        showQuestion(0);


    }
function countDown() {
    game.timer--;
    $('#timeRemaining').text("Remaining Time: "+ game.timer);
    
}
    function count() {
        game.timer = 10; 
        clearInterval(counter);
        clearInterval(countingDown);
        game.notanswered++;
        game.currentQ++;
        console.log("change q");
        changeQuestion();


    }
    function changeQuestion () {
        if (game.currentQ < questionBank.length) {
            showQuestion(game.currentQ)
        }
        else {
            console.log("yes");
            resultDisplay(); 
        }
    }

    function showQuestion(qNumber) {
        console.log("Let's begin");
        counter = setInterval(count, 10000);
            countingDown = setInterval(countDown, 1000);

        $('#question').text(questionBank[qNumber].question);


        showOptions(qNumber);


    }
    function showOptions(questionNumber) {
        let possibilities = "";
        for (let i = 0; i < questionBank[questionNumber].options.length; i++) {
            var option = questionBank[questionNumber].options[i]
            possibilities += "<button class='answer-button' id='button " + i + "' data-name='" + option
                + "'>" + option + "</button>"

    

        }
        $('#options').html(possibilities);
        $('.answer-button').on('click', function () {
            clearInterval(countingDown);
            clearInterval(counter);

            $('.answer-button').hide();
            var userAnswer = $(this).attr("data-name");
            checkIfTrue(userAnswer);
            game.currentQ++;
            changeQuestion();

        });
    }


    function checkIfTrue(userAnswer) {

        for (var i = 0; i < questionBank.length; i++) {

            if (userAnswer === questionBank[i].answer) {
                game.correctAnswer++;
       
            }
            else {
                game.incorrectAnswer++;
         
            }
        }
    }
    function resultDisplay() {
        $("#results").show();
        $("#rcorrect-answer").text("Correct Answers: "+ game.correctAnswer);
        $("#incorrect-answer").text("Incorrect Answers: "+ game.incorrectAnswer);
        $("#unansweredQ").text("Unanswered Questions: "+ game.notanswered);
       
    }
})
