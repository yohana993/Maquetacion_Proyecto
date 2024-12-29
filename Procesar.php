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
$proceso = $_POST['proceso'];
$categoria = $_POST['categoria'];
$producto = $_POST['producto'];
$cantidad = $_POST['cantidad'];
$precioCompra = isset($_POST['precioCompra']) ? $_POST['precioCompra'] : null; // Puede ser nulo si es salida
$precioVenta = $_POST['precioVenta'];

// Preparar la consulta SQL
if ($proceso == 'ingreso') {
    $sql = "INSERT INTO productos (categoria, producto, cantidad, precio_compra, precio_venta) VALUES ('$categoria', '$producto', $cantidad, $precioCompra, $precioVenta)";
} else {
    $sql = "INSERT INTO productos (categoria, producto, cantidad, precio_venta) VALUES ('$categoria', '$producto', $cantidad, $precioVenta)";
}

// Ejecutar la consulta
if ($conn->query($sql) === TRUE) {
    echo "Registro creado exitosamente";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar conexión
$conn->close();
?>
