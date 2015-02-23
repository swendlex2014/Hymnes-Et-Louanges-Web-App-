<?php
$uri = $_SERVER["REQUEST_URI"];
$ID = substr($uri, strrpos($uri, '/') + 1);
$image = 'http://' . $_SERVER['HTTP_HOST'] . '/hl/img/HL.jpg';

$homepage = file_get_contents('http://wspecs.com/services/hl/header/?ID=' . $ID . '&uri=' . $uri . '&image='. $image);
    echo $homepage;