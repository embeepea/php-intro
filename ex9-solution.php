<?php
include('weather.php');

function printWeatherData($id, $year, $month, $day) {
  global $stations;
  global $data;
  for ($i = 0; $i < count($stations); $i++) {
    if ($stations[$i]['id'] == $id) {
      print "<table>";
      print "  <tr>";
      print "    <td>id</td>";
      print "    <td>state</td>";
      print "    <td>lat</td>";
      print "    <td>lon</td>";
      print "    <td>elev</td>";
      print "    <td>name</td>";
      print "  </tr>";
      print "  <tr>";
      print "    <td>" . $stations[$i]['id'] . "</td>";
      print "    <td>" . $stations[$i]['state'] . "</td>";
      print "    <td>" . $stations[$i]['lat'] . "</td>";
      print "    <td>" . $stations[$i]['lon'] . "</td>";
      print "    <td>" . $stations[$i]['elev'] . "</td>";
      print "    <td>" . $stations[$i]['name'] . "</td>";
      print "  </tr>";
      print "</table>";

      // array of month names for printing later
      $month_names = array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

      $data_month = $month - 1; // Months are 0 indexed in the data source
      $data_day   = $day - 1;   // Days are 0 indexed in the data source
      $temp = $data[$id]['TEMP'][$year][$data_month][$data_day];

      print "Temperature on " . $month_names[$data_month] . " " . $day . ", " . $year . ": " . $temp;
    }
  }
}

$id = $_REQUEST['id'];
printWeatherData($id, "2010", 3, 14);
printWeatherData($id, "2010", 4, 15);

