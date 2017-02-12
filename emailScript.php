<?php
	
	error_reporting(E_STRICT | E_ALL);
	date_default_timezone_set('Etc/UTC');
	
	$email = $_REQUEST['email'];
	
	require_once 'swiftMailer/swiftmailer./lib/swift_required.php';
	echo 'Debug line 13 (require completed) <br />';
	// Create the Transport.  Using google's SMTP requires a gmail account that allows less secure apps to access 
	// the sign in credentials.  This is not the default setting and must be updated in 'Sign in and Security' in 
	// the 'My Account' section of the settings portion 
	$transport = Swift_SmtpTransport::newInstance('localhost', 25)
	//$transport = Swift_SmtpTransport::newInstance('smtp.gmail.com', 465, 'ssl')  //  <--changed from port 465 to 587, and changed encryption from ssl to tls.  Changed back for local testing 
	//  Need GoDaddy's SMTP server and Port for the command above in the hosted environment
	//  ('smtpout.secureserver.net', 465, 'ssl') was refused with #111 error code
	//  $transport = Swift_SendmailTransport::newInstance('/usr/sbin/sendmail -bs');
	//   ^The line above contains an alternate transport type in the debugging effortf

	//  ->setUsername('whatshapinfo@gmail.com')
	  ->setUsername('Ddagman@whatshap.net')
	  //->setPassword('JDMourdomain123')  //  <-- [  ]  Hash this
	  ->setPassword('JDMwhatshap123')  //  <-- [  ]  Hash this
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