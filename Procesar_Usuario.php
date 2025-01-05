
<?php
session_start(); // Iniciar sesión para usar mensajes

// Conexión a la base de datos
$host = 'localhost:3306';
$db = 'Cafe_Bar';
$user = 'root';
$pass = 'root';
$conn = new mysqli($host, $user, $pass, $db);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener datos del formulario y sanitizar
$nombres = $conn->real_escape_string($_POST['nombres']);
$apellidos = $conn->real_escape_string($_POST['apellidos']);
$id = (int)$_POST['id'];
$email = $conn->real_escape_string($_POST['email']);
$telefono = $conn->real_escape_string($_POST['telefono']);
$role = $conn->real_escape_string($_POST['role']);

// Generar un nombre de usuario aleatorio
$nombreUsuario = strtolower(substr($nombres, 0, 3) . substr($apellidos, 0, 3) . rand(100, 999));
// Generar una contraseña aleatoria
$contraseña = bin2hex(random_bytes(4));

// Preparar la consulta SQL
$sql = "INSERT INTO usuarios (nombres, apellidos, id, email, telefono, role, nombre_usuario, contraseña) VALUES ('$nombres', '$apellidos', '$id', '$email', '$telefono', '$role', '$nombreUsuario', '$contraseña')";

// Ejecutar la consulta
if ($conn->query($sql) === TRUE) {
    $_SESSION['mensaje'] = "Usuario creado exitosamente. Nombre de usuario: $nombreUsuario, Contraseña: $contraseña";
} else {
    $_SESSION['mensaje'] = "Error: " . $conn->error;
}

// Cerrar conexión
$conn->close();

// Redirigir a la página de éxito
header("Location: success.php");
exit();
?>
