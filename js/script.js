$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 475) {
            if ($(window).width() > 768) {
                $(".navbar-default").css("background-color", "#222");
                $(".navbar-default").css("transition", "all 0.3s");
                $(".navbar-default").css("max-height", "50 px");
                $(".navbar-default").css("padding", "10px 0");
                $(".navbar-default .navbar-brand").css("font-size", "2.1em");
                $(".navbar-default .navbar-brand").css("padding-left", "60px");
            }
        } else {
            if ($(window).width() < 768) {
                $(".navbar-default").css("background-color", "#222");
            }
            else {
                $(".navbar-default").css("padding", "25px 0");
                $(".navbar-default").css("background-color", "transparent");
                $(".navbar-default .navbar-brand").css("font-size", "3em");
                $(".navbar-default .navbar-brand").css("padding-left", "65px");

            }
            $(".navbar-fixed-top").css("transition", "all 0.3s");
        }
    });
});

$(document).ready(function () {
    $("#scroll-button").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this,'href')).offset().top
        }, 750);
    });
    $("#about-button").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this,'href')).offset().top
        }, 750);
    });
    $("#work-button").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this,'href')).offset().top
        }, 750);
    });
    $("#resume-button").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this,'href')).offset().top
        }, 750);
    });
});

$('body').scrollspy({
    target: '.navbar-fixed-top'
});