<?php
include_once('db.php');
$ct=$_POST['cust'];
$rn=$_POST['rname'];
$rph=$_POST['rphone'];
$ctq=$_POST['ctquoted'];
$nqt=$_POST['nonquoted'];
$sht=$_POST['shipment'];
$chrt=$_POST['charted'];
$sig=$_POST['single'];
$mtp=$_POST['multiple'];
$tsh=$_POST['t_ship'];
$qat=$_POST['quant'];
$pyt=$_POST['payment'];
$rml=$_POST['rmail'];
$custrf=$_POST['cust_ref'];
$bkd=$_POST['book_date'];
$bkt=$_POST['book_time'];
$cid=$_POST['cust_id'];


mysqli_query($conn,"INSERT INTO stud_rec(ad_no,fullname,dob,gender,cont_address,ad_date,klass) VALUES($adnum,$fn,$dob,$gen,$cont_add,$dat,$klas)")
?>
