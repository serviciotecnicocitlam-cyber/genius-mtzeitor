
const preguntas = {
    "FACILES": [
        { "opciones": ["a) James Cameron", "b) Steven Spielberg", "c) George Lucas"], "respuesta": "b", "video": "videos/1v.mp4" }, //revisado
        { "opciones": ["a) El Ángel", "b) Carancho", "c) Relatos Salvajes"], "respuesta": "a", "video": "videos/2v.mp4" }, //revisado
        { "opciones": ["a) Titanic", "b) Forrest Gump", "c) Gladiador"], "respuesta": "a", "video": "videos/3v.mp4" }, //revisado
        { "opciones": ["a) Sudáfrica", "b) Egipto", "c) India"], "respuesta": "a", "video": "videos/4v.mp4" }, //revisado
        { "opciones": ["a) El Señor de los Anillos", "b) Harry Potter", "c) Narnia"], "respuesta": "b", "video": "videos/5v.mp4" }, //revisado
        { "opciones": ["a) Carancho", "b) Relatos Salvajes", "c) El Clan"], "respuesta": "b", "video": "videos/6v.mp4" }, //revisado
        { "opciones": ["a) Robert Downey Jr.", "b) Chris Evans", "c) Mark Ruffalo"], "respuesta": "a", "video": "videos/7v.mp4" }, //revisado
        { "opciones": ["a) Avatar", "b) Titanic", "c) Avengers: Endgame"], "respuesta": "a", "video": "videos/8v.mp4" }, //revisado
        { "opciones": ["a) Johnny Depp", "b) Orlando Bloom", "c) Colin Farrell"], "respuesta": "a", "video": "videos/9v.mp4" }, //revisado
        { "opciones": ["a) Guillermo Francella", "b) Ricardo Darín", "c) Leonardo Sbaraglia"], "respuesta": "b", "video": "videos/10v.mp4" }, //revisado
    ],
    "INTERMEDIAS": [
        { "opciones": ["a) Emma Stone", "b) Jennifer Lawrence", "c) Natalie Portman"], "respuesta": "a", "video": "videos/11v.mp4" }, //revisado
        { "opciones": ["a) La La Land", "b) Moonlight", "c) Manchester by the Sea"], "respuesta": "b", "video": "videos/12v.mp4" }, //revisado
        { "opciones": ["a) The Wolf of Wall Street", "b) Catch Me If You Can", "c) The Great Gatsby"], "respuesta": "a", "video": "videos/13v.mp4" }, //revisado
        { "opciones": ["a) Ryan Reynolds", "b) Chris Evans", "c) Hugh Jackman"], "respuesta": "a", "video": "videos/14v.mp4" }, //revisado
        { "opciones": ["a) Batman comienza", "b) Batman: el caballero oscuro", "c) Inception"], "respuesta": "b", "video": "videos/15v.mp4" }, //revisado
        { "opciones": ["a) Guillermo del toro", "b) Alfonso Cuarón", "c) Alejandro Gonzáles Iñárritu"], "respuesta": "a", "video": "videos/16v.mp4" }, //revisado
        { "opciones": ["a) Hugh Jackman", "b) Chris Hemsworth", "c) Ben Affleck"], "respuesta": "a", "video": "videos/17v.mp4" },//revisado
        { "opciones": ["a) El Angel", "b) El Clan", "c) Nueve Reinas"], "respuesta": "b", "video": "videos/18v.mp4" }, //revisado
        { "opciones": ["a) Steven Spielberg", "b) George Lucas", "c) Peter Jackson"], "respuesta": "c", "video": "videos/19v.mp4" }, //revisado
        { "opciones": ["a) Ratatouille", "b) Buscando a Nemo", "c) Intensamente"], "respuesta": "a", "video": "videos/20v.mp4" }, //revisado
    ],
    "DIFICILES": [
        { "opciones": ["a) Brad Pitt", "b) Keanu Reeves", "c) Matt Damon"], "respuesta": "b", "video": "videos/21v.mp4" }, //revisado
        { "opciones": ["a) El secreto de sus ojos", "b) Relatos salvajes", "c) La historia oficial"], "respuesta": "a", "video": "videos/22v.mp4" }, //revisado
        { "opciones": ["a) Emma Watson", "b) Jennifer Lawrence", "c) Kristen Stewart"], "respuesta": "b", "video": "videos/23v.mp4" }, //revisado
        { "opciones": ["a) James Cameron", "b) Ridley Scott", "c) Francis Ford Coppola"], "respuesta": "a", "video": "videos/24v.mp4" }, //revisado
        { "opciones": ["a) Anna", "b) Elsa", "c) Olaf"], "respuesta": "b", "video": "videos/25v.mp4" }, //revisado
        { "opciones": ["a) Pulp Fiction", "b) Kill Bill", "c) Django Unchained"], "respuesta": "b", "video": "videos/26v.mp4" }, //revisado
        { "opciones": ["a) Star Trek", "b) Star Wars", "c) Guardianes de la galaxia"], "respuesta": "b", "video": "videos/27v.mp4" }, //revisado
        { "opciones": ["a) Ricardo Darín", "b) Guillermo Francella", "c) Leonardo Sbaraglia"], "respuesta": "a", "video": "videos/28v.mp4" }, //revisado
        { "opciones": ["a) Intensamente", "b) Valiente", "c) Coco"], "respuesta": "a", "video": "videos/29v.mp4" }, //revisado
        { "opciones": ["a) Jared Leto", "b) Heath Ledger", "c) Joaquín Phoenix"], "respuesta": "b", "video": "videos/30v.mp4" }, //revisado
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

