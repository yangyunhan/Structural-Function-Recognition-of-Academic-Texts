$(document).ready(function() {
	//顶部定位效果
	$(window).scroll(function () {
		var $scrollTop = $(document).scrollTop();
		if ($scrollTop > 350) {
			$(".ir-header").addClass('onscroll');
		} else {
			$(".ir-header").removeClass('onscroll');
		}
	});

	//实现左侧索引固定位置
	var $winWidth = $(window).width(), $setFixedLeft = ($winWidth - 1140) / 2;
	var options1 = {
		target: '.ir-paper-year-list',
		scrollY: 280,
		changedStyle: {
			position: 'fixed',
			left: $setFixedLeft,
			top: 130
		},
		defaultStyle: {
			position: 'absolute',
			left: 0,
			top: 0
		}
	};
	$(window).scroll(options1, function () {
		if ($(document).scrollTop() > options1.scrollY) {
			$(options1.target).css(options1.changedStyle);
		} else {
			$(options1.target).css(options1.defaultStyle);
		}
	});
});