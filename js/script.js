$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var prevScrollpos = $(window).pageYOffset;
    $(window).on('scroll', function(){
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        $("#navbar")[0].style.top = "0";
      } else {
        $("#navbar")[0].style.top = "-50px";
      }
      prevScrollpos = currentScrollPos;
    });
});