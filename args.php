<?php
if (isset($argv)) {
  parse_str(implode('&', array_slice($argv, 1)), $_GET);
}

