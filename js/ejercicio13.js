const btnVerificar = document.getElementById('btn-verificar');
const inputEdad = document.getElementById('edad');
const inputResultado = document.getElementById('resultado');
const mensajeError = document.getElementById('mensaje-error');

function verificarEdadParaVotar() {
    const valor = inputEdad.value.trim();
    mensajeError.textContent = '';

    if (valor === '') {
        mensajeError.textContent = 'Por favor ingresa tu edad.';
        inputResultado.value = '';
        return;
    }

    const edad = Number(valor);
    if (isNaN(edad)) {
        mensajeError.textContent = 'El valor ingresado debe ser numérico.';
        inputResultado.value = '';
        return;
    }

    if (edad <= 0) {
        mensajeError.textContent = 'El valor ingresado debe ser un número positivo.';
        inputResultado.value = '';
        return;
    }

    if (edad >= 18) {
        inputResultado.value = 'Puedes votar';
    } else {
        inputResultado.value = 'No puedes votar';
    }
}

btnVerificar.addEventListener('click', verificarEdadParaVotar);

inputEdad.addEventListener('keydown', function (evento) {
    if (evento.key === 'Enter') {
        evento.preventDefault();
        verificarEdadParaVotar();
    }
});
