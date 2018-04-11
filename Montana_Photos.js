

$(document).ready(function () {

    $(".thumbnail").hover(function () {

        $(this).animate({
            width: "100%",
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
            width:'95%',
            height:'auto'
        },100);
    });

});