                                                                    //FALTAN ASIGNAR LOS VIDEOS CORRECTOS

const preguntas = {
    "FACILES": [
        { "opciones": ["a) James Cameron", "b) Steven Spielberg", "c) George Lucas"], "respuesta": "b", "video": "videos/1.mp4" }, 
        { "opciones": ["a) El Ángel", "b) Carancho", "c) Relatos Salvajes"], "respuesta": "a", "video": "videos/2.mp4" },
        { "opciones": ["a) Titanic", "b) Forrest Gump", "c) Gladiador"], "respuesta": "a", "video": "videos/3.mp4" }, 
        { "opciones": ["a) Sudáfrica", "b) Egipto", "c) India"], "respuesta": "a", "video": "videos/4.mp4" }, 
        { "opciones": ["a) El Señor de los Anillos", "b) Harry Potter", "c) Narnia"], "respuesta": "b", "video": "videos/5.mp4" }, 
        { "opciones": ["a) Carancho", "b) Relatos Salvajes", "c) El Clan"], "respuesta": "b", "video": "videos/6.mp4" }, 
        { "opciones": ["a) Robert Downey Jr.", "b) Chris Evans", "c) Mark Ruffalo"], "respuesta": "a", "video": "videos/7.mp4" },
        { "opciones": ["a) Avatar", "b) Titanic", "c) Avengers: Endgame"], "respuesta": "a", "video": "videos/8.mp4" }, 
        { "opciones": ["a) Johnny Depp", "b) Orlando Bloom", "c) Colin Farrell"], "respuesta": "a", "video": "videos/9.mp4" }, 
        { "opciones": ["a) Guillermo Francella", "b) Ricardo Darín", "c) Leonardo Sbaraglia"], "respuesta": "b", "video": "videos/10.mp4" }, 
    ],
    "INTERMEDIAS": [
        { "opciones": ["a) Emma Stone", "b) Jennifer Lawrence", "c) Natalie Portman"], "respuesta": "a", "video": "videos/11.mp4" }, 
        { "opciones": ["a) La La Land", "b) Moonlight", "c) Manchester by the Sea"], "respuesta": "b", "video": "videos/12.mp4" }, 
        { "opciones": ["a) The Wolf of Wall Street", "b) Catch Me If You Can", "c) The Great Gatsby"], "respuesta": "a", "video": "videos/13.mp4" }, 
        { "opciones": ["a) Ryan Reynolds", "b) Chris Evans", "c) Hugh Jackman"], "respuesta": "a", "video": "videos/14.mp4" }, 
        { "opciones": ["a) Batman comienza", "b) Batman: el caballero oscuro", "c) Inception"], "respuesta": "b", "video": "videos/15.mp4" }, 
        { "opciones": ["a) Guillermo del toro", "b) Alfonso Cuarón", "c) Alejandro Gonzáles Iñárritu"], "respuesta": "a", "video": "videos/16.mp4" }, 
        { "opciones": ["a) Hugh Jackman", "b) Chris Hemsworth", "c) Ben Affleck"], "respuesta": "a", "video": "videos/17.mp4" },
        { "opciones": ["a) El Angel", "b) El Clan", "c) Nueve Reinas"], "respuesta": "b", "video": "videos/18.mp4" }, 
        { "opciones": ["a) Sudáfrica", "b) Egipto", "c) India"], "respuesta": "c", "video": "videos/19.mp4" }, 
        { "opciones": ["a) Steven Spielberg", "b) George Lucas", "c) Peter Jackson"], "respuesta": "a", "video": "videos/20.mp4" }, 
    ],
    "DIFICILES": [
        { "opciones": ["a) Brad Pitt", "b) Keanu Reeves", "c) Matt Damon"], "respuesta": "b", "video": "videos/21.mp4" },
        { "opciones": ["a) El secreto de sus ojos", "b) Relatos salvajes", "c) La historia oficial"], "respuesta": "a", "video": "videos/22.mp4" },
        { "opciones": ["a) Emma Watson", "b) Jennifer Lawrence", "c) Kristen Stewart"], "respuesta": "b", "video": "videos/23.mp4" },
        { "opciones": ["a) James Cameron", "b) Ridley Scott", "c) Francis Ford Coppola"], "respuesta": "a", "video": "videos/24.mp4" },
        { "opciones": ["a) Anna", "b) Elsa", "c) Olaf"], "respuesta": "b", "video": "videos/25.mp4" },
        { "opciones": ["a) Pulp Fiction", "b) Kill Bill", "c) Django Unchained"], "respuesta": "b", "video": "videos/26.mp4" }, 
        { "opciones": ["a) Star Trek", "b) Star Wars", "c) Guardianes de la galaxia"], "respuesta": "b", "video": "videos/27.mp4" },
        { "opciones": ["a) Ricardo Darín", "b) Guillermo Francella", "c) Leonardo Sbaraglia"], "respuesta": "a", "video": "videos/28.mp4" }, 
        { "opciones": ["a) Intensamente", "b) Valiente", "c) Coco"], "respuesta": "a", "video": "videos/29.mp4" }, 
        { "opciones": ["a) Jared Leto", "b) Heath Ledger", "c) Joaquín Phoenix"], "respuesta": "b", "video": "videos/30.mp4" }, 
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

