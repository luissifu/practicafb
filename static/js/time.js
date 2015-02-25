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

function get_time_ago(old_t) {
  var old_time = Date.parse(old_t);
  var new_time = new Date().getTime()
  console.log(old_time)
  console.log(new_time)
  var delta_time = new_time - old_time
  return Math.floor(delta_time/60000)
}
