<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$connection = mysqli_connect($dbhost, $dbuser, $dbpass);
if (!mysqli_select_db('practicafb')
  echo "error";
?>
