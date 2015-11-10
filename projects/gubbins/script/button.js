$(document).ready(function() {
	$('left-btn').on('click', function() {
		$(this).css({
			position: 'absolute',
			left: '-100px',
		});
	});

	$('right-btn').on('click', function() {
		$(this).css({
			position: 'absolute',
			left: '+100px',
		});
	});
});