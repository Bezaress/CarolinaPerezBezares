      // 1. Creamos una lista con las abreviaturas de los meses
        const nombresMeses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

        // 2. Guardamos los elementos originales por si el usuario borra la fecha
        const mesOriginal = document.getElementById('caja-mes').textContent;
        const diaOriginal = document.getElementById('caja-dia').textContent;

        // 3. Inicializamos el calendario
        flatpickr("#boton-calendario", {
            locale: "es",
            dateFormat: "d/m/Y",
            onChange: function (selectedDates, dateStr, instance) {

                // A. Cambia el texto del botón
                document.getElementById('texto-calendario').textContent = dateStr;

                // B. Sincroniza el recuadro grande si hay una fecha seleccionada
                if (selectedDates.length > 0) {
                    const fechaElegida = selectedDates[0]; // Obtenemos la fecha real

                    const dia = fechaElegida.getDate(); // Saca el día (1-31)
                    const mes = nombresMeses[fechaElegida.getMonth()]; // Saca el mes (0-11) y busca su nombre en nuestra lista

                    // Actualizamos el HTML del recuadro
                    document.getElementById('caja-dia').textContent = dia;
                    document.getElementById('caja-mes').textContent = mes;
                }
            },
            onClose: function (selectedDates, dateStr, instance) {
                // Si el usuario borra la fecha, regresamos todo a como estaba al principio
                if (selectedDates.length === 0) {
                    document.getElementById('texto-calendario').textContent = 'Todas las fechas ⌄';
                    document.getElementById('caja-dia').textContent = diaOriginal;
                    document.getElementById('caja-mes').textContent = mesOriginal;
                }
            }
        });