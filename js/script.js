// Obtener el elemento con el id "matriz" del documento HTML
let matriz = document.getElementById("matriz");
// Obtener el elemento con el id "restaurar" del documento HTML
let restaurar = document.getElementById("restaurar");

// Función para crear la matriz de cuadros
function crearMatriz() {
    for (let i = 1; i < 51; i++) {
        // Crear un nuevo elemento <div> para representar un cuadro
        let Nrandom = document.createElement("div");
        // Establecer el ancho y alto de los cuadros
        Nrandom.style.width = '50px';
        Nrandom.style.height = '50px';
        // Establecer el color de fondo inicial en azul
        Nrandom.style.backgroundColor = 'blue';
        // Agregar una clase con un número único para identificar cada cuadro
        Nrandom.classList.add("div" + i);
        // Establecer el radio de borde de los cuadros
        Nrandom.style.borderRadius = '10px';
        // Agregar un evento de clic a cada cuadro
        Nrandom.addEventListener("click", function () {
            // Calcular la fila y columna del cuadro en la matriz
            let fila = Math.floor((i - 1) / 5) + 1;
            let columna = (i - 1) % 5 + 1;
            // Verificar el color de fondo del cuadro
            if (Nrandom.style.backgroundColor == 'blue') {
                // Cambiar el color a rojo cuando se hace clic
                this.style.backgroundColor = 'red';
                // Agregar una "X" en negrita al cuadro
                this.textContent = "X";
                // Establecer estilos para centrar el contenido
                this.style.display = 'flex';
                this.style.fontWeight = 'bold';
                this.style.color = 'lightgreen';
                this.style.justifyContent = 'center';
                this.style.alignItems = 'center';
                // Cambiar el color de fondo de los cuadros en la misma fila
                for (let j = 1; j <= 5; j++) {
                    let index = (fila - 1) * 5 + j;
                    let cuadroFila = document.querySelector(".div" + index);
                    cuadroFila.style.backgroundColor = Nrandom.style.backgroundColor;
                }
                // Cambiar el color de fondo de los cuadros en la misma columna
                for (let j = 1; j <= 10; j++) {
                    let index = (columna - 1) + 5 * (j - 1) + 1;
                    let cuadroColumna = document.querySelector(".div" + index);
                    cuadroColumna.style.backgroundColor = Nrandom.style.backgroundColor;
                }
            } else if (Nrandom.style.backgroundColor == 'red') {
                // Mostrar una alerta si el cuadro ya está en rojo
                alert("Este espacio ya no está disponible");
            }
        });
        // Agregar el cuadro al elemento con el id "matriz"
        matriz.appendChild(Nrandom);
    }
}

// Llamar a la función para crear la matriz al cargar la página
crearMatriz();

// Función para restaurar los cuadros a su estado original (azul)
function restaurarCuadros() {
    for (let i = 1; i < 51; i++) {
        let Crandom = document.querySelector(".div" + i);
        Crandom.style.backgroundColor = 'blue';
        Crandom.textContent = '';
    }
}

// Función para seleccionar un cuadro aleatorio y cambiar su color a rojo
function cuadrosRandom() {
    const divMatriz = matriz.querySelectorAll("div");
    let todosRojos = true;
    // Verificar si todos los cuadros ya están en rojo
    divMatriz.forEach((div) => {
        if (div.style.backgroundColor !== "red") {
            todosRojos = false;
            return;
        }
    });
    // Mostrar una alerta si todos los cuadros ya están en rojo
    if (todosRojos) {
        alert("Todas las casillas ya están en rojo");
        return;
    }
    let Nrandom;
    let Crandom;
    // Seleccionar un cuadro aleatorio que no esté en rojo
    do {
        Nrandom = Math.floor(Math.random() * 50) + 1;
        Crandom = document.querySelector(".div" + Nrandom);
    } while (Crandom.style.backgroundColor === "red");
    // Calcular la fila y columna del cuadro aleatorio
    let fila = Math.floor((Nrandom - 1) / 5) + 1;
    let columna = (Nrandom - 1) % 5 + 1;
    // Verificar el color de fondo del cuadro aleatorio
    if (Crandom.style.backgroundColor == 'blue') {
        // Cambiar el color a rojo
        Crandom.style.backgroundColor = 'red';
        // Cambiar el estilo de fuente a negrita
        Crandom.style.fontWeight = 'bold';
        Crandom.style.color = 'lightgreen';
        // Agregar una "X" en el cuadro aleatorio
        Crandom.textContent = "X";
        // Establecer estilos para centrar el contenido
        Crandom.style.display = 'flex';
        Crandom.style.justifyContent = 'center';
        Crandom.style.alignItems = 'center';
        // Cambiar el color de fondo de los cuadros en la misma fila
        for (let j = 1; j <= 5; j++) {
            const index = (fila - 1) * 5 + j;
            const cuadroFilaa = document.querySelector(".div" + index);
            cuadroFilaa.style.backgroundColor = Crandom.style.backgroundColor;
        }
        // Cambiar el color de fondo de los cuadros en la misma columna
        for (let j = 1; j <= 10; j++) {
            const index = (columna - 1) + 5 * (j - 1) + 1;
            const cuadroColumnaa = document.querySelector(".div" + index);
            cuadroColumnaa.style.backgroundColor = Crandom.style.backgroundColor;
        }
    } else if (Crandom.style.backgroundColor == 'red') {
        // Mostrar una alerta si el cuadro aleatorio ya está en rojo
        alert("El espacio no está disponible");
    }
}