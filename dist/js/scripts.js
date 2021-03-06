$(function(){
  $(".showOnMnt2").hide();
  $(".showOnMnt3").hide();
  $(".showOnMnt1").show();
  $(".showOn_DoublePane").hide();
  $(".showOn_TriplePane").hide();
  $(".showOn_QuadroPane").hide();
  $(".showOn_SinglePane").show();

  $("#MntOneTab").on("click", function() {
    $(".showOnMnt2").hide();
    $(".showOnMnt3").hide();
    $(".showOnMnt1").slideDown();
    $(".showOn_DoublePane").hide();
    $(".showOn_TriplePane").hide();
    $(".showOn_QuadroPane").hide();
    $(".showOn_SinglePane").slideDown();
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
});

$(function(){
  $("#Map").on("click", function() {
    $("#MapIframe").removeClass("scrolloff");
  });
});

$(function(){
  $(".layered_abomination").hover(
     function() {
       $(this).find('.clarifyingReminder').slideDown();
     },
     function() {
       $(this).find('.clarifyingReminder').slideUp();
     }
  );
});

$(function(){
  $(".thumbnail").hover(
     function() {
       $(this).find('.caption').fadeIn();
     },
     function() {
       $(this).find('.caption').fadeOut();
     }
  );
});

$(function(){

  function StripCurrent(){
    $("#PriceLite_1").parent().removeClass("active");
    $("#PriceLite_2").parent().removeClass("active");
    $("#PriceLite_3").parent().removeClass("active");
    $("#PriceMini_1").parent().removeClass("active");
    $("#PriceMini_2").parent().removeClass("active");
    $("#PriceMini_3").parent().removeClass("active");
    $("#PriceUni_1").parent().removeClass("active");
    $("#PriceUni_2").parent().removeClass("active");
    $("#PriceUni_3").parent().removeClass("active");
    $("#PriceLux_1").parent().removeClass("active");
    $("#PriceLux_2").parent().removeClass("active");
    $("#PriceLux_3").parent().removeClass("active");
  }

  $("#PriceLite_1").parent().on("click", "*", function() { StripCurrent(); $("#PriceLite_1").parent().addClass("active"); }); 
  $("#PriceLite_2").parent().on("click", "*", function() { StripCurrent(); $("#PriceLite_2").parent().addClass("active"); }); 
  $("#PriceLite_3").parent().on("click", "*", function() { StripCurrent(); $("#PriceLite_3").parent().addClass("active"); });
  $("#PriceMini_1").parent().on("click", "*", function() { StripCurrent(); $("#PriceMini_1").parent().addClass("active"); }); 
  $("#PriceMini_2").parent().on("click", "*", function() { StripCurrent(); $("#PriceMini_2").parent().addClass("active"); }); 
  $("#PriceMini_3").parent().on("click", "*", function() { StripCurrent(); $("#PriceMini_3").parent().addClass("active"); });
   $("#PriceUni_1").parent().on("click", "*", function() { StripCurrent(); $("#PriceUni_1").parent().addClass("active"); }); 
   $("#PriceUni_2").parent().on("click", "*", function() { StripCurrent(); $("#PriceUni_2").parent().addClass("active"); }); 
   $("#PriceUni_3").parent().on("click", "*", function() { StripCurrent(); $("#PriceUni_3").parent().addClass("active"); }); 
   $("#PriceLux_1").parent().on("click", "*", function() { StripCurrent(); $("#PriceLux_1").parent().addClass("active"); }); 
   $("#PriceLux_2").parent().on("click", "*", function() { StripCurrent(); $("#PriceLux_2").parent().addClass("active"); }); 
   $("#PriceLux_3").parent().on("click", "*", function() { StripCurrent(); $("#PriceLux_3").parent().addClass("active"); });

});
