indicesAll=[1,1,1,1];

function iPrintPrices(indicesAll) {
  var miniPs = require('./mini.json');
  var uniPs = require('./ini.json');
  var litePs = require('./lite.json');
  var luxPs = require('./lux.json');

  var indexLite = $indicesAll[0];
  var indexMini = $indicesAll[1];
  var indexUni = $indicesAll[2];
  var indexLux = $indicesAll[3];

  var Plite = $litePs[indexLite];
  var Pmini = $miniPs[indexMini];
  var Puni = $uniPs[indexUni];
  var Plux = $luxPs[indexLux];

  document.getElementById("Price_1_1_1").innerHTML = Plite[0];
  document.getElementById("Price_1_1_2").innerHTML = Plite[1];
  document.getElementById("Price_1_1_3").innerHTML = Plite[2];

  document.getElementById("Price_1_2_1").innerHTML = Pmini[0];
  document.getElementById("Price_1_2_2").innerHTML = Pmini[1];
  document.getElementById("Price_1_2_3").innerHTML = Pmini[2];
  document.getElementById("Price_1_3_1").innerHTML = Puni[0];
  document.getElementById("Price_1_3_2").innerHTML = Puni[1];
  document.getElementById("Price_1_3_3").innerHTML = Puni[2];
  document.getElementById("Price_1_4_1").innerHTML = Plux[0];
  document.getElementById("Price_1_4_2").innerHTML = Plux[1];
  document.getElementById("Price_1_4_3").innerHTML = Plux[2];

};


$(function(){
  $(".showOnMnt1").show();
  $(".showOnMnt2").hide();
  $(".showOnMnt3").hide();
  $(".showOn_SinglePane").show();
  $(".showOn_DoublePane").hide();
  $(".showOn_TriplePane").hide();
  $(".showOn_QuadroPane").hide();

  $("#MntOneTab").on("click", function() {
    $(".showOnMnt2").hide();
    $(".showOnMnt3").hide();
    $(".showOnMnt1").show();
    $(".showOn_SinglePane").show();
  });
  $("#MntTwoTab").on("click", function() {
    $(".showOn_SinglePane").hide();
    $(".showOn_DoublePane").hide();
    $(".showOn_TriplePane").hide();
    $(".showOn_QuadroPane").hide();
    $(".showOnMnt3").hide();
    $(".showOnMnt2").show();
  });
  $("#MntThreeTab").on("click", function() {
    $(".showOn_SinglePane").hide();
    $(".showOn_DoublePane").hide();
    $(".showOn_TriplePane").hide();
    $(".showOn_QuadroPane").hide();
    $(".showOnMnt2").hide();
    $(".showOnMnt3").show();
  });

  $("#win1b").on("click", function() {
    $(".showOn_TriplePane").hide();
    $(".showOn_QuadroPane").hide();
    $(".showOn_DoublePane").hide();
    $(".showOn_SinglePane").show();

  });
  $("#win2b").on("click", function() {
    $(".showOn_SinglePane").hide();
    $(".showOn_TriplePane").hide();
    $(".showOn_QuadroPane").hide();
    $(".showOn_DoublePane").show();
  });
  $("#win3b").on("click", function() {
    $(".showOn_SinglePane").hide();
    $(".showOn_DoublePane").hide();
    $(".showOn_QuadroPane").hide();
    $(".showOn_TriplePane").show();
  });
  $("#win4b").on("click", function() {
    $(".showOn_SinglePane").hide();
    $(".showOn_DoublePane").hide();
    $(".showOn_TriplePane").hide();
    $(".showOn_QuadroPane").show();
  });





  $(".measurementInputOne").change(function() {
    iPrintPrices();
  });
  $(".measurementInputTwo").change(function() {
    calculateThePrice2()
  });
  $(".measurementInputThree").change(function() {
    calculateThePrice3()
  });

});
