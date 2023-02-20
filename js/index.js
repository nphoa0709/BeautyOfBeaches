//display current time
var dt = new Date();
document.getElementById("date-time").innerHTML = dt;
//display current location

var x = document.getElementById("geoCoding");
var y = document.getElementById("curPos");
function getLocation() {
  navigator.geolocation.watchPosition(
    function (position) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        y.innerHTML = "Geolocation is not supported by this browser.";
      }
    },
    function (error) {
      if (error.code == error.PERMISSION_DENIED)
        y.innerHTML = "Tracking location has been blocked.";
    }
  );
}
function showPosition(position) {
  var lat = position.coords.latitude;
  var long = position.coords.longitude;
  // fetch(
  //   `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=80be6d8aa63744568eb0d507fa181eec`
  // )
  //   .then((response) => response.json())
  //   .then((result) => {
  //     if (result.features.length) {
  //       x.innerHTML = result.features[0].properties.formatted;
  //     } else {
  //       x.innerHTML = "No address found";
  //     }
  //   });
  y.innerHTML = " (Latitude: " + lat + "; Longitude: " + long + ")";
}
getLocation();

//visitor count
var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML =
  "<i class='fa-regular fa-eye'></i> Visitors: " + visitCount;

//dropdown menu
