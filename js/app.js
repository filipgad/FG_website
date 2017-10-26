$(window).scroll(function () {
  parallax();
});

function parallax() {
  var wScroll = $(window).scrollTop();

  $('.parallax').css('backgroundPosition', 'center ' +(wScroll*0.35)+'px');
}
