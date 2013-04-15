<?php
include('weather.php');

function printWeatherData($id) {
  global $stations;
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
    }
  }
}

$id = $_REQUEST['id'];
printWeatherData($id);

