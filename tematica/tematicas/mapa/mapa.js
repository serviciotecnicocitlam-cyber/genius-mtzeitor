                                                          //FALTAN PONER TODOS LOS VIDEOS Y ASIGNAR FOTOS QUE ESTAN EN LA CARPETA
const preguntas = {
    "FACILES": [
        { "opciones": ["a) Ramos Mejía", "b) Lomas del Mirador", "c) San Justo"], "respuesta": "a", "imagen": "imagnes/ma.png" },
        { "opciones": ["a) Tapiales", "b) Lomas del Mirador", "c) Villa Luzuriaga"], "respuesta": "b", "imagen": "imagenes/mago.png" },
        { "opciones": ["a) La Tablada", "b) Ciudad Evita", "c) Villa Madero"], "respuesta": "a", "imagen": "imagenes/mago.png" },
        { "opciones": ["a) Villa Celina", "b) Tapiales", "c) Villa Madero"], "respuesta": "c", "imagen": "imagenes/mago.png" },
        { "opciones": ["a) Ciudad Evita", "b) Villa Madero", "c) Villa Celina"], "respuesta": "c", "imagen": "imagenes/mago.png" },
        { "opciones": ["a) Aldo Bonzi", "b) Tapiales", "c) Lomas del Mirador"], "respuesta": "b", "imagen": "imagenes/mago.png" }
    ],
    "INTERMEDIAS": [
        { "opciones": ["a) Aldo Bonzi", "b) La Tablada", "c) Villa Luzuriaga"], "respuesta": "a", "imagen": "imagenes/inter1.jpg" },
        { "opciones": ["a) San Justo", "b) Lomas del Mirador", "c) Ciudad Evita"], "respuesta": "c", "imagen": "imagenes/inter2.jpg" },
        { "opciones": ["a) Ramos Mejía", "b) San Justo", "c) Isidro Casanova"], "respuesta": "b", "imagen": "imagenes/inter3.jpg" },
        { "opciones": ["a) Villa Luzuriaga", "b) Lomas del Mirador", "c) Ciudad Evita"], "respuesta": "a", "imagen": "imagenes/inter4.jpg" },
        { "opciones": ["a) Isidro Casanova", "b) Gregorio de Laferrere", "c) Rafael Castillo"], "respuesta": "a", "imagen": "imagenes/inter5.jpg" }
    ],
    "DIFICILES": [
        { "opciones": ["a) Gregorio de Laferrere", "b) Rafael Castillo", "c) González Catán"], "respuesta": "b", "imagen": "imagenes/dificil1.jpg" },
        { "opciones": ["a) Gregorio de Laferrere", "b) Isidro Casanova", "c) Virrey del Pino"], "respuesta": "a", "imagen": "imagenes/dificil2.jpg" },
        { "opciones": ["a) Rafael Castillo", "b) Virrey del Pino", "c) González Catán"], "respuesta": "c", "imagen": "imagenes/dificil3.jpg" },
        { "opciones": ["a) Virrey del Pino", "b) Gregorio de Laferrere", "c) 20 de Junio"], "respuesta": "a", "imagen": "imagenes/dificil4.jpg" },
        { "opciones": ["a) Aldo Bonzi", "b) Virrey del Pino", "c) 20 de Junio"], "respuesta": "c", "imagen": "imagenes/dificil5.jpg" }
    ]
};


let contadorPreguntas = 0;
let aciertos = 0;
const videoPregunta = document.getElementById('videopregunta')
const imgPregunta = document.getElementById('imgpregunta');
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

  // Mostrar imagen de la pregunta
  imgPregunta.src = preguntaActual.imagen;
  imgPregunta.style.display = 'block';

  // Ocultar feedback videos (por si estaban visibles de antes)
  videotrue.style.display = 'none';
  videofalse.style.display = 'none';
  videotrue.pause();
  videofalse.pause();
  videotrue.currentTime = 0;
  videofalse.currentTime = 0;
}

function verificarRespuesta(opcion, correcta) {
  // Desactivar botones mientras se reproduce el video de respuesta
  const botones = document.querySelectorAll(".opcion");
  botones.forEach(btn => btn.disabled = true);

  // Ocultar imagen de la pregunta
  imgPregunta.style.display = 'none';

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
  if (contadorPreguntas >= 6) {
    window.location.href = `../../global/resultado.html?aciertos=${aciertos}&total=${contadorPreguntas}`;
  } else {
    mostrarPregunta();
  }
}
