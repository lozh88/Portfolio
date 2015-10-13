<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = 'hello@laurenkitson.co.uk';
$subject = $_POST['subject'];
$header = "From: " . $name . " <" . $email . ">\r\n";

mail ($to, $subject, $message, $header);
echo "Your Message has been sent.";
?>