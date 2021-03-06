$(document).ready(function() {
  playIntro();
  doLogos();

	$('.ryu').mouseenter(function() {
	  $('.ryu-still, .ryu-throwing, .ryu-cool').hide();
	  $('.ryu-ready').show();
	})

	.mouseleave(function() {
	  $('.ryu-ready, .ryu-throwing, .ryu-cool').hide();
	  $('.ryu-still').show();
	})

	.mousedown(function() {
	  playHadouken();
	  $('.ryu-still, .ryu-ready, .ryu-cool').hide();
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
	  $('.ryu-throwing, .ryu-still, .ryu-cool').hide();
	  $('.ryu-ready').show();
	});

	$(document).keydown(function(e) {
  	  if (e.keyCode == 88) {
  	    $('.ryu-still, .ryu-ready, .ryu-throwing').hide();
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
  $('#hadouken-sound')[0].volume = 1.0;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playIntro () {
  $('#intro')[0].volume = 0.5;
  $('#intro')[0].load();
  $('#intro')[0].play();
}

function doLogos () {
	$('#sf').fadeIn(5000);
	$('#jquery').fadeIn(5000);
}