function update_times() {
  var old_times = document.getElementsByClassName("hidden")
  var new_times = document.getElementsByClassName("display")
  var text_times = document.getElementsByClassName("time")

  for (var i = 0; i < old_times.length; i++)
  {
    var old_t = parseIsoDatetime(old_times[i].firstChild.data)
    var new_t = get_time_ago(old_t)
    if (new_t > 60)
    {
      text_times[i].lastChild.data = " hours ago "
      new_times[i].firstChild.data = parseInt(new_t / 60);
    }
    else
    {
      new_times[i].firstChild.data = new_t
    }

  }
}

function get_time_ago(old_t) {
  var old_time = Date.parse(old_t);
  var new_time = new Date().getTime() - 6*60*1000;
  var delta_time = new_time - old_time;
  return Math.floor(delta_time/60000) + 6;
}

function parseIsoDatetime(dtstr) {
    var dt = dtstr.split(/[: T-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
}