const button = document.getElementById("button");
const video = document.getElementById("videointro");
const videoespera = document.getElementById("videoespera")

button.addEventListener("click", () => {
    // Ocultar botón y fondo
    videoespera.style.display = "none";
    button.style.display = "none";
    document.body.style.background = "black";

    // Mostrar y reproducir video
    video.style.display = "block";
    video.play();

    // Redirigir cuando termine
    video.onended = () => {
        window.location.href = "tematica/opciones_tematicas.html"; // Cambiar a tu página de destino
    };
});