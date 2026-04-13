document.addEventListener("DOMContentLoaded", () => {

    const zones =
        document.querySelectorAll(".zone")

    const totalPrice =
        document.getElementById("total-price")

    const summaryList =
        document.getElementById("summary-list")

    /* precios */

    const prices = {

        GENERAL: 1302,
        PREFERENTE: 2258,
        VIP: 3002,
        "ZONA FAN": 3746

    }

    /* calcular total */

    function updateTotal() {

        let total = 0

        summaryList.innerHTML = ""

        document
            .querySelectorAll(".ticket-item")
            .forEach(item => {

                const zone =
                    item
                        .querySelector(".section-name")
                        .textContent
                        .trim()

                const quantity =
                    parseInt(
                        item
                            .querySelector(".counter span")
                            .textContent
                    )

                if (quantity > 0) {

                    const subtotal =
                        prices[zone] * quantity

                    total += subtotal

                    const li =
                        document.createElement("li")

                    li.innerHTML =

                        zone +
                        " x" +
                        quantity +

                        "<span>$" +
                        subtotal.toLocaleString() +
                        "</span>"

                    summaryList.appendChild(li)

                }

            })

        totalPrice.textContent =
            "$" + total.toLocaleString()

        /* animación */

        const totalBox =
            document.querySelector(".total")

        totalBox.classList.add("updated")

        setTimeout(() => {

            totalBox.classList.remove("updated")

        }, 200)

    }

    /* contador manual */

    document
        .querySelectorAll(".counter")
        .forEach(counter => {

            const minus =
                counter.children[0]

            const number =
                counter.children[1]

            const plus =
                counter.children[2]

            plus.addEventListener("click", () => {

                number.textContent =
                    parseInt(number.textContent) + 1

                updateTotal()

            })

            minus.addEventListener("click", () => {

                let value =
                    parseInt(number.textContent)

                if (value > 0) {

                    number.textContent =
                        value - 1

                    updateTotal()

                }

            })

        })

    /* mapa */

    zones.forEach(zone => {

        zone.addEventListener("click", () => {

            if (zone.classList.contains("stage")) return

            zones.forEach(z =>
                z.classList.remove("active")
            )

            zone.classList.add("active")

            selectedZoneText.textContent =
                "Zona seleccionada: " +
                zone.dataset.zone

        })

        /* activar zona visual */

        zones.forEach(z =>
            z.classList.remove("active")
        )

        zone.classList.add("active")

        /* buscar card correcta */

        const cards =
            document.querySelectorAll(".ticket-item")

        cards.forEach(card => {

            const name =
                card
                    .querySelector(".section-name")
                    .textContent
                    .replace(/\s+/g, ' ')
                    .trim()

            if (name === selectedZone) {

                const number =
                    card.querySelector(".counter span")

                number.textContent =
                    parseInt(number.textContent) + 1

                card.scrollIntoView({

                    behavior: "smooth",
                    block: "center"

                })

            }

        })



    })

    updateTotal()

})