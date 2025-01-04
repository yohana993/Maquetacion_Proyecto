
<?php
// Conexión a la base de datos
$host = 'localhost'; // Cambia esto si tu base de datos está en otro host
$db = 'nombre_de_tu_base_de_datos'; // Cambia esto por el nombre de tu base de datos
$user = 'tu_usuario'; // Cambia esto por tu usuario de base de datos
$pass = 'tu_contraseña'; // Cambia esto por tu contraseña de base de datos

$conn = new mysqli($host, $user, $pass, $db);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener datos del formulario
$nombres = $_POST['nombres'];
$apellidos = $_POST['apellidos'];
$id = $_POST['id'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$role = $_POST['role'];

// Generar un nombre de usuario aleatorio
$nombreUsuario = strtolower(substr($nombres, 0, 3) . substr($apellidos, 0, 3) . rand(100, 999));

// Generar una contraseña aleatoria
$contraseña = bin2hex(random_bytes(4)); // Genera una contraseña de 8 caracteres

// Preparar la consulta SQL
$sql = "INSERT INTO usuarios (nombres, apellidos, id, email, telefono, role, nombre_usuario, contraseña) VALUES ('$nombres', '$apellidos', '$id', '$email', '$telefono', '$role', '$nombreUsuario', '$contraseña')";

// Ejecutar la consulta
if ($conn->query($sql) === TRUE) {
    echo "Usuario creado exitosamente. Nombre de usuario: $nombreUsuario, Contraseña: $contraseña";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar conexión
$conn->close();
?>
