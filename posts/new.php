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
    $response = array("message" => "Error en el servidor");
  }
  else
  {
    http_response_code(200);
    $now = date('Y-m-d H:i:s');
    $response = array("post" => $post_content, "user_name" => "Luis Sifuentes", "created_at" => $now);
  }
}
else
{
	http_response_code(400);
  $response = array("message" => "Falta mas informacion");
}
echo json_encode($response);

}
?>
