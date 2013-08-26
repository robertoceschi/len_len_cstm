// Make the showSidebar function into a variable so it can be easily called
var showSidebar = function () {
    var $target = $('body').toggleClass("active");
    if ($target.hasClass('active')) {
        // $('.outer-header').css('position', 'absolute');
        // $('.outer-header').css('background', 'white');
        //$('header[role="banner"]').css('visibility', 'hidden')
        //$('.main-content').prepend("<span class='bannerOn'><a href='#banner_fix'><span aria-hidden='true' data-icon='&#xe000;' class='down-arrow '></span></span></a>")
        // $('header[role="banner"]').add("<p id='new'>new paragraph</p>").css('color', 'red');
    }
    if (!$target.hasClass('active')) {
          //$('.outer-header').css('position', 'fixed');
        //$('.outer-header').css('background', 'rgba(255, 255, 255, 0.7)');
    }
};


// add/remove classes everytime the window resize event fires
jQuery(window).resize(function () {
    var off_canvas_nav_display = $('.off-canvas-navigation').css('display');
    if (off_canvas_nav_display === 'block') {
        //$("body").removeClass("active");

    }
});


jQuery(document).ready(function ($) {
    // Toggle for sidebar
    $('#sidebar_button').click(function (e) {
        e.preventDefault();
        showSidebar();
    });
    jQuery(".headline").fitText();

    jQuery(".headline").fitText(1.2, { minFontSize: '24px', maxFontSize: '120px' });
    jQuery("#main_image p").fitText(3,{ minFontSize: '18px', maxFontSize: '90px' });
    jQuery("#main_image p").fitText(3,{ minFontSize: '18px', maxFontSize: '90px' });

    // Initialize Masonry
    $('#content').masonry({
        columnWidth: 320,
        itemSelector: '.item',
        isFitWidth: true,
        isAnimated: !Modernizr.csstransitions
    }).imagesLoaded(function () {
            $(this).masonry('reload');
        });


});