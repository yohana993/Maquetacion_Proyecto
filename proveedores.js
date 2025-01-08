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

    // Inicializar las vistas
    addProviderForm.style.display = 'none';
    updateProviderForm.style.display = 'none';
    deleteProviderList.style.display = 'none';

    // Manejadores de eventos para los botones
    addButton.addEventListener('click', toggleFormVisibility.bind(null, addProviderForm));
    updateButton.addEventListener('click', toggleFormVisibility.bind(null, updateProviderForm));
    deleteButton.addEventListener('click', toggleFormVisibility.bind(null, deleteProviderList));

    // Cancelar botones
    document.getElementById('cancelAdd').addEventListener('click', () => addProviderForm.style.display = 'none');
    document.getElementById('cancelUpdate').addEventListener('click', () => updateProviderForm.style.display = 'none');
    document.getElementById('cancelDelete').addEventListener('click', () => deleteProviderList.style.display = 'none');

    // Lógica para añadir proveedores
    document.getElementById('formAdd').addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        fetch('/api/proveedores', {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            if (data.success) {
                addProviderForm.reset();
                loadProviders(); // Cargar proveedores después de añadir
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
        const formData = new FormData(this);
        fetch('/api/proveedores/update', {
            method: 'PUT',
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            if (data.success) {
                updateProviderForm.reset();
                loadProviders(); // Cargar proveedores después de actualizar
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Ocurrió un error al actualizar el proveedor.');
        });
    });

    // Lógica para eliminar proveedores
    deleteProviderList.addEventListener('click', function (e) {
        if (e.target.classList.contains('deleteBtn')) {
            const id = e.target.dataset.id;
            if (confirm('¿Estás seguro de que deseas eliminar este proveedor?')) {
                fetch(`/api/proveedores/${id}`, {
                    method: 'DELETE'
                })
                .then(response => response.json())
                .then(data => {
                    alert(data.message);
                    if (data.success) {
                        loadProviders(); // Cargar proveedores después de eliminar
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Ocurrió un error al eliminar el proveedor.');
                });
            }
        }
    });

    // Función para actualizar la tabla de proveedores
    function updateProviderTable() {
        providerTableBody.innerHTML = '';
        providers.forEach((provider) => {
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

    // Función para cargar los proveedores
    function loadProviders() {
        fetch('/api/proveedores/list')
            .then(response => response.json())
            .then(data => {
                providers = data;
                updateProviderTable();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Ocurrió un error al cargar los proveedores.');
            });
    }

    // Función para alternar la visibilidad de los formularios
    function toggleFormVisibility(formToShow) {
        addProviderForm.style.display = 'none';
        updateProviderForm.style.display = 'none';
        deleteProviderList.style.display = 'none';
        formToShow.style.display = 'block';
    }

    // Cargar proveedores al inicio
    loadProviders();
});
