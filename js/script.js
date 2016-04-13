$(document).ready(function(){

	var nextTick = setInterval(function(){

		var time = new Date();
		var hr = time.getHours();
		var min = time.getMinutes();
		var sec = time.getSeconds();
		var ms = time.getMilliseconds();

		$('#hr').text(hr);
		$('#min').text(min);
		$('#sec').text(sec);
		$('#ms').text(ms);


	
	    if (min % 2 === 0) {
	        $('#min').css('color', 'red');
	    } else {
	        $('#min').css('color', 'white');
		}
	});
	var colors = ["#CCCCCC","#333333","#990099"];  

	window.setInterval(function(){

		var rand = Math.floor(Math.random()*colors.length);           
		$('body').css({"background-color": colors[rand]});

	}, 300000);

	window.setInterval(function(){
		var rand = Math.floor(Math.random()*colors.length);           
		$('h1').css({"color": colors[rand]});	
	}, 3600000);
});