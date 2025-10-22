                                                      //todas las preguntas son de la matanza, asi que no hay facil y intermedio, y son todas dificiles

const preguntas = {
  "FACILES": [
    { "opciones": ["a) 1778", "b) 1850", "c) 1856"], "respuesta": "a", "video": "videos/18gf.mp4" },//chequeado
    { "opciones": ["a) De oeste a este", "b) De norte a sur", "c) De este a oeste"], "respuesta": "a", "video": "videos/20gf.mp4" },//chequeado
    { "opciones": ["a) Buenos Aires", "b) Córdoba", "c) Mendoza"], "respuesta": "a", "video": "videos/21gf.mp4" },//chequeado
    { "opciones": ["a) 30", "b) entre 30 y 50", "c) 70"], "respuesta": "c", "video": "videos/4gf.mp4" },//chequeado
    { "opciones": ["a) solo nivel terciario", "b) nivel universitario de grado y posgrado", "c) Solo educación secundaria"], "respuesta": "b", "video": "videos/17gf.mp4" } //chequeado
  ], 
  "INTERMEDIAS": [
    { "opciones": ["a) Río Paraná", "b) Río de la Plata", "c) Río Uruguay"], "respuesta": "b", "video": "videos/19gf.mp4" }, //chequeado
    { "opciones": ["a) Buenos Aires", "b) Córdoba", "c) Mendoza"], "respuesta": "a", "video": "videos/21gf.mp4" }, //chequeado
    { "opciones": ["a) Buenos Aires", "b) La Plata", "c) Mar del Plata"], "respuesta": "b", "video": "videos/22gf.mp4" }, //chequeado
    { "opciones": ["a) Río Paraná", "b) Río Uruguay", "c) Océano Atlántico"], "respuesta": "c", "video": "videos/26gf.mp4" },//chequeado
    { "opciones": ["a) CABA", "b) bahia blanca", "c) lujan"], "respuesta": "a", "video": "videos/23gf.mp4" } //chequeado
  ],
  "DIFICILES": [
    { "opciones": ["a) 5", "b) 14", "c) 25"], "respuesta": "b", "video": "videos/9gf.mp4" },//chequeado
    { "opciones": ["a) 1", "b) 2", "c) 3"], "respuesta": "c", "video": "videos/2gf.mp4" },//chequeado
    { "opciones": ["a) Lago Buenos Aires", "b) Lago Nahuel Huapi", "c) Lago Argentino"], "respuesta": "c", "video": "videos/3gf.mp4" },//chequeado
    { "opciones": ["a) erosion del suelo", "b) contaminacion del rio matanza riachuelo", "c) escasez de agua"], "respuesta": "b", "video": "videos/8gf.mp4" },//chequeado
    { "opciones": ["a) San Justo", "b) gonzales catan", "c) avellaneda"], "respuesta": "a", "video": "videos/5gf.mp4" } //chequeado
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
  videoPregunta.style.display = "block";
  videoPregunta.load(); 

  // ✅ Reproducir automáticamente sin error (muteado la primera vez)
  videoPregunta.muted = true;
  const playPromise = videoPregunta.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        // Luego de unos segundos, si querés, podés activar el sonido:
        setTimeout(() => (videoPregunta.muted = false), 1000);
      })
      .catch((err) => {
        console.warn("No se pudo reproducir el video:", err);
      });
  }
  
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


