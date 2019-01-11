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