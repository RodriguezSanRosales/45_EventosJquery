$(document).ready(function() {
	$('#camColor').mouseenter(function() {
		$('#camColor').css('background-color', '#430392');
	})
	$('#camColor').mouseleave(function() {
		$('#camColor').css('background-color', 'black');
	})
});

$(document).ready(function () {
    $('input').focus(function() {
        $('input').css('outline-color','#FF0000');
    });
});  

// $(document).ready(function(){
//     $(".focusOt").focusin(function(){
//         $(this).css("background-color", "#FFFFCC");
//     });
//     $(".focusOt").focusout(function(){
//         $(this).css("background-color", "#FFFFFF");
//     });
// });

$(document).ready(function() {
	$('#camColor').click(function(){
		$('#camColor').hide();
	});
});

$(document).ready(function() {
	$('.slide').mouseenter(function() {
		$('.slide').slideToggle('slow');
	});
});	