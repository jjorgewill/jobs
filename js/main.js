jQuery("[data-toggle=tooltip]").tooltip();
jQuery("[data-toggle=popover]").popover();

jQuery(document).ready(function () {

    $('#promo').carousel({
        interval: 48000000
    });

    if (window.innerWidth < 769) {
        jQuery(".navbar-fixed-top").addClass("navShadows")
    }
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            jQuery(".navbar-fixed-top").addClass("navShadows")
            jQuery(".navbar-fixed-top").addClass("fadeIn")
        } else {
            if (window.innerWidth >769) {
            jQuery(".navbar-fixed-top").removeClass("navShadows")
            }
            jQuery(".navbar-fixed-top").removeClass("fadeIn")
        }
    });
    jQuery(".moveHome").click(function (e) {
        e.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0}, 1000);
        jQuery('.navbar-collapse').removeClass("in")
    });
    jQuery(".moveTestimonial").click(function (e) {
        e.preventDefault();
        jQuery('.navbar-collapse').removeClass("in")
        jQuery('html, body').animate({ scrollTop: jQuery("#testimonials").offset().top}, 1000);
    });
    jQuery(".moveHowToWork").click(function (e) {
        e.preventDefault();
        jQuery('.navbar-collapse').removeClass("in")
        jQuery('html, body').animate({ scrollTop: jQuery("#howTo").offset().top}, 1000);
    });
});
