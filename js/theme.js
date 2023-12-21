; (function ($) {
    "use strict"

    /*-------------------------------------------------------------------------------
	  Wow Js
    -------------------------------------------------------------------------------*/
    new WOW().init();


    var nav_offset_top = $('header').height();
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

    //* Navbar Fixed 
    $('#back-top').hide();
    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $(".header_area").addClass("navbar_fixed");
                    $('#back-top').fadeIn(500);
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                    $('#back-top').fadeOut(500);
                }
            });
        };
    };
    navbarFixed();


    /*----------------------------------------------------*/
    /*  Owl Carousel js
    /*----------------------------------------------------*/
    if ($('#home-owl').length) {
        $('#home-owl').owlCarousel({
            lazyLoad: true,
            stagePadding: 0,
            items: 1,
            nav: false,
            dots: true,
            loop: true,
            margin: 0,
            singleItem: false,
            autoplay: 2500,
            slideSpeed: 400,
            paginationSpeed: 500,
            smartSpeed: 800,
            responsiveClass: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });
    }


    if ($('#travel_cat').length) {
        $('#travel_cat').owlCarousel({
            stagePadding: 100,
            items: 3,
            nav: false,
            dots: true,
            loop: true,
            margin: 30,
            singleItem: false,
            autoplay: 2500,
            slideSpeed: 400,
            paginationSpeed: 500,
            smartSpeed: 800,
            responsiveClass: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 30,
                },
                768: {
                    items: 2
                },
                1280: {
                    items: 3
                }
            }
        });
    }



    /*----------------------------------------------------*/
    /*  Simple LightBox js
    /*----------------------------------------------------*/
    $('.imageGallery1 .light').simpleLightbox();





})(jQuery)