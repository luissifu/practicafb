<?php
require "../php/connection.php";

if (!$error)
{

$response;
if ($_POST && isset($_POST['like']) && isset($_POST['id']))
{
  $post_like = $_POST['like'];
  $post_id = $_POST['id'];

  $query = "UPDATE Post SET liked = $post_like WHERE id = $post_id";
  $result = mysqli_query($connection, $query);

  if (!$result)
  {
    http_response_code(503);
    $response = array("message" => "Error en el servidor");
  }
  else
  {
    http_response_code(200);
    $response = array("message" => "ok");
  }
}
else
{
	http_response_code(400);
  $response = array("message" => "Falta mas informacion " . $_POST['id'] . "," . $_POST['like']);
}
echo json_encode($response);

}
?>
