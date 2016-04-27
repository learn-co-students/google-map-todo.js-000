function insertMap(latitude, longitude) {
  var mapDiv = document.getElementById('map_canvas');
  var map = new google.maps.Map(mapDiv, {
      center: {lat: latitude, lng: longitude},
      zoom: 8
    });
}
