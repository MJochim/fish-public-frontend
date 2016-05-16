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
var_dump ($registrations);
var_dump ($newRegistration);

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

	echo "SUCCESS";
}

?>

