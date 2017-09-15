$(window).on("load",function() {
    function fade() {
        $('.fade').each(function() {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();

            /* If the object is completely visible in the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css('opacity')==0) {$(this).fadeTo(100,1);}
            } else { //object goes out of view (scrolling up)
                if ($(this).css('opacity')==1) {$(this).fadeTo(100,0);}
            }
        });
    }
    fade(); //Fade in completely visible elements during page-load
    $(window).scroll(function() {fade();}); //Fade in elements during scroll
});
