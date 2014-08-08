 <?php

/* Email Variables */
$emailSubject ='contactform';
$webMaster ='rajaishwary@gmail.com';


/* Data Variables */
$name = $_POST['name'];
$cname = $_POST['cname'];
$country = $_POST['country'];
$city = $_POST['city'];
$addr = $_POST['addr'];
$msg = $_POST['contact'];
$msg = $_POST['msg'];


$email_body = 
<<<EOD
Name: $name
company name: $cname

Message: $msg
EOD;
$headers = "From: $name\r\n";
$headers .= "Content-type:text/html\r\n";
$success = mail("rajaishwary@gmail.com", $emailSubject, $email_body, $email);


/* Results rendered as HTML */
$theResults = <<<EOD
<html>
<head>
<title>Sent Message</title>
<meta http-equiv="refresh" content="3;URL=http://www.kanpurdeals.com/water/index.html">
<style type="text/css">
<!--
body {
background-color: #B2B2B2;
font-family: Verdana, Arial, Helvetica, sans-serif;
font-size: 20px;
font-style: normal;
line-height: normal;
font-weight: normal;
color: #212121;
text-decoration: none;
padding-top: 200px;
margin-left: 150px;
width: 800px;
}
-->
</style>
</head>
<div align="center">Thank you! Your message has been successfully submitted and will be replied to within 24 hours! You will be redirected back to the contact page shortly!</div>
</body>
</html>
EOD;
echo "$theResults";
?> 