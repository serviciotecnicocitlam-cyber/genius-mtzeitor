                                                                      //Listo esta completa esta tematica

const preguntas = {
 
    "FACILES": [
        { "opciones": ["a) How I Met Your Mother", "b) Seinfeld", "c) Friends"], "respuesta": "c", "video": "videos/1.mp4" },
        { "opciones": ["a) Un gallo para Esculapio", "b) Los Simuladores", "c) El Marginal"], "respuesta": "b", "video": "videos/2.mp4" },
        { "opciones": ["a) Locke & Key", "b) The Umbrella Academy", "c) Stranger Things"], "respuesta": "c", "video": "videos/3.mp4" },
        { "opciones": ["a) Monzón", "b) El Reino", "c) Argentina, 1985 (serie documental)"], "respuesta": "c", "video": "videos/4.mp4" },
        { "opciones": ["a) Narcos", "b) Ozark", "c) Argentina, 1985 (serie documental)"], "respuesta": "c", "video": "videos/5.mp4" },
    ],
    "INTERMEDIAS": [
        { "opciones": ["a) Rick and Morty", "b) BoJack Horseman", "c) Family Guy"], "respuesta": "b", "video": "videos/6.mp4" },
        { "opciones": ["a) Rebelde Way", "b) Casi Ángeles", "c) Aliados"], "respuesta": "b", "video": "videos/7.mp4" },
        { "opciones": ["a) Alice in Borderland", "b) Squid Game", "c) Sweet Home"], "respuesta": "b", "video": "videos/8.mp4" },
        { "opciones": ["a) Apache", "b) Monzón", "c) Puerta 7"], "respuesta": "b", "video": "videos/9.mp4" },
        { "opciones": ["a) Doom Patrol", "b) The Umbrella Academy", "c) Titans"], "respuesta": "b", "video": "videos/10.mp4" },
    ],
    "DIFICILES": [
        { "opciones": ["a) La caída", "b) El Reino", "c) Todos mienten"], "respuesta": "b", "video": "videos/11.mp4" },
        { "opciones": ["a) Altered Carbon", "b) Westworld", "c) Black Mirror"], "respuesta": "b", "video": "videos/12.mp4" },
        { "opciones": ["a) Futurama", "b) Rick and Morty", "c) BoJack Horseman"], "respuesta": "b", "video": "videos/13.mp4" },
        { "opciones": ["a) Okupas", "b) El Puntero", "c) Tumberos"], "respuesta": "a", "video": "videos/14.mp4" },
        { "opciones": ["a) Una invasión de zombies", "b) Una nevada mortal", "c) Un terremoto global"], "respuesta": "b", "video": "videos/15.mp4" },
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
