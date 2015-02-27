<?php
error_reporting(E_ALL ^ E_WARNING);
date_default_timezone_set('America/Monterrey');

$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = 'practicafb';

$connection = new mysqli($dbhost, $dbuser, $dbpass);
$error = false;

if (!$connection)
{
	$response = array("message" => "Error establishing connection to the database");
	$error = true;
}
else if (!mysqli_select_db($connection, $dbname))
{
	$response = array("message" => "Error establishing connection to the database");
	$error = true;
}

if ($error)
{
	http_response_code(503);
	echo json_encode($response);
}

?>
