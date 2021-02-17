let topButton = document.getElementById("topButton");

window.addEventListener("scroll", (event) => {
  if (scrollY + innerHeight > document.body.scrollHeight) {
    topButton.classList.remove("hidden");
  } else {
    topButton.classList.add("hidden");
  }
});
