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
procesoSelect.addEventListener('change', toggleFields);

// Proveedores
document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById('addButton');
    const updateButton = document.getElementById('updateButton');
    const deleteButton = document.getElementById('deleteButton');
    const addProviderForm = document.getElementById('addProviderForm');
    const updateProviderForm = document.getElementById('updateProviderForm');
    const deleteProviderList = document.getElementById('deleteProviderList');
    const providerTableBody = document.getElementById('providerList');
    let providers = []; // Array para almacenar proveedores

    // Al cargar la página, solo mostramos la tabla de proveedores y los botones de añadir y actualizar
    addProviderForm.style.display = 'none';
    updateProviderForm.style.display = 'none';
    deleteProviderList.style.display = 'none';

    addButton.addEventListener('click', function (e) {
        e.preventDefault();
        addProviderForm.style.display = 'block';
        updateProviderForm.style.display = 'none';
        deleteProviderList.style.display = 'none';
    });

    updateButton.addEventListener('click', function (e) {
        e.preventDefault();
        addProviderForm.style.display = 'none';
        updateProviderForm.style.display = 'block';
        deleteProviderList.style.display = 'none';
    });

    deleteButton.addEventListener('click', function (e) {
        e.preventDefault();
        addProviderForm.style.display = 'none';
        updateProviderForm.style.display = 'none';
        deleteProviderList.style.display = 'block';
    });

    document.getElementById('cancelAdd').addEventListener('click', function () {
        addProviderForm.style.display = 'none';
    });

    document.getElementById('cancelUpdate').addEventListener('click', function () {
        updateProviderForm.style.display = 'none';
    });

    document.getElementById('cancelDelete').addEventListener('click', function () {
        deleteProviderList.style.display = 'none';
    });

    // Lógica para añadir proveedores
    document.getElementById('formAdd').addEventListener('submit', function (e) {
        e.preventDefault();
        
        const formData = new FormData(this); // Crear FormData para enviar los datos

        fetch('add_provider.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message); // Mostrar mensaje de éxito o error
            if (data.success) {
                addProviderForm.reset(); // Reiniciar el formulario
                updateProviderTable(); // Actualizar la tabla de proveedores
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Ocurrió un error al añadir el proveedor.');
        });
    });

    // Lógica para actualizar proveedores
    document.getElementById('formUpdate').addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(this); // Crear FormData para enviar los datos

        fetch('update_provider.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message); // Mostrar mensaje de éxito o error
            if (data.success) {
                updateProviderForm.reset(); // Reiniciar el formulario
                updateProviderTable(); // Actualizar la tabla de proveedores
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Ocurrió un error al actualizar el proveedor.');
        });
    });

    // Lógica para eliminar proveedores
    document.getElementById('deleteProviderList').addEventListener('click', function (e) {
        if (e.target.classList.contains('deleteBtn')) {
            const id = e.target.dataset.id; // Suponiendo que tienes un atributo data-id
            if (confirm('¿Estás seguro de que deseas eliminar este proveedor?')) {
                fetch('eliminar_proveedores.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams({ id: id }) // Enviar el ID del proveedor
                })
                .then(response => response.json())
                .then(data => {
                    alert(data.message); // Mostrar mensaje de éxito o error
                    if (data.success) {
                        updateProviderTable(); // Actualizar la tabla de proveedores
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Ocurrió un error al eliminar el proveedor.');
                });
            }
        }
    });

    function updateProviderTable() {
        providerTableBody.innerHTML = ''; // Limpiar la tabla
        providers.forEach((provider, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${provider.nombre}</td>
                <td>${provider.contacto}</td>
                <td>${provider.email}</td>
                <td>${provider.direccion}</td>
                <td>${provider.productos}</td>
                <td>${provider.nit}</td>
                <td>
                    <button class="updateBtn" data-id="${provider.id}">Actualizar</button>
                    <button class="deleteBtn" data-id="${provider.id}">Eliminar</button>
                </td>
            `;
            providerTableBody.appendChild(row);
        });
    }
});

