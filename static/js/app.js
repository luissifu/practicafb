
function validate_comment(comment) {
  var re = /[a-zA-Z0-9:;].*$/
  return re.test(comment)
}

function post_content(content) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4)
    {
      if (xmlhttp.status == 200)
      {
        var json_response = JSON.parse(xmlhttp.responseText);
        create_post(json_response.post, json_response.user_name, json_response.created_at);
      }
      else
      {
        console.log(xmlhttp.responseText)
      }
    }
  }
  xmlhttp.open("POST", "posts/new.php", true);
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xmlhttp.send("post=" + content);
}

var btn = document.getElementById("btn")
btn.addEventListener("click", function() {
  var text = document.getElementById("text")
  if (validate_comment(text.value))
  {
    post_content(text.value);
  }
  text.value = ""
  text.focus()
  update_times()
})

function on_doc_ready() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
    {
      var json_response = JSON.parse(xmlhttp.responseText);
      for (var i = 0; i < json_response.length; i++)
      {
        create_post(json_response[i].post, json_response[i].user_name, json_response[i].created_at);
      }
    }
  }
  xmlhttp.open("GET", "posts/all.php", true);
  xmlhttp.send();
}

on_doc_ready();
