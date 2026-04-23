// 1. Diccionario de datos (Puedes agregar todos los que necesites)
const datosUbicacion = {
    mexico: ["CDMX", "Jalisco", "Nuevo León", "Yucatán", "Estado de México", "Puebla"],
    colombia: ["Bogotá", "Antioquia", "Valle del Cauca", "Cundinamarca"],
    espana: ["Madrid", "Cataluña", "Andalucía", "Galicia", "Valencia"]
};

// 2. Seleccionamos los elementos del HTML
const selectPais = document.getElementById('pais-select');
const selectEstado = document.getElementById('estado-select');

// 3. Escuchamos cada vez que el país cambia
selectPais.addEventListener('change', function () {

    const paisElegido = this.value;

    // Limpiamos las opciones anteriores del estado
    selectEstado.innerHTML = '<option value="">Selecciona un estado...</option>';

    // Si el usuario eligió un país válido que está en nuestro diccionario
    if (paisElegido && datosUbicacion[paisElegido]) {

        // Habilitamos el selector de estados
        selectEstado.disabled = false;

        // Recorremos la lista de estados de ese país y los agregamos
        datosUbicacion[paisElegido].forEach(function (estado) {
            const nuevaOpcion = document.createElement('option');
            nuevaOpcion.value = estado.toLowerCase().replace(/\s+/g, '-'); // Crea un value sin espacios
            nuevaOpcion.textContent = estado;
            selectEstado.appendChild(nuevaOpcion);
        });

    } else {
        // Si eligen "Selecciona un país...", volvemos a deshabilitar el estado
        selectEstado.disabled = true;
    }
});