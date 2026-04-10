
document.querySelectorAll(".counter").forEach(counter => {

            const minus = counter.children[0]
            const number = counter.children[1]
            const plus = counter.children[2]

            plus.addEventListener("click", () => {
                number.textContent = parseInt(number.textContent) + 1
            })

            minus.addEventListener("click", () => {
                if (number.textContent > 0) {
                    number.textContent = parseInt(number.textContent) - 1
                }
            })

})




document.addEventListener("DOMContentLoaded", () => {

    const zones = document.querySelectorAll(".zone")

    zones.forEach(zone => {

        zone.addEventListener("click", () => {

            if(zone.classList.contains("stage")) return

            /* quitar selección previa */
            zones.forEach(z => z.classList.remove("active"))

            /* activar zona seleccionada */
            zone.classList.add("active")

            const selectedZone = zone.dataset.zone

            /* buscar sección correspondiente en card */
            document.querySelectorAll(".section-name")
            .forEach(section => {

                if(section.textContent.trim() === selectedZone){

                    const card = section.closest(".ticket-item")

                    /* highlight */
                    card.style.background = "#F9FAFB"

                    /* scroll automático */
                    card.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    })

                }

            })

        })

    })

})
