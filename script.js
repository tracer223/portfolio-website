$(document).ready(function() {


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
        $('#return-to-top').fadeIn();    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut();   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
});