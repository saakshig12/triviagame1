$(document).ready(function () {

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var currentScore = 0;
var timer = 10;
var timerOn = false;
var timerId;

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
    $('#timer').text(trivia.timer);
    $('#start').hide();
    $('#remaining-time').show();
    trivia.currentSet = 0;
    trivia.correct = 0;
    trivia.incorrect = 0;
    trivia.unanswered = 0;
    clearInterval(trivia.timerId);
    trivia.nextQuestion();
}

function timerRunning() {
    if (trivia.timer > -1 && trivia.currentSet < Object.keys(trivia.questions).length) {
        $('#timer').text(trivia.timer);
        trivia.timer--;
        if (trivia.timer === 4) {
            $('#timer').addClass('last-seconds');
        }
    }
    else if (trivia.timer === -1) {
        trivia.unanswered++;
        trivia.result = false;
        clearInterval(trivia.timerId);
        resultId = setTimeout(trivia.guessResult, 1000);
        $('#results').html('<h3>Out of time! The answer was ' + Object.values(trivia.answers)[trivia.currentSet] + '</h3>');
    }
    else if (trivia.currentSet === Object.keys(trivia.questions).length) {

        $('#results')
            .html('<h3>Thank you for playing!</h3>' +
                '<p>Correct: ' + trivia.correct + '</p>' +
                '<p>Incorrect: ' + trivia.incorrect + '</p>' +
                '<p>Unaswered: ' + trivia.unanswered + '</p>' +
                '<p>Please play again!</p>');

        $('#game').hide();

        $('#start').show();
    }

}
function guessChecker() {

    var resultId;

    var currentAnswer = Object.values(trivia.answers)[trivia.currentSet];

    if ($(this).text() === currentAnswer) {
        $(this).addClass('btn-success').removeClass('btn-info');

        trivia.correct++;
        clearInterval(trivia.timerId);
        resultId = setTimeout(trivia.guessResult, 1000);
        $('#results').html('<h3>Correct Answer!</h3>');
    }
    else {
        $(this).addClass('btn-danger').removeClass('btn-info');

        trivia.incorrect++;
        clearInterval(trivia.timerId);
        resultId = setTimeout(trivia.guessResult, 1000);
        $('#results').html('<h3>Better luck next time! ' + currentAnswer + '</h3>');
    }
}

function guessResult() {
    trivia.currentSet++;
    $('.option').remove();
    $('#results h3').remove();
    trivia.nextQuestion();
}



function nextQuestion() {

    trivia.timer = 10;
    $('#timer').removeClass('last-seconds');
    $('#timer').text(trivia.timer);

    if (!trivia.timerOn) {
        trivia.timerId = setInterval(trivia.timerRunning, 1000);
    }

    var questionContent = Object.values(trivia.questions)[trivia.currentSet];
    $('#question').text(questionContent);

    var questionOptions = Object.values(trivia.options)[trivia.currentSet];

    $.each(questionOptions, function (index, key) {
        $('#options').append($('<button class="option btn btn-info btn-lg">' + key + '</button>'));
    })

}

})
