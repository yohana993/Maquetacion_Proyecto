<?php
include 'db.php'; // Incluir la conexión a la base de datos

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id']; // Suponiendo que envías el ID del proveedor
    $nombre = $_POST['nombre'];
    $contacto = $_POST['contacto'];
    $email = $_POST['email'];
    $direccion = $_POST['direccion'];
    $productos = $_POST['productos'];
    $nit = $_POST['nit'];

    $sql = "UPDATE proveedores SET nombre=?, contacto=?, email=?, direccion=?, productos=?, nit=? WHERE id=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssssi", $nombre, $contacto, $email, $direccion, $productos, $nit, $id);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Proveedor actualizado exitosamente."]);
    } else {
        echo json_encode(["success" => false, "message" => "Error: " . $stmt->error]);
    }

    $stmt->close();
}
$conn->close();
?>
