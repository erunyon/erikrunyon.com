<?php
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);

// 0 * * * *  cd /var/www/html/er/erikrunyon.com/utilities; /usr/bin/php5 cache-analytics.php

$utilities_dir = '/var/www/html/er/erikrunyon.com/utilities/';
$ga = file_get_contents('https://www.google-analytics.com/analytics.js');
$gauges = file_get_contents('https://secure.gaug.es/track.js');

file_put_contents($utilities_dir . 'analytics.js', $ga);
file_put_contents($utilities_dir . 'track.js', $gauges);

?>