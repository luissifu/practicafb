<?php
if ($_POST && isset($_POST['post']))
{
  require_once "/../php/connection.php";

  $post_content = $_POST['post'];

  $query = "INSERT INTO Post (post, user_id, created_at) VALUES ('$post_content', 1, NOW());";
  $result = mysqli_query($connection, $query);

  if (!$result)
  {
    //error
  }
  else
  {
    http_response_code(200);

    $now = date('Y-m-d H:i:s');

    $response = array("post" => $post_content, "user_name" => "Luis Sifuentes", "created_at" => $now);
    echo json_encode($response);
  }
}
else
{
	http_response_code(400);
}
?>
