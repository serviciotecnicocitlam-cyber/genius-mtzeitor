const preguntas = {
  "FACILES": [
    { "opciones": ["a) Roma", "b) Madrid", "c) París"], "respuesta": "c", "video": "videos/1itn.mp4" },//revisado 
    { "opciones": ["a) Emisiones de gases de efecto invernadero", "b) Erupciones volcánicas", "c) Rotación de la Tierra"], "respuesta": "a", "video": "videos/2itn.mp4" },//revisado
    { "opciones": ["a) Rusia", "b) China", "c) Estados Unidos"], "respuesta": "a", "video": "videos/3it.mp4" },//revisado
    { "opciones": ["a) Energía solar", "b) Energía eólica", "c) Energía fósil"], "respuesta": "c", "video": "videos/4itn.mp4" },//revisado
    { "opciones": ["a) Pablo Picasso", "b) Leonardo da Vinci", "c) Miguel Ángel"], "respuesta": "b", "video": "videos/5itn.mp4" },//revisado
    { "opciones": ["a) La imprenta", "b) El telégrafo", "c) El fonógrafo"], "respuesta": "a", "video": "videos/6itn.mp4" },//revisado 
    { "opciones": ["a) The Beatles", "b) The Rolling Stones", "c) Queen"], "respuesta": "a", "video": "videos/7itn.mp4" },//revisado
    { "opciones": ["a) Batman", "b) Spider-Man", "c) Superman"], "respuesta": "b", "video": "videos/8itn.mp4" },//revisado
    { "opciones": ["a) Griega", "b) Romana", "c) Egipcia"], "respuesta": "c", "video": "videos/9itn.mp4" },//revidado 
    { "opciones": ["a) Breaking Bad", "b) Game of Thrones", "c) Stranger Things"], "respuesta": "b", "video": "videos/10itn.mp4" }//revisado 
  ], 
  "INTERMEDIAS": [
    { "opciones": ["a) Mendoza", "b) San Juan", "c) La Rioja"], "respuesta": "a", "video": "videos/11itn.mp4" },//revisado
    { "opciones": ["a) San Rafael", "b) Mendoza", "c) Malargüe"], "respuesta": "b", "video": "videos/12itn.mp4" },//revisado
    { "opciones": ["a) Ushuaia", "b) Río Gallegos", "c) Puerto Madryn"], "respuesta": "a", "video": "videos/13itn.mp4" },//revidasado
    { "opciones": ["a) La Revolución de Mayo", "b) La independencia de Argentina", "c) La creación de la Constitución"], "respuesta": "a", "video": "videos/14itn.mp4" },//revisado
    { "opciones": ["a) Julio Cortázar", "b) Jorge Luis Borges", "c) Adolfo Bioy Casares"], "respuesta": "a", "video": "videos/15itn.mp4" },//revisado
    { "opciones": ["a) José de San Martín", "b) Manuel Belgrano", "c) Martin Miguel de Güemes "], "respuesta": "b", "video": "videos/16itn.mp4" },//revisado
    { "opciones": ["a) Manuel Belgrano", "b) José de San Martín", "c) Juan Manuel de Rosas"], "respuesta": "b", "video": "videos/17itn.mp4" },//revisado
    { "opciones": ["a) Tucumán", "b) Salta", "c) Santiago del Estero"], "respuesta": "a", "video": "videos/tucumann.mp4" },//revisado
    { "opciones": ["a) Ruta Nacional Nº 9", "b) Ruta Nacional Nº 40", "c) Ruta Nacional Nº 3"], "respuesta": "b", "video": "videos/ruta9n.mp4" },//revisado
    { "opciones": ["a) Misiones", "b) Corrientes", "c) Chaco"], "respuesta": "a", "video": "videos/misionesn.mp4" }, //revisado
    { "opciones": ["a) Cerro Fitz Roy", "b) Cerro Aconcagua", "c) Cerro Champaquí"], "respuesta": "b", "video": "videos/cerron.mp4" },//revisado
  ],
  "DIFICILES": [
    //{ "opciones": ["a) UNLu", "b) UNLaM", "c) UBA"], "respuesta": "b", "video": "videos/dificil1.mp4" }, //falta video
    { "opciones": ["a) Virrey del Pino", "b) Tapiales", "c) Ramos Mejía"], "respuesta": "a", "video": "videos/mejian.mp4" },//revisado
    { "opciones": ["a) Tren Belgrano Sur", "b) Tren Mitre", "c) Tren Roca"], "respuesta": "a", "video": "videos/trenn.mp4" },//revisado
    { "opciones": ["a) Tapiales", "b) Isidro Casanova", "c) González Catán"], "respuesta": "a", "video": "videos/tapialesn.mp4" },//revisado
    { "opciones": ["a) Av. Crovara", "b) Av. San Martín", "c) Av. General Paz"], "respuesta": "a", "video": "videos/avn.mp4" },//revisado
    { "opciones": ["a) Eva Duarte de Perón", "b) Juana Azurduy", "c) Alicia Moreau de Justo"], "respuesta": "a", "video": "videos/evan.mp4" },//revisado
    { "opciones": ["a) Río Reconquista", "b) Río de la Plata", "c) Riachuelo"], "respuesta": "c", "video": "videos/rion.mp4" },//revisado
    { "opciones": ["a) Ramos Mejía", "b) González Catán", "c) Laferrere"], "respuesta": "a", "video": "videos/ramosmen.mp4" },//revisado
    { "opciones": ["a) Ruta Nacional Nº 3", "b) Ruta Nacional Nº 2", "c) Ruta Nacional Nº 8"], "respuesta": "a", "video": "videos/rutan.mp4" },//revisado
    { "opciones": ["a) San Justo", "b) González Catán", "c) Virrey del Pino"], "respuesta": "a", "video": "videos/sanjuston.mp4" }//revisado
  ]
};

let contadorPreguntas = 0;
let aciertos = 0;
const videoPregunta = document.getElementById('videopregunta');
const videofalse = document.getElementById('videofalse');
const videotrue = document.getElementById('videotrue');

let preguntaActual = null;
let preguntasUsadas = [];

// 🧩 Combinar todas las preguntas de todas las categorías
let todasLasPreguntas = [];
Object.values(preguntas).forEach(categoria => {
  todasLasPreguntas = todasLasPreguntas.concat(categoria);
});

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