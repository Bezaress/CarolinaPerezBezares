document.addEventListener("DOMContentLoaded", () => {

    // 1. SELECCIÓN DE ELEMENTOS DEL DOM
    const zones = document.querySelectorAll(".zone");
    const totalPrice = document.getElementById("total-price");
    const summaryList = document.getElementById("summary-list");
    const selectedZoneText = document.querySelector(".selected-zone"); // Faltaba declarar esta variable
    const totalBox = document.querySelector(".total");

    // 2. DICCIONARIO DE PRECIOS
    const prices = {
        "GENERAL": 1302,
        "PREFERENTE": 2258,
        "VIP": 3002,
        "ZONA FAN": 3746
    };

    // 3. FUNCIÓN PARA CALCULAR EL TOTAL Y EL RESUMEN
    function updateTotal() {
        let total = 0;
        summaryList.innerHTML = ""; // Limpiamos la lista antes de volver a llenarla

        // Recorremos cada tarjeta de boletos
        document.querySelectorAll(".ticket-item").forEach(item => {
            const zone = item.querySelector(".section-name").textContent.trim();
            const quantity = parseInt(item.querySelector(".counter span").textContent);

            if (quantity > 0) {
                const subtotal = prices[zone] * quantity;
                total += subtotal;

                // Creamos el elemento de la lista para el resumen
                const li = document.createElement("li");
                // Usamos toLocaleString para formatear con comas los miles
                li.innerHTML = `${zone} x${quantity} <span>$${subtotal.toLocaleString('es-MX', { minimumFractionDigits: 2 })}</span>`;
                summaryList.appendChild(li);
            }
        });

        // Actualizamos el precio total grande
        totalPrice.textContent = "$" + total.toLocaleString('es-MX', { minimumFractionDigits: 2 });

        // Animación del total (efecto de latido)
        totalBox.classList.add("updated");
        setTimeout(() => {
            totalBox.classList.remove("updated");
        }, 200);
    }

    // 4. LÓGICA DE LOS BOTONES + Y - (Contador Manual)
    document.querySelectorAll(".counter").forEach(counter => {
        const minus = counter.children[0];
        const number = counter.children[1];
        const plus = counter.children[2];

        plus.addEventListener("click", () => {
            number.textContent = parseInt(number.textContent) + 1;
            updateTotal();
        });

        minus.addEventListener("click", () => {
            let value = parseInt(number.textContent);
            if (value > 0) {
                number.textContent = value - 1;
                updateTotal();
            }
        });
    });

    // 5. LÓGICA DEL MAPA INTERACTIVO (Click en las zonas)
    zones.forEach(zone => {
        zone.addEventListener("click", () => {

            // Si hacen clic en el escenario, no hacemos nada
            if (zone.classList.contains("stage")) return;

            // Quitamos la clase 'active' de todas las zonas y se la ponemos a la seleccionada
            zones.forEach(z => z.classList.remove("active"));
            zone.classList.add("active");

            // Obtenemos el nombre exacto de la zona desde el atributo data-zone
            const zoneName = zone.dataset.zone;

            // Actualizamos el texto de instrucciones arriba del mapa
            selectedZoneText.textContent = "Zona seleccionada: " + zoneName;
            selectedZoneText.style.color = "#111827"; // Oscurecemos el texto para confirmar selección

            // Buscamos la tarjeta correspondiente a esta zona para sumarle 1
            const cards = document.querySelectorAll(".ticket-item");
            cards.forEach(card => {
                const name = card.querySelector(".section-name").textContent.trim();

                if (name === zoneName) {
                    // Encontramos la tarjeta correcta, sumamos 1 al contador
                    const numberSpan = card.querySelector(".counter span");
                    numberSpan.textContent = parseInt(numberSpan.textContent) + 1;

                    // -- MEJORA DE UX: Iluminamos la tarjeta temporalmente --
                    card.style.transition = "background-color 0.3s ease";
                    card.style.backgroundColor = "#FDF6E3"; // Fondo dorado muy suave

                    setTimeout(() => {
                        card.style.backgroundColor = "transparent";
                    }, 600);

                    // Hacemos scroll suave hacia la tarjeta en pantallas pequeñas
                    if (window.innerWidth <= 992) {
                        card.scrollIntoView({ behavior: "smooth", block: "nearest" });
                    }
                }
            });

            // Finalmente, recalculamos el total
            updateTotal();
        });
    });

    // 6. INICIALIZACIÓN
    // Calculamos el total al cargar la página (debe ser $0 al inicio)
    updateTotal();

});