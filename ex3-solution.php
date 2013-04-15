<?php
include('weather.php');

function printWeatherData($i) {
  global $stations;
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

$i = $_REQUEST['i'];
printWeatherData($i);

