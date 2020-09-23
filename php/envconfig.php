<?php

$servername = "localhost";
$username = "root";
$password = "root@123";
$dbname = "usersdata";
$port = "3308";
$ErrorFlag="N";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//echo "success";


?>

