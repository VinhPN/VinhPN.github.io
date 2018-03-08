var streams = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var callback = "&format=json&callback=?";
var online = [];

$(document).ready(function(){
    $(".b1").css("background-color","rgb(224,224,224)");
  for(var i = 0; i < streams.length; i++){
    sortOnline(i,streams[i]);
  }
  window.setTimeout(getStreams, 500);
});

function getStreams(){
    for(var i = 0; i < online.length; i++){
    window.setTimeout(getInfo(i,online[i]),500);
  }
}

function sortOnline(i,name){
  $.ajax({
    url:"https://api.twitch.tv/kraken/streams/" + streams[i],
    dataType:"json",
    
    headers:{
      "Client-ID": "nldurzjjzbz3akhky3kf4ntq5hgofk",
    },
    success:function(result){
      if(result.stream === null){
        online.push(name);
      } else {
        online.unshift(name);
      }
    },
    error:function(){
      console.log("error");
    }
  });
};

function getInfo(i,name){
  var ref = "https://www.twitch.tv/"
  ref += name;
  $.ajax({
    url:"https://api.twitch.tv/kraken/streams/" + name,
    dataType:"json",
    headers:{
      "Client-ID": "nldurzjjzbz3akhky3kf4ntq5hgofk",
    },
    success:function(result){
      var rowID = ".row" +i; 
      if(result.stream === null){
offlineData(i,name,result._links.channel,rowID,ref);
      } else {
        $("#streamers").append("<tr class='online row" + i +"'>");
        $(rowID).append("<td><img src='" + result.stream.channel.logo + "'></img></td>");
        $(rowID).append("<td class='name name" + i + "'><h4><a target='_blank' href='" + ref + "'>" + result.stream.channel.display_name + "</a></h4><p class='status'>" + result.stream.channel.status + "</p></td>");
        $(rowID).append("<td>" + result.stream.channel.game + "</td>");
        $("#streamers").append("</tr>");
      }
    },
    error:function(){
      console.log("error");
    }
  });
}

function offlineData(i,name,api,rowID,ref){
  $.ajax({
    url: api,
    dataType:"json",
    headers:{
      "Client-ID": "nldurzjjzbz3akhky3kf4ntq5hgofk",
    },
    
    success:function(result){
    $("#streamers").append("<tr class='offline row" + i +"'>");
        $(rowID).append("<td><img src='" + result.logo +"'></img></td>");
        $(rowID).append("<td class='name'><h4><a target='blank' href='" + ref + "'>" + name + "</a></h4></td>");
        $(rowID).append("<td> offline </td>");
      $("#streamers").append("</tr>");
    }
  });
}
$(".b1").click(function(){
  $(".online").show();
  $(".offline").show();
  $(".b1").css("background-color","rgb(224,224,224)");
  $(".b2").css("background-color","rgb(255,255,255)");
  $(".b3").css("background-color","rgb(255,255,255)");
});
$(".b2").click(function(){
  $(".online").show();
  $(".offline").hide();
    $(".b2").css("background-color","rgb(224,224,224)");
  $(".b1").css("background-color","rgb(255,255,255)");
  $(".b3").css("background-color","rgb(255,255,255)");
});
$(".b3").click(function(){
  $(".online").hide();
  $(".offline").show();
    $(".b3").css("background-color","rgb(224,224,224)");
  $(".b2").css("background-color","rgb(255,255,255)");
  $(".b1").css("background-color","rgb(255,255,255)");
});