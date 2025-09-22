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
    { "opciones": ["a) González Catán", "b) Ramos Mejía", "c) Avellaneda"], "respuesta": "c", "video": "videos/5gf.mp4" },
    { "opciones": ["a) San Justo", "b) Isidro Casanova", "c) Laferrere"], "respuesta": "a", "video": "videos/6gf.mp4" }
  ]
};


const videofalse = document.getElementById('videofalse');
const videotrue = document.getElementById('videotrue');
const siguiente = document.getElementById('nuevo');
mostrarPregunta()
function mostrarPregunta() {
  const categorias = Object.keys(preguntas);
  const categoria = categorias[Math.floor(Math.random() * categorias.length)];
  const lista = preguntas[categoria];

  const pregunta = lista[Math.floor(Math.random() * lista.length)];

  const opcionesDiv = document.getElementById("opciones");
  opcionesDiv.innerHTML = "";

  const posiciones = ["opcion-izquierda", "opcion-derecha", "opcion-abajo"];
  pregunta.opciones.forEach((opcion, index) => {
    const btn = document.createElement("button");
    btn.classList.add("opcion", posiciones[index]);
    btn.innerText = opcion;
    btn.onclick = () => verificarRespuesta(opcion[0], pregunta.respuesta);
    opcionesDiv.appendChild(btn);
  });
  const videoPregunta = document.getElementById("videopregunta");
  videoPregunta.innerHTML = `<source src="${pregunta.video}" type="video/mp4">`;
  videoPregunta.load();
  videoPregunta.play();
}
function verificarRespuesta(opcion, correcta) {
  if (opcion === correcta) {
    videotrue.style.zIndex = '5';
    videotrue.style.display = 'block';
    videotrue.play();
    // Cuando termine muestra el boton de siguiente
    videotrue.onended = () => {
      videotrue.style.display = 'none';
      mostrarPregunta()
    };
  } else {
    videofalse.style.zIndex = '5';
    videofalse.style.display = 'block';
    videofalse.play();
    // Cuando termine muestra el boton de siguiente
    videofalse.onended = () => {
      videofalse.style.display = 'none';
      mostrarPregunta()
    }
  }
}
