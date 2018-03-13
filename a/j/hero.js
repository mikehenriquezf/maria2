/*
*************************************************

Hero Slider

Author: Mike Henriquez - Front End Ninja
miguel.henriquez@gfrmedia.com

*************************************************
*/

var hero = {}, $currItem = 0;
var $sliderTime = 5000; //5000ms = 5seconds
var $heroItems = $('#hero-slider').find("li").length;

//Init

hero.Init = function () {
	
	for (i=0; i < $heroItems; i++) {
		var $heroItem = $('#hero-slider').find("li").eq(i);
		var $heroItemData = $heroItem.attr('data-img');		

		if($('.hero ul').hasClass("no-slide")) {
			$heroItem.css({
				'background' : 'url(' + $heroItemData + ') no-repeat ',
				'background-size':'cover'
			});
		}else{
			$heroItem.css({
				'background' : 'url(' + $heroItemData + ') no-repeat ',
				'background-size':'cover'
			});
		}
		
	}

	//Start Animation
	hero.Start();
};

//Start

hero.Start = function () {
	
	var firstItem = $('#hero-slider').find("li").eq(0);

	firstItem.show();
	TweenMax.to(firstItem, 1.8, {opacity:1});	
	hero.StartTrasnsitions();
	hero.Timer();

};

// Start Transitions

hero.StartTrasnsitions = function () {

	setInterval(function() {		
		hero.Timer();
	}, $sliderTime);
	
};

hero.Timer = function() {
	if($currItem < $heroItems) {
			
			var $prevItem = $currItem - 1;	
			TweenMax.to($('#hero-slider').find("li").eq($prevItem), 1.8, {opacity:0});	
			TweenMax.to($('#hero-slider').find("li").eq($currItem), 1.8, {opacity:1});	

			if($currItem === $heroItems){
				$currItem = 0;	
			}else{
				$currItem++;	
			}

		} else {

			TweenMax.to($('#hero-slider').find("li").eq($heroItems-1), 1.8, {opacity:0});	
			TweenMax.to($('#hero-slider').find("li").eq(0), 1.8, {opacity:1});	
			$currItem = 1;			
		}
};

hero.Init();