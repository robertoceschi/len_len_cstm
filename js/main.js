// Make the showSidebar function into a variable so it can be easily called
var showSidebar = function () {
    var $target = $('body').toggleClass("active");
    //Anpassungen für OFF-CanvasBanner
    if ($target.hasClass('active')) {
        $('.main-link-headline').css('display', 'none');
    }
    if (!$target.hasClass('active')) {
        $('.main-link-headline').css('display', 'block');
    }
};
// add/remove classes everytime the window resize event fires
jQuery(window).resize(function () {
    var off_canvas_nav_display = $('.off-canvas-navigation').css('display');
    if (off_canvas_nav_display === 'block') {
        $("body").removeClass("active");
    }
});
jQuery(document).ready(function ($) {
    // Toggle for sidebar
    $('#sidebar_button').click(function (e) {
        e.preventDefault();
        showSidebar();
    });

    jQuery("#sidebar_button").click(function () {

        $('#banner_toggle').toggleClass("banner_new");
    });
    jQuery(".headline").fitText();
    // Fittext
    jQuery(".headline").fitText(1.2, { minFontSize: '24px', maxFontSize: '120px' });
    jQuery("#main_image p").fitText(3, { minFontSize: '18px', maxFontSize: '90px' });
    jQuery("#main_image p").fitText(3, { minFontSize: '18px', maxFontSize: '90px' });
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