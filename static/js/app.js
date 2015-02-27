
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
        create_post(json_response.post, json_response.user_name, json_response.created_at, json_response.liked);
        var text = document.getElementById("text")
        text.value = ""
        text.focus()
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
  else
  {
    var alert = document.getElementById("alert")
    alert.firstChild.data = "Comentario no valido"
    alert.style.display = 'block'
  }
})

var close = document.getElementById("alert-close")
close.addEventListener("click", function() {
  var alert = document.getElementById("alert")
  alert.style.display = 'none'
})

function on_doc_ready() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
    {
      var json_response = JSON.parse(xmlhttp.responseText);
      for (var i = 0; i < json_response.length; i++)
      {
        create_post(json_response[i].post, json_response[i].user_name, json_response[i].created_at, json_response[i].liked);
      }
    }
  }
  xmlhttp.timeout = 5000;
  xmlhttp.ontimeout = function() {
    var alert = document.getElementById("alert")
    alert.firstChild.data = "Server unreachable"
    alert.style.display = 'block'
  }
  xmlhttp.open("GET", "posts/all.php", true);
  xmlhttp.send();
}

on_doc_ready();
auto_update_func = setInterval(function() { update_times() }, 60*1000);