$(document).ready(function(){

	// try uncommenting (deleting the // before a line) to see its effects

	// $('.fill').addClass('shrink');	

	// $('.fill').click(function() {
	// 	$('.fill').toggleClass('circle');
	// });	

	// $('.fill').hover(function() {
	// 	$(this).toggleClass('rotate');
	// });	

	// $('#letter').click(function() {
	// 	var letter = $('#letter').clone();
	// 	$('body').append(letter);
	// });	


	// n=1;

	$("divexp").hover(function(){
    $(this).parent(this).css('background-color','grey');
});
	$("divexp").mouseleave(function(){
    $(this).parent(this).css('background-color','white');
});});


	$('#A').click(function() {
		n = Math.floor(Math.random()*2);
		if(n==0){	
			$(this).removeClass();
			$(this).addClass('wide');
		}
		if(n==1){	
			$(this).removeClass();
			$(this).addClass('widest');
		}

		// n++;
		console.log(n);
	});	

	console.log('hi');

	$('#input').keypress(function(e) {
	    $('#output').append(String.fromCharCode(e.which));
			// the keycode for 'a' is 97
			if ( e.which == 97 ) {
				$('#output').addClass('special');
			}
	});



	// random backgrounds over time
	// setInterval(function(){
	// 	$redValue = Math.floor(Math.random()*255);
	// 	$greenValue = Math.floor(Math.random()*255);
	// 	$blueValue = Math.floor(Math.random()*255);	
	// 	$('.fill').css(
	// 		'background', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
	// 	);
	// },500);
	

});