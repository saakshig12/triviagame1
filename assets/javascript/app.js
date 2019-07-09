$(document).ready(function () {

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var currentScore = 0;
var timer = 10;
var timerOn = false;
var timerId;

$('#start').on('click', function () {
    nextQuestion() 
    })

    var trivia = {
    questions: {
        q1: 'India?',
        q2: 'Singapore?',
        q3: 'South Korea?',
        q4: 'China?',
        q5: "Malaysia?",
        q6: 'Cambodia?',
        q7: "Thailand?",
        q8: "Laos?"
    },
    options: {
        q1: ["Elephant", "Monkey", "Bengal Tiger", "Cheetah"],
        q2: ["Merlion", "Cheetah", "Kangaroo", "Chimpanzee"],
        q3: ["Merlion", "Cheetah", "Siberian tiger", "Monkey"],
        q4: ["Merlion", "Cheetah", "Panda", "Rooster"],
        q5: ["Tiger", "Cheetah", "Kangaroo", "Monkey"],
        q6: ["Merlion", "Cheetah", "Kouprey", "Monkey"],
        q7: ["Elephant", "Cheetah", "Rooster", "Mouse"],
        q8: ["Elepahnt", "Cheetah", "Kangaroo", "Monkey"]
    },
    answers: {
        q1: 'Bengal Tiger',
        q2: 'Merlion',
        q3: 'Siberian tiger',
        q4: 'Panda',
        q5: 'Tiger',
        q6: 'Kouprey',
        q7: 'Elephant',
        q8: 'Elephant'
    }
}

function startGame() {
    $('#game').show();
    $('#timer').text(timer);
    $('#start').hide();
    $('#remaining-time').show();
    currentSet = 0;
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    clearInterval(timerId);
    nextQuestion();
    
}

function timerRunning() {
    if (timer > -1 && currentSet < Object.keys(trivia.questions).length) {
        $('#timer').text(trivia.timer);
        timer--;
        if (timer === 4) {
            $('#timer').addClass('last-seconds');
        }
    }
    else if (timer === -1) {
        unanswered++;
        result = false;
        clearInterval(timerId);
        resultId = setTimeout(guessResult, 1000);
        $('#results').html('<h3>Out of time! The answer was ' + Object.values(trivia.answers)[trivia.currentSet] + '</h3>');
    }
    else if (trivia.currentSet === Object.keys(questions).length) {

        $('#results')
            .html('<h3>Thank you for playing!</h3>' +
                '<p>Correct: ' + correct + '</p>' +
                '<p>Incorrect: ' + incorrect + '</p>' +
                '<p>Unaswered: ' + unanswered + '</p>' +
                '<p>Please play again!</p>');

        $('#game').hide();

        $('#start').show();
    }

}
function guessChecker() {

    var resultId;

    var currentAnswer = Object.values(answers)[trivia.currentSet];

    if ($(this).text() === currentAnswer) {
        $(this).addClass('btn-success').removeClass('btn-info');

        correct++;
        clearInterval(timerId);
        resultId = setTimeout(guessResult, 1000);
        $('#results').html('<h3>Correct Answer!</h3>');
    }
    else {
        $(this).addClass('btn-danger').removeClass('btn-info');

        incorrect++;
        clearInterval(timerId);
        resultId = setTimeout(guessResult, 1000);
        $('#results').html('<h3>Better luck next time! ' + currentAnswer + '</h3>');
    }
}

function guessResult() {
    trivia.currentSet++;
    $('.option').remove();
    $('#results h3').remove();
    nextQuestion();
}



function nextQuestion() {

    timer = 10;
    $('#timer').removeClass('last-seconds');
    $('#timer').text(timer);

    if (timerOn) {
        timerId = setInterval(timerRunning, 1000);
    } 

    var questionContent = Object.values(trivi.questions)[trivia.currentSet];
    $('#question').text(questionContent);
    console.log(questionContent);
    startGame(); 

    var questionOptions = Object.values(trivia.options)[trivia.currentSet];

    $.each(questionOptions, function (index, key) {
        $('#options').append($('<button class="option btn btn-info btn-lg">' + key + '</button>'));
    })

}

})
