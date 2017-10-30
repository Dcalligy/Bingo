// This jQuery function verifies that the HTML document has loaded
$(document).ready(function(){

	var usedArray = new Array(76);

	/* The baseArray provides the base multiplier value for each column based on
		B = 1 - 15
		I = 16 - 30
		N = 31 - 45
		G = 46 - 60
		O = 61 - 75
   	*/
	var baseArray = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
	var number = 0;
	var base = 0;

	init();

	function init(){
		for(var i = 0; i<24; i++){
			fillCard(i);
		}
	}

	function fillCard(i){

		base = baseArray[i] * 15;
		number = base + Math.floor(Math.random()*15)+1;


		if(usedArray[number] != true){

			// the jQuery updates the HTML tag element with id "cell#"
			// where the # is the random number!
			$('#cell'+i).html(number);

			usedArray[number] = true;

			// set the background and text for the new game
			//var id = "cell" + i;
			//document.getElementById(id).style.backgroundColor = "#eee";
			//document.getElementById(id).style.color = "#333";

		}
		else{
			// using recursion to call this function again
			fillCard(i);
		}
	}

	function resetUsedNumbersArray(){

		for(var j = 0; j < usedArray.length; j++){
			usedArray[j] = false;
		}
	}

	// This jQuery function responds to an HTML tag element with id = newCard being clicked
	$('#newCard').click(function(){
		resetUsedNumbersArray();
		init();
	});

	// This jQuery function toggles the backgroundColor and text color 
	// base on what is it currently set to
	$('td').click(function(){

		var toggle = this.style;
		toggle.backgroundColor = toggle.backgroundColor? "":"#333";
		toggle.color = toggle.color? "":"#fff";
	});

});
