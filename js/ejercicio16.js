const inputNumero1 = document.getElementById('numero1');
const inputNumero2 = document.getElementById('numero2');
const inputResultado = document.getElementById('resultado');
const botonesOperacion = document.querySelectorAll('.btn-operacion');

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const calcularOperacion = (operacion) => {
    const texto1 = inputNumero1.value.trim();
    const texto2 = inputNumero2.value.trim();
    const numero1 = Number(texto1);
    const numero2 = Number(texto2);

    if (texto1 === '' || texto2 === '' || isNaN(numero1) || isNaN(numero2)) {
        Swal.fire({
            icon: 'error',
            title: 'Valores inválidos',
            text: 'Por favor ingresa dos números válidos.'
        });
        inputResultado.value = '';
        return;
    }

    let resultado;

    switch (operacion) {
        case 'suma':
            resultado = sumar(numero1, numero2);
            break;
        case 'resta':
            resultado = restar(numero1, numero2);
            break;
        case 'multiplicacion':
            resultado = multiplicar(numero1, numero2);
            break;
        case 'division':
            resultado = dividir(numero1, numero2);
            break;
    }

    inputResultado.value = resultado;
};

botonesOperacion.forEach((boton) => {
    boton.addEventListener('click', () => {
        calcularOperacion(boton.dataset.operacion);
    });
});
