var navbar = {};


$(document).ready(function(){
	$('#menu-icon-trigger2').on({
		click: function(){
			navbar.toggleMenu($(this));
		}
	});
});


navbar.toggleMenu = function(e) {
	if(e.hasClass('menu-open')) {
		navbar.removeMenu();
		e.toggleClass('menu-open');
	}else{
		navbar.createMenu();
		e.toggleClass('menu-open');
	}
};

navbar.createMenu = function() {
	$('body').prepend('<div class="menu-holder"><ul><li class="history-item"><a href="#"><h2>01.</h2><p>A m&aacute;s de 100 d&iacute;as y Puerto Rico todav&iacute;a est&aacute; en el apag&oacute;n m&aacutes largo en la historia.</p></a></li><li class="history-item"><a href="#"><h2>02.</h2><p>Reconstruyendo, un pequeño gesto a la vez</p></a></li><li class="history-item"><a href="#"><h2>03.</h2><p>La vida en Puerto Rico luego de Mar&iacute;a</p></a></li><li class="history-item"><a href="#"><h2>04.</h2><p>En Puerto Rico, los artistas reconstruyen y ayudan</p></a></li><li class="history-item"><a href="#"><h2>05.</h2><p>C&oacute;mo es visitar San Juan ahora</p></a></li><li class="history-item"><a href="#"><h2>06.</h2><p>Puerto Rico est&aacute; cayendo en una crisis ambiental</p></a></li></ul></div>');
	$('.menu-holder').css({
		'right' : "-" + $('.menu-holder').width() + "px"
	});

	if($(document).width() < 900) {
		$('.menu-holder').css({
			'width' : "100%"
		});		
	}

	TweenMax.to($('.menu-holder'), .9, {'right':0, ease: Power3.easeOut});
};

navbar.removeMenu = function() {
	TweenMax.to($('.menu-holder'), .9, {'right':'-' + $('.menu-holder').width() + 'px', ease: Power3.easeOut, onComplete: function(){$('.menu-holder').remove();}});
};







