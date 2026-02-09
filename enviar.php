<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre   = htmlspecialchars($_POST['nombre']);
    $telefono = htmlspecialchars($_POST['telefono'] ?? 'No informado');
    $email    = htmlspecialchars($_POST['email']);
    $articulo = htmlspecialchars($_POST['articulo'] ?? 'No seleccionado');
    $mensaje  = htmlspecialchars($_POST['mensaje']);

    $destinatario = "pgabarini@vemen.com.ar";
    $asunto = "Nueva consulta desde el sitio web de VEMEN";

    $contenido = "
Nombre: $nombre
Email: $email
Teléfono: $telefono
Artículo: $articulo

Mensaje:
$mensaje
";

    $headers  = "From: VEMEN <contacto@vemen.com.ar>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($destinatario, $asunto, $contenido, $headers)) {
        echo "Mensaje enviado correctamente a pgabarini@vemen.com.ar";
    } else {
        echo "Error al enviar el mensaje";
    }
}
?>
