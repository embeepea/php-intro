<?php
include('weather.php');
?>

<table>
  <tr>
    <td>id</td>
    <td>state</td>
    <td>lat</td>
    <td>lon</td>
    <td>elev</td>
    <td>name</td>
  </tr>
  <tr>
    <td><?php print $stations[2]['id']; ?></td>
    <td><?php print $stations[2]['state']; ?></td>
    <td><?php print $stations[2]['lat']; ?></td>
    <td><?php print $stations[2]['lon']; ?></td>
    <td><?php print $stations[2]['elev']; ?></td>
    <td><?php print $stations[2]['name']; ?></td>
  </tr>
</table>

