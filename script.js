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

// Productos
const precioCompraInput = document.getElementById('precioCompra');
    const precioVentaInput = document.getElementById('precioVenta');
    const gananciaInput = document.getElementById('ganancia');

    function calcularGanancia() {
        const precioCompra = parseFloat(precioCompraInput.value) || 0;
        const precioVenta = parseFloat(precioVentaInput.value) || 0;
        const ganancia = precioVenta - precioCompra;
        gananciaInput.value = ganancia.toFixed(2); // Redondear a 2 decimales
    }

    precioCompraInput.addEventListener('input', calcularGanancia);
    precioVentaInput.addEventListener('input', calcularGanancia);