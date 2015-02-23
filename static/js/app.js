
function validate_comment(comment) {
  var re = /[a-zA-Z0-9:;].*$/
  return re.test(comment)
}

function create_post(content, username, timestamp) {
  var dtime = new Date()

  var post = document.createElement("div")
  post.setAttribute("class","post");

  var foto = document.createElement("div")
  foto.setAttribute("class","foto-big");

  var img = document.createElement("img")
  img.setAttribute("src","static/img/pic.png");

  var cont = document.createElement("div")
  cont.setAttribute("class","post-content");

  var name = document.createElement("h3")
  var name_txt = document.createTextNode(username)
  name.appendChild(name_txt)

  var comm = document.createElement("p")
  var comm_txt = document.createTextNode(content)
  comm.appendChild(comm_txt)

  var inte = document.createElement("span")
  inte.setAttribute("class","interactions");

  var time = document.createElement("span")
  time.setAttribute("class","time");

  var hidden_time = document.createElement("span")
  var hid_txt = document.createTextNode(timestamp)
  hidden_time.setAttribute("class","hidden")
  hidden_time.appendChild(hid_txt)

  var display_time = document.createElement("span")
  var dis_txt = document.createTextNode("0")
  display_time.setAttribute("class","display")
  display_time.appendChild(dis_txt)

  var time_txt = document.createTextNode(" minutes ago ")
  time.appendChild(hidden_time)
  time.appendChild(display_time)
  time.appendChild(time_txt)

  var lcom = document.createElement("a")
  var lcom_txt = document.createTextNode("Comment ")
  lcom.setAttribute("href","#");
  lcom.setAttribute("title","Leave a Comment");
  lcom.appendChild(lcom_txt)

  var like = document.createElement("a")
  var like_txt = document.createTextNode("Like")
  like.addEventListener("click", function() {
    var text = this.firstChild
    if (text.data == "Like")
    {
      text.data = "Unlike"
      this.setAttribute("title","Unlike this comment");
    }
    else
    {
      text.data = "Like"
    }
  })
  like.setAttribute("href","#");
  like.setAttribute("title","Like this comment");
  like.appendChild(like_txt)

  inte.appendChild(time)
  inte.appendChild(lcom)
  inte.appendChild(like)

  foto.appendChild(img)

  cont.appendChild(name)
  cont.appendChild(comm)
  cont.appendChild(inte)

  post.appendChild(foto)
  post.appendChild(cont)

  var wall = document.getElementById("wall")
  wall.insertBefore(post, wall.firstChild)
}

function update_times() {
  var old_times = document.getElementsByClassName("hidden")
  var new_times = document.getElementsByClassName("display")

  for (var i = 0; i < old_times.length; i++)
  {
    var old_t = parseInt(old_times[i].firstChild.data)
    var new_t = get_time_ago(old_t)
    new_times[i].firstChild.data = new_t
  }
}

function get_time_ago(old_time) {
  var dtime = new Date()
  var new_time = dtime.getTime()
  var delta_time = new_time - old_time
  return Math.floor(delta_time/60000)
}

function post_content(content) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) 
    {
      if (xmlhttp.status == 200) 
      {
        var json_response = JSON.parse(xmlhttp.responseText);
        create_post(json_response.post, json_response.user_id, json_response.created_at);
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
})

function on_doc_ready() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
    {
      var json_response = JSON.parse(xmlhttp.responseText);
      for (var i = 0; i < json_response.length; i++)
      {
        create_post(json_response[i].post, json_response[i].user_id, json_response[i].created_at);
      }
    }
  }
  xmlhttp.open("GET", "posts/all.php", true);
  xmlhttp.send();
}

on_doc_ready();