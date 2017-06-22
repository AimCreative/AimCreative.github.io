var scene = document.getElementById('scene');
var parallax = new Parallax(scene, {
	frictionX: 0.01,
	frictionY: 0.01
});

(function($) {
	
	$('.link').on('click', function() {
		console.log('click!!!');
		$('.transition-container').addClass('reveal');
	})
	
})(jQuery);