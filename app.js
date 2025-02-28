// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar nombres a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre !== "") {
        amigos.push(nombre); // Agregar al array
        actualizarLista();   // Mostrar en la lista en pantalla
        input.value = "";    // Limpiar el campo
        input.focus();       // Volver a enfocar en el input
    } else {
        alert("Por favor, ingrese un nombre válido.");
    }
}

// Detectar cuando se presiona Enter en el input

document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") { // Verifica si la tecla presionada es Enter
        event.preventDefault(); // Evita que se recargue la página si el input está dentro de un formulario
        agregarAmigo(); // Llama a la función para agregar el amigo
    }
});

// Función para actualizar la lista en pantalla
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar

    amigos.forEach((nombre, index) => {
        let item = document.createElement("li");
        item.textContent = nombre;

        // Botón para eliminar nombre
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = () => eliminarAmigo(index);

        item.appendChild(btnEliminar);
        lista.appendChild(item);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 amigos para sortear.");
        return;
    }
    let indiceGanador = Math.floor(Math.random() * amigos.length);
    let nombreGanador = amigos[indiceGanador];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>🎉 El amigo secreto es: <strong>${nombreGanador}</strong> 🎉</p>`;
}
