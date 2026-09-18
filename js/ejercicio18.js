const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

function agregarElemento() {
    const texto = input.value.trim();

    if (texto !== '') {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

        const textoNodo = document.createTextNode(texto);
        li.appendChild(textoNodo);

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('btn', 'btn-sm', 'btn-danger');
        botonEliminar.addEventListener('click', function () {
            li.remove();
        });

        li.appendChild(botonEliminar);
        lista.appendChild(li);
        input.value = '';
        input.focus();
    } else {
        alert('Escribe algo para agregar a la lista.');
    }
}

botonAgregar.addEventListener('click', agregarElemento);

input.addEventListener('keydown', function (evento) {
    if (evento.key === 'Enter') {
        evento.preventDefault();
        agregarElemento();
    }
});
