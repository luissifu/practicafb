<?php
require "../php/connection.php";

if (!$error)
{
$query = "SELECT u.name as user_name, p.post, p.created_at, p.liked FROM Post p, User u WHERE p.user_id = u.id";
$result = mysqli_query($connection, $query);
$response = array();

while ($row = mysqli_fetch_assoc($result))
{
	array_push($response, $row);
}

echo json_encode($response);
}
?>
