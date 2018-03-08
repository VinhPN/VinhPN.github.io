  function getEntries(url){
  $.ajax({
    url: url,
    dataType: "json",
      
    success: function(result){
      for(var i = 0; i < result[1].length; i++){
        $("#articles").append("<a target=\"_blank\" href=" + result[3][i] + "><div class=\"pages\">" + result[1][i] + "<p>" + result[2][i] + "</p></div></a>");
      }
    }
  });
}


$(document).ready(function(){
  
  $("#random").click(function(){
    window.open("https://en.wikipedia.org/wiki/Special:Random");
  });
  
  $("#search").click(function(){
    $("#articles").html("");
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="
    var input = $("#entry").val();
    var callback = "&format=json&callback=?";
    url += input;
    url += callback;
    $("#entry").val("");
    console.log(url);
    getEntries(url);
  });
  
  $("#entry").keypress(function(e){
      if(e.which == 13){
          $("#search").click();
      }
  });
});