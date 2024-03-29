// let mixer = mixitup('.popular__inner');

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



	// const swiper = new Swiper('.swiper-container', {
	// 	spaceBetween: 5,
	// });

	if (window.matchMedia("(max-width: 992px)").matches) {
		$('.restaurants__items').slick({
			dots: true,
			slidesToShow: 2,
			slidesToScroll: 2,
			arrows: false,
			responsive: [{
					breakpoint: 768,
					settings: {

						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: true
					}
				},
				// {
				// 	breakpoint: 576,
				// 	settings: {
				// 		slidesToShow: 1,
				// 		slidesToScroll: 3,
				// 		infinite: true,
				// 		dots: true
				// 	},
				// }
			]
		});
	}

	// форма поиска с лупы 

	// $("#search__container").hover(function () { 
	// 		$(this).show();
	// 	}, function () {
	// 		$(this).hide();
	// 	});

});


let mixer = mixitup('.popular__inner');