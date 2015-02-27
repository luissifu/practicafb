<?php
require "../php/connection.php";

if (!$error)
{

$response;
if ($_POST && isset($_POST['post']))
{
  $post_content = $_POST['post'];

  $query = "INSERT INTO Post (post, user_id, created_at) VALUES ('$post_content', 1, NOW());";
  $result = mysqli_query($connection, $query);

  if (!$result)
  {
    http_response_code(503);
    $response = array("message" => "Error en el servidor", "info" => mysqli_error($connection));
  }
  else
  {
    http_response_code(200);
    $query = "SELECT u.name as user_name, p.post, p.created_at, p.liked, p.id FROM Post p, User u ORDER BY p.id DESC LIMIT 1";
    $newest = mysqli_query($connection, $query);

    if (!$newest)
    {
      http_response_code(503);
      $response = array("message" => "Error en el servidor");
    }
    else
    {
      $response = mysqli_fetch_assoc($newest);
    }
  }
}
else
{
	http_response_code(400);
  $response = array("message" => "Falta mas informacion " . $_POST['post']);
}
echo json_encode($response);

}
?>
