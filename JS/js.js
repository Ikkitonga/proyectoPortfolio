const navbar = document.querySelector("#navbar");
const abrir = document.querySelector("#menu-open");
const cerrar = document.querySelector("#menu-close");

abrir.addEventListener("click", () => {
    navbar.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    navbar.classList.remove("visible");
})