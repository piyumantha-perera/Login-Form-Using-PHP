<?php

$DBhost = "localhost";
$DBuser = "root";
$DBpass = "";
$DBname = "login";



$DBcon = new mysqli($DBhost, $DBuser, $DBpass, $DBname);

if (!$DBcon) {
    die("Connection Failed ! " . mysqli_connect_errno());
}


