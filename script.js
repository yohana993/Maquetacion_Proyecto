document.getElementById('btnIngresar').addEventListener('click', function() {
    document.getElementById('mensajeBienvenida').style.display = 'none'; // Ocultar mensaje de bienvenida
    document.getElementById('loginContainer').style.display = 'block'; // Mostrar formulario de inicio de sesión
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Datos de inicio de sesión específicos
    const usuarioValido = "alegria@alegria.com";
    const contrasenaValida = "12345"; // Cambia esto a la contraseña que desees

    // Obtener los valores ingresados
    const usuarioIngresado = document.getElementById('username').value;
    const contrasenaIngresada = document.getElementById('password').value;

    // Validar las credenciales
    if (usuarioIngresado === usuarioValido && contrasenaIngresada === contrasenaValida) {
        // Redirigir a Menu.html
        window.location.href = "Menu.html";
    } else {
        document.getElementById('mensajeError').innerText = "Usuario o contraseña incorrectos";
        document.getElementById('mensajeError').style.display = 'block'; // Mostrar mensaje de error
    }
});