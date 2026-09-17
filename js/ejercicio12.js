const btnConvertir = document.getElementById('btn-convertir');
const inputMxn = document.getElementById('mxn');
const inputUsd = document.getElementById('usd');
const mensajeError = document.getElementById('mensaje-error');

const TASA_CAMBIO = 0.055;

function convertirMxnAUsd() {
    const valor = inputMxn.value.trim();
    mensajeError.textContent = '';

    if (valor === '') {
        mensajeError.textContent = 'Por favor ingresa una cantidad en pesos mexicanos.';
        inputUsd.value = '';
        return;
    }

    const mxn = Number(valor);
    if (isNaN(mxn)) {
        mensajeError.textContent = 'El valor ingresado debe ser numérico.';
        inputUsd.value = '';
        return;
    }

    if (mxn <= 0) {
        mensajeError.textContent = 'El valor ingresado debe ser positivo.';
        inputUsd.value = '';
        return;
    }

    const usd = mxn * TASA_CAMBIO;
    inputUsd.value = usd.toFixed(2);
}

btnConvertir.addEventListener('click', convertirMxnAUsd);

inputMxn.addEventListener('keydown', function (evento) {
    if (evento.key === 'Enter') {
        evento.preventDefault();
        convertirMxnAUsd();
    }
});
