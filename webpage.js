
$(document).ready(function () {

    $(".thumbnail").hover(function () {

        $(this).animate({
            opacity:.78
        },100)

    }, function () {
        $(this).animate({
            opacity:1
        },100);
    });

});