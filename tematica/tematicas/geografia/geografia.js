const preguntas = {
  "FACILES": [
    { "opciones": ["a) Mendoza", "b) Tierra del Fuego", "c) Santa Cruz"], "respuesta": "b", "video": "videos/.mp4" },
    { "opciones": ["a) Tucumán", "b) Jujuy", "c) La Pampa"], "respuesta": "b", "video": "videos/.mp4" },
    { "opciones": ["a) Mendoza", "b) Salta", "c) Entre Ríos"], "respuesta": "a", "video": "videos/3.mp4" },
    { "opciones": ["a) 20", "b) 23", "c) 24"], "respuesta": "c", "video": "videos/4.mp4" },
    { "opciones": ["a) San Luis", "b) Córdoba", "c) La Rioja"], "respuesta": "b", "video": "videos/5.mp4" }
  ],
  "INTERMEDIAS": [
    { "opciones": ["a) Río Paraná", "b) Río de la Plata", "c) Río Uruguay"], "respuesta": "b", "video": "videos/19gf.mp4" },
    { "opciones": ["a) Buenos Aires", "b) Córdoba", "c) Mendoza"], "respuesta": "a", "video": "videos/21gf.mp4" },
    { "opciones": ["a) Buenos Aires", "b) La Plata", "c) Mar del Plata"], "respuesta": "b", "video": "videos/22gf.mp4" },
    { "opciones": ["a) Río Paraná", "b) Río Uruguay", "c) Océano Atlántico"], "respuesta": "c", "video": "videos/26gf.mp4" },
    { "opciones": ["a) Bahía Blanca", "b) Córdoba", "c) Necochea"], "respuesta": "b", "video": "videos/30gf.mp4" }
  ],
  "DIFICILES": [
    { "opciones": ["a) Una vasta llanura que abarca partes de Argentina, Bolivia y Paraguay", "b) Un desierto en el noroeste de Argentina", "c) Una zona costera en el noreste de Argentina"], "respuesta": "a", "video": "videos/11.mp4" },
    { "opciones": ["a) 2", "b) 3", "c) 4"], "respuesta": "b", "video": "videos/2gf.mp4" },
    { "opciones": ["a) Lago Buenos Aires", "b) Lago Nahuel Huapi", "c) Lago Argentino"], "respuesta": "c", "video": "videos/3gf.mp4" },
    { "opciones": ["a) González Catán", "b) Ramos Mejía", "c) Avellaneda"], "respuesta": "c", "video": "videos/.mp4" },
    { "opciones": ["a) San Justo", "b) Isidro Casanova", "c) Laferrere"], "respuesta": "a", "video": "videos/6gf.mp4" }
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


