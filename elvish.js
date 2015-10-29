var HolidayGreeting = (function(origObject) {
	
	var elven = {
		"happy": "Iderin",
		"new": "eden",
		"year": "'elir"
	};

	origObject.translateToElvish = function(message) {
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

/*		{
			return {
			    manufacture_date: new Date(),
			    getColor: function() {
			    	return color;
			    },
			    setColor: function(newColor) {
			      color = newColor;
			    },
			    getType: function() {
					return type;
		    	}
  			};
		};*/