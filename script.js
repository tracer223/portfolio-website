$(document).ready(function() {
$(".picture").mouseenter(function(){
  $(this).animate({
    opacity: 1
  }, 200);
});

$(".picture").mouseleave(function(){
  $(this).animate({
    opacity: 0.8
  }, 200);
});

$("#button1").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutsection").offset().top
    }, 800);
});

$("#button2").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 800);
});

$("#button3").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 800);
});
	

 // ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
});