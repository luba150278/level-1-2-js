window.onload = function () {
  let userLang = navigator.language || navigator.userLanguage;
  document.getElementById('lang').innerHTML = userLang;
}
