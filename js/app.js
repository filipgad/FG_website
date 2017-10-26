// PIERWSZA WERSJA PARALLAX
// $(window).scroll(function () {
//   parallax();
// });
//
// function parallax() {
//   var wScroll = $(window).scrollTop();
//
//   $('.parallax').css('backgroundPosition', 'center ' +(wScroll*0.35)+'px');
// }

( function( $ ) {
    // Init Skrollr
    var s = skrollr.init({
        forceHeight: false
    });
} )( jQuery );
