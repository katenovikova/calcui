function hideEmAll() {
  $("#winWidth1").hide();
  $("#winWidth2").hide();
  $("#winWidth3").hide();
  $("#winWidth4").hide();
  $("#winHeight1").hide();
  $("#winHeight2").hide();
  $("#winHeight3").hide();
  $("#winHeight4").hide();
};

function calculateThePrice() {

};

function clearMeasurements() {

  $("#height1_1"  )[0].value = 0;
  $("#height1_2_1")[0].value = 0;
  $("#height1_2_2")[0].value = 0;
  $("#height1_3_1")[0].value = 0;
  $("#height1_3_2")[0].value = 0;
  $("#height1_3_3")[0].value = 0;
  $("#height1_4_1")[0].value = 0;
  $("#height1_4_2")[0].value = 0;
  $("#height1_4_3")[0].value = 0;
  $("#height1_4_4")[0].value = 0;
  $("#height1_4_5")[0].value = 0;
  $("#width1_1"  )[0].value = 0;
  $("#width1_2_1")[0].value = 0;
  $("#width1_2_2")[0].value = 0;
  $("#width1_3_1")[0].value = 0;
  $("#width1_3_2")[0].value = 0;
  $("#width1_3_3")[0].value = 0;
  $("#width1_4_1")[0].value = 0;
  $("#width1_4_2")[0].value = 0;
  $("#width1_4_3")[0].value = 0;
  $("#width1_4_4")[0].value = 0;
  $("#width1_4_5")[0].value = 0;

  $("#height2")[0].value = 0;
  $("#width2" )[0].value = 0;

  $("#height3")[0].value = 0;
  $("#width3" )[0].value = 0;
}


function outputPrices_1() {

  var h1  = $("#height1_1"  )[0].value;
  var w1  = $("#width1_1"  )[0].value;

  var h21 = $("#height1_2_1")[0].value;
  var h22 = $("#height1_2_2")[0].value;
  var w21 = $("#width1_2_1")[0].value;
  var w22 = $("#width1_2_2")[0].value;
  var

  var h31 = $("#height1_3_1")[0].value;
  var h32 = $("#height1_3_2")[0].value;
  var h33 = $("#height1_3_3")[0].value;
  var w31 = $("#width1_3_1")[0].value;
  var w32 = $("#width1_3_2")[0].value;
  var w33 = $("#width1_3_3")[0].value;

  var h41 = $("#height1_4_1")[0].value;
  var h42 = $("#height1_4_2")[0].value;
  var h43 = $("#height1_4_3")[0].value;
  var h44 = $("#height1_4_4")[0].value;
  var h45 = $("#height1_4_5")[0].value;
  var w41 = $("#width1_4_1")[0].value;
  var w42 = $("#width1_4_2")[0].value;
  var w43 = $("#width1_4_3")[0].value;
  var w44 = $("#width1_4_4")[0].value;
  var w45 = $("#width1_4_5")[0].value;

  document.getElementById("Price_1_1_1").innerHTML = 1;
  document.getElementById("Price_1_1_2").innerHTML = 1;
  document.getElementById("Price_1_1_3").innerHTML = 1;
  document.getElementById("Price_1_2_1").innerHTML = 1;
  document.getElementById("Price_1_2_2").innerHTML = 1;
  document.getElementById("Price_1_2_3").innerHTML = 1;
  document.getElementById("Price_1_3_1").innerHTML = 1;
  document.getElementById("Price_1_3_2").innerHTML = 1;
  document.getElementById("Price_1_3_3").innerHTML = 1;
  document.getElementById("Price_1_4_1").innerHTML = 1;
  document.getElementById("Price_1_4_2").innerHTML = 1;
  document.getElementById("Price_1_4_3").innerHTML = 1;

};


function outputPrices_2() {
  var h2  = $("#height2"  )[0].value;
  var w2  = $("#width2"  )[0].value;
};

function outputPrices_3() {
  var h3  = $("#height3"  )[0].value;
  var w3  = $("#width3"  )[0].value;
};

$(function(){
  $("#winWidth1").show();
  $("#winWidth2").hide();
  $("#winWidth3").hide();
  $("#winWidth4").hide();
  $("#winHeight1").show();
  $("#winHeight2").hide();
  $("#winHeight3").hide();
  $("#winHeight4").hide();


  $("#win1b").on("click", function() {
    hideEmAll();
    clearMeasurements();
    $("#winWidth1").show();
    $("#winHeight1").show();
  });

  $("#win2b").on("click", function() {
    hideEmAll();
    clearMeasurements();
    $("#winWidth2").show();
    $("#winHeight2").show();
  });

  $("#win3b").on("click", function() {
    hideEmAll();
    clearMeasurements();
    $("#winWidth3").show();
    $("#winHeight3").show();
  });

  $("#win4b").on("click", function() {
    hideEmAll();
    clearMeasurements();
    $("#winWidth4").show();
    $("#winHeight4").show();
  });




  $(".measurementInputOne").change(function() {
    outputPrices_1()
  });
  $(".measurementInputTwo").change(function() {
    outputPrices_2()
  });
  $(".measurementInputThree").change(function() {
    outputPrices_3()
  });

});
