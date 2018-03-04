$('.variable-width').slick({
  dots: false,
  infinite: false,
  speed: 450,
  centerMode: false,
  variableWidth: true,
  arrows: false,
<<<<<<< HEAD
  slidesToShow: 10,
  slidesToScroll: 1,
=======
>>>>>>> parent of f3e0183... carousel
  autoplay: false,
  accessibility: true
});

$(window).on('resize orientationchange', function() {
$('.js-slider').slick('resize');
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(function() {
  if (location.pathname !== '/') {
  $('div a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
  }
});
