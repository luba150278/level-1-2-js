//Hide ellement from three ways. The first way is change css style. The second way is remove element from js. The third way is add class wiht css-style.
let black = document.getElementById('black');

function displayNone() {
  black.style.display = 'none';
}

function removeElemFromJs() {
  black.remove();
}

function addClassForHiddenElem() {
  black.classList.add("hidden");
}