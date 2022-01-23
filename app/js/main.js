let mixer = mixitup('.popular__inner');


$(function () {
	$('.review-slider__inner').slick({
		prevArrow: '<button type="button" class="slick-prev slick-arrow review__slick--prev"><svg class="review__slick"><use xlink: href ="images/sprite.svg#slider-prev"></use></svg></button>',


		nextArrow: '<button type="button" class="slick-next slick-arrow review__slick--next"><svg class="review__slick"><use xlink: href ="images/sprite.svg#slider-next"></use></svg></button>',


		dots: true,
		arrows: true
	});

	$('.filter-price__input').ionRangeSlider({
		type: "double",
		prefix: $,
		onChange: function (data) {
			$('.filter-price__form').val(data.from);
			$('.filter-price__to').val(data.to);
		},

	});

	$('.catalog-choice').styler();

});