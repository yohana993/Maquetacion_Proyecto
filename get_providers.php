<?php
include 'db.php'; // Asegúrate de incluir tu archivo de conexión
$sql = "SELECT * FROM proveedores";
$result = $conn->query($sql);
$providers = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $providers[] = $row;
    }
}

echo json_encode($providers); // Devolver los proveedores en formato JSON
$conn->close();
?>
