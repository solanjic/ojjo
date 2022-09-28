/**
 * wrap jQuery
 */
$(document).ready(function(){
    /**
     * Burger
     */
    $('.header-menu-burger-wrap').click(function(){
        $('.mob-menu').toggleClass('mob-menu--opened')
    });


    /**
     * Owl-Carousel
     */
    $('.owl-carousel').owlCarousel();


    /**
     * PopUp Closing
     */
    $('.popup-close').click(function () {
        $(this).closest('.popup-wrapper').fadeOut(400);
    });


});

// js-Pop Showing 

let isNewsletterPopup = +localStorage.getItem('newsletter');
if (!isNewsletterPopup) {
	setTimeout(function () {
		$('#newsletter').fadeIn(500);
	}, 1500);
}