function loadW3HTML(){
	w3.includeHTML();
}

function trackAndCircle(){
		
	trackLocation();
	addPointLinePoly();
	getEarthquakes();
}

function startup(){
	document.addEventListener('DOMContentLoaded',function(){
		trackAndCircle();
	},false);
	document.addEventListener('DOMContentLoaded',function(){
		loadW3HTML();
	},false);
}