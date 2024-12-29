document.getElementById('btnIngresar').addEventListener('click', function() {
    document.getElementById('mensajeBienvenida').style.display = 'none'; // Ocultar mensaje de bienvenida
    document.getElementById('loginContainer').style.display = 'block'; // Mostrar formulario de inicio de sesión
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    
    // Datos de inicio de sesión específicos
    const usuariosValidos = [
        { username: "alegria@alegria.com", password: "12345", role: "administrador" },
        { username: "alegria1@alegria.com", password: "12345", role: "usuario" },
        { username: "alegria2@alegria.com", password: "12345", role: "dueño" }
    ];

    // Obtener los valores ingresados
    const usuarioIngresado = document.getElementById('username').value;
    const contrasenaIngresada = document.getElementById('password').value;

    // Validar las credenciales
    const usuarioValido = usuariosValidos.find(user => user.username === usuarioIngresado && user.password === contrasenaIngresada);

    // Suponiendo que tienes el rol del usuario después de la validación
    const roleUsuario = usuarioValido ? usuarioValido.role : 'invitado'; // Cambia 'invitado' según sea necesario

    if (usuarioValido) {
        // Establecer el rol en el HTML
        document.getElementById('roleUsuario').innerText = roleUsuario; // Mostrar el rol del usuario
        document.getElementById('mensajeBienvenida').style.display = 'block'; // Mostrar mensaje de bienvenida
        document.getElementById('loginContainer').style.display = 'none'; // Ocultar formulario de inicio de sesión
        
        // Redirigir a menu.html
        window.location.href = "Menu.html"; // Verifica que esta ruta sea correcta
    } else {
        document.getElementById('mensajeError').innerText = "Usuario o contraseña incorrectos";
        document.getElementById('mensajeError').style.display = 'block'; // Mostrar mensaje de error
    }
});
