// Page Load animation (rough, unoptimised code. Can prob use JQuery animate or CSS3 animations)
$(function() {

	setTimeout(function() {
		$('.usb-drive').addClass('hover');
	}, 500);
	
	setTimeout(function() {
		$('.usb-drive').removeClass('hover');
		setTimeout(function() {
			$('.usb-drive').addClass('active');
			setTimeout(function() {
				$('.usb-drive').removeClass('active');
			}, 150);
		}, 250);
	}, 750);
	
});