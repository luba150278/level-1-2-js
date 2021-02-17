function catchCoordinate(evt) {
  let xCoord = evt.clientX;
  let yCoord = evt.clientY;
  document.getElementById('xCoord').innerHTML = 'X: ' + xCoord;
  document.getElementById('yCoord').innerHTML = 'Y: ' + yCoord;
}