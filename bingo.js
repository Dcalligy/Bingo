// This jQuery function verifies that the HTML document has loaded
$(document).ready(function()){

	var usedArray = new Array(76);
	/* The baseArray provides the base multiplier value for each column based on
		B = 1 - 15
		I = 16 - 30
		N = 31 - 45
		G = 46 - 60
		O = 61 - 75
	*/
	var baseArray = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);

	var NUMBER = 0;
	var BASE = 0;

	init();

	// the main fucntion of the JavaScript and jQuery that manages
	// the bing card creation and updating during play.
	function init(){
		for(var i = 0; i < 24; i++){
			fillCard(i);
		}
	}

	function fillCard(i){

		BASE = baseArray[i] * 15;
		NUMBER = Math.floor((Math.random() * 15) + 1) + BASE;

		if(NUMBER != usedArray){
			// the jQuery updates the HTML tag element with id "cell#"
			// where the # is the random number!
			$('#cell' + 1).html(number);

			usedArray[NUMBER] = true;

			// set the background text and color for new game
			var id = "cell" + i;
			document.getElementById(id).style.backgroundColor = "#eee";
			document.getElementById(id).style.color = "#333";
		}
		else{
			// using recursion call this function again
			return fillCard(i);
		}
	}

	funcion resetUsedNumberArray(){
		for(var i = 1; i < usedArray.length; i++){
			usedArray[i] = false;
		}
		resetUsedNumberArray();
		return false;
	}

	// This jQuery function responds to an HTML tag element with id = newCard being clicked
	$('#newCard').click(function(){
		// call function resetUsedNumberArray to reset the used numbers
		resetUsedNumberArray();
		// call function init to generate a new bingo card
		init();
	});
	
	// This jQuery function toggles the backgroundColor and text color
	// based on what is it currently set to
	$('td').click(function(){

		var toggle = this.style;
		toggle.backgroundColor = toggle.backgroundColor? "":"#333";
		toggle.color = toggle.color? "":"#fff";
	});

});
