window.onload = function () {
  navigator.geolocation.getCurrentPosition(function (position) {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    document.getElementById("lantitude").innerHTML = 'Ш: '+lat;
    document.getElementById("longitude").innerHTML = 'Д: '+lng;
  });
};
