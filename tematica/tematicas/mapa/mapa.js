                                                          //FALTAN PONER TODOS LOS VIDEOS
const preguntas = {
    "FACILES": [
        { "opciones": ["a) Ramos Mejía", "b) Lomas del Mirador", "c) San Justo"], "respuesta": "a", "imagen": "imagenes/1.png", "video": "videos/4mp.mp4" },
        { "opciones": ["a) Tapiales", "b) Lomas del Mirador", "c) Villa Luzuriaga"], "respuesta": "b", "imagen": "imagenes/2.png", "video": "videos/5mp.mp4"  },
        { "opciones": ["a) La Tablada", "b) Ciudad Evita", "c) Villa Madero"], "respuesta": "a", "imagen": "imagenes/3.png", "video": "videos/6mp.mp4"  },
        { "opciones": ["a) Villa Celina", "b) Tapiales", "c) Villa Madero"], "respuesta": "c", "imagen": "imagenes/4.png", "video": "videos/7mp.mp4"  },
        { "opciones": ["a) Ciudad Evita", "b) Villa Madero", "c) Villa Celina"], "respuesta": "c", "imagen": "imagenes/5.png", "video": "videos/8mp.mp4"  },
        { "opciones": ["a) Aldo Bonzi", "b) Tapiales", "c) Lomas del Mirador"], "respuesta": "b", "imagen": "imagenes/6.png", "video": "videos/9mp.mp4"  }
    ],
    "INTERMEDIAS": [
        { "opciones": ["a) Aldo Bonzi", "b) La Tablada", "c) Villa Luzuriaga"], "respuesta": "a", "imagen": "imagenes/7.png", "video": "videos/10mp.mp4"  },
        { "opciones": ["a) San Justo", "b) Lomas del Mirador", "c) Ciudad Evita"], "respuesta": "c", "imagen": "imagenes/8.png", "video": "videos/11mp.mp4"  },
        { "opciones": ["a) Ramos Mejía", "b) San Justo", "c) Isidro Casanova"], "respuesta": "b", "imagen": "imagenes/9.png", "video": "videos/12mp.mp4"  },
        { "opciones": ["a) Villa Luzuriaga", "b) Lomas del Mirador", "c) Ciudad Evita"], "respuesta": "a", "imagen": "imagenes/10.png", "video": "videos/13mp.mp4"  },
        { "opciones": ["a) Isidro Casanova", "b) Gregorio de Laferrere", "c) Rafael Castillo"], "respuesta": "a", "imagen": "imagenes/11.png", "video": "videos/14mp.mp4"  }
    ],
     "DIFICILES": [
         { "opciones": ["a) Gregorio de Laferrere", "b) Rafael Castillo", "c) González Catán"], "respuesta": "b", "imagen": "imagenes/12.png", "video": "videos/15mp.mp4"  },
         { "opciones": ["a) Gregorio de Laferrere", "b) Isidro Casanova", "c) Virrey del Pino"], "respuesta": "a", "imagen": "imagenes/13.png", "video": "videos/16mp.mp4"  },
         { "opciones": ["a) Rafael Castillo", "b) Virrey del Pino", "c) González Catán"], "respuesta": "c", "imagen": "imagenes/14.png", "video": "videos/17mp.mp4"  },
         { "opciones": ["a) Virrey del Pino", "b) Gregorio de Laferrere", "c) 20 de Junio"], "respuesta": "a", "imagen": "imagenes/15.png", "video": "videos/18mp.mp4"  },
         { "opciones": ["a) Aldo Bonzi", "b) Virrey del Pino", "c) 20 de Junio"], "respuesta": "c", "imagen": "imagenes/16.png", "video": "videos/19mp.mp4"  }
     ]
};

let contadorPreguntas = 0;
let aciertos = 0;

const videoPregunta = document.getElementById('videopregunta');
const imgPregunta = document.getElementById('imgpregunta');
const videofalse = document.getElementById('videofalse');
const videotrue = document.getElementById('videotrue');

let preguntaActual = null;

// Inicia el juego
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

  // ✅ Mostrar video y imagen al mismo tiempo
  if (preguntaActual.video) {
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


  // ✅ Mostrar imagen superpuesta
  if (preguntaActual.imagen) {
    imgPregunta.src = preguntaActual.imagen;
    imgPregunta.style.display = 'block';
  }

  // Reset de feedback
  videotrue.style.display = 'none';
  videofalse.style.display = 'none';
  videotrue.pause();
  videofalse.pause();
  videotrue.currentTime = 0;
  videofalse.currentTime = 0;
}

function verificarRespuesta(opcion, correcta) {
  const botones = document.querySelectorAll(".opcion");
  botones.forEach(btn => btn.disabled = true);

  // Ocultar imagen y detener video de la pregunta
  imgPregunta.style.display = 'none';
  videoPregunta.pause();
  videoPregunta.currentTime = 0;
  videoPregunta.style.display = 'none';

  const esCorrecta = opcion === correcta;

  // ✅ Mostrar feedback
  const videoFeedback = esCorrecta ? videotrue : videofalse;
  if (esCorrecta) aciertos++;

  videoFeedback.style.zIndex = '5';
  videoFeedback.style.display = 'block';
  videoFeedback.currentTime = 0;
  videoFeedback.play();

  videoFeedback.onended = () => manejarSiguientePaso();
  contadorPreguntas++;
}

function manejarSiguientePaso() {
  if (contadorPreguntas >= 6) {
    window.location.href = `../../global/resultado.html?aciertos=${aciertos}&total=${contadorPreguntas}`;
  } else {
    mostrarPregunta();
  }
}
