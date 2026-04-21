document.addEventListener("DOMContentLoaded", () => {
    
    // ... (aquí va tu código del slider del hero) ...

    const btnFecha = document.getElementById("btn-fecha");
    const dateText = document.getElementById("date-text");

    if (btnFecha) {
        flatpickr(btnFecha, {
            locale: "es",
            dateFormat: "d M, Y", // Formato visual, ej: "17 Abr, 2026"
            // Se ejecuta cada vez que el usuario selecciona una fecha
            onChange: function(selectedDates, dateStr, instance) {
                if(dateStr) {
                    dateText.textContent = dateStr; // Cambia "Todas las fechas" por la fecha
                }
            },
            // Se ejecuta si el usuario borra la fecha
            onReady: function(selectedDates, dateStr, instance) {
                // Agregamos un botón de "Limpiar" al calendario (opcional pero muy útil)
                const clearBtn = document.createElement("div");
                clearBtn.className = "flatpickr-clear-btn";
                clearBtn.textContent = "Limpiar selección";
                clearBtn.addEventListener("click", () => {
                    instance.clear();
                    dateText.textContent = "Todas las fechas";
                    instance.close();
                });
                instance.calendarContainer.appendChild(clearBtn);
            }
        });
    }
});