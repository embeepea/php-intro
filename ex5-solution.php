<?php
include('weather.php');

function printWeatherData() {
  global $stations;
  print "<ul>";
  for ($i = 0; $i < count($stations); $i++) {
    print "<li>" . $stations[$i]['name'] . "</li>";
  }
  print "</ul>";
}

printWeatherData();

