<?php
$server="localhost";
$user="root";
$password="";
$dby="vision_dashboard";
$conn=mysqli_connect($server,$user,$password,$dby);
if(!$conn){
	die('error connecting db:'. mysqli_connect_error());
}


?>