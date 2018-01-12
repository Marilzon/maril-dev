//SCROLL 
jQuery(document).ready(function ($) {
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 600);
    });
});
$(".nav-button").click(function () {
    $("#nav-links").toggle('slow');
});
$('#slideInDown').addClass('animated slideInDown');
$('#fadeIn').addClass('animated fadeIn');

//MENU MOBILE
$(document).ready(function () {
    // menu click event
    $('.menuBtn').click(function () {
        $(this).toggleClass('act');
        if ($(this).hasClass('act')) {
            $('.mainMenu').addClass('act');
        } else {
            $('.mainMenu').removeClass('act');
        }
    });
    //click menu items, close the menu
    $('.menuLink').click(function () {
        $('.menuBtn').toggleClass('act');
        if ($('.menuBtn').hasClass('act')) {
            $('.mainMenu').addClass('act');
        } else {
            $('.mainMenu').removeClass('act');
        }
    });
});

//MODAL
$(".modal-wide").on("show.bs.modal", function () {
    var height = $(window).height() - 200;
    $(this).find(".modal-body").css("max-height", height);
});
//CLIPBOARD COPY