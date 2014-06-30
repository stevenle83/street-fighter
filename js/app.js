$(document).ready(function() {
	$('.ryu').mouseenter(function() {
	  $('.ryu-still').hide();
	  $('.ryu-ready').show();
	})

	.mouseleave(function() {
	  $('.ryu-ready').hide();
	  $('.ryu-still').show();
	})

	.mousedown(function() {
	  playHadouken();
	  $('.ryu-ready, .ryu-cool, .ryu-still').hide();
	  $('.ryu-throwing').show();
	  $('.hadouken').finish().show()
	  .animate( 
	  	{'left': '800px'}, 
	  	800,
	    function() {
	      $(this).hide();
	      $(this).css('left', '-212px');
	    }
	   );
	})

	.mouseup(function() {
	  $('.ryu-throwing').hide();
	  $('.ryu-ready').show();
	})

	$(document).keydown("x",function() {
  	  $('.ryu-cool').show();
  	  $('.ryu-still,.ryu-ready, .ryu-throwing').hide();
  	  
	})

	.keyup("x", function() {
	    $('.ryu-cool, .ryu-ready').hide();
	    $('.ryu-still').show();
	});

});

function playHadouken() {
	  $('#hadouken-sound')[0].volume = 0.5;
	  $('#hadouken-sound')[0].load();
	  $('#hadouken-sound')[0].play();
	}
