// mobile menu
$('.js-header__switch').click(function() {
	$('.header__switch').toggleClass('header__switch--open');
	$('.header__list').toggleClass('header__list--open');
	$('body').toggleClass('scroll-hidden');
});


// promo slider
$('.js-promo__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  dotsClass: 'promo__slider-dots'
});


// service slider
$('.js-service__slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
	prevArrow: '<button class="service__slider-arrow service__slider-arrow--prev"></button>',
	nextArrow: '<button class="service__slider-arrow service__slider-arrow--next"></button>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
		breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});


// recall slider
$('.js-recall__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  dotsClass: 'contacts__recall-slider-dots'
});


// accordion
$(function() {
    var caption = $('.js-accordion__header'),
        content = $('.accordion__body');   
        icon    = $('.accordion__icon') 
             
    caption.click(function(e) {
    		content.not($(this).next(content)).slideUp(600);
        $(this).next(content).slideToggle(600);
        icon.not($(this).find('.accordion__icon')).removeClass('accordion__icon--open');
        $(this).find('.accordion__icon').toggleClass('accordion__icon--open');
    });
});

