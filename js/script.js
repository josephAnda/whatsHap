
//[  ]  Stop mixing font size specification types (like px and em)
//[  ]  Incorporate transitioning images (ask Manny and Daniel for ideas)
//[  ]  Implement mobile-responsive form fields


(function() {

	"use strict";

	var model = {


		navForm: $('#navForm'),
		phantom: $('#phantom'),  // <---  Masks effect of re-flowing for locked taskbar on scroll
		signUpForm: $('#responsiveForm')

	};

	var view = {

		init: function() {
			
			view.scrollLock();
			view.registerUser();
			
		},
		registerUser: function() {

			$('#join').click(function()  {

				console.log(" 'registerUser' has been run.");
			     $.ajax({

			     	  
				      url:'/emailScript.php', 
				      method:'post',
				      data : $('#defaultForm').serialize(),
				      success:function()  {
				      	console.log("serialization of form data successful");
				      },
				      error: function (xhr, ajaxOptions, thrownError) {
				      	
				      	console.log(xhr); 
        				console.log(ajaxOptions);
        				console.log(thrownError);
      				  }
			      })
			})	
		},
		scrollLock: function() {
			$(window).scroll(function() {    
			    var scroll = $(window).scrollTop();
			    
			    if (scroll > 0) {
			    	
			        model.navForm.addClass("taskbar-scroll");
			       
			    } else {

			        model.navForm.removeClass("taskbar-scroll");
			        
			    }
			})
		}

	};

	var controller = {

		init: function() {
			
			view.init();
		}
	};

	controller.init();
}) ();
	