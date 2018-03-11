// Setting up the map
var defaultCenter = [40.701139, -74.010067];
var defaultZoom = 11;

var map = L.map('subway-map').setView(defaultCenter, defaultZoom);

// WorldGreyCanvas TileLayer from http://leaflet-extras.github.io/leaflet-providers/preview/
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
}).addTo(map);

function Accessibility(ADA) { //You can use this for categories too!
	console.log(ADA)
	return ADA === 1 ? '#008000' :
				ADA === 0 ? '#BD0026' :
						'#000000';
}

$.getJSON('data/Baruch subway entrances/all_stops_nyc_2017.geojson', function(subways) {
    L.geoJSON(subways, {
			pointToLayer: function (feature,latlng) {
				return L.circleMarker (latlng, {
					color: Accessibility(feature.properties.ADA),
					radius: 2
				})
			}
    }).addTo(map)
})
