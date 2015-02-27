function like_post(id) {
	var post = document.getElementById("post-" + id);
	var like = post.lastChild.lastChild.lastChild;
	send_like(like, id, 1)
}

function unlike_post(id) {
	var post = document.getElementById("post-" + id);
	var like = post.lastChild.lastChild.lastChild;
	send_like(like, id, 0)
}

function send_like(node, id, value) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4)
    {
      if (xmlhttp.status == 200)
      {
        var json_response = JSON.parse(xmlhttp.responseText);
        if (value == 1)
        {
        	node.firstChild.data = "Unlike"
        	node.setAttribute("title","Unlike this post");
        }
        else
        {
        	node.firstChild.data = "Like"
        	node.setAttribute("title","Like this post");
        }
      }
      else
      {
        var json_response = JSON.parse(xmlhttp.responseText);
        var alert = document.getElementById("alert")
        alert.firstChild.data = json_response.message
        alert.style.display = 'block'
      }
    }
  }
  xmlhttp.timeout = 5000;
  xmlhttp.ontimeout = function() {
    var alert = document.getElementById("alert")
    alert.firstChild.data = "Server unreachable"
    alert.style.display = 'block'
  }
  xmlhttp.open("POST", "posts/like.php", true);
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp.send("id=" + id + "&like=" + value);
}