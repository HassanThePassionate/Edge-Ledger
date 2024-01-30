let circle = document.getElementsByClassName("circle")[0];

document.addEventListener("mousemove", (dets) => {
  circle.style.left = dets.x + "px";
  circle.style.top = dets.y + "px";
});
