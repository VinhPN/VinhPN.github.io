$(document).ready(function(){
  $(".fadeinto").hide(0).fadeIn(1000);
    $(".fadeinto2").hide(0).delay(300).fadeIn(1000);
    $(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });
});
});
