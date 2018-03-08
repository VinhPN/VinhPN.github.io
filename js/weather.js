var temp = 0;
var weather;
var city;
var celcius = true;
var turnOn = false;

function getLoc(){
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var url = "https://fcc-weather-api.glitch.me/api/current?";
    url += "lat="+position.coords.latitude; //
    url += "&lon="+position.coords.longitude; //
    getWeather(url);
  });
}
}

function getWeather(url){
  $.ajax({
    url: url,
    
    success:function(result){
      var city = result.name;
      var country = result.sys.country;
      temp = Math.round(result.main.temp);
      var icon = result.weather[0].icon;
      var desc = result.weather[0].main;
      var detail = result.weather[0].description;
          $(".screen").css("background-color","rgb(255,255,255)");
         // $(".degrees").css("background-color","rgb(80,80,80)");
    $("#loc").text(city +", " + country);
           $("#line").css("background-color","white");
      $("#temp").text(temp + "˚C");
      $("#desc").text(desc + ", " + detail);
      $("#icon").attr("src",icon);
      setBackground(desc);
    }
  });
}

function setBackground(weather){
  switch(weather){
    case "Drizzle":
      $(".screen").css("background-color","rgb(191,215,255)");
       $("body").css("color","rgb(39,40,40)");
      $("#line").css("background-color","rgb(39,40,40)");
      break;
    case "Clouds":
      $(".screen").css("background-color","rgb(184,195,214)");
      break;
    case "Rain":          
      $(".screen").css("background-color","rgb(87,112,178)");
      break;
    case "Snow":
      $(".screen").css("background-color","rgb(221,234,255)");
      $("body").css("color","rgb(39,40,40)");
      $("#line").css("background-color","rgb(39,40,40)");
      break;
    case "Clear":
      $(".screen").css("background-color","rgb(175,247,255)");
      break;
    case "Thunderstorm":
      $(".screen").css("background-color","rgb(96,96,96)");
      break;
    default:
      $(".screen").css("background-color","rgb(255,243,178)");
      
  }
    $(".title").text("");
    $(".loading").text("");
}

function convertTemp(tempConvert,celciusCheck){
   
  if(celciusCheck){
    temp = Math.round((tempConvert*1.8)+32);
    celcius = false;
  } else {
    temp = Math.round(5/9*(tempConvert-32));
    celcius = true;
  }
 
  if(celcius){
    $("#temp").text(temp + "˚C");
  } else{
    $("#temp").text(temp+"˚F");
  }
}

$(document).ready(function(){
  $(".pro4").on("click",function(){
    if(!turnOn){
    $("#startTemp").text("");
    getLoc();
    turnOn = true;
  }
  });
});