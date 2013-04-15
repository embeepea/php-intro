<?php
include('weather.php');

function printWeatherData() {
  global $stations;
  global $data;

  print "<ul>";
  for ($i = 0; $i < count($stations); $i++) {
    $station_id = $stations[$i]['id'];
    $years_array = array_keys($data[$station_id]['TEMP']);
    $years_string = join(", ", $years_array);
    print "<li>" . $stations[$i]['name'] . ": " . $years_string . "</li>"; 
  }
  print "</ul>";
}

printWeatherData();

