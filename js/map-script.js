	
	'use strict';	
	
	// CHECK WINDOW RESIZE
	var is_windowresize = false;
	$(window).resize(function(){
		is_windowresize = true;
	});
	
	
	//INITIALIZE MAP
	function initialize() {
		
		//DEFINE MAP OPTIONS
		//=======================================================================================
  		var mapOptions = {
    		zoom: 13,		
			mapTypeId: google.maps.MapTypeId.ROADMAP,	
      		center: new google.maps.LatLng(37.78, -122.431176),
			panControl: true,
  			zoomControl: true,
  			mapTypeControl: true,
  			//scaleControl: false,
  			streetViewControl: false,
  			overviewMapControl: false,
			//rotateControl:true,
			
  		};

		//CREATE NEW MAP
		//=======================================================================================
  		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		
		//MARKER ICON
		//=======================================================================================
		//var image = 'facebook30.svg';
		
		//ADD NEW MARKER
		//=======================================================================================
  		/*var marker = new google.maps.Marker({
    		position: map.getCenter(),
   		 	map: map,
    		title: 'Click to zoom',
			icon: image
  		});
		
		var marker1 = new google.maps.Marker({
    		position: new google.maps.LatLng(-12.042559, -77.027426),
   		 	map: map,
    		title: 'Click to zoom'
  		});*/
		
		
		//ADD NEW MARKER WITH LABEL
		//=======================================================================================


		var marker1 = new google.maps.Marker({
			position: new google.maps.LatLng(37.787802, -122.408812),
			map: map,
			title: "Bus pick-up"
		    });

		var marker2 = new google.maps.Marker({
			position: new google.maps.LatLng(37.791878, -122.458552),
			map: map,
			title: "Ceremony",
		    });

		var marker3 = new google.maps.Marker({
			position: new google.maps.LatLng(37.7605152, -122.4233867),
			map: map,
			title: "Reception",
		    });

		/*
		var marker1 = new MarkerWithLabel({
		position: new google.maps.LatLng(37.787802, -122.408812),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div class="de-icon circle small-size" style="background-color:#6a6a6a"><i class="de-icon-taxi"></i></div>',
       		//labelAnchor: new google.maps.Point(29, 20),
       		labelClass: "labels" // the CSS class for the label
     		});

		var marker2 = new MarkerWithLabel({
       		position: new google.maps.LatLng(37.791878, -122.458552),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div class="de-icon circle small-size" style="background-color:#FFF; border:1px solid #f0394d"><i class="de-icon-heart" style="color:#f0394d"></i></div>',
       		//labelAnchor: new google.maps.Point(29, 20),
       		labelClass: "labels" // the CSS class for the label
     		});
		
		var marker3 = new MarkerWithLabel({
			position: new google.maps.LatLng(37.7605152, -122.4233867),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div class="de-icon circle small-size" style="background-color:#67a80e"><i class="de-icon-food"></i></div>',
			//labelAnchor: new google.maps.Point(29, 20),
       		labelClass: "labels" // the CSS class for the label
     		});
		*/
		//INFO WINDOWS
		//=======================================================================================
		var contentString = '<div>'+
		'<b>Bus leaves at 2:30 PM</b><br/>Westin St. Francis Hotel<br/>Post Street at Powell';
      	'</div>';
		
		var contentString1 = '<div>'+
		'<b>Ceremony at 3:30 PM</b><br/>Inspiration Point';
      	'</div>';

		var contentString2 = '<div>'+
		'<b>Reception</b><br/>The Chapel<br/>777 Valencia St.';
      	'</div>';

 	 	var infowindow = new google.maps.InfoWindow({
      		content: contentString
  		});
		
		var infowindow1 = new google.maps.InfoWindow({
      		content: contentString1
  		});
		
		var infowindow2 = new google.maps.InfoWindow({
			content: contentString2
		    });
		
		
		//OPEN INFO WINDOWS ON LOAD
		//=======================================================================================
  		infowindow.open(map,marker1);
  		infowindow1.open(map,marker2);
  		infowindow2.open(map,marker3);
		

		//ON MARKER CLICK EVENTS
		//=======================================================================================
  		/*google.maps.event.addListener(marker, 'click', function() {
   	 		map.setZoom(17);
    		map.setCenter(marker.getPosition());
			infowindow.open(map,marker);
  		});*/
		/*
		google.maps.event.addListener(marker1, 'click', function() {
			infowindow.open(map,marker1);
   	 		//map.setZoom(17);
    		//map.setCenter(marker.getPosition());			
  		});
		
		google.maps.event.addListener(marker2, 'click', function() {
   	 		//map.setZoom(17);
			//map.setCenter(marker.getPosition());
			infowindow1.open(map,marker2);
  		});

		google.maps.event.addListener(marker2, 'click', function() {
   	 		//map.setZoom(17);
			//map.setCenter(marker.getPosition());
			infowindow2.open(map,marker3);
  		});
		*/
		//ON BOUND EVENTS AND WINDOW RESIZE
		//=======================================================================================
		google.maps.event.addListener(map, 'bounds_changed', function() {  		
			if (is_windowresize)
			{
				//map.setCenter(marker.getPosition());
				window.setTimeout(function() {
      				map.panTo(marker1.getPosition());
    			}, 500);
			}
			is_windowresize=false;
		});
	}

	// LOAD GMAP
	google.maps.event.addDomListener(window, 'load', initialize);
	
	
