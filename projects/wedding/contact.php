<?php
$field_name = $_POST['name'];
$field_email = $_POST['email'];
$field_message = $_POST['message'];

$mail_to = 'kitsonwedding@gmail.com';
$subject = 'Message from wedding guest'.$field_name;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Message: '.$field_message;

$headers = 'From: '.$field_email."\n";
$headers .= 'Reply-To: '.$field_email."\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Thank you for the message. We will be in touch.');
		window.location = 'directions.html';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Message failed. Please try again.');
		window.location = 'directions.html';
	</script>
<?php
}
?>