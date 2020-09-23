<?php
header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
header("Pragma: no-cache"); // HTTP 1.0.
header("Expires: 0"); // Proxies.
header("Access-Control-Allow-Methods: GET, POST, PUT");
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Content-Type, enctype");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header('Content-Type: application/json; charset=utf-8');
header('enctype: multipart/form-data');

include "envconfig.php";

$NextNo=1;$filename="";

		
	  
    $target_dir = "uploads/";
    $json = array();
    $postData = file_get_contents("php://input");
    $input = json_decode($postData);
    $json['input'] = $input;
    $json['post'] = ($_POST);
    $json['files'] = $_FILES;
  // Edit upload location here
  
$UploadType='';if (isset($_REQUEST["Type"])) $UploadType=$_REQUEST["Type"];
$randomno = mt_rand(000000, 999999);
  
   $destination_path = $target_dir;
   $result = 0;

   if($UploadType=='Img') $filename="DRVIMG_";

   
  $filename.=$randomno."_".$NextNo.".";
  $filesname=basename($_FILES['uploadFile']['name']);
  
  $ext = pathinfo($filesname, PATHINFO_EXTENSION);
  $filename.=$ext;
   
   $target_path = $destination_path.$filename;
   
   //echo   $target_path;
 
   if(@move_uploaded_file($_FILES['uploadFile']['tmp_name'], $target_path)) {
      $result = 1;
   }
   
   echo '{"Filename":"'.$filename.'"}';
   return;

?>