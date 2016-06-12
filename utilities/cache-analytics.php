<?php

$utilities_dir = '/var/www/html/er/utilities/';
$ga = file_get_contents('https://www.google-analytics.com/analytics.js');
$gauges = file_get_contents('https://secure.gaug.es/track.js');

file_put_contents($utilities_dir . 'analytics.js', $ga);
file_put_contents($utilities_dir . 'track.js', $gauges);

?>