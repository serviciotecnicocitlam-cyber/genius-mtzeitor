                                                                        //FALTAN VIDEOS Y ASIGNACIONES CORRECTAS

const preguntas = {
    "FACILES": [
        { "opciones": ["a) Fortnite", "b) Call of Duty: Modern Warfare", "c) Apex Legends"], "respuesta": "a", "video": "videos/1c.mp4" },
        { "opciones": ["a) Donkey Kong", "b) Super Mario Bros.", "c) Sonic the Hedgehog"], "respuesta": "b", "video": "videos/2c.mp4" },
        { "opciones": ["a) The Legend of Zelda: Breath of the Wild", "b) Portal", "c) Tetris"], "respuesta": "a", "video": "videos/3c.mp4" },
        { "opciones": ["a) Minecraft", "b) Terraria", "c) Roblox"], "respuesta": "a", "video": "videos/4c.mp4" },
        { "opciones": ["a) God of War III", "b) God of War (2005)", "c) God of War: Chains of Olympus"], "respuesta": "b", "video": "videos/5c.mp4" },
//        { "opciones": ["a) Ingress", "b) Pokémon GO", "c) Jurassic World Alive"], "respuesta": "b", "video": "videos/inter8.mp4" },
//        { "opciones": ["a) Five Nights at Freddy's", "b) Hello Neighbor", "c) Little Misfortune"], "respuesta": "a", "video": "videos/inter9.mp4" },
//        { "opciones": ["a) Temple Run", "b) Subway Surfers", "c) Ambos"], "respuesta": "c", "video": "videos/inter10.mp4" },
//        { "opciones": ["a) Hades", "b) The Binding of Isaac", "c) Spelunky"], "respuesta": "b", "video": "videos/inter11.mp4" },
//        { "opciones": ["a) Katana Zero", "b) Moonlighter", "c) Stardew Valley"], "respuesta": "c", "video": "videos/inter12.mp4" }
    ],
    "INTERMEDIAS": [
        { "opciones": ["a) Bloodborne", "b) Dark Souls", "c) Overwatch"], "respuesta": "c", "video": "videos/6c.mp4" },
        { "opciones": ["a) Ghost of Tsushima", "b) Sekiro: Shadows Die Twice", "c) Nioh 2"], "respuesta": "a", "video": "videos/7c.mp4" },
        { "opciones": ["a) Celeste", "b) Hollow Knight", "c) Ori and the Blind Forest"], "respuesta": "b", "video": "videos/8c.mp4" },
        { "opciones": ["a) Clash Royale", "b) Candy Crush Saga", "c) Genshin Impact"], "respuesta": "c", "video": "videos/9c.mp4" },
        { "opciones": ["a) Clash Royale", "b) Mobile Legends", "c) Vainglory"], "respuesta": "a", "video": "videos/10c.mp4" },
//        { "opciones": ["a) Fatal Frame", "b) Silent Hill", "c) The Evil Within"], "respuesta": "b", "video": "videos/inter6.mp4" },
//        { "opciones": ["a) Among Us", "b) Project Winter", "c) Goose Goose Duck"], "respuesta": "a", "video": "videos/inter7.mp4" },
//        { "opciones": ["a) Sons of the Forest", "b) Green Hell", "c) The Forest"], "respuesta": "c", "video": "videos/inter8.mp4" },
//        { "opciones": ["a) Hollow Knight", "b) Undertale", "c) Ori and the Blind Forest"], "respuesta": "b", "video": "videos/inter9.mp4" },
//        { "opciones": ["a) Love Live! School Idol Festival", "b) Mystic Messenger", "c) Honkai: Star Rail"], "respuesta": "b", "video": "videos/inter10.mp4" }
    ],
    "DIFICILES": [
        { "opciones": ["a) Fallout", "b) Planescape: Torment", "c) Baldur’s Gate"], "respuesta": "a", "video": "videos/11c.mp4" },
        { "opciones": ["a) Final Fantasy XII", "b) Xenoblade Chronicles", "c) Tales of Symphonia"], "respuesta": "a", "video": "videos/12c.mp4" },
        { "opciones": ["a) Elden Ring", "b) Horizon Forbidden West", "c) Dragon Age: Inquisition"], "respuesta": "a", "video": "videos/13c.mp4" },
        { "opciones": ["a) Valorant", "b) Rainbow Six Siege", "c) Overwatch"], "respuesta": "a", "video": "videos/14c.mp4" },
        { "opciones": ["a) Doki Doki Literature Club", "b) The Stanley Parable", "c) Oxenfree"], "respuesta": "a", "video": "videos/15c.mp4" },
//        { "opciones": ["a) Call of Cthulhu: Dark Corners of the Earth", "b) Silent Hill 2", "c) Eternal Darkness: Sanity’s Requiem"], "respuesta": "c", "video": "videos/dificil6.mp4" },
//        { "opciones": ["a) Chaos;Child", "b) Danganronpa: Trigger Happy Havoc", "c) Steins;Gate"], "respuesta": "b", "video": "videos/dificil7.mp4" },
//        { "opciones": ["a) Genshin Impact", "b) Epic Seven", "c) Honkai: Star Rail"], "respuesta": "c", "video": "videos/dificil8.mp4" },
//        { "opciones": ["a) Twin Mirror", "b) Life is Strange: True Colors", "c) Tell Me Why"], "respuesta": "a", "video": "videos/dificil9.mp4" },
//        { "opciones": ["a) Stranglehold", "b) TimeShift", "c) Max Payne"], "respuesta": "c", "video": "videos/dificil10.mp4" }
    ]
};

let contadorPreguntas = 0;
let aciertos = 0;
const videoPregunta = document.getElementById('videopregunta');
const videofalse = document.getElementById('videofalse');
const videotrue = document.getElementById('videotrue');
const miAudio = document.getElementById('miAudio');
let preguntaActual = null;
let preguntasUsadas = [];

// 🧩 Combinar todas las preguntas de todas las categorías
let todasLasPreguntas = [];
Object.values(preguntas).forEach(categoria => {
  todasLasPreguntas = todasLasPreguntas.concat(categoria);
});
miAudio.volume = 0.4;
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