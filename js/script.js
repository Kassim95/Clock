$(document).ready(function(){
// setting the clock 
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
// background color changes every 5 minutes randomly
	window.setInterval(function(){

		var rand = Math.floor(Math.random()*colors.length);           
		$('body').css({"background-color": colors[rand]});

	}, 300000);
// "What time is it" color changes every hour randomly
	window.setInterval(function(){
		var rand = Math.floor(Math.random()*colors.length);           
		$('h1').css({"color": colors[rand]});	
	}, 3600000);
});