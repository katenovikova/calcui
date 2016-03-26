indicesAll=[1,1,1,1];
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

function clearMeasurements() {

  $("#height1_1"  )[0].value = 0;
  $("#width1_1"  )[0].value = 0;

  $("#height1_2_1")[0].value = 0;
  $("#height1_2_2")[0].value = 0;
  $("#width1_2_1")[0].value = 0;
  $("#width1_2_2")[0].value = 0;

  $("#height1_3_1")[0].value = 0;
  $("#height1_3_2")[0].value = 0;
  $("#height1_3_3")[0].value = 0;
  $("#width1_3_1")[0].value = 0;
  $("#width1_3_2")[0].value = 0;
  $("#width1_3_3")[0].value = 0;

  $("#height2")[0].value = 0;
  $("#width2" )[0].value = 0;

  $("#height3")[0].value = 0;
  $("#width3" )[0].value = 0;
};



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


// Parallax
jQuery(document).ready(function() {

	var jQuerywindow = jQuery(window);

  jQuery('.bg-responsive').each(function() {

		var jQuerybgobj = jQuery(this);

		jQuery(window).scroll(function() {

			var yPos = -(jQuerywindow.scrollTop() / jQuerybgobj.data('speed'));

			var coords = '50% '+ yPos + 'px (!important)';

			jQuerybgobj.css({

				backgroundPosition: coords

			});

		});

	});

});
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
