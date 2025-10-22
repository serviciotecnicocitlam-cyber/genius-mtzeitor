const boton = document.getElementById("button");
const intro = document.getElementById("videointro");
const espera = document.getElementById("videoespera");
const audio = document.getElementById("miAudio");

// Aseguramos que el video de introducción esté pausado al inicio
intro.pause();

// Intentamos reproducir el audio (manejo de autoplay bloqueado por navegador)
audio.play().catch(error => {
  console.warn("El navegador bloqueó la reproducción automática:", error);
});

// Evento de clic en el botón
boton.addEventListener("click", () => {
  // Ocultar el video de espera y el botón
  espera.style.display = "none";
  boton.style.display = "none";

  // Mostrar el video de introducción
  intro.style.display = "block";
  intro.muted = false;

  // Cambiar el fondo a negro
  document.body.style.background = "black";

  // Reproducir el video
  intro.play().catch(err => console.warn("No se pudo reproducir:", err));

  // Redirigir al finalizar el video
  intro.onended = () => {
    window.location.href = "tematica/opciones_tematicas.html";
  };
});
