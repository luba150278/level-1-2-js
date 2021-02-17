let parrentDiv = document.getElementById("parrentDiv");
let childDiv = document.getElementById("childDiv");

parrentDiv.addEventListener("click", (event) => {
    alert("Hi, I'm parrent block");
});

childDiv.addEventListener("click", (event) => {
  alert("Hi, I'm child block");
  event.stopPropagation();
});