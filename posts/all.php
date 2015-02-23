<?php
require "../php/connection.php";
$query = "SELECT * FROM Post";
$result = mysqli_query($connection, $query);
$response = json_encode($result);
echo $response;
?>
