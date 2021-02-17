
function toggleFunction() {
  let i = 0;
  Array.from(document.querySelectorAll('.blackSquare')).forEach(function (el) {    
    el.classList.toggle('hidden');
  });
}