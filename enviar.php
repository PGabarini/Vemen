<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre   = htmlspecialchars($_POST['nombre']);
    $telefono = htmlspecialchars($_POST['telefono'] ?? 'No informado');
    $email    = htmlspecialchars($_POST['email']);
    $plan     = htmlspecialchars($_POST['plan'] ?? 'No seleccionado');
    $mensaje  = htmlspecialchars($_POST['mensaje']);

    $destinatario = "pablogabarini@gmail.com";
    $asunto = "Nueva consulta desde el sitio web de VEMEN";

    $contenido = "
    Nombre: $nombre
    Email: $email
    Teléfono: $telefono
    Plan: $plan

    Mensaje:
    $mensaje
    ";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($destinatario, $asunto, $contenido, $headers)) {
        echo "Mensaje enviado correctamente";
    } else {
        echo "Error al enviar el mensaje";
    }
}
?>