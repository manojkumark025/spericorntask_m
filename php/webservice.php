<?php
header('Access-Control-Allow-Origin: *'); 
header("Cache-Control: no-cache, no-store, must-revalidate");
header("Pragma: no-cache");
header("Expires: 0");
header("Access-Control-Allow-Methods: GET, POST, PUT");
//header("Content-Type: application/json; charset=UTF-8");

include "envconfig.php";



$Choice=""; if(isset($_GET['Choice']))$Choice=$_GET['Choice'];

$QID=""; if(isset($_GET['QID']))$QID=$_GET['QID'];

if(isset($_GET['Log']))$Log=$_GET['Log'];

if($Choice=='CheckUser'){

$uemail=""; if(isset($_GET['email']))$uemail=$_GET['email'];
$upwd=""; if(isset($_GET['pwd']))$upwd=$_GET['pwd'];

$sql ="SELECT * FROM user WHERE UPPER(U_EMAIL)=UPPER('$uemail') AND U_PASSWORD='$upwd' AND U_ACTIVE='Y'";

$result = $conn->query($sql);
if($result->num_rows > 0) {
	 while($objDtlRow = $result->fetch_object()){
		$jsonDtlContent=json_encode($objDtlRow);
		$jsonDtlContent.=',';
	 }
	 $jsonDtlContent= substr($jsonDtlContent,0,strlen($jsonDtlContent)-1);	
	$jsonContent='{"Status":"Y","Data":';
			$jsonContent.=$jsonDtlContent;
			$jsonContent.='}';
}
else $jsonContent='{"Status":"N"}';

echo $jsonContent;
	
}

if($Choice=='CheckAdmin'){

$aemail=""; if(isset($_GET['email']))$aemail=$_GET['email'];
$apwd=""; if(isset($_GET['pwd']))$apwd=$_GET['pwd'];

$sql ="SELECT * FROM admin WHERE UPPER(A_EMAIL)=UPPER('$aemail') AND A_PASSWORD='$apwd' AND A_ACTIVE='Y'";

$result = $conn->query($sql);
if($result->num_rows > 0) {
	 while($objDtlRow = $result->fetch_object()){
		$jsonDtlContent=json_encode($objDtlRow);
		$jsonDtlContent.=',';
	 }
	 $jsonDtlContent= substr($jsonDtlContent,0,strlen($jsonDtlContent)-1);	
	$jsonContent='{"Status":"Y","Data":';
			$jsonContent.=$jsonDtlContent;
			$jsonContent.='}';
}
else $jsonContent='{"Status":"N"}';

echo $jsonContent;
	
}

if($Choice=='Register'){

$urname=""; if(isset($_GET['name']))$urname=$_GET['name'];
$uremail=""; if(isset($_GET['email']))$uremail=$_GET['email'];
$urpassword=""; if(isset($_GET['pwd']))$urpassword=$_GET['pwd'];
$uraddress=""; if(isset($_GET['addr']))$uraddress=$_GET['addr'];

$sql ="INSERT INTO user (U_NAME,U_EMAIL,U_PASSWORD,U_ADDRESS) VALUES ('$urname','$uremail','$urpassword','$uraddress')";
//echo $sql;
$result = $conn->query($sql);
if($result) {
	$jsonContent='{"Status":"Y"}';
}else $jsonContent='{"Status":"N"}';

echo $jsonContent;
	
}

if($Choice=='Edit'){

$urname=""; if(isset($_GET['name']))$urname=$_GET['name'];
$uremail=""; if(isset($_GET['email']))$uremail=$_GET['email'];
$urpassword=""; if(isset($_GET['pwd']))$urpassword=$_GET['pwd'];
$uraddress=""; if(isset($_GET['addr']))$uraddress=$_GET['addr'];
$photo=""; if(isset($_GET['photo']))$photo=$_GET['photo'];

$sql ="UPDATE user SET U_NAME='$urname' ,U_EMAIL='$uremail',U_PASSWORD='$urpassword',U_ADDRESS='$uraddress',U_PHOTO='$photo' WHERE U_EMAIL='$uremail'";
//echo $sql;
$result = $conn->query($sql);
if($result) {
	$jsonContent='{"Status":"Y"}';
}else $jsonContent='{"Status":"N"}';

echo $jsonContent;
	
}


if($Choice=='CheckEmail'){

$cemail=""; if(isset($_GET['email']))$cemail=$_GET['email'];


$sql ="SELECT U_EMAIL FROM user";

$result = $conn->query($sql);
if($result->num_rows > 0) {
	$jsonDtlContent="[";
	while($objDtlRow = $result->fetch_object()){
		$jsonDtlContent.=json_encode($objDtlRow);
		$jsonDtlContent.=',';
	}
	$jsonDtlContent= substr($jsonDtlContent,0,strlen($jsonDtlContent)-1);
	$jsonDtlContent.="]";
	}
	else $jsonDtlContent="[]";

echo $jsonDtlContent;
	
}


if($Choice=='AllUsers'){
$sql ="SELECT * FROM user";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
	$jsonDtlContent="[";
	while($objDtlRow = $result->fetch_object()){
		$jsonDtlContent.=json_encode($objDtlRow);
		$jsonDtlContent.=',';
	}
	$jsonDtlContent= substr($jsonDtlContent,0,strlen($jsonDtlContent)-1);
	$jsonDtlContent.="]";
	}
	else $jsonDtlContent="[]";

echo $jsonDtlContent;
}


if($Choice=='DeleteUser'){
	
$uremail=""; if(isset($_GET['email']))$uremail=$_GET['email'];
	
$sql ="DELETE FROM user WHERE U_EMAIL='$uremail'";
$result = $conn->query($sql);

if($result) {
	$jsonContent='{"Status":"Y"}';
}else $jsonContent='{"Status":"N"}';

echo $jsonContent;
}

if($Choice=='UpdateStatus'){
	
$data=""; if(isset($_REQUEST['data'])) $data=$_REQUEST['data'];

echo '{"data":"Y"}';
	

}

?>

