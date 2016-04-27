$(document).ready(function(){

  function getLocation() {
    var lat;
    var lon;
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      $("#latitude").html(lat);
      $("#longitude").html(lon);
      insertMap(lat,lon);
    });
  }

  getLocation();

});
