<?php
	//  TODO:
	//  [  ]  try non-whatshap emails as targets for Danny and Manny

	error_reporting(E_STRICT | E_ALL);
	date_default_timezone_set('Etc/UTC');
	
	$email = $_REQUEST['email'];
	
	require_once 'swiftMailer/swiftmailer./lib/swift_required.php';
	echo 'Debug line 13 (require completed) <br />';

	$transport = Swift_SmtpTransport::newInstance('localhost', 25)  //  This transport is for live deployment.  Localhost gives you GoDaddys smtp relay
	//$transport = Swift_SmtpTransport::newInstance('smtp.gmail.com', 465, 'ssl')  //  This transport is for local testing
	  //->setUsername('whatshapinfo@gmail.com')
	  //->setPassword('*****')  //  <-- [  ]  Hash this (or just remove it)
	  
	;

	echo 'Debug line 20 (transport set) <br />';

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