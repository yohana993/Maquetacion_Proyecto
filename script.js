// Manejo de inicio de sesión
document.getElementById('btnIngresar').addEventListener('click', function () {
    document.getElementById('mensajeBienvenida').style.display = 'none'; // Ocultar mensaje de bienvenida
    document.getElementById('loginContainer').style.display = 'block'; // Mostrar formulario de inicio de sesión
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
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

const procesoSelect = document.getElementById('proceso');
const precioCompraContainer = document.getElementById('precioCompraContainer');

function toggleFields() {
    if (procesoSelect.value === 'ingreso') {
        precioCompraContainer.classList.remove('hidden');
    } else {
        precioCompraContainer.classList.add('hidden');
    }
}

// Llama a la función al cargar la página para establecer el estado inicial
toggleFields();

// Agrega un evento para cambiar la visibilidad al seleccionar un nuevo valor
procesoSelect.addEventListener('change', toggleFields);

// Confirmaciones
function confirmarProceso() {
    alert("El proceso se ha confirmado de manera adecuada.");
    return true; // Permite que el formulario se envíe
}

function confirmarRegistro() {
    alert("El registro se ha confirmado de manera adecuada.");
    return true; // Permite que el formulario se envíe
}

// Proveedores
document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById('addButton');
    const updateButton = document.getElementById('updateButton');
    const deleteButton = document.getElementById('deleteButton');
    const addProviderForm = document.getElementById('addProviderForm');
    const updateProviderForm = document.getElementById('updateProviderForm');
    const deleteProviderList = document.getElementById('deleteProviderList');
    const providerTable = document.getElementById('providerTable');

    // Al cargar la página, solo mostramos la tabla de proveedores y los botones de añadir y actualizar
    providerTable.style.display = 'block';
    addProviderForm.style.display = 'none';
    updateProviderForm.style.display = 'none';
    deleteProviderList.style.display = 'none';

    addButton.addEventListener('click', function (e) {
        e.preventDefault();
        providerTable.style.display = 'none';
        addProviderForm.style.display = 'block';
        updateProviderForm.style.display = 'none';
        deleteProviderList.style.display = 'none';
    });

    updateButton.addEventListener('click', function (e) {
        e.preventDefault();
        providerTable.style.display = 'none';
        addProviderForm.style.display = 'none';
        updateProviderForm.style.display = 'block';
        deleteProviderList.style.display = 'none';
    });

    deleteButton.addEventListener('click', function (e) {
        e.preventDefault();
        providerTable.style.display = 'none';
        addProviderForm.style.display = 'none';
        updateProviderForm.style.display = 'none';
        deleteProviderList.style.display = 'block';
    });

    document.getElementById('cancelAdd').addEventListener('click', function () {
        addProviderForm.style.display = 'none';
        providerTable.style.display = 'block';
    });

    document.getElementById('cancelUpdate').addEventListener('click', function () {
        updateProviderForm.style.display = 'none';
        providerTable.style.display = 'block';
    });

    document.getElementById('cancelDelete').addEventListener('click', function () {
        deleteProviderList.style.display = 'none';
        providerTable.style.display = 'block';
    });

    // Lógica para añadir proveedores
    document.getElementById('formAdd').addEventListener('submit', function (e) {
        e.preventDefault();
        // Aquí puedes añadir la lógica para agregar el proveedor a la tabla
        alert('Proveedor añadido.'); // Solo para demostración
        addProviderForm.style.display = 'none';
        providerTable.style.display = 'block';
    });

    // Lógica para actualizar proveedores
    document.getElementById('formUpdate').addEventListener('submit', function (e) {
        e.preventDefault();
        // Aquí puedes añadir la lógica para actualizar el proveedor seleccionado
        alert('Proveedor actualizado.'); // Solo para demostración
        updateProviderForm.style.display = 'none';
        providerTable.style.display = 'block';
    });

    // Lógica para eliminar proveedores
    document.querySelectorAll('.deleteBtn').forEach(button => {
        button.addEventListener('click', function () {
            if (confirm('¿Estás seguro de que deseas eliminar este proveedor?')) {
                // Aquí puedes añadir la lógica para eliminar el proveedor de la tabla
                alert('Proveedor eliminado.'); // Solo para demostración
            }
        });
    });
});

