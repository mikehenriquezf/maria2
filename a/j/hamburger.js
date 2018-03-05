(function() {
	/* In animations (to close icon) */

	var beginAC = 80,
	    endAC = 320,
	    beginB = 80,
	    endB = 320;

	function inAC(s) {
	    s.draw('80% - 240', '80%', 0.3, {
	        delay: 0.1,
	        callback: function() {
	            inAC2(s)
	        }
	    });
	}

	function inAC2(s) {
	    s.draw('100% - 545', '100% - 305', 0.6, {
	        easing: ease.ease('elastic-out', 1, 0.3)
	    });
	}

	function inB(s) {
	    s.draw(beginB - 60, endB + 60, 0.1, {
	        callback: function() {
	            inB2(s)
	        }
	    });
	}

	function inB2(s) {
	    s.draw(beginB + 120, endB - 120, 0.3, {
	        easing: ease.ease('bounce-out', 1, 0.3)
	    });
	}

	/* Out animations (to burger icon) */

	function outAC(s) {
	    s.draw('90% - 240', '90%', 0.1, {
	        easing: ease.ease('elastic-in', 1, 0.3),
	        callback: function() {
	            outAC2(s)
	        }
	    });
	}

	function outAC2(s) {
	    s.draw('20% - 240', '20%', 0.3, {
	        callback: function() {
	            outAC3(s)
	        }
	    });
	}

	function outAC3(s) {
	    s.draw(beginAC, endAC, 0.7, {
	        easing: ease.ease('elastic-out', 1, 0.3)
	    });
	}

	function outB(s) {
	    s.draw(beginB, endB, 0.7, {
	        delay: 0.1,
	        easing: ease.ease('elastic-out', 2, 0.4)
	    });
	}


	/* Scale functions */

	function addScale(m) {
		m.className = 'menu-icon-wrapper scaled';
	}

	function removeScale(m) {
		m.className = 'menu-icon-wrapper';
	}
	

	/* Awesome burger scaled */

	var pathD = document.getElementById('pathD'),
		pathE = document.getElementById('pathE'),
		pathF = document.getElementById('pathF'),
		segmentD = new Segment(pathD, beginAC, endAC),
		segmentE = new Segment(pathE, beginB, endB),
		segmentF = new Segment(pathF, beginAC, endAC),
		wrapper2 = document.getElementById('menu-icon-wrapper2'),
		trigger2 = document.getElementById('menu-icon-trigger2'),
		toCloseIcon2 = true,
		dummy2 = document.getElementById('dummy2');

	wrapper2.style.visibility = 'visible';

	trigger2.onclick = function() {
		addScale(wrapper2);
		if (toCloseIcon2) {
			inAC(segmentD);
			inB(segmentE);
			inAC(segmentF);

			// dummy2.className = 'dummy dummy--active';

			TweenMax.to($('.menu-background'), 1.25, {opacity: .95, ease: Power3.easeInOut, transform:'scale(90)'});
			$('.menu-options').show();
			TweenMax.staggerTo($('.uk-list').find('li'), 0.7, {opacity:1, marginTop:0, ease:Power3.easeInOut}, 0.25);
			// $('.one-pager').css({'overflow':'hidden'});
			$('.uk-list').find('li').css({'margin-top':'100px'});
			TweenMax.to($('.menu-options').find('.uk-text-center'), .5, {opacity:1, ease:Power3.easeInOut, delay:1.5});
		} else {
			outAC(segmentD);
			outB(segmentE);
			outAC(segmentF);

			TweenMax.to($('.menu-background'), .95, {opacity: .15, ease: Power3.easeInOut, transform:'scale(0)'}, .3);
			$('.one-pager').css({'overflow':'auto'});
			TweenMax.staggerTo($('.uk-list').find('li'), 0.5, {opacity:0, top:'-100px', ease:Power3.easeInOut, onComplete:hideMenuOptions}, 0.1);
			TweenMax.to($('.menu-options').find('.uk-text-center'), .5, {opacity:0, ease:Power3.easeInOut, delay:.8});
			// $('.uk-list').find('li').css({'margin-top':'100px'});

		}
		toCloseIcon2 = !toCloseIcon2;
		setTimeout(function() {
			removeScale(wrapper2)
		}, 450);
	};

})();

function hideMenuOptions() {
	$('.menu-options').hide();
	console.log('dd');
}


$(document).ready(function(){
	$('.nav-share').on({
		click:function(){
			$(this).animate({
				width: '190px'
			});
		},
		mouseleave:function() {
			$(this).animate({
				width: '100px'
			});
		}
	});


	$('.menu-options').find('li').find('a').on({
		mouseenter:function() {
			$(this).addClass('menu-hover');
			TweenMax.to($(this), .5, {ease: Power3.easeInOut, color:'#62d298'});
		}, 
		mouseleave:function() {
			$(this).removeClass('menu-hover');
			TweenMax.to($(this), .5, {ease: Power3.easeInOut, color:'#ffffff'});
		}
	});


});
