function getImages() {
  let links = document.getElementById('textArea').value;
  let re = /\s/;
  let linksArray = links.split(re);
  console.log(linksArray);
  let parentDiv = document.getElementById("image");
   
  for(let i=0; i<linksArray.length; i++){
    getOneImage(linksArray[i], parentDiv);
  }
  parentDiv.classList.add("active");
}

function getOneImage(link, parentDiv) {
  let addImg = document.createElement("img");
  addImg.setAttribute("src", link);
  parentDiv.append(addImg);
}