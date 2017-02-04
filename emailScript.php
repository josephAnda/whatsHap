<?php
	//  [  ]  Cross origin requests prohibit local tests from accessing the php.  Right now, we're 
	//  	  considering a)  using Mozilla to test and b) using a dummy email with a fake password

	error_reporting(E_STRICT | E_ALL);
	date_default_timezone_set('Etc/UTC');
	// $email and $messageText are the data that is being
	// posted to this page from our html contact form.  Ideally 
	//  we can grab data from the form in later implementaitons 

	$email = $_REQUEST['email'];
	

	require_once 'swiftMailer/swiftmailer./lib/swift_required.php';
	echo 'Debug line 13 (require completed) <br />';
	// Create the Transport.  Using google's SMTP requires a gmail account that allows less secure apps to access the sign in credentials.  This is not the default setting and must be updated in 'Sign in and Security' in the 'My Account' section of the settings portion 
	$transport = Swift_SmtpTransport::newInstance('smtp.gmail.com', 587, 'ssl')  //  <--changed from port 465 to 587
	  ->setUsername('whatshapinfo@gmail.com')
	  ->setPassword('JDMourdomain123')  //  <-- [  ]  Hash this
	;

	echo 'Debug line 20 (transport set) <br />';

	// Create the message.  Swiftmailer has a variety of methods to easily add information.
	// NOTE:  Try initializing some of these properties with the initializing of the message
	$mailer = Swift_Mailer::newInstance($transport);
	$message = Swift_Message::newInstance()

		// Give the message a subject	
		->setSubject('New User Signup')
		// Set the From address with an associative array
		->setFrom(array('whatshapinfo@gmail.com' => 'WhatsHap Info'))
		// Set the To addresses with an associative array
		->setTo(array('orenmurasaki@gmail.com' => 'Joe'))
		// TESTING FEATURE	Set CC . . . to you guys' emails
		->setCc(array('Ddagman@whatshap.net' => 'Daniel', 'Mkernen@whatshap.net' => 'Manny'))
		// [  ] See if you can set the message using the previously referenced variable 
		->setBody($email);
	;
	echo 'Debug line 34 (fields set set) <br />';

	$result = $mailer->send($message);
	echo $result;
	echo 'line 38 <br />';

?>