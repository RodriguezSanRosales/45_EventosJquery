$(document).ready(function() {
	$('#camColor').mouseenter(function() {
		$('#camColor').css('background-color', '#430392');
	});
	$('#camColor').mouseleave(function() {
		$('#camColor').css('background-color', 'black');
	});

    $('input').focus(function() {
        $('input').css('outline-color','#FF0000');
    });

	$('#camColor').click(function(){
		$('#camColor').toggle();
	});

	$('.slide').mouseenter(function() {
		$('.slide').slideToggle('slow');
	});

	$('h3').mouseover(function() {
		$('h3').animate({"font-size": "20"}, 500);
	});

});