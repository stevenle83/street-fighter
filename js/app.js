$(document).ready(function() {
  playIntro();
	$('.ryu').mouseenter(function() {
	  $('.action').hide();
	  $('.ryu-ready').show();
	})

	.mouseleave(function() {
	  $('.action').hide();
	  $('.ryu-still').show();
	})

	.mousedown(function() {
	  playHadouken();
	  $('.action').hide();
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
	  $('.action').hide();
	  $('.ryu-ready').show();
	});

	$(document).keydown(function(e) {
  	  if (e.keyCode == 88) {
  	    $('.action').hide();
  	    $('.ryu-cool').show();
  	  }
  	})

  	.keyup(function(e) {
  	  if (e.keyCode == 88) {
	    $('.ryu-cool').hide();
	    $('.ryu-still').show();
	  }
	});

});

function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playIntro () {
  $('#intro')[0].volume = 0.5;
  $('#intro')[0].load();
  $('#intro')[0].play();
}