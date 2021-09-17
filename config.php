<?php

$servername = "localhost";
$username = "root";
$password = "scrublets18";
$dbname = "TFG";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// $conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error); //mysqli_connect_error());
}


?>