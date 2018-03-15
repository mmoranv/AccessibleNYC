// Setting up the map
var defaultCenter = [40.701139, -74.010067];
var defaultZoom = 11;

var map = L.map('subway-map').setView(defaultCenter, defaultZoom);

// WorldGreyCanvas TileLayer from http://leaflet-extras.github.io/leaflet-providers/preview/
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16,
  scrollWheelZoom: false,
}).addTo(map);

// Code to activate scroll wheel zoom after a click on the map PENDING REVISION
map.on('click', function() {
  if (map.scrollWheelZoom.enabled()) {
    map.scrollWheelZoom.disable();
    }
    else {
    map.scrollWheelZoom.enable();
    }
  });

// Color of the markers
function Accessibility(ADA) { //You can use this for categories too!
	console.log(ADA)
	return ADA === 1 ? '#008000' :
				ADA === 0 ? '#BD0026' :
						'#000000';
}

// Getting the data for the map
$.getJSON('data/Baruch subway entrances/all_stops_nyc_2017.geojson', function(subways) {
    L.geoJSON(subways, {
			pointToLayer: function (feature,latlng) {
				return L.circleMarker (latlng, {
					color: Accessibility(feature.properties.ADA),
					radius: 2
				})
			}
    }).addTo(map)
});

// Functions for buttons and sidebar
(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

})(jQuery); // End of use strict
