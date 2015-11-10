$(document).ready(function() {
	
	var mover = $('.mover');
	var shaker = $('.shaker');
	var moneyMaker = $('.money-maker');

	function runIt() {
		mover.animate({top: '+=20px'}, 2000);
		mover.animate({top: '-=20px'}, 2000);
		shaker.animate({top: '-=10px'}, 1125);
		shaker.animate({top: '+=10px'}, 1125);
		moneyMaker.animate({top: '+=15px'}, 1172);
		moneyMaker.animate({top: '-=15px'}, 1172, runIt);
	}

	runIt();
});
	

