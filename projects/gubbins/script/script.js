$(document).ready(function() {

	$('.bubble').on('mouseenter', function() {
		$(this).css('transform', 'scale(1.5)');
	});
	$('.bubble').on('mouseleave', function() {
		$(this).css('transform', 'scale(1)');
	});

	// Code to cycle through highlighted complete structure images on mouse enter

	$('#div-one').on('click', function() {
		$('.main-window').css('background-image', 'url(img/complete-structure-idbeam.png)');
		$('#title').text("Beams");
		$('.tell-me').text("Beams help distribute loads to the columns.");
	})

	$('#div-two').on('click', function() {
		$('.main-window').css('background-image', 'url(img/complete-structure-idfoundation.png)');
		$('#title').text("Foundations");
		$('.tell-me').text("Everything relies on this. Without a well designed and constructed foundation a structure can be subject to leaning, sinking or even collapsing altogether.");
	})

	$('#div-three').on('click', function() {
		$('.main-window').css('background-image', 'url(img/complete-structure-idfloor.png)');
		$('#title').text("Floors");
		$('.tell-me').text("Floors distribute dynamic loads as well as hide services and help to insulate buildings.");
	})

	$('#div-four').on('click', function() {
		$('.main-window').css('background-image', 'url(img/complete-structure-idgirder.png)');
		$('#title').text("Girders");
		$('.tell-me').text("A girder is a giant beam. These components, when designed correctly, are able to span long distances and support heavy loads.");
	})

	$('#div-five').on('click', function() {
		$('.main-window').css('background-image', 'url(img/complete-structure-idforces.png)');
		$('#title').text("Equilibrium");
		$('.tell-me').text("Ok so this isn't a component but it is probably the most important consideration. Keeping things in balance is key to a happy, non-wobbly building.");
	})

	$('#about').on('click', function() {
		var $about = "Welcome!";
		var $intro = "You made it! Here you can explore the nitty gritty of construction, the innards of domestic buildings and build your repetoir of fun facts."
		$('.main-window').css('background-image', 'url(img/complete-structure.png)');
		$('#title').text($about);
		$('.tell-me').text($intro);
	})

	$('#learn').on('click', function() {
		var $title = "Check out these handy resources!";
		var $sites = "Functions of Building Components";
		$('#title').text($title);
		$('.tell-me').text($sites);
	})
});