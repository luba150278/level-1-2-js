let buttonClick = document.getElementById("popUpCall");
let popUp = document.getElementById("popUpWindow");
let body = document.querySelector("body");

buttonClick.addEventListener("click", (event) => {
  console.log('dfsdfd');
  body.classList.add('noScroll');
  popUp.classList.remove("hidden"); 
  event.stopPropagation();
});

popUp.addEventListener("click", (event) => {
  body.classList.remove('noScroll');
  popUp.classList.add("hidden"); 
});