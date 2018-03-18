var map =
  L.map('my-map').setView([40.713435, -73.971291], 11);
var Stamen_TerrainBackground = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png', {
  minZoom: 10,
  maxZoom: 15,
  ext: 'png'
}).addTo(map);

var layerGroup = L.layerGroup().addTo(map);

var walkStyle = {
  color: "black",
  fillOpacity: .5
};

//adds 10 minute walkshed
var tenMin = L.geoJSON(walkBuffer, {
  style: walkStyle
});

//adds subway lines and adds colors
var lines = L.geoJSON(subwaylines, {
  style: function(feature) {
    switch (feature.properties.rt_symbol) {
      case "1":
        return {
          color: "#EE352E",
          weight: 0.8};
        case "2":
        return {color: "#EE352E",weight: 0.8};
        case "3":
        return {color: "#EE352E",weight: 0.8};
        case "4":
        return {color: "#00933C",weight: 0.8};
        case "5":
        return {color: "#00933C",weight: 0.8};
        case "6":
        return {color: "#00933C",weight: 0.8};
        case "B":
        return {color: "#FF6319",weight: 0.8};
        case "D":
        return {color: "#FF6319",weight: 0.8};
        case "F":
        return {color: "#FF6319",weight: 0.8};
        case "M":
        return {color: "#FF6319",weight: 0.8};
        case "A":
        return {color: "#2850AD",weight: 0.8};
        case "C":
        return {color: "#2850AD",weight: 0.8};
        case "E":
        return {color: "#2850AD",weight: 0.8};
        case "G":
        return {color: "#6CBE45",weight: 0.8};
        case "J":
        return {color: "#996633",weight: 0.8};
        case "Z":
        return {color: "#996633",weight: 0.8};
        case "L":
        return {color: "#A7A9AC",weight: 0.8};
        case "N":
        return {color: "#FCCC0A",weight: 0.8};
        case "Q":
        return {color: "#FCCC0A",weight: 0.8};
        case "R":
        return {color: "#FCCC0A",weight: 0.8};
        case "S":
        return {color: "#808183",weight: 0.8};
        case "7":
        return {color: "#A7A9AC",weight: 0.8
        };
    }
  }
});

//set style for subway stops
var stopsMarkerOptions = {
  radius: 1.5,
  fillColor: "#717171",
  color: "#ececec",
  weight: .2,
  opacity: 1,
  fillOpacity: 0
};

//adds subway stops and converts to circleMarkers
var stops = L.geoJSON(subwaystops, {
  pointToLayer: function(feature, latlng) {
    return L.circleMarker(latlng, stopsMarkerOptions).bindPopup(`${feature.properties.stop_name}`);
  }
});



//groups stops and lines
var subway = L.layerGroup([lines, stops]);

//Begin to add raster tiles by sector
//Finance
var Finance10_15 = L.tileLayer('data/Finance10_15/data/{z}/{x}/{y}.png', {
  maxZoom: 15
});

var Finance10_05 = L.tileLayer('data/Finance10_05/data/{z}/{x}/{y}.png', {
  maxZoom: 15
});

//Accomodation
var Accommodation10_05 = L.tileLayer('data/Accommodation10_05/data/{z}/{x}/{y}.png', {
  maxZoom: 15
});

var Accommodation10_15 = L.tileLayer('data/Accommodation10_15/data/{z}/{x}/{y}.png', {
  maxZoom: 15
});

//Total 2015
var Total10h_15 = L.tileLayer('data/Total10_15/Total10h_15/data/{z}/{x}/{y}.png', {
  maxZoom: 15
});

var Total10w_15 = L.tileLayer('data/Total10_15/Total10w_15/data/{z}/{x}/{y}.png', {
  maxZoom: 15
});


//Total 2005
var Total10h_05 = L.tileLayer('data/Total10_05/Total10_h_05/data/{z}/{x}/{y}.png', {
  maxZoom: 15
});

var Total10w_05 = L.tileLayer('data/Total10_05/Total10_w_05/data/{z}/{x}/{y}.png', {
  maxZoom: 15
});

//Art
var Art10_05 = L.tileLayer('data/Art10_05/data/{z}/{x}/{y}.png', {
  maxZoom: 15
});

var Art10_15 = L.tileLayer('data/Art10_15/data/{z}/{x}/{y}.png', {
  maxZoom: 15
});

//Admin
var Admin10_05 = L.tileLayer('data/Admin10_05/data/{z}/{x}/{y}.png', {
  maxZoom: 15
});

var Admin10_15 = L.tileLayer('data/Admin10_15/data/{z}/{x}/{y}.png', {
  maxZoom: 15
});
//Healthcare
var Healthcare10_05 = L.tileLayer('data/Healthcare10_05/data/{z}/{x}/{y}.png', {
  maxZoom: 15
});

var Healthcare10_15 = L.tileLayer('data/Healthcare10_15/data/{z}/{x}/{y}.png', {
  maxZoom: 15
});
//Wholesale
var Wholesale10_05 = L.tileLayer('data/Wholesale10_05/data/{z}/{x}/{y}.png', {
  maxZoom: 15
});

var Wholesale10_15 = L.tileLayer('data/Wholesale10_15/data/{z}/{x}/{y}.png', {
  maxZoom: 15
});

//Construction
var Construction10_05 = L.tileLayer('data/Construction10_05/data/{z}/{x}/{y}.png', {
  maxZoom: 15
});

var Construction10_15 = L.tileLayer('data/Construction10_15/data/{z}/{x}/{y}.png', {
  maxZoom: 15
});

//Management
var Management10_05 = L.tileLayer('data/Management10_05/data/{z}/{x}/{y}.png', {
  maxZoom: 15
});

var Management10_15 = L.tileLayer('data/Management10_15/data/{z}/{x}/{y}.png', {
  maxZoom: 15
});

//Management
var Manufacturing10_05 = L.tileLayer('data/Manufacturing10_05/data/{z}/{x}/{y}.png', {
  maxZoom: 15
});

var Manufacturing10_15 = L.tileLayer('data/Manufacturing10_15/data/{z}/{x}/{y}.png', {
  maxZoom: 15
});

//Management
var Professional10_05 = L.tileLayer('data/Professional10_05/data/{z}/{x}/{y}.png', {
  maxZoom: 15
});

var Professional10_15 = L.tileLayer('data/Professional10_15/data/{z}/{x}/{y}.png', {
  maxZoom: 15
});

//Public Administration
var PubAdmin10_05 = L.tileLayer('data/PubAdmin10_05/data/{z}/{x}/{y}.png', {
  maxZoom: 15
});

var PubAdmin10_15 = L.tileLayer('data/PubAdmin10_15/data/{z}/{x}/{y}.png', {
  maxZoom: 15
});

//Real Estate
var RealEstate10_05 = L.tileLayer('data/RealEstate10_05/data/{z}/{x}/{y}.png', {
  maxZoom: 15
});

var RealEstate10_15 = L.tileLayer('data/RealEstate10_15/data/{z}/{x}/{y}.png', {
  maxZoom: 15
});


//Groups sector years together for slider function
//Layer Groups
var artSide = L.layerGroup([Art10_05, Art10_15]);
var adminSide = L.layerGroup([Admin10_05, Admin10_15]);
var accommodationSide = L.layerGroup([Accommodation10_05, Accommodation10_15]);
var healthcareSide = L.layerGroup([Healthcare10_05, Healthcare10_15]); // check 2015 workers
var wholesaleSide = L.layerGroup([Wholesale10_05, Wholesale10_15]);
var constructionSide = L.layerGroup([Construction10_05, Construction10_15]);
var managementSide = L.layerGroup([Management10_05, Management10_15]);
var manufacturingSide = L.layerGroup([Manufacturing10_05, Manufacturing10_15]).addTo(layerGroup);
var professionalSide = L.layerGroup([Professional10_05, Professional10_15]);
var pubAdminSide = L.layerGroup([PubAdmin10_05, PubAdmin10_15]);
var realEstateSide = L.layerGroup([RealEstate10_05, RealEstate10_15]);
var financeSide = L.layerGroup([Finance10_05, Finance10_15]);
var total_hSide = L.layerGroup([Total10h_05, Total10h_15]);
var total_wSide = L.layerGroup([Total10w_05, Total10w_15]);

L.control.sideBySide([Art10_05, Admin10_05, Accommodation10_05, Healthcare10_05, Wholesale10_05, Construction10_05, Management10_05, Manufacturing10_05, Professional10_05, PubAdmin10_05, RealEstate10_05, Total10h_05, Total10w_05], [Art10_15, Admin10_15, Accommodation10_15, Healthcare10_15, Wholesale10_15, Construction10_05, Management10_15, Manufacturing10_15, Professional10_15, PubAdmin10_15, RealEstate10_15, Total10h_15, Total10w_15]).addTo(map);

//Add Buttons

//Subway Button
var subwayOn = null;
$("#Subway").click(function() {
  if (subwayOn) {
    map.removeLayer(subway);
    subwayOn = null;
  } else {
    subwayOn = true,
      map.addLayer(subway);
  }
});

//Walkshed Button
var walkshedOn = null;
$("#Walkshed").click(function() {
  if (walkshedOn) {
    map.removeLayer(tenMin);
    walkshedOn = null;
  } else {
    walkshedOn = true,
      map.addLayer(tenMin);
  }
});

//Finance Button
$("#Finance").click(function() {
  layerGroup.clearLayers();
  layerGroup.addLayer(financeSide)
});

//Art Button
$("#Art").click(function() {
  layerGroup.clearLayers();
  layerGroup.addLayer(artSide)
});

//Accommodation Button
$("#Accommodation").click(function() {
  layerGroup.clearLayers();
  layerGroup.addLayer(accommodationSide)
});

//Administration Button
$("#Administration").click(function() {
  layerGroup.clearLayers();
  layerGroup.addLayer(adminSide)
});

//Healthcare Button
$("#Healthcare").click(function() {
  layerGroup.clearLayers();
  layerGroup.addLayer(healthcareSide)
});

//Wholesale Button
$("#Wholesale").click(function() {
  layerGroup.clearLayers();
  layerGroup.addLayer(wholesaleSide)
});

//Construction Button
$("#Construction").click(function() {
  layerGroup.clearLayers();
  layerGroup.addLayer(constructionSide)
});

//Management Button
$("#Management").click(function() {
  layerGroup.clearLayers();
  layerGroup.addLayer(managementSide)
});

//Manufacturing Button
$("#Manufacturing").click(function() {
  layerGroup.clearLayers();
  layerGroup.addLayer(manufacturingSide)
});

//Professional Button
$("#Professional").click(function() {
  layerGroup.clearLayers();
  layerGroup.addLayer(professionalSide)
});

//PublicAdmin Button
$("#PublicAdmin").click(function() {
  layerGroup.clearLayers();
  layerGroup.addLayer(pubAdminSide)
});

//Real Estate Button
$("#RealEstate").click(function() {
  layerGroup.clearLayers();
  layerGroup.addLayer(realEstateSide)
});

//Total Button
$("#Total").click(function() {
  layerGroup.clearLayers();
  layerGroup.addLayer(total_hSide)
  layerGroup.addLayer(total_wSide)
});
