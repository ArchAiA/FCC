
<script>
  // Only change code below this line.

navigator.geolocation.getCurrentPosition(function(position) {
$("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
});



  // Only change code above this line.
</script>
<div id = "data">
  <h4>You are here:</h4>

</div>
