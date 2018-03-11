# Accessible NYC
by Mariano Morán
3/10/2018

A map with
NYC Subway Stations that are accessible to wheelchairs
The map will feature every station point, every line and train in NYC
It will have features that will make possible to toggle on and off by
certain lines
accessible or Not

* MTA Subway stations
Combining spatial info of subway stations
https://www.baruch.cuny.edu/confluence/display/geoportal/NYC+Mass+Transit+Spatial+Layers
** The one I used is 2017 - Jan	Subway Stops	points	shapefile	stops_nyc_subway_jan2017.zip
with info on accessible stations
http://web.mta.info/accessibility/stations.htm

* leaflet
http://leafletjs.com/examples/quick-start/

* papa parse for csvs
https://www.papaparse.com/

* cloropleth?
http://leafletjs.com/examples/choropleth/

* chris examples
https://chriswhong.github.io/leaflet-landuse-demo/

* mapshaper
http://mapshaper.org/

* Class Doc
https://docs.google.com/document/d/1wlEAFtoJMjeBE8XuznjjivVZ7tuPgRyqPDUeidHgfg4/edit


* TO INCLUDE

* Sign up for ADA email alerts
http://advisory.mtanyct.info/EEoutage/Signup.aspx

* Article
https://ny.curbed.com/2017/9/21/16344776/nyc-subway-accessibility-essay 
https://ny.curbed.com/2017/9/21/16315042/nyc-subway-wheelchair-accessible-ada

The assignment just says to make use of geoJSON formatted data, and use L.geoJSON() in leaflet to make a map...

The steps I went through in class were:
1) download data
2) use QGIS to open the data and export a small part of the original data on geoJSON format, and to convert the coordinate reference system from 2263 to 4326 (NY state plate to WGS84(lat/lon))
3) add the geojson to a leaflet project, either by creating a .js file from the geoJSON and prepending `var myData = ` to it
or, adding the raw `.geojson` file to the project and using jquery `$.getJSON()` to load it
I then added data-driven styling to it by passing an options object to L.geoJSON()

## Progress
The cooordinate system was wrong. Now it's fixed.

## TO FIX
1 - Color of the markers, function
2 - Shape of the markers
3 - That bloody banner
4 - The popup message
