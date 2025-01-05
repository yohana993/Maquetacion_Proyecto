<?php
session_start();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mensaje</title>
</head>
<body>
    <h1><?php echo isset($_SESSION['mensaje']) ? $_SESSION['mensaje'] : 'No hay mensajes.'; ?></h1>
    <a href="Usuarios.html">Volver</a>
    <?php unset($_SESSION['mensaje']); // Limpiar el mensaje después de mostrarlo ?>
</body>
</html>
