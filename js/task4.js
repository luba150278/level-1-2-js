function checkSelector(){
  let selector = document.getElementById('inputSelector').value;
  Array.from(document.querySelectorAll(selector)).forEach(function (el) {    
    el.classList.toggle('hidden');
  });
}