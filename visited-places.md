---
layout: page
title: Places I Visited
sidebar_link: true
leafletjs: true
---

Here are some places that I have visited (_hover on the map for more info_).

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

{% include comments.html %}