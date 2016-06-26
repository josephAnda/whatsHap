//[  ]  Build this with MVC
//[  ]  Stop mixing font size specification types (like px and em)
//[!!]  Format footer text properly  
//[  ]  Occupy top of page with logo
//[!!]  Make the signup button 'louder'
//[  ]  Incorporate transitioning images (ask Manny and Daniel for ideas)

(function() {

	"use strict";

	var model = {

		init: function() {
			console.log("model initialized") //<--For debugging
		}

	};

	var view = {

		init: function() {
			console.log("view initialized")  //<--also for debugging
		}

	};

	var controller = {

		init: function() {
			model.init();
			view.init();
		}
	};

	controller.init();
}) ();
	