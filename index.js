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
    $(document).ready(function () {
        // Hide the loader once the page is fully loaded
        $(window).on('load', function () {
            $('#loader').fadeOut('slow');
            $('.bodyLoader').fadeOut('slow'); // Fade out animation
            
        });
    });
    
    
});
// var main = document.querySelector("main")
// var cursor = document.querySelector(".cursor")
// main.addEventListener("mousemove" ,function(dets){
//     cursor.style.left = dets.x + "px"
//     cursor.style.top = dets.y + "px"
// });
// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
  });
  
  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });