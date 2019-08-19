console.log("Hello World!")


var questions = [{
    ques: "When was the first HKS Turbo system made?",
    ans: ["1974", "1987", "1995", "1988"],
    name: "firstTurbo",
    correct: "1974",
    divClass: ".firstTurbo"
},
{
    ques: "What year did HKS enter the famous 'HKS R32' in JTC and win?",
    ans: ["1985", "1990", "1992", "1999"],
    name: "jtcWin",
    correct: "1992",
    divClass: ".jtcWin"
},
{
    ques: "How many M3's did BMW have to build to Homalogate them for the DTM race series?",
    ans: ["8,000", "100", "1,500", "5,000"],
    name: "dtmRace",
    correct: "5,000",
    divClass: ".dtmRace"
},
{
    ques: "What was the first car Mazda fielded under the new MazdaSpeed nameplate at 24 hours of Le Mans?",
    ans: ["Rx-7 254i", "Rx-7 Spirit R", "Rx-7 LM", "Rx-7 24h"],
    name: "leMans",
    correct: "Rx-7 254i",
    divClass: ".leMans"
},
{
    ques: "What was the name of the 90's animated show that illustrated drifting in Japan?",
    ans: ["Drifter X", "Tofu Drifter", "Initial D", "Drift Guy Show"],
    name: "driftShow",
    correct: "Initial D",
    divClass: ".driftShow"
},
{
    ques: "Who was the inspiration behind the Mini Cooper S and Mini's early success in racing?",
    ans: ["Jacob Cooper", "John Cooper", "Daniel Cooper", "Robert Cooper"],
    name: "cooper",
    correct: "John Cooper",
    divClass: ".cooper"
},
{
    ques: "What was the North American Mazda MX-5 Miata almost called?",
    ans: ["Eunos Roadster", "Duo 101", "MX-7", "Hairdresser GT"],
    name: "miata",
    correct: "Duo 101",
    divClass: ".miata"
},
{
    ques: "What was the first car to come out of the official AMG Mercedes partnership?",
    ans: ["AMG C44", "AMG C63", "AMG C36", "AMG Hammer"],
    name: "mercedes",
    correct: "AMG C36",
    divClass: ".mercedes"
},
{
    ques: "What was the nickname for the 1975 Porsche 911 Turbo?",
    ans: ["Fastboi", "Cyclone", "Reaper", "Widowmaker"],
    name: "porsche",
    correct: "Widowmaker",
    divClass: ".porsche"
},
{
    ques: "What was the Japanese Automakers Gentlemans Agreement on horespower limits for sports cars in the 80's and 90's?",
    ans: ["200hp", "240hp", "280hp", "310hp"],
    name: "gentleman",
    correct: "280hp",
    divClass: ".gentleman"
}
]

var labels = ["first", "second", "third", "forth"];


var startGame = $(".start-btn").on('click', function () {
    $(this).parent().hide();
    $('.container').show();
    countdown(120);
    questionDisplay();
});


var questionDisplay = function () {
    $(".questions :not('#sub-but')").empty();

    for (var j = 0; j < 10; j++) {
        console.log(questions[j].name)
        $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
        $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');

        for (var i = 0; i <= 3; i++) {
            $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
        }
        $('.questions').prepend('<hr />');
    }
}


var countdown = function (seconds) {

    var timer = setInterval(function () {
        seconds = seconds - 1;
        $("#time-remain").html(seconds);

        if (seconds <= 0) {
            $('.container').fadeOut(500);
            var correctAnswers = 0;
            var wrongAnswers = 0;
            var unAnswered = 0;


            for (var i = 0; i < 10; i++) {

                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

                    correctAnswers++;
                    console.log("this is correct! number:" + i)
                } else {
                    wrongAnswers++;
                    console.log("this is wrong! number:" + i)
                };
            }
            $('#correctTimesUp').append(correctAnswers);
            $('#wrongTimesUp').append(wrongAnswers);
            $('#timesUp').fadeIn(1000).show();


            clearInterval(timer);
            return;
        }
    }, 1000);


    $('#sub-but').on('click', function () {
        clearInterval(timer);
    })
};

// $("#retry-btn").on('click', function () {
//     $(this).parent().hide();
//     $("#splashscreen").show();
// });



var gradeQuiz = $('#sub-but').on('click', function () {

    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;


    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    };


    countdown();

    $('.container').fadeOut(500);

    $('#answerScreen').show();

    $('#correctScreen').append(correctAnswers);

    $('#wrongScreen').append(wrongAnswers);

});