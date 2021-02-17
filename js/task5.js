
let yellow = document.getElementById('yellow');

function changeFunction() {
  alert("Привет!");
  yellow.setAttribute("onclick", "secondFunction()");
}

function secondFunction() {
  yellow.classList.toggle('hidden');
}