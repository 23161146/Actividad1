const inputTarea = document.getElementById('tarea');
const btnAgregar = document.getElementById('btn-agregar');
const listaTareas = document.getElementById('lista-tareas');
const mensajeError = document.getElementById('mensaje-error');

const manejarTareas = (function () {
    let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

    function guardar() {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }

    function agregar(texto) {
        tareas.push({ texto: texto, completada: false });
        guardar();
    }

    function eliminar(indice) {
        tareas.splice(indice, 1);
        guardar();
    }

    function obtener() {
        return tareas;
    }

    return {
        agregar: agregar,
        eliminar: eliminar,
        obtener: obtener
    };
})();

function obtenerTareas() {
    return manejarTareas.obtener();
}

function agregarTarea() {
    const texto = inputTarea.value.trim();
    mensajeError.textContent = '';

    if (texto === '') {
        mensajeError.textContent = 'Por favor escribe una tarea antes de agregarla.';
        return;
    }

    manejarTareas.agregar(texto);
    inputTarea.value = '';
    inputTarea.focus();
    renderizarTareas();
}

function eliminarTarea(indice) {
    Swal.fire({
        title: '¿Eliminar esta tarea?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
    }).then(function (resultado) {
        if (resultado.isConfirmed) {
            manejarTareas.eliminar(indice);
            renderizarTareas();
            Swal.fire('Eliminada', 'La tarea fue eliminada.', 'success');
        }
    });
}

function renderizarTareas() {
    listaTareas.innerHTML = '';
    const tareas = obtenerTareas();

    tareas.forEach(function (tarea, indice) {
        const item = document.createElement('li');

        const texto = document.createElement('span');
        texto.textContent = tarea.texto;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.style.marginLeft = '10px';
        botonEliminar.addEventListener('click', function () {
            eliminarTarea(indice);
        });

        item.appendChild(texto);
        item.appendChild(botonEliminar);
        listaTareas.appendChild(item);
    });
}

btnAgregar.addEventListener('click', agregarTarea);

inputTarea.addEventListener('keydown', function (evento) {
    if (evento.key === 'Enter') {
        evento.preventDefault();
        agregarTarea();
    }
});

renderizarTareas();
