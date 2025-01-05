<?php
include 'db.php'; // Incluir la conexión a la base de datos

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $contacto = $_POST['contacto'];
    $email = $_POST['email'];
    $direccion = $_POST['direccion'];
    $productos = $_POST['productos'];
    $nit = $_POST['nit'];

    $sql = "INSERT INTO proveedores (nombre, contacto, email, direccion, productos, nit) VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssss", $nombre, $contacto, $email, $direccion, $productos, $nit);

    if ($stmt->execute()) {
        // En lugar de redirigir, simplemente devolvemos un mensaje de éxito
        echo json_encode(["success" => true, "message" => "Proveedor añadido exitosamente."]);
    } else {
        echo json_encode(["success" => false, "message" => "Error: " . $stmt->error]);
    }

    $stmt->close();
}
$conn->close();
?>
