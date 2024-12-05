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
            $('.bodyLoader').fadeOut('slow');
             // Fade out animation
            
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
  document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        const targetId = this.getAttribute('href').substring(1); // Get the id (remove the #)
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth' // Smooth scrolling
            });
        }
    });
});

// Get the button element
let backToTopButton = document.getElementById('backToTop');

// When the user scrolls the page, check the position
window.onscroll = function () {
    if (window.scrollY >= document.querySelector('#about').offsetTop) {
        // Show the button when the user reaches the #about section
        backToTopButton.style.display = 'block';
    } else {
        // Hide the button when the user is above the #about section
        backToTopButton.style.display = 'none';
    }
};

// When the user clicks the "Back to Top" button
backToTopButton.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Smooth scroll to the top
    });
};
