$(document).ready(function(){
	// menu click event
	$('.menuBtn').click(function() {
		$(this).toggleClass('act');
			if($(this).hasClass('act')) {
				$('.mainMenu').addClass('act');
			}
			else {
				$('.mainMenu').removeClass('act');
			}
	});
	//click menu items, close the menu
	$('.menuLink').click(function(){
		$('.menuBtn').toggleClass('act');
			if($('.menuBtn').hasClass('act')){
			$('.mainMenu').addClass('act');
		}
		else {
		$('.mainMenu').removeClass('act');
		}
	});
	//
});