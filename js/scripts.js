// *********************************** 1. Setting up the map************************************************
var defaultCenter = [40.701139, -74.010067];
var defaultZoom = 11;

var map = L.map('subway-map').setView(defaultCenter, defaultZoom);

let ada_stops
let nada_stops
let all_stops
let subway_lines

// WorldGreyCanvas TileLayer from http://leaflet-extras.github.io/leaflet-providers/preview/
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
  maxZoom: 15,
  scrollWheelZoom: false,
}).addTo(map);

// Code to activate scroll wheel zoom after a click on the map PENDING REVISION
map.scrollWheelZoom.disable();

// ********************************** 2. Setting up layers************************************************
//3 layers: Layer A: All stations, Accessible stations, non accessible stations
// Layer A: Color of the markers for All stations

$.getJSON('data/all_stops_nyc_2017.geojson', function(subways) {
  all_stations = L.geoJSON(subways, {
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng, {
        color: "#004d99",
        radius: 2
      }).bindPopup(feature.properties.stop_name + " on the " + feature.properties.trains + " train.");
    }
  });
});

// Function takes geojson object from '$.getJSON' and a char(2) landuse code
// and returns a leaflet layer with
// const getLandUseLayer = (mappluto, landUseCode) => {
//   return L.geoJSON(mappluto, {
//     filter: function(feature, layer) {
//       feature.properties.land_use_17.indexOf(landUseCode)
//     },
//     style: propertyStyles,
//     onEachFeature: propertyActions
//   });
// };

// Layer B: Accessible stations
// var ADA_Layer =
$.getJSON('data/ada_stops_nyc_2017.geojson', function(subways) {
  ada_stops = L.geoJSON(subways, {
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng, {
        color: "#00cc66",
        radius: 2
      }).bindPopup(feature.properties.stop_name + " station is accessible when using the " + feature.properties.trains + " train.");
    }
  }).addTo(map);
});

// //Layer C: Non accessible stations
// var n_ADA_Layer =
$.getJSON('data/n_accessible_stops_nyc_2017.geojson', function(subways) {
  nada_stops = L.geoJSON(subways, {
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng, {
        color: "red",
        radius: 2
      }).bindPopup(feature.properties.stop_name + " station is accessible when using the " + feature.properties.trains + " train.");
    }
  }).addTo(map);
});

// L.control.layers({}, layers).addTo(map);


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
