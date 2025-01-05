<?php
$servername = "localhost"; // Cambia esto según tu configuración
$username = "tu_usuario"; // Cambia esto por tu usuario de MySQL
$password = "tu_contraseña"; // Cambia esto por tu contraseña de MySQL
$dbname = "tu_base_de_datos"; // Cambia esto por el nombre de tu base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
