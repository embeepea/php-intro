<?php
include('weather.php');

function printWeatherData($id) {
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

      $temp = $data[$id]['TEMP']['2010'][3][14];
      print "Temperature on April 15, 2010: " . $temp;
    }
  }
}

$id = $_REQUEST['id'];
printWeatherData($id);

