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

                if (number.textContent > 0) {

                    number.textContent =
                        parseInt(number.textContent) - 1

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

            const selectedZone =
                zone.dataset.zone

            document
                .querySelectorAll(".section-name")
                .forEach(section => {

                    if (
                        section.textContent.trim()
                        === selectedZone
                    ) {

                        const card =
                            section.closest(".ticket-item")

                        const number =
                            card.querySelector(".counter span")

                        number.textContent =
                            parseInt(number.textContent) + 1

                        card.style.background =
                            "#F9FAFB"

                        card.scrollIntoView({

                            behavior: "smooth",
                            block: "center"

                        })

                        updateTotal()

                    }

                })

        })

    })

    updateTotal()

})