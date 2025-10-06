const preguntas = {
    "FACILES": [
        { "opciones": ["a) Nueve reinas", "b) Kamchatka", "c) La historia oficial"], "respuesta": "c", "video": "videos/facil1.mp4" },
        { "opciones": ["a) Carancho", "b) Nueve reinas", "c) El secreto de sus ojos"], "respuesta": "c", "video": "videos/facil2.mp4" },
        { "opciones": ["a) Atrápame si puedes", "b) El Lobo de Wall Street", "c) El Renacido (The Revenant)"], "respuesta": "c", "video": "videos/facil3.mp4" },
        { "opciones": ["a) Futbolín", "b) Metegol", "c) Golazo"], "respuesta": "b", "video": "videos/facil4.mp4" },
        { "opciones": ["a) Capitán América", "b) Thor", "c) Iron Man"], "respuesta": "c", "video": "videos/facil5.mp4" }
    ],
    "INTERMEDIAS": [
        { "opciones": ["a) El clan", "b) Relatos Salvajes", "c) El secreto de sus ojos"], "respuesta": "b", "video": "videos/inter1.mp4" },
        { "opciones": ["a) Tenet", "b) Matrix", "c) Inception (El Origen)"], "respuesta": "c", "video": "videos/inter2.mp4" },
        { "opciones": ["a) Carancho", "b) Nueve Reinas", "c) El hijo de la novia"], "respuesta": "b", "video": "videos/inter3.mp4" },
        { "opciones": ["a) La vida es bella", "b) El niño con el pijama de rayas", "c) Jojo Rabbit"], "respuesta": "b", "video": "videos/inter4.mp4" },
        { "opciones": ["a) Tiempo de Valientes", "b) El Clan", "c) Zama"], "respuesta": "b", "video": "videos/inter5.mp4" }
    ],
    "DIFICILES": [
        { "opciones": ["a) Blade Runner 2049", "b) COCO", "c) La forma del agua"], "respuesta": "c", "video": "videos/dificil1.mp4" },
        { "opciones": ["a) 1917", "b) La La Land", "c) Birdman"], "respuesta": "c", "video": "videos/dificil2.mp4" },
        { "opciones": ["a) El aura", "b) El secreto de sus ojos", "c) El hombre de al lado"], "respuesta": "b", "video": "videos/dificil3.mp4" },
        { "opciones": ["a) 1", "b) 2", "c) 3"], "respuesta": "b", "video": "videos/dificil4.mp4" },
        { "opciones": ["a) El suplente", "b) Argentina, 1985", "c) Crónica de una fuga"], "respuesta": "b", "video": "videos/dificil5.mp4" }
    ]
};
let contadorPreguntas = 0;
let aciertos = 0;
const videoPregunta = document.getElementById('videopregunta')
const videofalse = document.getElementById('videofalse');
const videotrue = document.getElementById('videotrue');

let preguntaActual = null;

mostrarPregunta();

function mostrarPregunta() {
  const categorias = Object.keys(preguntas);
  const categoria = categorias[Math.floor(Math.random() * categorias.length)];
  const lista = preguntas[categoria];
  preguntaActual = lista[Math.floor(Math.random() * lista.length)];

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

  const videoPregunta = document.getElementById("videopregunta");
  videoPregunta.innerHTML = `<source src="${preguntaActual.video}" type="video/mp4">`;
  videoPregunta.style.display = 'block';
  videoPregunta.load();
  videoPregunta.play();
}

function verificarRespuesta(opcion, correcta) {
  // Desactivar botones mientras se reproduce video
  const botones = document.querySelectorAll(".opcion");
  botones.forEach(btn => btn.disabled = true);

  // ✅ DETENER video de la pregunta inmediatamente
  videoPregunta.pause();
  videoPregunta.currentTime = 0;
  videoPregunta.style.display = 'none';

  const esCorrecta = opcion === correcta;

  if (esCorrecta) {
     aciertos++;
    videotrue.style.zIndex = '5';
    videotrue.style.display = 'block';
    videotrue.currentTime = 0;
    videotrue.play();
    videotrue.onended = () => {
      manejarSiguientePaso();
    };
  } else {
    videofalse.style.zIndex = '5';
    videofalse.style.display = 'block';
    videofalse.currentTime = 0;
    videofalse.play();
    videofalse.onended = () => {
      manejarSiguientePaso();
    };
  }

  contadorPreguntas++;
}


function manejarSiguientePaso() {
  // Ver si fue la última pregunta
  if (contadorPreguntas >= 6) {
    window.location.href = `../../global/resultado.html?aciertos=${aciertos}&total=${contadorPreguntas}`;
  } else {
    // Mostrar botón de siguiente pregunta
    videofalse.style.display = 'none';
    videotrue.style.display = 'none';
    mostrarPregunta()
  }
}

