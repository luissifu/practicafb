<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = 'practicafb';

$connection = new mysqli($dbhost, $dbuser, $dbpass);
if (!mysqli_select_db($connection, $dbname))
{
  echo "Error" . mysqli_error();
}
?>
