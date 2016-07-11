//[!!]  Build this with MVC
//[  ]  Stop mixing font size specification types (like px and em)
//[!!]  Format footer text properly  
//[!!]  Occupy top of page with logo
//[!!]  Make the signup button 'louder'
//[  ]  Incorporate transitioning images (ask Manny and Daniel for ideas)

(function() {

	"use strict";

	var model = {

		init: function() {
			console.log("model initialized") //<--For debugging
		},
		navForm: $('#navForm'),
		phantom: $('#phantom')  // <---This is to keep the non-taskbar content from re-flowing once the taskbar locks via position: fixed


	};

	var view = {

		init: function() {
			console.log("view initialized");  //<--also for debugging
			view.scrollLock();
		},
		scrollLock: function() {
			$(window).scroll(function() {    
			    var scroll = $(window).scrollTop();
			    console.log(scroll);  // <--- Useful for debugging the scroll-dependent menu-fixing 
			    if (scroll > 0) {
			    	//console.log("This should work", model.navForm);
			        model.navForm.addClass("taskbar-scroll");
			        model.phantom.css({position: "relative"});
			    } else {
			        model.navForm.removeClass("taskbar-scroll");
			        model.phantom.css({position: "fixed", visibility: "hidden"});  
			    }
			})
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
	