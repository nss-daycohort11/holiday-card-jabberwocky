//Link jQuery
$(document).ready(function() {

//Starting the button	
	$("#button").click(function() {
		var userMessage = $("#text").val();

		var target = $("#target option:selected").val();

		if (target === "Klingon")
		{
			HolidayGreeting.translateToKlingon(userMessage);
	 		console.log("K");
		};
		if (target === "Jabberwocky")
		{

		};
		if (target === "Elvish")
		{
			HolidayGreeting.translateToElvish(userMessage);
	 		console.log("E");
		};
	});
});

	

	// james' help

	// click (function() {
	// 	var klingon = $("select").val();
	// 	holiday[klingon](input)
	// })	


