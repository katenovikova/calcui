function calcPrice(){

    var windowType = $('#windowType li.selected').data('type');
    var systemType = $('#system li.selected').data('system');
    var color = $('#windowColor li.selected').data('color');

    var w1 = $('#windowBlock' + windowType + ' .t-l').val();
    var w3 = $('#windowBlock' + windowType + ' .t-c').val();
    var w2 = $('#windowBlock' + windowType + ' .t-r').val();
    var h = $('#windowBlock' + windowType + ' .r-m').val();

    var montag = $('#montag').prop("checked");

    if(systemType == 4){
        var colorType = $('.calc_palitra2 .elem.active').data('category');
    }
    else{
        var colorType = $('.calc_palitra .elem.active').data('category');
    }

    var data = {
        'windowType' : windowType,
        'systemType' : systemType,
        'color' : color,
        'colorType' : colorType,
        'w1' : w1,
        'w2' : w2,
        'w3' : w3,
        'h' : h,
        'montag' : montag
    };

    $.ajax({
        type: 'POST',
        url: 'calc_price.php',
        data: data,
        success: function(data){
            $('#price').html(data);
            $('#price2').html(data);
        }
    });
};

function windowChange(){
    var windowType = $('#windowType li.selected').data('type');
    var systemType = $('#system li.selected').data('system');

    var systemTypeName = $('#system li.selected span').html();
    $('#res_system').html(systemTypeName);

    var color = $('#windowColor li.selected').data('color');

    if(systemType == 4){
        var colorName = $('.calc_palitra2 .elem.active .name').html();
    }
    else{
        var colorName = $('.calc_palitra .elem.active .name').html();
    }

    $('#res_color').html(colorName.replace("<br>", " "));

    $('.calc_window').children('.windowblock').hide();
    $('#windowBlock' + windowType).show();

    var systemTypePath = (systemType < 4)?'uni':'jaluzi';
    var colorPath = (color == 1)?'light':'dark';

    if(windowType == 1){
        var path = 'img/windows/' + systemTypePath + '/' +  colorPath + '/' + windowType + '.png';
        $('#windowPic1').attr('src', path);
        $('#montagPrice').html(600);
        $('#res_type').html($('#windowPic1').data('name'));
    }
    if(windowType == 2){
        var path = 'img/windows/' + systemTypePath + '/' +  colorPath + '/' + windowType + '.png';
        $('#windowPic2').attr('src', path);
        $('#montagPrice').html(900);
        $('#res_type').html($('#windowPic2').data('name'));
    }
    if(windowType == 3){
        var path = 'img/windows/' + systemTypePath + '/' +  colorPath + '/' + windowType + '.png';
        $('#windowPic3').attr('src', path);
        $('#montagPrice').html(600);
        $('#res_type').html($('#windowPic3').data('name'));
    }
    calcPrice();
};

$(document).ready(function(){

    //system-type
    $('#system li').click(function(){
        $('#system li').removeClass('selected');
        $(this).addClass('selected');
        $('#systemRes').html($(this).html());
        $('.wrapper-dropdown-2').removeClass('active');
        windowChange();
        if($(this).data('system') == 4){
            $('.calc_palitra').hide();
            $('.calc_palitra2').show();

            $('.calc_palitra2 .arrow a').remove();

            $('.calc_palitra2 .slider-inner .bx-controls').remove();

            $('.calc_palitra2 .slider-inner .bx-viewport').unwrap();
            $('.calc_palitra2 .slider-inner .palitra-content2').unwrap();

            var background = $('.palitra-content2 .elem.active').children('.img').children('div').css('background-image')
            //var windowType = $('#windowType li.selected').data('type');
            $('#colorBlock1').css('background', background);
            $('#colorBlock2').css('background', background);
            $('#colorBlock3').css('background', background);

            $('.palitra-content2').bxSlider({
        		mode: 'horizontal',
        		slideSelector: '.elem',
        		minSlides: 4,
        		maxSlides: 8,
        		moveSlides: 8,
        		slideWidth: 100,
                auto: false,
        		speed: 500,
        		pause:2000,
        		tickerHover:true,
        		slideMargin:5,
        		nextSelector:'.calc_palitra2 .slider .arrow-next',
        		prevSelector:'.calc_palitra2 .slider .arrow-prev',
        		pager:false,
        		infiniteLoop: false,
        		hideControlOnEnd: true,
        		adaptiveHeight: true
            });
        }else{
            $('.calc_palitra').show();
            $('.calc_palitra2').hide();

            $('.calc_palitra .arrow a').remove();

            $('.calc_palitra .slider-inner .bx-controls').remove();

            $('.calc_palitra .slider-inner .bx-viewport').unwrap();
            $('.calc_palitra .slider-inner .palitra-content').unwrap();

            var background = $('.palitra-content .elem.active').children('.img').children('div').css('background-image')
            //var windowType = $('#windowType li.selected').data('type');
            $('#colorBlock1').css('background', background);
            $('#colorBlock2').css('background', background);
            $('#colorBlock3').css('background', background);

            $('.palitra-content').bxSlider({
        		mode: 'horizontal',
        		slideSelector: '.elem',
        		minSlides: 4,
        		maxSlides: 8,
        		moveSlides: 8,
        		slideWidth: 100,
                auto: false,
        		speed: 500,
        		pause:2000,
        		tickerHover:true,
        		slideMargin:5,
        		nextSelector:'.calc_palitra .slider .arrow-next',
        		prevSelector:'.calc_palitra .slider .arrow-prev',
        		pager:false,
        		infiniteLoop: false,
        		hideControlOnEnd: true,
        		adaptiveHeight: true
            });
        }
    });

    $('.calc_palitra a.types').click(function(){
        $('.calc_palitra a.types').removeClass('active');
        $(this).addClass('active');

        var type = $(this).data('type');

        $('.calc_palitra p.desc').hide();

        if(type != 'all'){
            $('.calc_palitra p.text' + type).show();

            $('.palitra-content>div').each(function(){
                //$(this).removeClass('elem-hide').addClass('elem');
                if($(this).data('category') != type)
                    $(this).removeClass('elem').addClass('elem-hide');
                else if($(this).data('category') == type && $(this).hasClass('elem-hide')){
                    $(this).removeClass('elem-hide').addClass('elem');
                }
            });

            $('.calc_palitra .arrow a').remove();

            $('.calc_palitra .slider-inner .bx-controls').remove();

            $('.calc_palitra .slider-inner .bx-viewport').unwrap();
            $('.calc_palitra .slider-inner .palitra-content').unwrap();

            $('.palitra-content').bxSlider({
        		mode: 'horizontal',
        		slideSelector: '.elem',
        		minSlides: 4,
        		maxSlides: 8,
        		moveSlides: 8,
        		slideWidth: 100,
                auto: false,
        		speed: 500,
        		pause:2000,
        		tickerHover:true,
        		slideMargin:5,
        		nextSelector:'.calc_palitra .slider .arrow-next',
        		prevSelector:'.calc_palitra .slider .arrow-prev',
        		pager:false,
        		infiniteLoop: false,
        		hideControlOnEnd: true,
        		adaptiveHeight: true
            });
        }else{
            $('.calc_palitra p.all').show();

            $('.palitra-content>div').each(function(){
                $(this).removeClass('elem-hide').addClass('elem');

                $('.calc_palitra .arrow a').remove();

                $('.calc_palitra .slider-inner .bx-controls').remove();

                $('.calc_palitra .slider-inner .bx-viewport').unwrap();
                $('.calc_palitra .slider-inner .palitra-content').unwrap();

                $('.palitra-content').bxSlider({
            		mode: 'horizontal',
            		slideSelector: '.elem',
            		minSlides: 4,
            		maxSlides: 8,
            		moveSlides: 8,
            		slideWidth: 100,
                    auto: false,
            		speed: 500,
            		pause:2000,
            		tickerHover:true,
            		slideMargin:5,
            		nextSelector:'.calc_palitra .slider .arrow-next',
            		prevSelector:'.calc_palitra .slider .arrow-prev',
            		pager:false,
            		infiniteLoop: false,
            		hideControlOnEnd: true,
            		adaptiveHeight: true
                });
            });
        }

        return false;
    });

    $('.calc_palitra2 a.types').click(function(){
        $('.calc_palitra2 a.types').removeClass('active');
        $(this).addClass('active');

        var type = $(this).data('type');

        $('.calc_palitra2 p.desc').hide();

        if(type != 'all'){
            $('.calc_palitra2 p.text' + type).show();

            $('.palitra-content2>div').each(function(){
                //$(this).removeClass('elem-hide').addClass('elem');
                if($(this).data('category') != type)
                    $(this).removeClass('elem').addClass('elem-hide');
                else if($(this).data('category') == type && $(this).hasClass('elem-hide')){
                    $(this).removeClass('elem-hide').addClass('elem');
                }
            });

            $('.calc_palitra2 .arrow a').remove();

            $('.calc_palitra2 .slider-inner .bx-controls').remove();

            $('.calc_palitra2 .slider-inner .bx-viewport').unwrap();
            $('.calc_palitra2 .slider-inner .palitra-content2').unwrap();

            $('.palitra-content2').bxSlider({
        		mode: 'horizontal',
        		slideSelector: '.elem',
        		minSlides: 4,
        		maxSlides: 8,
        		moveSlides: 8,
        		slideWidth: 100,
                auto: false,
        		speed: 500,
        		pause:2000,
        		tickerHover:true,
        		slideMargin:5,
        		nextSelector:'.calc_palitra2 .slider .arrow-next',
        		prevSelector:'.calc_palitra2 .slider .arrow-prev',
        		pager:false,
        		infiniteLoop: false,
        		hideControlOnEnd: true,
        		adaptiveHeight: true
            });
        }else{
            $('.calc_palitra2 p.all').show();

            $('.palitra-content2>div').each(function(){
                $(this).removeClass('elem-hide').addClass('elem');

                $('.calc_palitra2 .arrow a').remove();

                $('.calc_palitra2 .slider-inner .bx-controls').remove();

                $('.calc_palitra2 .slider-inner .bx-viewport').unwrap();
                $('.calc_palitra2 .slider-inner .palitra-content2').unwrap();

                $('.palitra-content2').bxSlider({
            		mode: 'horizontal',
            		slideSelector: '.elem',
            		minSlides: 4,
            		maxSlides: 8,
            		moveSlides: 8,
            		slideWidth: 100,
                    auto: false,
            		speed: 500,
            		pause:2000,
            		tickerHover:true,
            		slideMargin:5,
            		nextSelector:'.calc_palitra2 .slider .arrow-next',
            		prevSelector:'.calc_palitra2 .slider .arrow-prev',
            		pager:false,
            		infiniteLoop: false,
            		hideControlOnEnd: true,
            		adaptiveHeight: true
                });
            });
        }

        return false;
    });

    //color-type
    $('#windowColor li').click(function(){
        $('#windowColor li').removeClass('selected');
        $(this).addClass('selected');
        $('#windowColorRes').html($(this).html());
        $('.wrapper-dropdown-2').removeClass('active');
        windowChange();
    });

    //window-type
    $('#windowType li').click(function(){
        $('#windowType li').removeClass('selected');
        $(this).addClass('selected');
        $('#windowTypeRes').html($(this).html());
        $('.wrapper-dropdown-2').removeClass('active');
        windowChange();
    });

    $('.wrapper-dropdown-2 div').on('click', function(){
        $(this).parent('.wrapper-dropdown-2').addClass('active');
    });

    $('.wrapper-dropdown-2').on('focusout', function(){
        var li = $(this);
        setTimeout(function () {
            li.removeClass('active');
        }, 500);
    });

    //palitra
    $('.calc_palitra .elem').click(function(){
        $('.calc_palitra .elem-hide').removeClass('active');
        $('.calc_palitra .elem').removeClass('active');
        $(this).addClass('active');

        var background = $(this).children('.img').children('div').css('background-image')
        //var windowType = $('#windowType li.selected').data('type');
        $('#colorBlock1').css('background', background);
        $('#colorBlock2').css('background', background);
        $('#colorBlock3').css('background', background);

        windowChange();
    });


    $('.calc_palitra2 .elem').click(function(){
       $('.calc_palitra2 .elem').removeClass('active');
       $('.calc_palitra2 .elem-hide').removeClass('active');
       $(this).addClass('active');

       var background = $(this).children('.img').children('div').css('background-image')
       //var windowType = $('#windowType li.selected').data('type');
       $('#colorBlock1').css('background', background);
       $('#colorBlock2').css('background', background);
       $('#colorBlock3').css('background', background);

       windowChange();
    });

    $('.palitra-content').bxSlider({
		mode: 'horizontal',
		slideSelector: '.elem',
		minSlides: 4,
		maxSlides: 8,
		moveSlides: 8,
		slideWidth: 100,
        auto: false,
		speed: 500,
		pause:2000,
		tickerHover:true,
		slideMargin:5,
		nextSelector:'.calc_palitra .slider .arrow-next',
		prevSelector:'.calc_palitra .slider .arrow-prev',
		pager:false,
		infiniteLoop: false,
		hideControlOnEnd: true,
		adaptiveHeight: true
    });

    $('.palitra-content2').bxSlider({
		mode: 'horizontal',
		slideSelector: '.elem',
		minSlides: 4,
		maxSlides: 8,
		moveSlides: 8,
		slideWidth: 100,
        auto: false,
		speed: 500,
		pause:2000,
		tickerHover:true,
		slideMargin:5,
		nextSelector:'.calc_palitra2 .slider .arrow-next',
		prevSelector:'.calc_palitra2 .slider .arrow-prev',
		pager:false,
		infiniteLoop: false,
		hideControlOnEnd: true,
		adaptiveHeight: true
    });

    $('#montag').click(function(){
        windowChange();
    });

    $('.calc_window input').on('keyup', function(){
        //if($(this).val() > 30 && $(this).val() < 220){
            windowChange();
        //}
    });

    $('.calc_window input').mask('9999');

    $('.close').click(function(){
       $('.zakaz').hide();
       return false;
    });

    $('.calc_result .buy').click(function(){
        $('.zakaz').show();
        return false;
    });

    windowChange();

    $("#zakaz_form").validate({
         ignore: ":hidden",
         rules:{
          name:{
                  required: true,
          },

          phone:{
                required: true,
                digits: true,
          },
          email:{
                  required: false,
                  email: true
          },
            },
            messages:{
          name:{
                  required: "Пожалуйста, напишите, как к вам обращаться",

          },

          phone:{
                  required: "Номер введен с ошибками",
                  digits: "Только цыфры",
          },
         email:{
                  email: "E-mail введен не верно",

          },

      },
         submitHandler: function (form) {

             var form = $(form);
	         var url = form.attr('action');

             data = [];

             var name = $('#zakaz_form input[name="name"]').val();

             var phone = $('#zakaz_form input[name="phone"]').val();

             var email = $('#zakaz_form input[name="email"]').val();

             var windowType = $('#windowType li.selected').data('type');
             var systemType = $('#system li.selected').data('system');
             var color = $('#windowColor li.selected').data('color');
             var systemTypeName = $('#system li.selected span').html();

             var w1 = $('#windowBlock' + windowType + ' .t-l').val();
             var w3 = $('#windowBlock' + windowType + ' .t-c').val();
             var w2 = $('#windowBlock' + windowType + ' .t-r').val();
             var h = $('#windowBlock' + windowType + ' .r-m').val();

             var montag = $('#montag').prop("checked");

             var price = $('#price').html();

             if(systemType == 4){
                var colorName = $('.calc_palitra2 .elem.active .name').html();
             }
             else{
                var colorName = $('.calc_palitra .elem.active .name').html();
             }

	         var data = {
                name : name,
                phone : phone,
                email : email,
                windowtype: windowType,
                systemtype : systemTypeName,
                color : color,
                colorname : colorName,
                w1 : w1,
                w3 : w3,
                w2 : w2,
                h : h,
                montag : montag,
                price : price
            }

             $.ajax({
	            type: "POST",
	            url: url,
	            data: data,
	            success: function(msg) {
                   console.log(msg);
	               if(msg == "OK") {
	                  form.trigger("reset");
                      $('.zakaz .zakaz_form').html('<span>Ваш заказ отправлен!</span>');
                   }
				}
	         });

             return false; // required to block normal submit since you used ajax
         }
     });

});
