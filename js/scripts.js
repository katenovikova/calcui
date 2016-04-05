$(function(){
  $(".showOnMnt1").show();
  $(".showOnMnt2").hide();
  $(".showOnMnt3").hide();
  $(".showOn_DoublePane").hide();
  $(".showOn_TriplePane").hide();
  $(".showOn_QuadroPane").hide();
  $(".showOn_SinglePane").show();

  $("#MntOneTab").on("click", function() {
    $(".showOnMnt2").hide();
    $(".showOnMnt3").hide();
    $(".showOnMnt1").show();
    $(".showOn_DoublePane").hide();
    $(".showOn_TriplePane").hide();
    $(".showOn_QuadroPane").hide();
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
       $(this).find('.clarifyingReminder').fadeIn(250);
     },
     function() {
       $(this).find('.clarifyingReminder').fadeOut(250);
     }
  );
});

$(function(){
  $(".thumbnail").hover(
     function() {
       $(this).find('.caption').fadeIn(250);
     },
     function() {
       $(this).find('.caption').fadeOut(250);
     }
  );
});
