let mixer = mixitup('.popular__inner');



$(function () {
	$('.review-slider__inner').slick({
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg class="reviev__slick reviev__slick--prev"><use xlink: href ="images/sprite.svg#slider-prev"></use></svg></button>',


		nextArrow: '<button type="button" class="slick-next slick-arrow"><svg class="reviev__slick reviev__slick--next"><use xlink: href ="images/sprite.svg#slider-next"></use></svg></button>',

		dots: true,
		arrows: true
	});
});