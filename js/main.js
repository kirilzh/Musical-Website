/* Fading Navbar*/

window.addEventListener("scroll", function() {
    if (window.scrollY > 768) {
        $('.navbar').fadeIn();
    }
    else {
        $('.navbar').fadeOut();
    }
},false);


// When the window has finished loading create our google map below

function initMap() {
  var uluru = {lat: 42.011934, lng: 23.094925};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

// ========== END GOOGLE MAP ========== //
