const btnConvertir = document.getElementById('btn-convertir');
const inputKilometros = document.getElementById('kilometros');
const inputMillas = document.getElementById('millas');
const mensajeError = document.getElementById('mensaje-error');

function convertirKilometrosAMillas() {
    const valor = inputKilometros.value.trim();
    mensajeError.textContent = '';

    if (valor === '') {
        mensajeError.textContent = 'Por favor ingresa una distancia en kilómetros.';
        inputMillas.value = '';
        return;
    }

    const kilometros = Number(valor);
    if (isNaN(kilometros)) {
        mensajeError.textContent = 'El valor ingresado debe ser numérico.';
        inputMillas.value = '';
        return;
    }

    const millas = kilometros * 0.621371;
    inputMillas.value = millas.toFixed(5);
}

btnConvertir.addEventListener('click', convertirKilometrosAMillas);

inputKilometros.addEventListener('keydown', function (evento) {
    if (evento.key === 'Enter') {
        evento.preventDefault();
        convertirKilometrosAMillas();
    }
});
