<?php
 
// Importing DBConfig.php file.
include 'DBConfig.php';
 
// Connecting to MySQL Database.
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);

 $id = $obj['id'];
 // Populate Student name from JSON $obj array and store into $S_Name.
 $UserName = $obj['username'];
 
 // Populate Student Class from JSON $obj array and store into $S_Class.
 
 
 // Populate Student Phone Number from JSON $obj array and store into $S_Phone_Number.
 $Password = $obj['password'];
 
 
 // Creating SQL query and insert the record into MySQL database table.
 $Sql_Query = "UPDATE Data SET username= '$UserName', password = '$Password' WHERE id = '$id' ";
 
 
 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'Data is updated' ;
 
// Converting the message into JSON format.
$json = json_encode($MSG);
 
// Echo the message.
 echo $json ;
 
 }
 else{
 $mesg = 'try again';
 $json = json_encode($mesg);
 echo $json;
 
 }
 mysqli_close($con);
?>
