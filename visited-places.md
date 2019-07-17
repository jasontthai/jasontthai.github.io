---
layout: page
title: Places I Visited
sidebar_link: true
---

{%- include top-center-ads.html -%}

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css"
  integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ=="
  crossorigin=""/>
<script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js"
  integrity="sha512-/Nsx9X4HebavoBvEBuyp3I7od5tA0UzAxs+j83KgC8PU0kgB4XiK4Lfe4y4cgBtaRJQEIFCW+oC506aPT2L1zw=="
  crossorigin=""></script>

<style>
	#map {
		width: 100%;
		height: 100vh;
	}
	.info {
	    padding: 6px 8px;
	    font: 14px/16px Arial, Helvetica, sans-serif;
	    background: white;
	    background: rgba(255,255,255,0.8);
	    box-shadow: 0 0 15px rgba(0,0,0,0.2);
	    border-radius: 5px;
	}
	.info h4 {
	    margin: 0 0 5px;
	    color: #777;
	}
</style>

Here are some places that I have visited (_hover on the map for more info_).<br/>
Check out how I made it [here]({% post_url 2018-06-13-how-to-create-interactive-map-with-mapbox-and-leafletjs %}).

<div id='map'></div>

<!-- <script type="text/javascript" src="us-states.js"></script> -->

<script src="/assets/js/countries.js" type="text/javascript"></script>

<script type="text/javascript">

	var map = L.map('map').setView([0, 0], 2);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',		
		id: 'mapbox.streets-basic',
		accessToken: 'pk.eyJ1IjoiemlyaXVzIiwiYSI6ImNqaWNsenluYTAyZHczcHJvMGUzYWt6bTQifQ.fiJQMjN8hf8FFdHakLB3cw'
	}).addTo(map);

	// control that shows country info on hover
	var info = L.control();

	info.onAdd = function (map) {
		this._div = L.DomUtil.create('div', 'info');
		this.update();
		return this._div;
	};

	info.update = function (props) {
		this._div.innerHTML = '<h4>Places I visited</h4>' +  (props ?
			'<b>' + props.name + '</b><br />' + props.description
			: 'Hover over a marked place');
	};

	info.addTo(map);

	function getRandomColor() {
		var letters = '0123456789ABCDEF';
	  	var color = '#';
	  	for (var i = 0; i < 6; i++) {
	    	color += letters[Math.floor(Math.random() * 16)];
	  	}
	  	return color;
	}

	function style(feature) {
		return {
			weight: 2,
			opacity: 1,
			color: 'black',
			fillOpacity: 0.7,
			fillColor: getRandomColor()
		};
	}

	function highlightFeature(e) {
		var layer = e.target;

		layer.setStyle({
			weight: 5,
			color: '#666',
			dashArray: '',
			fillOpacity: 0.7
		});

		if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
			layer.bringToFront();
		}

		info.update(layer.feature.properties);
	}

	function resetHighlight(e) {
		geojson.resetStyle(e.target);
		info.update();
	}

	function zoomToFeature(e) {
		map.fitBounds(e.target.getBounds());
	}

	function onEachFeature(feature, layer) {
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		});
	}

	var geojson = L.geoJson(countries, { 
		style : style,
		onEachFeature: onEachFeature
	}).addTo(map);	


</script>