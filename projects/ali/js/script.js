$(document).ready(function() {

	$('a')
		.on("mouseenter", function() {
    		$(this).css({"background-color": "yellow", "font-weight": "bolder"});
  })

  		.on("mouseleave", function() {
	    var styles = {
	      backgroundColor : "#ddd",
	      fontWeight: ""
	    };
	    $(this).css( styles );
  });