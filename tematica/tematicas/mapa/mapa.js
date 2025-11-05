                                                          //FALTAN PONER TODOS LOS VIDEOS
const preguntas = {
    "FACILES": [
        { "opciones": ["a) Ramos Mejía", "b) Lomas del Mirador", "c) San Justo"], "respuesta": "a", "imagen": "imagenes/1.png", "video": "videos/1.mp4" },
        { "opciones": ["a) Tapiales", "b) Lomas del Mirador", "c) Villa Luzuriaga"], "respuesta": "b", "imagen": "imagenes/2.png", "video": "videos/1.mp4"  },
       
    ],
};

let contadorPreguntas = 0;
let aciertos = 0;

const videoPregunta = document.getElementById('videopregunta');
const imgPregunta = document.getElementById('imgpregunta');
const videofalse = document.getElementById('videofalse');
const videotrue = document.getElementById('videotrue');

let preguntaActual = null;
let preguntasUsadas = [];

// 🧩 Combinar todas las preguntas de todas las categorías
const todasLasPreguntas = Object.values(preguntas).flat();

// 🚀 Iniciar juego
mostrarPregunta();

function mostrarPregunta() {
  // ⚠️ Fin del juego si ya respondió 6 o no quedan más preguntas
  if (contadorPreguntas >= 6 || preguntasUsadas.length >= todasLasPreguntas.length) {
    window.location.href = `../../global/resultado.html?aciertos=${aciertos}&total=${contadorPreguntas}`;
    return;
  }

  let pregunta;
  let intentos = 0;

  // 🔁 Buscar una pregunta con imagen no repetida
  do {
    pregunta = todasLasPreguntas[Math.floor(Math.random() * todasLasPreguntas.length)];
    intentos++;

    const idPregunta = pregunta.imagen; // 🔹 usamos la imagen como identificador único

    if (!preguntasUsadas.includes(idPregunta)) {
      preguntasUsadas.push(idPregunta); // ✅ guardar solo si es nueva
      preguntaActual = pregunta;
      break;
    }

    if (intentos > 50) {
      console.warn("No hay más preguntas sin repetir.");
      window.location.href = `../../global/resultado.html?aciertos=${aciertos}&total=${contadorPreguntas}`;
      return;
    }
  } while (true);

  // 🧠 Crear botones de opciones
  const opcionesDiv = document.getElementById("opciones");
  opcionesDiv.innerHTML = "";
  const posiciones = ["opcion-izquierda", "opcion-derecha", "opcion-abajo"];

  preguntaActual.opciones.forEach((opcion, index) => {
    const btn = document.createElement("button");
    btn.classList.add("opcion", posiciones[index]);
    btn.innerText = opcion;
    btn.onclick = () => verificarRespuesta(opcion[0], preguntaActual.respuesta);
    opcionesDiv.appendChild(btn);
  });

  // 🎥 Mostrar video (es el mismo para todas)
  if (preguntaActual.video) {
    videoPregunta.innerHTML = `<source src="${preguntaActual.video}" type="video/mp4">`;
    videoPregunta.style.display = "block";
    videoPregunta.load();

    videoPregunta.muted = true;
    const playPromise = videoPregunta.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setTimeout(() => (videoPregunta.muted = false), 1000))
        .catch(err => console.warn("No se pudo reproducir el video:", err));
    }
  }

  // 🖼️ Mostrar imagen única
  if (preguntaActual.imagen) {
    imgPregunta.src = preguntaActual.imagen;
    imgPregunta.style.display = 'block';
  }

  // 🔄 Reset feedback
  [videotrue, videofalse].forEach(video => {
    video.style.display = 'none';
    video.pause();
    video.currentTime = 0;
  });
}

function verificarRespuesta(opcion, correcta) {
  const botones = document.querySelectorAll(".opcion");

  // 🔒 Deshabilitar y ocultar los botones al responder
  botones.forEach(btn => {
    btn.disabled = true;
    btn.style.opacity = "0";
    btn.style.pointerEvents = "none";
  });

  // 🧹 Limpiar botones después de un breve retardo
  setTimeout(() => {
    const opcionesDiv = document.getElementById("opciones");
    opcionesDiv.innerHTML = "";
  }, 300);

  // Ocultar imagen y detener video
  imgPregunta.style.display = 'none';
  videoPregunta.pause();
  videoPregunta.style.display = 'none';

  const esCorrecta = opcion === correcta;
  if (esCorrecta) aciertos++;

  // 🎬 Mostrar feedback
  const videoFeedback = esCorrecta ? videotrue : videofalse;
  videoFeedback.style.display = 'block';
  videoFeedback.currentTime = 0;
  videoFeedback.play();

  videoFeedback.onended = manejarSiguientePaso;
  contadorPreguntas++;
}

function manejarSiguientePaso() {
  [videotrue, videofalse].forEach(v => (v.style.display = 'none'));

  if (contadorPreguntas >= 6 || preguntasUsadas.length >= todasLasPreguntas.length) {
    window.location.href = `../../global/resultado.html?aciertos=${aciertos}&total=${contadorPreguntas}`;
  } else {
    mostrarPregunta();
  }
}

