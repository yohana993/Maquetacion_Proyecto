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

toggleFields();
procesoSelect.addEventListener('change', toggleFields);
