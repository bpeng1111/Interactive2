$(document).ready(function(){

	// try uncommenting (deleting the // before a line) to see its effects

	// $('.fill').addClass('shrink');	

	//$('.fill').click(function() {
	//	$('.fill').toggleClass('circle');
	//});	

	// $('.fill').hover(function() {
	// 	$(this).toggleClass('rotate');
	// });	

	// $('#letter').click(function() {
	// 	var letter = $('#letter').clone();
	// 	$('body').append(letter);
	// });	


	// random backgrounds over time
	// setInterval(function(){
	// 	$redValue = Math.floor(Math.random()*255);
	// 	$greenValue = Math.floor(Math.random()*255);
	// 	$blueValue = Math.floor(Math.random()*255);	
	// 	$('.fill').css(
	// 		'background', 'rgba('+$redValue+','+$blueValue+','+$greenValue+', 1)'
	// 	);
	// },500);
		

	$('#output').click(function(){
	    $('#input').focus();
	    $(this).addClass('active');
	});

	n = 1;
	//small, medium, large
	width = '';

	$('#input').keypress(function(e) {
			// alert($("#output > div").length);


			var total = ($("#output > div").length);
			var range = (total/3);

			// alert(range);

			$( "#output > div" ).removeClass('small');
			$( "#output > div" ).removeClass('medium');
			$( "#output > div" ).removeClass('large');
			
			$( "#output > div" ).slice( 0, range ).addClass( 'small' );
			$( "#output > div" ).slice( range, range*2  ).addClass( 'medium' );
			$( "#output > div" ).slice( range*2, range*3  ).addClass( 'large' );

			/* see how many keystrokes, cycle through widths 
			n++;

			if(n % 3 == 0) {
				width='small';
				//alert(width);
			}

			if(n % 3 == 1) {
				width='medium';
				//alert(width);
			}

			if(n % 3 == 2) {
				width='large';
				//alert(width);
			}
			*/

			// the keycode for 'a' is 97
			if ( e.which == 97 ) {
	    		$('#output').append('<div id="A"><div class="a-top-stroke"></div><div class="a-left-stroke"></div><div class="a-right-stroke"></div><div class="a-middle-stroke"></div></div>');
			}

			// the keycode for 'b' is 98
			if ( e.which == 98 ) {
	    		$('#output').append('<div id="B"><div class="b-top-stroke"></div><div class="b-middle-stroke"></div><div class="b-bottom-stroke"></div><div class="b-left-stroke"></div><div class="b-right-stroke-1"></div><div class="b-right-stroke-2"></div></div>');
			}
			// the keycode for 'c' is 99
			if ( e.which == 99 ) {
	    		$('#output').append('<div id="C"><div class="c-top-stroke"></div><div class="c-bottom-stroke"></div><div class="c-right-stroke-1"></div><div class="c-right-stroke-2"></div><div class="c-left-stroke"></div></div>');
			}
			if ( e.which == 100 ) {
	    		$('#output').append('<div id="D"><div class="d-top-stroke"></div><div class="d-left-stroke"></div><div class="d-bottom-stroke"></div><div class="d-right-stroke"></div></div>');
			}
			if ( e.which == 101 ) {
	    		$('#output').append('<div id="E"><div class="e-top-stroke"></div><div class="e-middle-stroke"></div><div class="e-bottom-stroke"></div><div class="e-left-stroke"></div></div>');
			}
			if ( e.which == 102 ) {
	    		$('#output').append('<div id="F"><div class="f-top-stroke"></div><div class="f-middle-stroke"></div></div>');
			}
			if ( e.which == 103 ) {
	    		$('#output').append('<div id="G"><div class="g-top-stroke"></div><div class="g-bottom-stroke"></div><div class="g-left-stroke"></div><div class="g-right-stroke-1"></div><div class="g-right-stroke-2"></div></div>');
			}
			if ( e.which == 104 ) {
	    		$('#output').append('<div id="H"><div class="h-right-stroke"></div><div class="h-middle-stroke"></div><div class="h-left-stroke"></div></div> ');
			}
			if ( e.which == 105 ) {
	    		$('#output').append('<div id="I"><div class="i-middle-stroke"></div></div>');
			}
			if ( e.which == 106 ) {
	    		$('#output').append('<div id="J"><div class="j-top-stroke"></div><div class="j-right-stroke"></div><div class="j-bottom-stroke"></div><div class="j-left-stroke"></div></div>');
			}
			if ( e.which == 107 ) {
	    		$('#output').append('<div id="K"><div class="k-right-stroke-1"></div><div class="k-right-stroke-2"></div><div class="k-middle-stroke"></div><div class="k-left-stroke"></div></div>');
			}
			if ( e.which == 108 ) {
	    		$('#output').append('<div id="L"><div class="l-top-stroke"></div><div class="l-bottom-stroke"></div><div class="l-left-stroke"></div></div>');
			}
			if ( e.which == 109 ) {
	    		$('#output').append('<div id="M"><<div class="m-top-stroke-1"></div><div class="m-top-stroke-2"></div><div class="m-middle-stroke"></div><div class="m-left-stroke"></div><dic class="m-right-stroke"></div></div>');
			}
			if ( e.which == 110 ) {
	    		$('#output').append('<div id="N"><div class="n-top-stroke"></div><div class="n-right-stroke"></div><div class="n-left-stroke"></div></div>');
			}
			if ( e.which == 111 ) {
	    		$('#output').append('<div id="O"><div class="o-top-stroke"></div><div class="o-bottom-stroke"></div><div class="o-left-stroke"></div><div class="o-right-stroke"></div></div>');
			}
			if ( e.which == 112 ) {
	    		$('#output').append('<div id="P"><div class="p-top-stroke"></div><div class="p-bottom-stroke"></div><div class="p-left-stroke"></div><div class="p-right-stroke"></div></div>');
			}
			if ( e.which == 113 ) {
	    		$('#output').append('<div id="Q"><div class="q-top-stroke"></div><div class="q-bottom-stroke"></div><div class="q-left-stroke"></div><div class="q-right-stroke"></div></div>');
			}
			if ( e.which == 114 ) {
	    		$('#output').append('<div id="R"><div class="r-top-stroke"></div><div class="r-bottom-stroke"></div><div class="r-left-stroke"></div><div class="r-right-stroke-1"></div><div class="r-right-stroke-2"></div></div>');
			}
			if ( e.which == 115 ) {
	    		$('#output').append('<div id="S"><div class="s-top-stroke"></div><div class="s-middle-stroke"></div><div class="s-bottom-stroke"></div><div class="s-left-stroke"></div><div class="s-right-stroke"></div></div>');
			}
			if ( e.which == 116 ) {
	    		$('#output').append('<div id="T"><div class="t-top-stroke"></div><div class="t-middle-stroke"></div></div>');
			}
			if ( e.which == 117 ) {
	    		$('#output').append('<div id="U"><div class="u-right-stroke"></div><div class="u-bottom-stroke"></div><div class="u-left-stroke"></div></div>');
			}
			if ( e.which == 118 ) {
	    		$('#output').append('<div id="V"><div class="v-right-stroke"></div><div class="v-right-stroke-2"></div><div class="v-bottom-stroke"></div><div class="v-left-stroke"></div></div>');
			}
			if ( e.which == 119 ) {
	    		$('#output').append('<div id="W"><div class="w-top-stroke-1"></div><div class="w-top-stroke-2"></div><div class="w-middle-stroke"></div><div class="w-left-stroke"></div><dic class="w-right-stroke"></div></div>');
			}
			if ( e.which == 120 ) {
	    		$('#output').append('<div id="X"><div class="x-right-stroke"></div><div class="x-right-stroke-2"></div><div class="x-middle-stroke"></div><div class="x-left-stroke"></div><div class="x-left-stroke-2"></div></div>');
	    	}
	    	if ( e.which == 121 ) {
	    		$('#output').append('<div id="Y"><div class="y-right-stroke"></div><div class="y-middle-stroke"></div><div class="y-left-stroke"></div></div>');
			}
			if ( e.which == 122 ) {
	    		$('#output').append('<div id="Z"><div class="z-top-stroke"></div><div class="z-bottom-stroke"></div><div class="z-left-stroke"></div><div class="z-right-stroke"></div><div class="z-middle-stroke"></div></div>');
	    	}
	});
});