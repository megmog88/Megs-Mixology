  
  //-------------Age Verification----//
$(document).ready(function(){

$('.myModal').modal('show'); 

});
//-----------------------------------------Card Flip Fun--//
$(window).one({
  mouseover : function(){
    Modernizr.touch = false;
    $('html').removeClass('touch').addClass('mouse');
  } 
});

$(document).ready(function(){
$('.card-flip .flipper').click(function(){
    $(this).toggleClass("flip");
});
});
