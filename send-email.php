<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $prenom = htmlspecialchars($_POST['prenom']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "youmnarakotovao@gmail.com";  // Votre adresse e-mail
    $subject = "Nouveau message de contact";
    
    $body = "Nom: $name\n";
    $body .= "Prénom(s): $prenom\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Votre message a été envoyé avec succès.'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Erreur lors de l’envoi du message.'); window.location.href='index.html';</script>";
    }
}
?>