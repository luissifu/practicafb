function validate_comment(comment) {
  var re = /[a-zA-Z0-9]+$/
  return re.test(comment)
}

function create_post(content) {
  var post = document.createElement("div")
  post.setAttribute("class","post");

  var foto = document.createElement("div")
  foto.setAttribute("class","foto-big");

  var img = document.createElement("img")
  img.setAttribute("src","");

  var cont = document.createElement("div")
  cont.setAttribute("class","post-content");

  var name = document.createElement("h3")
  var name_txt = document.createTextNode("Luis Sifuentes")
  name.appendChild(name_txt)

  var comm = document.createElement("p")
  var comm_txt = document.createTextNode(content)
  comm.appendChild(comm_txt)

  var inte = document.createElement("span")
  inte.setAttribute("class","interactions");

  var time = document.createElement("span")
  var time_txt = document.createTextNode("x minutes ago ")
  time.setAttribute("class","time");
  time.appendChild(time_txt)

  var lcom = document.createElement("a")
  var lcom_txt = document.createTextNode("Comment ")
  lcom.setAttribute("href","#");
  lcom.appendChild(lcom_txt)

  var like = document.createElement("a")
  var like_txt = document.createTextNode("Like")
  like.setAttribute("href","#");
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
  wall.appendChild(post)
}

var btn = document.getElementById("btn")
btn.addEventListener("click", function() {
  var text = document.getElementById("text")
  if (validate_comment(text.value))
  {
    create_post(text.value)
  }
  else console.log("Invalid");

  text.value = ""
})
