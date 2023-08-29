// /*      typing animation    */ 
// var typed = new Typed (".typing",{
//     strings: ["", "Web Designer","Web Developer",],
//     typespeed: 100,
//     backspeed:60,
// 	loop:true
// })

!(function($) {
    "use strict";
  
    if ($('.typed').length) {
      var typed_strings = $(".typed").data('typed-items');
      typed_strings = typed_strings.split(',')
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }

/* INIT AOS */
function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-back",
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });
})(jQuery);