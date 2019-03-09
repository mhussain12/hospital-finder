// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
//
function getLocationFromGoogle(address){
    var geocoder = new GClientGeocoder();
    geocoder.getLocations(address,populateLocationAndSubmit);
    return false;
}

function populateLocationAndSubmit(response){
   if (!response || response.Status.code != 200) {
      alert("Invalid location! Can't locate the location. Please re-enter the location.")
      $('cgeo').value='fail'
      return false;
   } else {
      place = response.Placemark[0];
      point = new GLatLng(place.Point.coordinates[1],place.Point.coordinates[0]);
      $('lat').value = place.Point.coordinates[1]
      $('lng').value = place.Point.coordinates[0]
      $('search_query').value = place.address
      $('cgeo').value='success'
      document.forms[0].submit();
    }
}
