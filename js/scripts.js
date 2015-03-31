/**
 * Created by ART on 1/4/2015.
 */

$(document).ready(function(){


     $('.log img').click(function(){
        alert('Enter email address');
     });

    $('.bxslider2').bxSlider ({
        captions: true,
        adaptiveHeight: false,
        pager: true,
        slideMargin:0,
        mode: 'horizontal',
        easing: 'ease-in-out',
        auto: true, pause: 2000,
        autoHover: true,
        randomStart:false,
        startSlide: 0,
        speed: 2000

    });

        $('.bxslider').bxSlider({
            captions: true,
            pager: true,
            slideMargin:0,
            adaptiveHeight: false,
            easing: 'easeOutElastic',
            //useCSS: false,
            mode: 'fade',
            auto: true, pause: 1500,
            autoHover: true,
            speed: 3000

       /*
        captions: true,
        pager: true,
        slideMargin:0,
        tickerHover:'boolean',
        mode: 'horizontal',
        easing: 'ease',
        speed: 5000,
        auto: true, pause: 1000,
        adaptiveHeight: false,
        adaptiveHeightSpeed:1000,
        ticker: true,
        useCSS: false,
        easing: 'easeOutElastic',
        */

      });

       $('.bxslider1').bxSlider({
           captions: true,
           slideMargin:0,
           adaptiveHeight: false,
           randomStart:false,
           startSlide: 0,
           video: true,
           mode: 'horizontal',
           easing: 'easeInOutElastic',
           useCSS: false,
           //easing: 'ease-in-out',
           auto: true, pause: 1000,
           autoHover: true,
           speed: 5000
    });

        $('.list-leftMenu').mouseenter(function(){
        $('.hidden') .fadeIn(1200).show();
        $('.hidden').mouseenter(function(){
        $('.hidden').show();
            }).mouseleave(function(){
        $('.hidden').fadeOut(1000) .hide();
        });
            }).mouseleave(function(){
        $('.hidden') .hide();
    });

   $(function() {
        $( "#tabs").tabs();

    });

  /* $(window).load(function() {
       $('.flexslider').flexslider({
           animation: "slide"
       });
   });*/





 });

