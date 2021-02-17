function getImage() {
 let link = document.getElementById('inputSelector').value; 
 let addImg = document.createElement("img");
 addImg.setAttribute("src", link);

 let parentDiv = document.getElementById("image");
 parentDiv.prepend(addImg);
 parentDiv.classList.add("active");
}