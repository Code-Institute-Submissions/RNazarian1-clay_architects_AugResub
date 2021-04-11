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
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}