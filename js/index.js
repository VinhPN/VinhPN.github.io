var transition1="up";
var transition2="down";
var transition3="right";
var direction = true;
var colour = "rgba(235,235,235,0.8)";
var bgColour = "rgb(39,40,40)";
var trans = "fold";
var trans2 = "slide";
var deg = 0;

function changeColour(colour1,colour2,id){
  $("#p1").css("background-color",bgColour);
  $("#p2").css("background-color",bgColour);
  $("#p3").css("background-color",bgColour);
  $("#pg1").css("color",colour);
  $("#pg2").css("color",colour);
  $("#pg3").css("color",colour);
  $(".fa").css("color",colour);
  if(id == 1){
    $("#p1").css("background-color",colour1);
    $("#pg1").css("color",colour2);
    $(".fa-home").css("color",colour2);
  } else if (id == 2){
    $("#p2").css("background-color",colour1);
    $("#pg2").css("color",colour2);
    $(".fa-pencil-square-o").css("color",colour2);
  } else if (id == 3){
    $("#p3").css("background-color",colour1);
    $("#pg3").css("color",colour2);
    $(".fa-calendar").css("color",colour2);
  }
}
function transition(show,hide1,hide2,movement){
  if(movement=="up"){
    $(hide1).hide(trans2,{direction:transition2,horizFirst:false},700);
    $(hide2).hide(trans2,{direction:transition2,horizFirst:false},700);
    $(show).show(trans2,{direction:transition1,horizFirst:true},700);
  } else {
    $(hide1).hide(trans2,{direction:transition1,horizFirst:false},700);
    $(hide2).hide(trans2,{direction:transition1,horizFirst:false},700);
    $(show).show(trans2,{direction:transition2,horizFirst:true},700);
  }
}
function intro(clicked){
  if(clicked){
    $("#intro1").delay(200).show("slide",{horizFirst:true},700);
    $("#intro2").delay(700).show("fold",{horizFirst:false},700);
    $("#intro3").delay(1400).show("fold",{horizFirst:true},700);
    $("#bar1").delay(100).show("slide",{direction:"up"},900);
    $("#bar2").delay(200).show("slide",{direction:"up"},900);
    $("#bar3").delay(400).show("slide",{direction:"up"},900);
  } else{
    $("#intro1").hide("slide",300);
    $("#intro2").hide("slide",300);
    $("#intro3").hide("slide",300);
    $("#bar1").hide("slide",{direction:"up"},400);
    $("#bar2").hide("slide",{direction:"up"},500);
    $("#bar3").hide("slide",{direction:"up"},600);
  }
}

function showProjects(clicked){
  if(clicked){
    $("#titleproj").delay(200).show("slide",{direction:"left"},700);
    $(".pro1").delay(200).show("fold",700);
    $(".pro2").delay(1000).show("fold",700);
    $(".pro3").delay(1900).show("fold",700);
    $(".pro4").delay(2800).show("fold",700);
    $("#dropProject").delay(0).slideDown();
  } else{
    $("#titleproj").hide("fold",{direction:"left"},400);
    $(".project").hide("fold",700);
    $("#dropProject").delay(0).slideUp();
  }
}
function findProject(link){
  $("#proj1").css("background-color","rgb(39,40,40)");
  $("#proj2").css("background-color","rgb(39,40,40)");
  $("#proj3").css("background-color","rgb(39,40,40)");
  $("#proj4").css("background-color","rgb(39,40,40)");

  $(link).css("background-color","rgb(59,60,60)");
}
function about(clicked){
    if(clicked){
     $("#titleabout").delay(200).show("slide",{direction:"left"},700);
     $("#dropAbout").delay(0).slideDown();
  } else{
     $("#titleabout").hide("fold",{direction:"left"},400);
     $("#dropAbout").delay(0).slideUp();
  }
} 

$(".list-proj").click(function(){
  findProject(this);
});

$( "#pg1" ).click(function() {
  intro(true);
  showProjects(false);
  about(false);
  direction = true;
  //$(".dropdown").hide("slide",{direction:"up"},400);
  changeColour("rgb(59,60,60)","rgb(255,242,206)",1);
  transition(".a",".b",".c","up");
  
});
$( "#pg2" ).click(function() {
  intro(false);
  showProjects(true);
  findProject("#proj1");
  about(false);
  //$(".dropdown").show("slide",{direction:"up"},500);
  if(direction == true){
    transition(".b",".a",".c","down");
  } else{
    transition(".b",".a",".c","up");
  }
  changeColour("rgb(59,60,60)","rgb(255,209,209)",2);
  
});
$( "#pg3" ).click(function() {
  intro(false);
  showProjects(false);
  about(true);
  direction = false;
  //$(".dropdown").hide("slide",{direction:"up"},400);
  changeColour("rgb(59,60,60)","rgb(209,255,235)",3);
  transition(".c",".a",".b","down");
});

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

$(document).ready(function(){

  $("#pg1").css("color",colour);
  $("#pg2").css("color",colour);
  $("#pg3").css("color",colour);
  $("#p1").css("background-color","rgb(59,60,60)");
  $("#pg1").css("color","rgb(255,242,206)");
  $(".fa-home").css("color","rgb(255,242,206)");
  $(".nav").show();
  $(".profile").show("fade",500);
  intro(false);
  showProjects(false);
  about(false);
  $(".a").show();
  intro(true);
  $("#link1").mouseover(function(){
    $(".fa-linkedin").css("color","rgb(2,155,234)");
  }) 
  $("#link1").mouseout(function(){
    $(".fa-linkedin").css("color","rgba(255,255,255,0.8)");
  });
  $("#link2").mouseover(function(){
    $(".fa-github").css("color","rgb(188,65,198)");
  }) 
  $("#link2").mouseout(function(){
    $(".fa-github").css("color","rgba(255,255,255,0.8)");
  });
    $("#link3").mouseover(function(){
    $(".fa-file-pdf-o").css("color","rgb(142,255,213)");
  }) 
  $("#link3").mouseout(function(){
    $(".fa-file-pdf-o").css("color","rgba(255,255,255,0.8)");
  });

  $("#rotatePic").click(function(){
 
  $(this).addClass("rotateAnim");
  $("#rotatePic").prop("disabled",true);
  setTimeout(function(){
    $("#rotatePic").removeClass("rotateAnim");
    $("#rotatePic").prop("disabled",false);
  },3100);
});

});