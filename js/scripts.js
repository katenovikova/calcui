function hideEmAll() {
  $("#winWidth1").hide();
  $("#winWidth2").hide();
  $("#winWidth3").hide();
};
$(function(){
  $("#winWidth1").show();
  $("#winWidth2").hide();
  $("#winWidth3").hide();


  $("#win1b").on("click", function() {
    hideEmAll();
    $("#winWidth1").show();
  });
  $("#win2b").on("click", function() {
    hideEmAll();
    $("#winWidth2").show();
  });
  $("#win3b").on("click", function() {
    hideEmAll();
    $("#winWidth3").show();
  });
});
