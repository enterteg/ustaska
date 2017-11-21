function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 49.558861, lng: 20.303194},
    zoom: 8
  });
  var marker = new google.maps.Marker({
    position: {lat: 49.558861, lng: 20.303194},
    map: map,
    title: 'Pensjonat U Staska'
  });
}
