"use strict";
/*  ===공통=== */
$(function(){

	/* header color change */
	colorChangeEffect();

	if($("#container").hasClass("main")){
		$('.home-title-area').addClass('reach');
		menuButtonEffect();
		buttonEffect();
		scrollEffect();
		projectScrollEffect();
		aboutEffect();
	}
	else if($("#container").hasClass("sub")){
		subVisualEffect();		
	}
	

});

/* main */
function colorChangeEffect(){
	$(window).on('scroll', function(){
		var $scrollTop = $(window).scrollTop();
		var $aboutTop =  $('.js-color-change').offset().top;
		var $headerTop = $('.header-top');

		if($scrollTop >= $aboutTop){
			$headerTop.addClass('color-change');
		} else {
			$headerTop.removeClass('color-change');
		}
	});
}
function projectScrollEffect(){
	$(window).on('scroll', function(){

		var projectCount = 5; // 프로젝트 갯수
		var $windowHeight = $(window).height();
		var $scrollTop = $(window).scrollTop();
		var $headerTop = $('.header-top');

		/* project effect */
		function projectEffect(num) {
		
			var $projectItem = $(".project-item"+num);

			if($scrollTop >= $projectItem.offset().top - ($windowHeight / 2)){
				$projectItem.find(".project-bg").addClass('reach');
				$projectItem.find(".project-item-contents").addClass('reach');
			}
		}

		for(var i = 1; i <= projectCount; i++){
			projectEffect(i);
		}
	});
}
function aboutEffect() {
	$(window).on('scroll', function(){

		var $windowHeight = $(window).height();
		var $scrollTop = $(window).scrollTop();
		var $aboutMeTop = $('.about-me');
		var $aboutSkillsTop = $('.about-skills');

		if($scrollTop >= $aboutMeTop.offset().top - ($windowHeight / 2)){
			$aboutMeTop.addClass('reach');
		}
		if($scrollTop >= $aboutSkillsTop.offset().top - ($windowHeight / 2)){
			$aboutSkillsTop.addClass('reach');
		}
	});
}

function buttonEffect(){
	$('.js-btn')
    .on('mouseenter', function(e) {
		var parentOffset = $(this).offset(),
  		relX = e.pageX - parentOffset.left,
  		relY = e.pageY - parentOffset.top;
		$(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
		var parentOffset = $(this).offset(),
  		relX = e.pageX - parentOffset.left,
  		relY = e.pageY - parentOffset.top;
    	$(this).find('span').css({top:relY, left:relX})
    });
}

function menuButtonEffect() {
	$('#js-menu-icon').click(function(){
		$(this).toggleClass('open');
		if($(this).hasClass('open')){
			$('.main-gnb').slideDown();
			$('.header-logo').addClass('open');
		}else {
			$('.main-gnb').slideUp();
			$('.header-logo').removeClass('open');
		}
	});
}

function scrollEffect() {
	$('a.page-scroll').click(function(){
		var $anchor = $(this).attr('href');
		var $pos = $($anchor).offset().top;

		$('.main-gnb').slideUp();
		$('.header-logo').removeClass('open');
		$('#js-menu-icon').toggleClass('open');

		$('html, body').stop().animate({ scrollTop : $pos }, 600, 'easeOutCubic');
		return false;
	});
}


/* sub */
function subVisualEffect(){
	/// visual 효과
	$(".sub #bottomToGo").click(function(event){
		$("html, body").stop().animate({scrollTop:$(".sub .wrap_body_frame").offset().top}, 1000, 'easeInOutExpo');
				event.preventDefault();
	});

	var $window = $(window);
	$window.scroll(function(){
	    var $scrollY = $window.scrollTop();
	    var alpha = 1 - ($scrollY / $window.height()* 1.1);
	    $(".sub .wrap_cover").css({
	    	marginTop : - $scrollY / 3 
	    });
	    $(".sub .cover_cell").css({
	    	opacity : alpha 
	    });
	});

}