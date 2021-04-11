console.log("Hello");

// function newFunction() {
//     return "black";
// }

 

// var list = document.getElementsByTagName("ul")[0];
// console.log(list);
// for (n = 0; 6; n++) {
//     list.getElementsByTagName("li")[n].getElementsByTagName("i")[0].style.color = newFunction();
//     list.getElementsByTagName("li")[n].getElementsByTagName("i")[0].style.borderColor = newFunction();
// }
//  console.log(list);

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("gmap"), {
    center: { lat: 53.99775, lng: 2.4966},
    zoom: 5,
  });


var lables="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var locations=[
    { lat: 53.2194, lng: 6.5665 },
    { lat: 54.7761, lng:-1.5733 },
];
var markers=locations.map(function(location,i){
    return new google.maps.Marker({
        position:location,
        label: lables[i%lables.length]

    });

});
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

}