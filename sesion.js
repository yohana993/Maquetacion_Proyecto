// Manejo de inicio de sesión
document.getElementById('btnIngresar').addEventListener('click', function () {
    document.getElementById('mensajeBienvenida').style.display = 'none'; // Ocultar mensaje de bienvenida
    document.getElementById('loginContainer').style.display = 'block'; // Mostrar formulario de inicio de sesión
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario
    const usuarioIngresado = document.getElementById('username').value;
    const contrasenaIngresada = document.getElementById('password').value;

    // Aquí puedes realizar una solicitud al backend en lugar de validación local
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: usuarioIngresado,
            password: contrasenaIngresada
        })
    })
    .then(response => {
        if (response.ok) {
            // Redirigir a la página de menú en caso de éxito
            window.location.href = "Menu.html";
        } else {
            // Mostrar mensaje de error
            document.getElementById('mensajeError').innerText = "Usuario o contraseña incorrectos";
            document.getElementById('mensajeError').style.display = 'block'; // Mostrar mensaje de error
        }
    })
    .catch(error => {
        console.error('Error en la solicitud:', error);
        document.getElementById('mensajeError').innerText = "Ocurrió un error en el inicio de sesión";
        document.getElementById('mensajeError').style.display = 'block'; // Mostrar mensaje de error
    });
});
