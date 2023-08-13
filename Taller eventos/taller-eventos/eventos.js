
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("saludarBtn");
    btn.addEventListener("click", () => {
        alert("¡Hola! ¡Bienvenido!");
    });

    const divContenedor = document.getElementById("contenedorBoton");
    divContenedor.addEventListener("click", () => {
        alert("Hola! Soy el div");
    });
});
