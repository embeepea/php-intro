<?php
include('weather.php');

function printWeatherData() {
  global $stations;
  print "<ul>";
  for ($i = 0; $i < count($stations); $i++) {
    print "<li><a href='ex4.php?id=" . $stations[$i]['id'] . "'>" . $stations[$i]['name'] . "</a></li>";
  }
  print "</ul>";
}

printWeatherData();

