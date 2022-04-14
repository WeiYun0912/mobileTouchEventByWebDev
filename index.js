const topHalf = document.getElementById("top-half");

topHalf.addEventListener("touchstart", (e) => {
  e.preventDefault();
  console.log(e.touches.length);
});

document.addEventListener("touchstart", (e) => {
  Array.from(e.changedTouches).forEach((touch) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.style.top = `${touch.pageY}px`;
    dot.style.left = `${touch.pageX}px`;
    dot.id = touch.identifier;
    document.body.appendChild(dot);
  });
});

document.addEventListener("touchmove", (e) => {
  Array.from(e.changedTouches).forEach((touch) => {
    const dot = document.getElementById(touch.identifier);
    dot.style.top = `${touch.pageY}px`;
    dot.style.left = `${touch.pageX}px`;
  });
});

document.addEventListener("touchend", (e) => {
  Array.from(e.changedTouches).forEach((touch) => {
    const dot = document.getElementById(touch.identifier);
    dot.remove(dot);
  });
});

document.addEventListener("touchcancel", (e) => {
  Array.from(e.changedTouches).forEach((touch) => {
    const dot = document.getElementById(touch.identifier);
    dot.remove(dot);
  });
});
