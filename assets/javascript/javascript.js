var wins = 0;
var losses = 0;
var sums = 0;
var integer = Math.floor((Math.random()* 75) + 13);
var blue = Math.floor((Math.random()* 11) + 4);
var green = Math.floor((Math.random()* 12) + 3);
var red = Math.floor((Math.random()* 13) + 2);
var white = Math.floor((Math.random()* 14) + 1);

var scores = function(){
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
	$('#sums').empty();
	$('#sums').append(sums);
	
}

var reset = function(){
	sums = 0;
  integer = Math.floor((Math.random()* 75) + 13);
	$('.integer').empty();
	$('.integer').append(integer);	
  scores();
}

var config = function (){
	if (sums == integer) {
		wins = wins +1;
		reset();
}
	else if(sums > integer){
		losses = losses +1;
		reset();
}
	else{
		scores();
}}

	$('.sums').append(sums);
	$('.integer').append(integer);

	$(document).ready(function(){
	$('#blue').click(function(){
		sums = sums + blue;
		config();
	})
	$('#green').click(function(){
		sums = sums  + green;
		config();
	})
	$('#red').click(function(){
		sums = sums  + red;
		config();
	})
	$('#white').click(function(){
		sums  = sums  + white;
		config();
	})
});

	
