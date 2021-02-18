let localSt = document.getElementById("textForLocalStorage");
let sessionSt = document.getElementById("textForSessionStorage");
let cookiesStr = document.getElementById("textForCookies");
function inputData() {
  let localStVal = localSt.value;
  let sessionStVal = sessionSt.value;
  let cookiesVal = cookiesStr.value;
  localStorage.setItem("LocalStorage", localStVal);
  localStorage.setItem("SessionStorage", sessionStVal);

  document.cookie = "cookiesStr=" + cookiesVal;
}
window.onload = function () {
  localSt.innerHTML = localStorage.getItem("LocalStorage");
  sessionSt.innerHTML = localStorage.getItem("SessionStorage");
  let results = document.cookie.replace(
    /(?:(?:^|.*;\s*)cookiesStr\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  cookiesStr.innerHTML = results; 
};
