const preguntas = {
  "FACILES": [
    { "opciones": ["a) Roma", "b) Madrid", "c) París"], "respuesta": "c", "video": "videos/1it.mp4" },
    { "opciones": ["a) Emisiones de gases de efecto invernadero", "b) Erupciones volcánicas", "c) Rotación de la Tierra"], "respuesta": "a", "video": "videos/2it.mp4" },
    { "opciones": ["a) Rusia", "b) China", "c) Estados Unidos"], "respuesta": "a", "video": "videos/3it.mp4" },
    { "opciones": ["a) Energía solar", "b) Energía eólica", "c) Energía fósil"], "respuesta": "c", "video": "videos/4it.mp4" },
    { "opciones": ["a) Pablo Picasso", "b) Leonardo da Vinci", "c) Miguel Ángel"], "respuesta": "b", "video": "videos/5it.mp4" },
    { "opciones": ["a) La imprenta", "b) El telégrafo", "c) El fonógrafo"], "respuesta": "a", "video": "videos/6it.mp4" },
    { "opciones": ["a) The Beatles", "b) The Rolling Stones", "c) Queen"], "respuesta": "a", "video": "videos/7it.mp4" },
    { "opciones": ["a) Batman", "b) Spider-Man", "c) Superman"], "respuesta": "b", "video": "videos/8it.mp4" },
    { "opciones": ["a) Griega", "b) Romana", "c) Egipcia"], "respuesta": "c", "video": "videos/9it.mp4" },
    { "opciones": ["a) Breaking Bad", "b) Game of Thrones", "c) Stranger Things"], "respuesta": "b", "video": "videos/10it.mp4" }
  ],
  "INTERMEDIAS": [
    { "opciones": ["a) Mendoza", "b) San Juan", "c) La Rioja"], "respuesta": "a", "video": "videos/11it.mp4" },
    { "opciones": ["a) San Rafael", "b) Mendoza", "c) Malargüe"], "respuesta": "b", "video": "videos/12it.mp4" },
    { "opciones": ["a) Ushuaia", "b) Río Gallegos", "c) Puerto Madryn"], "respuesta": "a", "video": "videos/13it.mp4" },
    { "opciones": ["a) Misiones", "b) Corrientes", "c) Chaco"], "respuesta": "a", "video": "videos/it.mp4" },
    { "opciones": ["a) Cerro Fitz Roy", "b) Cerro Aconcagua", "c) Cerro Champaquí"], "respuesta": "b", "video": "videos/inter5.mp4" },
    { "opciones": ["a) Ruta Nacional Nº 9", "b) Ruta Nacional Nº 40", "c) Ruta Nacional Nº 3"], "respuesta": "b", "video": "videos/inter6.mp4" },
    { "opciones": ["a) Manuel Belgrano", "b) José de San Martín", "c) Juan Manuel de Rosas"], "respuesta": "b", "video": "videos/20it.mp4" },
    { "opciones": ["a) La Revolución de Mayo", "b) La independencia de Argentina", "c) La creación de la Constitución"], "respuesta": "a", "video": "videos/14it.mp4" },
    { "opciones": ["a) Julio Cortázar", "b) Jorge Luis Borges", "c) Adolfo Bioy Casares"], "respuesta": "a", "video": "videos/15it.mp4" },
    { "opciones": ["a) Tucumán", "b) Salta", "c) Santiago del Estero"], "respuesta": "a", "video": "videos/16it.mp4" }
  ],
  "DIFICILES": [
    { "opciones": ["a) UNLu", "b) UNLaM", "c) UBA"], "respuesta": "b", "video": "videos/dificil1.mp4" },
    { "opciones": ["a) Virrey del Pino", "b) Tapiales", "c) Ramos Mejía"], "respuesta": "a", "video": "videos/dificil2.mp4" },
    { "opciones": ["a) Tren Belgrano Sur", "b) Tren Mitre", "c) Tren Roca"], "respuesta": "a", "video": "videos/dificil3.mp4" },
    { "opciones": ["a) Tapiales", "b) Isidro Casanova", "c) González Catán"], "respuesta": "a", "video": "videos/dificil4.mp4" },
    { "opciones": ["a) Av. Crovara", "b) Av. San Martín", "c) Av. General Paz"], "respuesta": "a", "video": "videos/dificil5.mp4" },
    { "opciones": ["a) Eva Duarte de Perón", "b) Juana Azurduy", "c) Alicia Moreau de Justo"], "respuesta": "a", "video": "videos/dificil6.mp4" },
    { "opciones": ["a) Río Reconquista", "b) Río de la Plata", "c) Riachuelo"], "respuesta": "c", "video": "videos/dificil7.mp4" },
    { "opciones": ["a) Ramos Mejía", "b) González Catán", "c) Laferrere"], "respuesta": "a", "video": "videos/dificil8.mp4" },
    { "opciones": ["a) Ruta Nacional Nº 3", "b) Ruta Nacional Nº 2", "c) Ruta Nacional Nº 8"], "respuesta": "a", "video": "videos/dificil9.mp4" },
    { "opciones": ["a) San Justo", "b) González Catán", "c) Virrey del Pino"], "respuesta": "a", "video": "videos/dificil10.mp4" }
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