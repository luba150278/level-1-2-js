/** 
 * TASK#1  - Hide ellement from three ways. 
 * The first way is change css style. 
 * The second way is remove element from js. 
 * The third way is add class wiht css-style. */
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

/**
 * TASK#2 - show/hide element by button click
 */
function toggleFunction() {
  black = document.getElementById('black2');
  black.classList.toggle('hidden');
}

/**
 * TASK#3 - show/hide some elements with equal class name by button click
 */
function toggleFunctionForSomeElements() {
  let i = 0;
  Array.from(document.querySelectorAll('.blackSquare')).forEach(function (el) {
    el.classList.toggle('hidden');
  });
}

/**
 * TASK#4 - show/hide selector equal value from the input field
 */
function checkSelector() {
  let selector = document.getElementById('inputSelector').value;
  Array.from(document.querySelectorAll(selector)).forEach(function (el) {
    el.classList.toggle('hidden');
  });
}

/**
 * TASK#5 - change click function
 */
let yellow = document.getElementById('yellow');

function changeFunction() {
  alert("Привет!");
  yellow.setAttribute("onclick", "secondFunction()");
}

function secondFunction() {
  yellow.classList.toggle('hidden');
}

/**
 * TASK#6 - mouseover/mouseout events
 */
let red = document.getElementById('red');
function mouseOver() {
  red.classList.remove('hidden');
}

function mouseOut() {
  red.classList.add('hidden');
}

/**
 * TASK#7  - focus on the input
 */

let green = document.getElementById('green');
function getFocus() {
  green.classList.remove('hidden');
}

function startPrint() {
  green.classList.add('hidden');
}

/**
 * TASK#8 - get image by link
 */
function getImage() {
  let link = document.getElementById('imgLink').value;
  let addImg = document.createElement("img");
  addImg.setAttribute("src", link);

  let parentDiv = document.getElementById("image");
  parentDiv.prepend(addImg);
  parentDiv.classList.add("active");
}

/**
 * TASK#9 Task9 - get images by links
 */
function getImages() {
  let links = document.getElementById('textAreaTask9').value;
  let re = /\s/;
  let linksArray = links.split(re);
  console.log(linksArray);
  let parentDiv = document.getElementById("images");

  for (let i = 0; i < linksArray.length; i++) {
    getOneImage(linksArray[i], parentDiv);
  }
  parentDiv.classList.add("active");
}

function getOneImage(link, parentDiv) {
  let addImg = document.createElement("img");
  addImg.setAttribute("src", link);
  parentDiv.append(addImg);
}

/**
 * TASK#10 - get mouse coordinates
 */
window.onmousemove = function (e) {
  let xCoord = e.clientX;
  let yCoord = e.clientY;
  document.getElementById('xCoord').innerHTML = 'X: ' + xCoord;
  document.getElementById('yCoord').innerHTML = 'Y: ' + yCoord;
}

/**
 * TASK#11 - language of browser
 * TASK#12 - user's physical coordinates
 */
window.onload = function () {
  //Task11
  let userLang = navigator.language || navigator.userLanguage;
  document.getElementById('lang').innerHTML = userLang;

  //Task12
  navigator.geolocation.getCurrentPosition(function (position) {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    document.getElementById("lantitude").innerHTML = 'Ш: ' + lat;
    document.getElementById("longitude").innerHTML = 'Д: ' + lng;
  });

  //Task13
  localSt.innerHTML = localStorage.getItem("LocalStorage");
  sessionSt.innerHTML = localStorage.getItem("SessionStorage");
  results = document.cookie.replace(
    /(?:(?:^|.*;\s*)cookiesStr\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  cookiesStr.innerHTML = results;
}

/**
 * TASK#13 - save user data between browser sessions
 */
let results;
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

/**
 *TASK#14 - return on top page button
 */
let topButton = document.getElementById("topButton");

window.addEventListener("scroll", (event) => {
  if (scrollY + innerHeight > document.body.scrollHeight) {
    topButton.classList.remove("hidden");
  } else {
    topButton.classList.add("hidden");
  }
});

/**
 * TASK#15 - two nested blocks create separate mouse listeners
 */
let parrentDiv = document.getElementById("parrentDiv");
let childDiv = document.getElementById("childDiv");

parrentDiv.addEventListener("click", (event) => {
  alert("Hi, I'm parrent block");
});

childDiv.addEventListener("click", (event) => {
  alert("Hi, I'm child block");
  event.stopPropagation();
});

/**
 * TASK#16 - pop-up square with no scrolling
 */
let buttonClick = document.getElementById("popUpCall");
let popUp = document.getElementById("popUpWindow");
let body = document.querySelector("body");

buttonClick.addEventListener("click", (event) => {
  body.classList.add('noScroll');
  popUp.classList.remove("hidden");
  event.stopPropagation();
});

popUp.addEventListener("click", (event) => {
  body.classList.remove('noScroll');
  popUp.classList.add("hidden");
});

/**
 * TASK#18 - drag and drop input file
 */
let input = document.getElementById('input__file');
let nameFile;
let fileMessage = document.querySelector('.drop');
let dropZone = document.getElementById("fileUpload");
const SUCCESS_COLOR = '#58aabb';
const UNSUCCESS_COLOR = 'red';
const SUCCESS_BACKGROUND = '#d6eacc';
const STANDARD_BACKGROUND = '#dcdbdf';
const DRAGOVER_BACKGROUND = '#eacce5';
let file;
//File was chosen
input.addEventListener('change', function (e) {
  file = e.target.files[0];
  nameFile = file.name;
  if (nameFile != undefined) {
    fileMessage.innerText = nameFile;
    successAddFile(true);
  }
});
//File wasn't chosen
input.addEventListener('click', function () {
  nameFile = null;
  if (nameFile == undefined || nameFile == null) {
    fileMessage.innerText = "File didn't choose!"
    successAddFile(false);
  }
});
//File is in drag zone
dropZone.addEventListener('dragover', function (e) {
  e.preventDefault();
  dropZone.style.background = DRAGOVER_BACKGROUND;
});
//File out drag zone
dropZone.addEventListener('dragleave', function (e) {
  e.preventDefault();
  dropZone.style.background = STANDARD_BACKGROUND;
});
//File put in drag zone
dropZone.addEventListener('drop', function (e) {
  e.preventDefault();
  if (e.dataTransfer.items[0].kind === 'file') {
    file = e.dataTransfer.items[0].getAsFile();
    fileMessage.innerHTML = file.name;
    successAddFile(true);
  }
});
//Chande styles when file was or wasn/t chossen
function successAddFile(flag) {
  flag ? setStyles('fa-cloud-upload-alt', 'fa-file-alt', SUCCESS_COLOR, SUCCESS_BACKGROUND) :
    setStyles('fa-file-alt', 'fa-cloud-upload-alt', UNSUCCESS_COLOR, STANDARD_BACKGROUND);
}

//Set styles
function setStyles(firstClass, secondClass, iconColor, backColor) {
  let changeIcon = document.getElementById('picFile');
  changeIcon.classList.remove(firstClass);
  changeIcon.classList.add(secondClass);
  fileMessage.style.color = iconColor;
  changeIcon.style.color = iconColor;
  dropZone.style.background = backColor;
}

//PART#2
let csv;
function readCSV() {
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function () {
    //console.log(reader.result);
    csv = reader.result;
    let cities = csv.split('\n')
      .filter(s => s.trim() != "" && !s.startsWith("#"))
      .map(sc => {
        let s = sc.split(",");
        return { x: s[0], y: s[1], city: s[2], population: +s[3] }
      })
      .sort((a, b) => b.population - a.population)
      .slice(0, 10)
      .reduce(function (a, c, number) {
        a[c.city] = { population: c.population, rating: number };
        return a;
      }, {});

    console.log(cities);
  };

  reader.onerror = function () {
    console.log(reader.error);
  };
}