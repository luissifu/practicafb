<?php

if ($_POST && isset($_POST['post']))
{
  require "../php/connection.php";

  $post_content = $_POST['post'];

  $stmt = $connection->prepare('INSERT INTO Post (post, user_id, created_at) VALUES (?, 1, NOW()');
  $stmt->bind_param('s', $post_content);
  $stmt->execute();
}

?>
