var scene = document.getElementById('scene');
var parallax = new Parallax(scene, {
	frictionX: 0.01,
	frictionY: 0.01
});

(function($) {
	
	$('.link').on('click', function() {
		$('.transition-container').removeClass('hide').addClass('reveal');
		$('.content_loader').delay(1000).fadeIn(300);
	})
	
	$('.inner_nav .close_btn').on('click', function() {
		console.log('click!!!');
		$('.content_loader').fadeOut(300, function() {
			$('.transition-container').removeClass('reveal').addClass('hide');
		});
	})
	
})(jQuery);