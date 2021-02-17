function catchCoordinate(evt) {
  let xCoord = evt.clientX;
  let yCoord = evt.clientY;
  document.getElementById('xCoord').innerHTML = xCoord;
  document.getElementById('yCoord').innerHTML = yCoord;
}