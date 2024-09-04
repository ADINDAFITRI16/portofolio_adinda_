<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "adindanurfitri41@gmail.com";  // Ganti dengan alamat email tujuan
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);

    echo "Message sent successfully!";
} else {
    echo "Error: Invalid request.";
}
?>
