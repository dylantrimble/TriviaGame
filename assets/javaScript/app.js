console.log("Hello World!")


var startGame = $("#start-btn").on('click', function () {
    $(this).parent().hide();
    $('.container').show();
});