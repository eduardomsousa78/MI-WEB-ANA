// ========================================
// MODO OSCURO
// ========================================

// Buscamos el botón de cambio de tema
const botonTema = document.getElementById("boton-tema");

// Comprobamos si existe una preferencia guardada
const temaGuardado = localStorage.getItem("tema");

// Si el usuario había elegido modo oscuro,
// lo activamos automáticamente
if (temaGuardado === "oscuro") {

    document.body.classList.add("modo-oscuro");

    botonTema.textContent = "☀️ Modo claro";
}


// ========================================
// CAMBIAR EL TEMA
// ========================================

botonTema.addEventListener("click", () => {

    // Activamos o desactivamos el modo oscuro
    document.body.classList.toggle("modo-oscuro");

    // Comprobamos si el modo oscuro está activo
    const modoOscuroActivo =
        document.body.classList.contains("modo-oscuro");


    if (modoOscuroActivo) {

        // Guardamos el modo oscuro
        localStorage.setItem("tema", "oscuro");

        // Cambiamos el texto del botón
        botonTema.textContent = "☀️ Modo claro";

    } else {

        // Guardamos el modo claro
        localStorage.setItem("tema", "claro");

        // Cambiamos el texto del botón
        botonTema.textContent = "🌙 Modo oscuro";
    }
});