const btnCalcular = document.getElementById('btn-calcular');
const inputNumeros = document.getElementById('numeros');
const inputMayor = document.getElementById('mayor');
const inputMenor = document.getElementById('menor');
const inputPromedio = document.getElementById('promedio');
const mensajeError = document.getElementById('mensaje-error');

function limpiarResultados() {
    inputMayor.value = '';
    inputMenor.value = '';
    inputPromedio.value = '';
}

function calcularEstadisticas() {
    const valor = inputNumeros.value.trim();
    mensajeError.textContent = '';

    if (valor === '') {
        mensajeError.textContent = 'Por favor ingresa al menos un número.';
        limpiarResultados();
        return;
    }

    const partes = valor.split(',').map(function (texto) {
        return texto.trim();
    });

    const numeros = partes.map(Number);
    const hayInvalido = numeros.some(function (numero, indice) {
        return partes[indice] === '' || isNaN(numero);
    });

    if (hayInvalido) {
        mensajeError.textContent = 'Ingresa solo números válidos separados por comas.';
        limpiarResultados();
        return;
    }

    const mayor = Math.max(...numeros);
    const menor = Math.min(...numeros);
    const suma = numeros.reduce(function (acumulador, numero) {
        return acumulador + numero;
    }, 0);
    const promedio = suma / numeros.length;

    inputMayor.value = mayor;
    inputMenor.value = menor;
    inputPromedio.value = promedio.toFixed(2);
}

btnCalcular.addEventListener('click', calcularEstadisticas);

inputNumeros.addEventListener('keydown', function (evento) {
    if (evento.key === 'Enter') {
        evento.preventDefault();
        calcularEstadisticas();
    }
});
