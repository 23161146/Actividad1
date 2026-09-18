const inputNombre = document.getElementById('nombre');
const inputCalificacion = document.getElementById('calificacion');
const btnAgregar = document.getElementById('btn-agregar');
const listaEstudiantes = document.getElementById('lista-estudiantes');
const mensajeErrorAgregar = document.getElementById('mensaje-error-agregar');

const btnCalcular = document.getElementById('btn-calcular');
const inputPromedio = document.getElementById('promedio');
const inputMejor = document.getElementById('mejor');
const inputPeor = document.getElementById('peor');
const mensajeErrorCalcular = document.getElementById('mensaje-error-calcular');

let estudiantes = [];

function agregarEstudiante() {
    const nombre = inputNombre.value.trim();
    const calificacionTexto = inputCalificacion.value.trim();
    mensajeErrorAgregar.textContent = '';

    if (nombre === '' || calificacionTexto === '') {
        mensajeErrorAgregar.textContent = 'Por favor completa el nombre y la calificación.';
        return;
    }

    const calificacion = Number(calificacionTexto);
    if (isNaN(calificacion)) {
        mensajeErrorAgregar.textContent = 'La calificación debe ser un número válido.';
        return;
    }

    estudiantes.push({ nombre: nombre, calificacion: calificacion });

    const item = document.createElement('li');
    item.textContent = nombre + ' - ' + calificacion;
    listaEstudiantes.appendChild(item);

    inputNombre.value = '';
    inputCalificacion.value = '';
    inputNombre.focus();
}

function calcularResultados() {
    mensajeErrorCalcular.textContent = '';

    if (estudiantes.length === 0) {
        mensajeErrorCalcular.textContent = 'Agrega al menos un estudiante antes de calcular.';
        inputPromedio.value = '';
        inputMejor.value = '';
        inputPeor.value = '';
        return;
    }

    const suma = estudiantes.reduce(function (total, estudiante) {
        return total + estudiante.calificacion;
    }, 0);
    const promedio = suma / estudiantes.length;

    const calificacionMaxima = Math.max(...estudiantes.map(function (e) {
        return e.calificacion;
    }));
    const calificacionMinima = Math.min(...estudiantes.map(function (e) {
        return e.calificacion;
    }));

    const mejorEstudiante = estudiantes.find(function (e) {
        return e.calificacion === calificacionMaxima;
    });
    const peorEstudiante = estudiantes.find(function (e) {
        return e.calificacion === calificacionMinima;
    });

    inputPromedio.value = promedio.toFixed(2);
    inputMejor.value = mejorEstudiante.nombre;
    inputPeor.value = peorEstudiante.nombre;
}

btnAgregar.addEventListener('click', agregarEstudiante);
btnCalcular.addEventListener('click', calcularResultados);

inputCalificacion.addEventListener('keydown', function (evento) {
    if (evento.key === 'Enter') {
        evento.preventDefault();
        agregarEstudiante();
    }
});
