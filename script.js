let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

function clocks() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  if (h >= 12) {
    h = h - 12;
  }

  h = h < 10 ? "0" + h : h;
  s = s < 10 ? "0" + s : s;
  m = m < 10 ? "0" + m : m;

  hour.innerHTML = h;
  min.innerHTML = m;
  sec.innerHTML = s;
}
setInterval(clocks, 1000);
