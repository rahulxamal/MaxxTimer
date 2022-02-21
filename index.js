let a;
let time;
setInterval(() => {
  a = new Date();
  time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();

  document.getElementById("timer").innerHTML = time;
}, 1000);
