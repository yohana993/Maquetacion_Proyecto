
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
$proceso = $_POST['proceso'];
$categoria = $conn->real_escape_string($_POST['categoria']);
$producto = $conn->real_escape_string($_POST['producto']);
$cantidad = (int)$_POST['cantidad'];
$precioCompra = isset($_POST['precioCompra']) ? (float)$_POST['precioCompra'] : null; 
$precioVenta = (float)$_POST['precioVenta'];

// Preparar la consulta SQL
if ($proceso == 'ingreso') {
    $sql = "INSERT INTO productos (categoria, producto, cantidad, precio_compra, precio_venta) VALUES ('$categoria', '$producto', $cantidad, $precioCompra, $precioVenta)";
} else {
    $sql = "INSERT INTO productos (categoria, producto, cantidad, precio_venta) VALUES ('$categoria', '$producto', $cantidad, $precioVenta)";
}

// Ejecutar la consulta
if ($conn->query($sql) === TRUE) {
    $_SESSION['mensaje'] = "Registro creado exitosamente";
} else {
    $_SESSION['mensaje'] = "Error: " . $conn->error;
}

// Cerrar conexión
$conn->close();

// Redirigir a la página de éxito
header("Location: success.php");
exit();
?>
