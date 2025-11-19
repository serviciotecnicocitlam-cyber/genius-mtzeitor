const preguntas = {
  "FACILES": [                                              //SACANDO LAS 5 PREGUNTAS, FUTBOL YA ESTA TERMINADO
    { "opciones": ["a) Maracaná", "b) Morumbí", "c) Mineirao"], "respuesta": "a", "video": "videos/1.mp4" },//revisado
    { "opciones": ["a) 5", "b) 24", "c) 13"], "respuesta": "b", "video": "videos/2u.mp4" },//revisado
    { "opciones": ["a) Jorge Valdano", "b) Daniel Passarella", "c) Diego Maradona"], "respuesta": "c", "video": "videos/3u.mp4" },//revisado
    { "opciones": ["a) Suecia", "b) Inglaterra", "c) Nigeria"], "respuesta": "a", "video": "videos/4u.mp4" },//revisado
    { "opciones": ["a) Gonzalo Higuaín", "b) Lionel Messi", "c) Ezequiel Lavezzi"], "respuesta": "b", "video": "videos/5.mp4" },//revisado
    //{ "opciones": ["a) Julián Álvarez", "b) Lionel Messi", "c) Ángel Di María"], "respuesta": "c", "video": "videos/.mp4" },                    //falta video
    //{ "opciones": ["a) ", "b) ", "c) "], "respuesta": "b", "video": "videos/.mp4" },                                                           //falta video y preguntas
    //{ "opciones": ["a) Franco Armani", "b) Emiliano 'Dibu' Martínez", "c) Sergio Romero"], "respuesta": "b", "video": "videos/.mp4" },        //falta video
    //{ "opciones": ["a) Lautaro Martínez", "b) Julián Álvarez", "c) Rodrigo De Paul"], "respuesta": "b", "video": "videos/.mp4" },             //falta video
    //{ "opciones": ["a) César Luis Menotti", "b) Carlos Salvador Bilardo", "c) Marcelo Bielsa"], "respuesta": "a", "video": "videos/.mp4" }   //falta video
  ],
  "INTERMEDIAS": [
    { "opciones": ["a) Boca Juniors", "b) Fluminense", "c) Palmeiras"], "respuesta": "b", "video": "videos/6.mp4" },//revisado
    { "opciones": ["a) Uruguay", "b) Chile", "c) Paraguay"], "respuesta": "b", "video": "videos/7u.mp4" },//revisado
    { "opciones": ["a) Manchester City", "b) Real Betis", "c) Liverpool"], "respuesta": "b", "video": "videos/8u.mp4" },//revisado
    { "opciones": ["a) Inglaterra", "b) Italia", "c) España"], "respuesta": "b", "video": "videos/9u.mp4" },//revisado
    { "opciones": ["a) Gabigol (Flamengo)", "b) Julián Álvarez (River)", "c) Hulk (Atlético Mineiro)"], "respuesta": "a", "video": "videos/10u.mp4" },//revisado
    { "opciones": ["a) Alemania", "b) España", "c) italia"], "respuesta": "b", "video": "videos/11u.mp4" },//revisado
    { "opciones": ["a) PSG", "b) Barcelona", "c) Newell’s Old Boys"], "respuesta": "b", "video": "videos/12u.mp4" },//revisado
    { "opciones": ["a) Maracaná", "b) Estadio de la Luz", "c) Soccer City"], "respuesta": "a", "video": "videos/16u.mp4" }, //revisado
    { "opciones": ["a) Palmeiras", "b) Flamengo", "c) Boca juniors"], "respuesta": "b", "video": "videos/14u.mp4" },//revisado
    { "opciones": ["a) Javier Zanetti", "b) Walter Samuel", "c) Diego Milito"], "respuesta": "c", "video": "videos/15u.mp4" }//revisado
  ],
  "DIFICILES": [
    { "opciones": ["a) El Gallo", "b) La Fragata", "c) El Verde"], "respuesta": "b", "video": "videos/19u.mp4" },//revisado
    { "opciones": ["a) Tapiales", "b) González Catán", "c) Rafael Castillo"], "respuesta": "a", "video": "videos/20u.mp4" },//revisado
    { "opciones": ["a) Laferrere", "b) Liniers", "c) Lugano"], "respuesta": "a", "video": "videos/21u.mp4" },//revisado
    { "opciones": ["a) Laferrere", "b) italiano", "c) lugano"], "respuesta": "a", "video": "videos/23u.mp4" },//revisado
    { "opciones": ["a) 1922", "b) 1912", "c) 1931"], "respuesta": "a", "video": "videos/24u.mp4" },//revisado
    { "opciones": ["a) Leandro Paredes", "b) Enzo Fernández", "c) Juan Foyth"], "respuesta": "a", "video": "videos/25u.mp4" },//revisado
    { "opciones": ["a) Laferrere", "b) Almirante Brown", "c) Liniers"], "respuesta": "b", "video": "videos/27u.mp4" },//revisado
    { "opciones": ["a) 3", "b) 2", "c) 1"], "respuesta": "c", "video": "videos/28u.mp4" },//revisado
    { "opciones": ["a) Liniers", "b) All Boys", "c) Chacarita"], "respuesta": "a", "video": "videos/29u.mp4" },//revisado
    { "opciones": ["a) B Nacional", "b) B Metropolitana", "c) Torneo Federal A"], "respuesta": "b", "video": "videos/30u.mp4" }//revisado
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

mostrarPregunta();
miAudio.volume = 0.4;

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