//[!!]  Build this with MVC
//[  ]  Stop mixing font size specification types (like px and em)
//[!!]  Format footer text properly  
//[!!]  Occupy top of page with logo
//[!!]  Make the signup button 'louder'
//[  ]  Incorporate transitioning images (ask Manny and Daniel for ideas)
//[!!]  Integrate responsive form 
//[  ]  Implement mobile-responsive form fields


(function() {

	"use strict";

	var model = {

		init: function() {
			console.log("model initialized") //<--For debugging
		},
		navForm: $('#navForm'),
		phantom: $('#phantom'),  // <---This is to keep the non-taskbar content from re-flowing once the taskbar locks via position: fixed
		signUpForm: $('#responsiveForm')

	};

	var view = {

		init: function() {
			console.log("view initialized");  //<--also for debugging
			view.scrollLock();
			view.registerUser();
			
			//view.makeInlineForm();
		},
		registerUser: function() {
			$('#join').click(function()  {
				console.log(" 'registerUser' has been run.");
			     $.ajax({
				      url:'emailScript.php',
				      method:'post',
				      data : $('#defaultForm').serialize(),
				      success:function()  {
				      	console.log("serialization of form data successful");
				      }
			      })
			})	
		},
		scrollLock: function() {
			$(window).scroll(function() {    
			    var scroll = $(window).scrollTop();
			    console.log(scroll);  // <--- Useful for debugging the scroll-dependent menu-fixing 
			    if (scroll > 0) {
			    	//console.log("This should work", model.navForm);
			        model.navForm.addClass("taskbar-scroll");
			       // model.phantom.css({position: "relative"});
			    } else {
			        model.navForm.removeClass("taskbar-scroll");
			        //model.phantom.css({position: "fixed", visibility: "hidden"});  
			    }
			})
		}//,  (The function below was made obsolete . . . . I am choosing not to use this method of making the form responsive)
		//  However, it might still be useful in the future so for now it is just commented out.  
		//makeInlineForm: function() {
			//var max_width = 887;
			//  The function below correctly changes the classes, but fails to create the desired effect
			//  [  ]  Fix the problem described above (try using a form-group div, experiment with bootstraps version)
		    
		    //$(window).resize(function() {
		    	// cross-browser stack overflow width dimension 
		    	//var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		    	//if (w < 887) {
		    		//model.signUpForm.removeClass("navbar-form");
		    		//model.signUpForm.removeClass("navbar-right");
		    		//model.signUpForm.addClass("form-inline");
		    	//} else {
		    		//model.signUpForm.removeClass("form-inline");
		    		//model.signUpForm.addClass("navbar-form");
		    		//model.signUpForm.addClass("navbar-right");
		    	//}
		    	
  			    //console.log('the width is ' + w); // <--More debugging tools below
  			    //console.log(model.signUpForm);
			//});
		//}

	};

	var controller = {

		init: function() {
			model.init();
			view.init();
		}
	};

	controller.init();
}) ();
	