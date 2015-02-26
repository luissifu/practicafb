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

  var time_num = get_time_ago(parseIsoDatetime(timestamp))
  var time_ago = " minutes ago "
  if (time_num > 60)
  {
    time_num = Math.floor(time_num / 60)
    time_ago = " hours ago "
  }

  var display_time = document.createElement("span")
  var dis_txt = document.createTextNode(time_num)
  display_time.setAttribute("class","display")
  display_time.appendChild(dis_txt)

  var time_txt = document.createTextNode(time_ago)
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
