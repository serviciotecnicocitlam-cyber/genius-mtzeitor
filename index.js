const boton = document.getElementById("button");
const intro = document.getElementById("videointro");
const espera = document.getElementById("videoespera");

const video = intro;  // Usamos la misma variable intro, ya que es el video de introducción

// Pausamos el video de introducción inicialmente
video.pause();

<<<<<<< HEAD

      const audio = document.getElementById('miAudio');
      audio.play().catch(error => {
        console.warn("El navegador bloqueó la reproducción automática:", error);
      }); 
button.addEventListener("click", () => {
    // Ocultar botón y fondo
    videoespera.style.display = "none";
    button.style.display = "none";
    document.body.style.background = "black";
=======
// Evento de clic en el botón
boton.addEventListener("click", () => {
    // Ocultar el video de espera y mostrar el video de introducción
    espera.style.display = "none";
    video.style.display = "block";  // Aseguramos que el video se muestre
    boton.style.display = "none";  // Ocultar el botón
    document.body.style.background = "black";  // Cambiar el fondo a negro
>>>>>>> 35b71e92a1b0616860f484bbfdaa53e1da3fd9e4

    // Reproducir el video con sonido
    video.muted = false;
    video.play().catch(err => console.warn("No se pudo reproducir:", err));

    // Redirigir cuando termine el video
    video.onended = () => {
        window.location.href = "tematica/opciones_tematicas.html"; // Cambiar a tu página de destino
    };
});