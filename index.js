$(document).ready(function() {
    $('.menuIcons').click(function() {
        $('.menu-items').toggleClass("menu-open");
    });
    $('a').mouseenter(function() {
        $('.cursor').toggleClass("active-cursor");
    });
    $('a').mouseleave(function () {
        $('.cursor').removeClass('active-cursor');
    });
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) { // Trigger after scrolling 50px
            $(".navbar").addClass("scrolled");
        } else {
            $(".navbar").removeClass("scrolled");
        }
    });
    
});
var main = document.querySelector("main")
var cursor = document.querySelector(".cursor")
main.addEventListener("mousemove" ,function(dets){
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
});

$(window).scroll(function(){
    if ($(window).scrollTop() >= 30) {
        $('nav div').addClass('visible-title');
    }
    else {
        $('nav').removeClass('fixed-header');
        $('nav div').removeClass('visible-title');
    }
});
