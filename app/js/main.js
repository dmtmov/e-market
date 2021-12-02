let mixer = mixitup('.popular__inner');

$(".menu__list > li > a").on("click", function () {
	$(".menu__list > li > a").removeClass('active');
	$(this).addClass("active");
});