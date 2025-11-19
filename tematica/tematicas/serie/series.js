                                                                      //Listo esta completa esta tematica

const preguntas = {
 
    "FACILES": [
        { "opciones": ["a) How I Met Your Mother", "b) Seinfeld", "c) Friends"], "respuesta": "c", "video": "videos/1r.mp4" },
        { "opciones": ["a) Un gallo para Esculapio", "b) Los Simuladores", "c) El Marginal"], "respuesta": "b", "video": "videos/2r.mp4" },
        { "opciones": ["a) Locke & Key", "b) The Umbrella Academy", "c) Stranger Things"], "respuesta": "c", "video": "videos/3r.mp4" },
        { "opciones": ["a) Monzón", "b) El Reino", "c) Argentina, 1985 (serie documental)"], "respuesta": "c", "video": "videos/4r.mp4" },
        { "opciones": ["a) Narcos", "b) Ozark", "c) Breaking Bad"], "respuesta": "c", "video": "videos/5r.mp4" },
    ],
    "INTERMEDIAS": [
        { "opciones": ["a) Rick and Morty", "b) BoJack Horseman", "c) Family Guy"], "respuesta": "b", "video": "videos/6r.mp4" },
        { "opciones": ["a) Rebelde Way", "b) Casi Ángeles", "c) Aliados"], "respuesta": "b", "video": "videos/7r.mp4" },
        { "opciones": ["a) Alice in Borderland", "b) Squid Game", "c) Sweet Home"], "respuesta": "b", "video": "videos/8r.mp4" },
        { "opciones": ["a) Apache", "b) Monzón", "c) Puerta 7"], "respuesta": "b", "video": "videos/9r.mp4" },
        { "opciones": ["a) Doom Patrol", "b) The Umbrella Academy", "c) Titans"], "respuesta": "b", "video": "videos/10r.mp4" },
    ],
    "DIFICILES": [
        { "opciones": ["a) La caída", "b) El Reino", "c) Todos mienten"], "respuesta": "b", "video": "videos/11r.mp4" },
        { "opciones": ["a) Altered Carbon", "b) Westworld", "c) Black Mirror"], "respuesta": "b", "video": "videos/12r.mp4" },
        { "opciones": ["a) Futurama", "b) Rick and Morty", "c) BoJack Horseman"], "respuesta": "b", "video": "videos/13r.mp4" },
        { "opciones": ["a) Okupas", "b) El Puntero", "c) Tumberos"], "respuesta": "a", "video": "videos/14r.mp4" },
        { "opciones": ["a) Una invasión de zombies", "b) Una nevada mortal", "c) Un terremoto global"], "respuesta": "b", "video": "videos/15r.mp4" },
    ]
};
let contadorPreguntas = 0;
let aciertos = 0;
const videoPregunta = document.getElementById('videopregunta');
const videofalse = document.getElementById('videofalse');
const videotrue = document.getElementById('videotrue');
const miAudio = document.getElementById('miAudio');
let preguntaActual = null;
let preguntasUsadas = [];

// 🧩 Combinar todas las preguntas de todas las categorías
let todasLasPreguntas = [];
Object.values(preguntas).forEach(categoria => {
  todasLasPreguntas = todasLasPreguntas.concat(categoria);
});
miAudio.volume = 0.35;
mostrarPregunta();

function mostrarPregunta() {
  // ⚠️ Si ya respondió 6 o no quedan más preguntas → finalizar
  if (contadorPreguntas >= 6 || preguntasUsadas.length >= todasLasPreguntas.length) {
    window.location.href = `../../global/resultado.html?aciertos=${aciertos}&total=${contadorPreguntas}`;
    return;
  }

  let pregunta;
  let intentos = 0;

  // 🔁 Buscar una pregunta no repetida
  do {
    const categoriaKeys = Object.keys(preguntas);
    const categoria = categoriaKeys[Math.floor(Math.random() * categoriaKeys.length)];
    const lista = preguntas[categoria];
    pregunta = lista[Math.floor(Math.random() * lista.length)];
    intentos++;

    // Si no encuentra ninguna nueva → fin del juego
    if (intentos > 50) {
      console.warn("No hay más preguntas sin repetir.");
      window.location.href = `../../global/resultado.html?aciertos=${aciertos}&total=${contadorPreguntas}`;
      return;
    }
  } while (preguntasUsadas.includes(pregunta.video));

  // ✅ Guardar la pregunta usada
  preguntasUsadas.push(pregunta.video);
  preguntaActual = pregunta;

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

  // 🎥 Mostrar video
  videoPregunta.innerHTML = `<source src="${preguntaActual.video}" type="video/mp4">`;
  videoPregunta.style.display = "block";
  videoPregunta.load();

  videoPregunta.muted = true;
  const playPromise = videoPregunta.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => setTimeout(() => (videoPregunta.muted = false), 500))
      .catch(err => console.warn("No se pudo reproducir el video:", err));
  }
}

function verificarRespuesta(opcion, correcta) {
  const botones = document.querySelectorAll(".opcion");
  botones.forEach(btn => btn.disabled = true);

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
    videotrue.onended = manejarSiguientePaso;
  } else {
    videofalse.style.zIndex = '5';
    videofalse.style.display = 'block';
    videofalse.currentTime = 0;
    videofalse.play();
    videofalse.onended = manejarSiguientePaso;
  }

  contadorPreguntas++;
}

function manejarSiguientePaso() {
  videofalse.style.display = 'none';
  videotrue.style.display = 'none';
  mostrarPregunta();
}