document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filter-btn");
    const trabajos = document.querySelectorAll(".trabajo");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const filtro = button.getAttribute("data-filter");

            trabajos.forEach(trabajo => {
                const artista = trabajo.getAttribute("data-artista");

                if (filtro === "todos" || filtro === artista) {
                    trabajo.classList.remove("oculto");
                } else {
                    trabajo.classList.add("oculto");
                }
            });
        });
    });
});
