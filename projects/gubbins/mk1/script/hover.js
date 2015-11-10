$(document).ready(function() {
	
	var mover = $('.mover');
	var shaker = $('.shaker')

	function runIt() {
		mover.animate({top: '+=20px'}, 2000);
		mover.animate({top: '-=20px'}, 2000);
		shaker.animate({top: '-=10px'}, 1125);
		shaker.animate({top: '+=10px'}, 1125, runIt);
	}

	runIt();
});
	

