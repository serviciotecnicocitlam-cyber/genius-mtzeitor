const preguntas = {
  "FACILES": [
    { "pregunta": "¿Cuál de estas provincias argentinas es la más austral?", "opciones": ["a) Mendoza", "b) Tierra del Fuego", "c) Santa Cruz"], "respuesta": "b", "video": "videos/1.mp4" },
    { "pregunta": "¿Qué provincia argentina está ubicada en el noroeste del país, famosa por sus valles y sierras?", "opciones": ["a) Tucumán", "b) Jujuy", "c) La Pampa"], "respuesta": "b", "video": "videos/2.mp4" },
    { "pregunta": "¿Qué provincia argentina es famosa por su vino, particularmente en la región de Cuyo?", "opciones": ["a) Mendoza", "b) Salta", "c) Entre Ríos"], "respuesta": "a", "video": "videos/3.mp4" },
    { "pregunta": "¿Cuántas provincias tiene la República Argentina?", "opciones": ["a) 20", "b) 23", "c) 24"], "respuesta": "c", "video": "videos/4.mp4" },
    { "pregunta": "¿Cuál es la capital de la provincia de Córdoba?", "opciones": ["a) San Luis", "b) Córdoba", "c) La Rioja"], "respuesta": "b", "video": "videos/5.mp4" }
  ],
  "INTERMEDIAS": [
    { "pregunta": "¿Qué río forma parte de la frontera entre la provincia de Buenos Aires y Uruguay?", "opciones": ["a) Río Paraná", "b) Río de la Plata", "c) Río Uruguay"], "respuesta": "b", "video": "videos/6.mp4" },
    { "pregunta": "¿En qué provincia argentina se encuentra la ciudad de Mar del Plata?", "opciones": ["a) Buenos Aires", "b) Córdoba", "c) Mendoza"], "respuesta": "a", "video": "videos/7.mp4" },
    { "pregunta": "¿Cuál es la capital de la provincia de Buenos Aires?", "opciones": ["a) Buenos Aires", "b) La Plata", "c) Mar del Plata"], "respuesta": "b", "video": "videos/8.mp4" },
    { "pregunta": "¿Qué cuerpo de agua bordea la costa este de Buenos Aires?", "opciones": ["a) Río Paraná", "b) Río Uruguay", "c) Océano Atlántico"], "respuesta": "c", "video": "videos/9.mp4" },
    { "pregunta": "¿Cuál de estas ciudades NO pertenece a la provincia de Buenos Aires?", "opciones": ["a) Bahía Blanca", "b) Córdoba", "c) Necochea"], "respuesta": "b", "video": "videos/10.mp4" }
  ],
  "DIFICILES": [
    { "pregunta": "¿Qué es el 'Gran Chaco', en términos geográficos?", "opciones": ["a) Una vasta llanura que abarca partes de Argentina, Bolivia y Paraguay", "b) Un desierto en el noroeste de Argentina", "c) Una zona costera en el noreste de Argentina"], "respuesta": "a", "video": "videos/11.mp4" },
    { "pregunta": "¿Cuántas universidades hay en La Matanza?", "opciones": ["a) 2", "b) 3", "c) 4"], "respuesta": "b", "video": "videos/12.mp4" },
    { "pregunta": "¿Cuál es el nombre del mayor lago de agua dulce en Argentina?", "opciones": ["a) Lago Buenos Aires", "b) Lago Nahuel Huapi", "c) Lago Argentino"], "respuesta": "c", "video": "videos/13.mp4" },
    { "pregunta": "¿Cuál de las siguientes localidades NO pertenece al partido de La Matanza?", "opciones": ["a) González Catán", "b) Ramos Mejía", "c) Avellaneda"], "respuesta": "c", "video": "videos/14.mp4" },
    { "pregunta": "¿Cuál es la localidad cabecera (administrativa) del partido de La Matanza?", "opciones": ["a) San Justo", "b) Isidro Casanova", "c) Laferrere"], "respuesta": "a", "video": "videos/15.mp4" }
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

  document.getElementById("pregunta").innerText = pregunta.pregunta;

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
      siguiente.style.display = 'block';
    };
  } else {
    videofalse.style.zIndex = '5';
    videofalse.style.display = 'block';
    videofalse.play();
    // Cuando termine muestra el boton de siguiente
    videofalse.onended = () => {
      siguiente.style.display = 'block';
    }
  }
}
// cuando se presione el boton se ejecuta
siguiente.addEventListener('click', () => {
  siguiente.style.display = 'none';
  videofalse.style.display = 'none';
  videotrue.style.display = 'none';
});