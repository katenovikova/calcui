/* LOADER */
jQuery(document).ready(function(){

	var zerif_frame = jQuery('iframe.zerif_google_map');
	var zerif_frameSrc = new Array();

    if( zerif_frame.length ){
		jQuery.each( zerif_frame, function(i, f){
			zerif_frameSrc[i] = jQuery(f).attr('src');
            /*remove the src attribute so window will ignore these iframes*/
            jQuery(f).attr('src', '');
        });
	}

	function zerif_display_iframe_map() {
		if( zerif_frame.length ){
			jQuery.each( zerif_frame, function(a, x){
				/*put the src attribute value back*/
				jQuery(x).attr('src', zerif_frameSrc[a]);
			});
		}
	}

	jQuery(".status").fadeOut();
	jQuery(".preloader").delay(1000).fadeOut("slow");
	setTimeout(zerif_display_iframe_map, 500);
});

/** BACKGROUND SLIDER ***/
jQuery(document).ready(function(){
	if ( jQuery('.fadein-slider .slide-item').length > 1 ) {
		jQuery('.fadein-slider .slide-item:gt(0)').hide();
		setInterval(function(){
			jQuery('.fadein-slider :first-child').fadeOut(2000).next('.slide-item').fadeIn(2000).end().appendTo('.fadein-slider');
		}, 10000);
	}
});


/* RESPONSIVE BACKGROUND ON MOBILE
var portraitViewInit = 0, // Initial viewport orientation: Default Landscape
    resize = false;
jQuery( document ).ready( zerif_bg_responsive );
jQuery( window ).resize( zerif_bg_responsive );
function zerif_bg_responsive() {
  if( jQuery( '#mobile-bg-responsive' ).length > 0 && jQuery( 'body.custom-background' ).length > 0 && isMobile.any() ) {
    // There is background image
    var windowWidth   = window.innerWidth;
    var windowHeight  = window.innerHeight;
    // Check if orientation is Portrait or Landscape: Default is Landscape
    portraitView = 0;
    if( windowHeight >= windowWidth ) {
      portraitView = 1;
    }
    if( isMobile.iOS() ) {
      windowHeight+=100;
    }
    if( portraitViewInit != portraitView ) {
      var bgHelper = jQuery( '.zerif-mobile-bg-helper-bg' );
      if( !resize ) {
        var imgURL = jQuery( 'body.custom-background' ).css( 'background-image' );
        jQuery( '.zerif-mobile-bg-helper-bg-inside' ).css( {
          'background-image': imgURL,
        } ).addClass( 'zerif-mobile-h-inside' );
        jQuery( '.zerif-mobile-bg-helper-wrap-all' ).addClass( 'zerif-mobile-h-all' );
        jQuery( '.zerif-mobile-bg-helper-content' ).addClass( 'zerif-mobile-h-content' );
        bgHelper.css( {
          'width':      windowWidth,
          'height':     windowHeight
        } ).addClass( 'zerif-mobile-h-bg' );
        portraitViewInit = portraitView;
        resize = true;
      } else {
        // Resize window
        bgHelper.css( {
          'width':      windowWidth,
          'height':     windowHeight
        } );
        portraitViewInit = portraitView;
      }
    }
  }
}


/*** DROPDOWN FOR MOBILE MENU */
var callback_mobile_dropdown = function () {

	var navLi = jQuery('#site-navigation li');

    navLi.each(function(){
        if ( jQuery(this).find('ul').length > 0 && !jQuery(this).hasClass('has_children') ){
            jQuery(this).addClass('has_children');
            jQuery(this).find('a').first().after('<p class="dropdownmenu"></p>');
        }
    });
    jQuery('.dropdownmenu').click(function(){
        if( jQuery(this).parent('li').hasClass('this-open') ){
            jQuery(this).parent('li').removeClass('this-open');
        }else{
            jQuery(this).parent('li').addClass('this-open');
        }
    });

    navLi.find('a').click(function(){
    	jQuery('.navbar-toggle').addClass('collapsed');
       	jQuery('.collapse').removeClass('in');
    });

};
jQuery(document).ready(callback_mobile_dropdown);


/* Bootstrap Fix */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {

	var msViewportStyle = document.createElement('style')

	msViewportStyle.appendChild(

		document.createTextNode(

			'@-ms-viewport{width:auto!important}'

		)

	)

	document.querySelector('head').appendChild(msViewportStyle);

}

  /*
jQuery(document).ready(function() {

	/* PARALLAX
	var jQuerywindow = jQuery(window);

	jQuery('div[data-type="background"], header[data-type="background"], section[data-type="background"]').each(function(){

		var jQuerybgobj = jQuery(this);

		jQuery(window).scroll(function() {

			var yPos = -(jQuerywindow.scrollTop() / jQuerybgobj.data('speed'));

			var coords = '50% '+ yPos + 'px';

			jQuerybgobj.css({

				backgroundPosition: coords

			});

		});

	});

});


  */


	/*
jQuery(window).load(function() {

	/* SUBSCRIBE
	jQuery("form :input").each(function(index, elem) {

		var eId = jQuery(elem).attr("class");

		if( (eId == "sib-email-area") || (eId == "sib-NAME-area") ) {

			var label = null;
			if (eId && (label = jQuery(elem).parents("form").find("label."+eId)).length == 1) {
				jQuery(elem).attr("placeholder", jQuery(label).html());
				jQuery(label).remove();
			}
		}
	});
});

*/

/* SETS THE HEIGHT OF THE HEADER */
jQuery(window).load(function(){
  setminHeightHeader();
});
jQuery(window).resize(function() {
  setminHeightHeader();
});
function setminHeightHeader() {
  if ( jQuery('#main-nav').css('min-height') != 55 || jQuery('.header').css('min-height') != 55 ) {
    jQuery('#main-nav').css('min-height',55);
    jQuery('.header').css('min-height',55);
  }
  if ( jQuery(window).width() > 750 ) {
      var minHeight = parseInt( jQuery('#main-nav').height() );
      jQuery('#main-nav').css('min-height',minHeight);
      jQuery('.header').css('min-height',minHeight);
  }
}
/* - */
