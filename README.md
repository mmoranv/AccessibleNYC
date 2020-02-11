# Accessible NYC
by Mariano Morán
3/20/2018

## Description:
This is a website that shows a glimpse of how poor is the accessibility coverage in subway stations in NYC.
It does so by integrating sections, buttons, and transitions of a bootstrap template with a leaflet map with layers of the NYC subway lines, and its stations.

## Sources
* NYC Subway stations shapefile (January 2017) by Baruch College
This shapefile contains updated info on lines, and addresses of each station.
https://www.baruch.cuny.edu/confluence/display/geoportal/NYC+Mass+Transit+Spatial+Layers

* NYC Subway Stations Accessibility Information by MTA
Captured by hand information on every station's accessibility into the shapefile attribute table.
http://web.mta.info/accessibility/stations.htm

* NYC Subway Lines shapefile by NYC OpenData
Characterized color of the lines using features in the attributes table.
https://data.cityofnewyork.us/Transportation/Subway-Lines/3qz8-muuu/data

* Stylish Porfolio Bootstrap template by StartBootstrap
Used mainly for rounding of buttons, side navigation bar, scroll-to-top button, and smooth transitions.
https://startbootstrap.com/template-overviews/stylish-portfolio/

## Highlights of website development
Map:
* The map layers were downloaded, processed in ArcGIS and QGIS, then exported to geojson format and loaded as geojson in the script.
* The map has scrolling zoom disabled.
* The layers use `map.createPane` to order their loading/presentation.
* The Stations have a hover pop up message with changing colors for Accessible stations.
* The map Buttons change colors when hovered and clicked, using classes, styles, and `toggle.Class`, `remove.Class`, and `add.Class` via jQuery

Other stuff:
* Text shadow and darkened backgrounds were used to remark the text over the background images.
* The transition buttons, sidebar, and scroll to top button come from the bootstrap template but were modified to agree with the styling.
* Lots of files for css and js for the template were eliminated, as they served no purpose in this website.
* The buttons and sources beneath the panel were aligned using `display: inline` properties in created classes.

## website
Accessible(!) at https://mmoranve.github.io/AccessibleNYC/

## Acknowledgments
Sincere thanks to Professor Chris Wong, Maxwell Austensen, Monica Flores, Rigel Jarabo, Ari Kaputkin & Niki Kokkinos for their help.
