


$(document).ready(function () {

    $(".thumbnail").hover(function () {

        $(this).animate({
            width: "85%",
            height: 'auto'
        },100)


        /*
        $(".thumbnail").animate({
            'width':100%,
            'height': auto,
        }, 1000);
        */
    }, function () {
        $(this).animate({
            width:'80%',
            height:'auto'
        },100);
    });

});