// Función para confirmar la eliminación de un usuario
function confirmarRegistro() {
    return confirm("¿Está seguro de que desea eliminar este usuario?");
}

function procesarCreacionUsuario(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const idRol = document.getElementById('role').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const nombreUsuario = document.getElementById('nombreUsuario').value;
    const contraseña = document.getElementById('contraseña').value;

    // Aquí puedes hacer una solicitud al servidor para crear el usuario
    fetch('/api/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombres: nombres,
            apellidos: apellidos,
            idRol: idRol,
            email: email,
            telefono: telefono,
            nombreUsuario: nombreUsuario,
            contraseña: contraseña
        })
    })
    .then(response => {
        if (response.ok) {
            alert("Usuario creado exitosamente");
            // Redirigir o realizar otra acción
            window.location.href = "Usuarios.html";
        } else {
            alert("Error al crear el usuario");
        }
    })
    .catch(error => {
        console.error('Error en la solicitud:', error);
        alert("Ocurrió un error al crear el usuario");
    });
}

// Asignar el manejador de eventos al formulario de creación
const crearForm = document.querySelector('form[action="Procesar_Usuario.php"]');
if (crearForm) {
    crearForm.addEventListener('submit', procesarCreacionUsuario);
}
