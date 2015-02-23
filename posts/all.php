<?php
require "/../php/connection.php";
$query = "SELECT * FROM Post";
$result = mysqli_query($connection, $query);
$response = array();

while ($row = mysqli_fetch_assoc($result))
{
	array_push($response, $row);
}

echo json_encode($response);

?>
