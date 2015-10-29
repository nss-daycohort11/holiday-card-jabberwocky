var HolidayGreeting = (function(origObject) {
	
	var klingon = {
		"happy": "Quch",
		"new": "chu'",
		"year": "DIS"
	};

	origObject.translateToKlingon = function(message) {
		message = message.split(" ");

		console.log("message", message);

		var translatedMessage = "";

		for (var i = 0; i < message.length; i++){
			translatedMessage += " " + elven[message[i]]
		}

		console.log("translatedMessage", translatedMessage);
	};


	return origObject;

})({});





	// console.log(klingon);

	// translateToKlingon(word) {
	// 	if (word === happy){
	// 		console.log("Happy");
	// 	}


	// // SETTER GETS INPUT MESSAGE
	// // ?
	// // puts translated in the <section>