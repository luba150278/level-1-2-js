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

buttonClick.addEventListener("mousedown", (event) => {
  body.classList.add('noScroll');
  popUp.classList.remove("hidden");
  event.stopPropagation();
});

popUp.addEventListener("mousedown", (event) => {
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

/**
 * PART#2
 * Text may contain names of Ukrainian cities. Need change city name on the special phrase.
 * Data to special phrase takes from CSV-file.
 * User can add CSV-file from add form or can use default data.
 */

const csvDefault = `49.2333333,28.4833333,Віниця,384840
48.346432,38.059513,Горлівка,292250

48.45,34.9833333,Дніпро,1080846
48.0027778,37.8052778,Донецьк,1016194
50.259749,28.676248,Житомир,284236
47.853748,35.157139,Запоріжя,815256

47.488911,34.400761,Камяньске,255841
50.584981,30.235748,Київ,2611327
48.508389,32.264801,Кіровоград,254103
47.899726,33.379534,Кривый Ріг,709014
#dhfkllll;
48.573269,39.355659,Луганьск,463097
49.85,24.0166667,Львів,732818
48.076179,38.068427,Макіївка,389589
47.1166667,37.55,Маріуполь,492176
46.9666667,32.0,Миколаїв,514136
46.4666667,30.7333333,Одеса,1029049
#fdggfgg
49.59269,34.551159,Полтава,317998
44.60000001,33.533333343333,Севастополь,342451
44.9480556,34.1041667,Сімферополь,343644
50.910561,34.80566,Сумы,293141
49.98967,36.208309,Харків,1470902
46.653368,32.629424,Херсон,328360
49.4166667,27.0,Хмельницькый,253994
49.4333333,32.0666667,Черкасы,295414
51.503653,31.293167,Чернїгів,304994`;

/**
 * Select a csv-file and modify it.  
 */
function readCSV() {
  if (document.getElementById('fromFile').checked) {
    let reader = new FileReader();
    try {
      reader.readAsText(file);
      reader.onload = function () {        
        cities = csvModife(reader.result);
      };
    } catch {
      alert('Please, add csv-file');
    }
  } else {
    cities = csvModife(csvDefault);
  }
  document.getElementById('loadCSVbutton').innerText = 'CSV-file was added'
  document.getElementById('loadCSVbutton').style.background = '#1bbc9b'
}

/**
 * CSV-file modification. Modification is deleting the empty strings and comments strings from the CSV-file, 
 * reverse sort by the people population, and cut the file to 10 items.
 * Returns function which gets a text and replaces it with a special phrase.
 * @param {*} csv - the start CSV-file
 */
function csvModife(csv) {
  let cities = csv.split('\n')
    .filter(s => s.trim() != "" && !s.startsWith("#")) 
    .map(arr => {
      let s = arr.split(",");
      return [s[2], +s[3]]
    })
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)

  return (startText) => {    
    let result = startText.split(' ').map(
      (word) => {
        let index = cities.findIndex(item => item[0] == word);
        if (index != -1) {
          return `${cities[index][0]} (${index + 1} место в ТОП-10 самых крупных городов Украины, население ${cities[index][1]} человек)`;
        } else {
          return word;
        }       
      }
    );
    return result.join(' ');
  }
}

/**
 * Changing start text on modification text if it contains city names.
 */
function changeText() {
  let elem = document.getElementById('cityText');
  let str = elem.value;
  elem.value = cities(str);
}
