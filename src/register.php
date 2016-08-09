<?php

//////////
// @IMPORTANT@ You should choose a path outside of the web root
//

$filename = "registrations.json";

//////////
// Parse JSON input
//

$newRegistration = json_decode($_GET['registration']);

//////////
// Read existing registrations
//

$fh = fopen ($filename, "r");
$contents = fread($fh, filesize($filename));
fclose($fh);

$registrations = json_decode($contents);

//////////
// Append new registration
//

if (!is_array($registrations)) {
	echo "FAILURE";
} else {
	$registrations[] = $newRegistration;

	$fh = fopen($filename, "w");
	fwrite($fh, json_encode($registrations));
	fclose($fh);

	mail($newRegistration);

	echo "SUCCESS";
}

function mail ($newRegistration) {

	// E-Mail verschicken
	$from = "noreply@stuts.de";
	$subject = "Konferenz-Anmeldung";
	$message = "";

	$email = $newRegistration['email'];
	$ccAddress = "stuts60@stuts.de";

	$headers = array (
	  "From" => $from,
	  "Subject" => $subject,
	  "To" => $email,
	  "Cc" => $ccAddress
	);
	$crlf = "\n";

	$mime = new Mail_mime(array('eol' => $crlf));
	$mime->setTXTBody($message);
	//$mime->setHTMLBody($message);

	$mimeparams['text_encoding']="8bit";
	$mimeparams['text_charset']="UTF-8";
	$mimeparams['html_charset']="UTF-8";
	$mimeparams['head_charset']="UTF-8";

	$body = $mime->get($mimeparams);
	$headers = $mime->headers($headers);


	$mail = Mail::factory('smtp', array(
	  "host" => "mailout.lrz.de",
	  "localhost" => "junge-sprachwissenschaft.de"
	));
	
	$return = $mail->send(array(
	  'To'=>$email,
	  'Cc'=>$ccAddress
	), $headers, $body);
}

?>
