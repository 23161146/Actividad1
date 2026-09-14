// 1. Referencias a los elementos del DOM
const btnConvertir = document.getElementById('btn-convertir');
const inputCelsius = document.getElementById('celsius');
const inputFahrenheit = document.getElementById('fahrenheit');
const mensajeError = document.getElementById('mensaje-error');

// 2. Función que muestra un mensaje de error y marca el campo como inválido
function mostrarError(texto) {
    mensajeError.textContent = texto;
    mensajeError.classList.add('activo');
    inputCelsius.classList.add('invalido');
    inputFahrenheit.value = '';
}

// 3. Función que limpia el estado de error
function limpiarError() {
    mensajeError.textContent = '';
    mensajeError.classList.remove('activo');
    inputCelsius.classList.remove('invalido');
}

// 4. Función principal de conversión
function convertirCelsiusAFahrenheit() {
    const valor = inputCelsius.value.trim();

    if (valor === '') {
        mostrarError('Por favor ingresa un valor en grados Celsius.');
        return;
    }

    const celsius = Number(valor);
    if (isNaN(celsius)) {
        mostrarError('El valor ingresado debe ser numérico.');
        return;
    }

    limpiarError();

    const fahrenheit = (celsius * 9 / 5) + 32;

    inputFahrenheit.value = `${fahrenheit.toFixed(2)}°F`;
}

// 5. Evento click en el botón "Convertir"
btnConvertir.addEventListener('click', convertirCelsiusAFahrenheit);

// 6. Permitir conversión al presionar "Enter" dentro del campo Celsius
inputCelsius.addEventListener('keydown', function (evento) {
    if (evento.key === 'Enter') {
        evento.preventDefault();
        convertirCelsiusAFahrenheit();
    }
});

// 7. Limpiar el error apenas el usuario empieza a corregir su entrada
inputCelsius.addEventListener('input', limpiarError);
