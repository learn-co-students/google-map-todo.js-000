$(document).ready(function(){

  function getLocation() {
  navigator.geolocation.getCurrentPosition(function(position){

    $('#latitude').replaceWith('<p id="latitude">' + position.coords.latitude + '</p>');
    $('#longitude').replaceWith('<p id="longitude">' + position.coords.longitude + '</p>');

  });
  };

  function insertMap() {

    navigator.geolocation.getCurrentPosition(function(position){

    var string = ' <script>\n'
    string += ' function initialize() {\n'
    string += ' var mapCanvas = document.getElementById("map_canvas");\n'
    string += ' var mapOptions = {\n'
    string += ' center: new google.maps.LatLng('
    string += position.coords.latitude
    string += ', '
    string += position.coords.longitude
    string += '),\n'
    string += ' zoom: 15,\n'
    string += ' mapTypeId: google.maps.MapTypeId.ROADMAP\n'
    string += ' }\n'
    string += ' var map = new google.maps.Map(mapCanvas, mapOptions)\n'
    string += ' }\n'
    string += ' google.maps.event.addDomListener(window, "load", initialize);\n'
    string += '</script>'

    $('head').append(string)

      });

    };


  getLocation();
  insertMap()



});
