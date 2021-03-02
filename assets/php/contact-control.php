<?php


$name = $_POST['name'];
$vistor_email = $_POST['email'];
$message = $_POST['message'];

$email_form = "jhs07.yt@gmail.com";

$email_subject = $_POST['subject'];

$email_body = "Username: $name.\n".
                "User Email: $vistor_email.\n".
                    "User Message: $message.\n";

$to = "lntelligence273@gmail.com";

$headers = "From: $email_form.\r\n";
$headers .= "Reply-to: $vistor_email.\r\n";
mail($to,$email_subject,$email_body,$headers);

header("Location: ../../contact-me.html");

?>