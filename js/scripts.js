// *********************************** 1. Setting up the map************************************************
var defaultCenter = [40.701139, -74.010067];
var defaultZoom = 11;

var map = L.map('subway-map').setView(defaultCenter, defaultZoom);

let all_stops
let ada_stops
let nada_stops
let bus_stops
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
//3 layers: All stations, Accessible stations, subway lines.
//Subway lines
$.getJSON('data/subway_lines.geojson', function(lines) {
  subway_lines = L.geoJSON(lines, {
    style: function(feature) {
      switch (feature.properties.rt_symbol) {
        case "1":
          return {color: "#BD0026", weight: 0.9};
        case "2":
          return {color: "#BD0026", weight: 0.9};
        case "3":
          return {color: "#BD0026", weight: 0.9};
        case "4":
          return {color: "#008000", weight: 0.9};
        case "5":
          return {color: "#008000", weight: 0.9};
        case "6":
          return {color: "#008000", weight: 0.9};
        case "7":
          return {color: "#710B37", weight: 0.9};
        case "A":
          return {color: "#0057E7", weight: 0.9};
        case "C":
          return {color: "#0057E7", weight: 0.9};
        case "E":
          return {color: "#0057E7", weight: 0.9};
        case "D":
          return {color: "#F37735", weight: 0.9};
        case "B":
          return {color: "#F37735", weight: 0.9};
        case "F":
          return {color: "#F37735", weight: 0.9};
        case "M":
          return {color: "#F37735", weight: 0.9};
        case "N":
          return {color: "#FFDD00", weight: 0.9};
        case "Q":
          return {color: "#FFDD00", weight: 0.9};
        case "R":
          return {color: "#FFDD00", weight: 0.9};
        case "W":
          return {color: "#FFDD00", weight: 0.9};
        case "L":
          return {color: "#808080", weight: 0.9};
        case "S":
          return {color: "#808080", weight: 0.9};
        case "G":
          return {color: "#6CBE45", weight: 0.9};
        case "J":
          return {color: "#8D5524", weight: 0.9};
        case "Z":
          return {color: "#8D5524", weight: 0.9};
      }
    }
  }).addTo(map);
});

// Layer 2: All stations
$.getJSON('data/all_stops_nyc_2017.geojson', function(subways) {
  all_stations = L.geoJSON(subways, {
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng, {
          color: "#cc0000",
          radius: 2
        }).bindPopup(feature.properties.stop_name)
        .openPopup().on('click', nada_stops)
        .on('mouseover', function(e) {
          this.openPopup();
        })
        .on('mouseout', function(e) {
          this.closePopup();
        });
    }
  }).addTo(map);
});

// Layer 3: Accessible stations
$.getJSON('data/ada_stops_nyc_2017.geojson', function(subways) {
  ada_stops = L.geoJSON(subways, {
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng, {
          color: "#00c160",
          radius: 2
        }).bindPopup("<div style='text-align:center'>" + feature.properties.stop_name + " station is " + "<div style='color:#00c160'>" + " accessible " + "</div>" + " when using the " + feature.properties.trains + " train." + "</div>")
        .openPopup().on('click', nada_stops)
        .on('mouseover', function(e) {
          this.openPopup();
        })
        .on('mouseout', function(e) {
          this.closePopup();
        });
    }
  }).addTo(map);
});

//Buttons for layers
// All stations
var ALLOn = true;
$("#btn-all").click(function() {
  $( this ).toggleClass( "btn-all" );
  if (ALLOn) {
    map.removeLayer(all_stations);
    ALLOn = null;
  } else {
    ALLOn = true,
      map.addLayer(all_stations);
  }
});

// Accessible stations
var ADAOn = true;
$("#btn-ada").click(function() {
  $( this ).toggleClass( "btn-ada" );
  if (ADAOn) {
    map.removeLayer(ada_stops);
    ADAOn = null;
  } else {
    ADAOn = true,
      map.addLayer(ada_stops);
  }
});
// Non accessible stations
// var NADAOn = true;
// $("#btn-nada").click(function() {
//   if (NADAOn) {
//     map.removeLayer(nada_stops);
//     NADAOn = null;
//   } else {
//     NADAOn = true,
//       map.addLayer(nada_stops);
//   }
// });

// Functions for scroll-to-top buttons and sidebar (modified from bootstrap template)
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
