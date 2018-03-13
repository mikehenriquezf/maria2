$(document).ready(function() {
	$('.historias-item').on({
		click: function(){
			console.log('entre');
		},
		mouseover: function() {

			if($(document.body).hasClass('home')) {
				$(this).find('h4').css({'color':'#666666'});
				$(this).find('.uk-width-auto').find('.historia-image').addClass('historias-overlay-home');	
			} else {
				$(this).find('h4').css({'color':'#EDC054'});
				$(this).find('.uk-width-auto').find('.historia-image').addClass('historias-overlay');	
			}

			
		}, 
		mouseout: function() {
			
			if($(document.body).hasClass('home')) {
				$(this).find('h4').css({'color':'#1a1a1a'});
				$(this).find('.uk-width-auto').find('.historia-image').removeClass('historias-overlay-home');	
			} else {
				$(this).find('h4').css({'color':'#ffffff'});
				$(this).find('.uk-width-auto').find('.historia-image').removeClass('historias-overlay');	
			}
		}
	});
});
