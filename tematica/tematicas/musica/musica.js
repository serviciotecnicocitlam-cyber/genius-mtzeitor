const preguntas = {
    "FACILES": [
        { "opciones": ["a) Michael Jackson", "b) Prince", "c) Justin Timberlake"], "respuesta": "a", "video": "videos/1n.mp4" },
        { "opciones": ["a) Bruno Mars", "b) Ed Sheeran", "c) Shawn Mendes"], "respuesta": "b", "video": "videos/2n.mp4" },
        { "opciones": ["a) AC/DC", "b) Metallica", "c) The Killers"], "respuesta": "a", "video": "videos/3n.mp4" },
        { "opciones": ["a) Adele", "b) Beyoncé", "c) Rihanna"], "respuesta": "a", "video": "videos/4n.mp4" },
        { "opciones": ["a) Alejandro Fernández", "b) Luis Miguel", "c) Chayanne"], "respuesta": "b", "video": "videos/5n.mp4" },
        { "opciones": ["a) Coldplay", "b) The Beatles", "c) Oasis"], "respuesta": "a", "video": "videos/6n.mp4" },
        { "opciones": ["a) Beyoncé", "b) Rihanna", "c) Alicia Keys"], "respuesta": "b", "video": "videos/7n.mp4" },
        { "opciones": ["a) ABBA", "b) Spice Girls", "c) Bee Gees"], "respuesta": "a", "video": "videos/8n.mp4" },
        { "opciones": ["a) Justin Bieber", "b) The Weeknd", "c) Jason Derulo"], "respuesta": "a", "video": "videos/9n.mp4" },
        { "opciones": ["a) Whitney Houston", "b) Cyndi Lauper", "c) Madonna"], "respuesta": "c", "video": "videos/10n.mp4" }
    ],
    "INTERMEDIAS": [
        { "opciones": ["a) Charly García", "b) Gustavo Cerati", "c) Fito Páez"], "respuesta": "b", "video": "videos/20n.mp4" },
        { "opciones": ["a) Tiler Mack", "b) Harry Styles", "c) Robbie williams"], "respuesta": "c", "video": "videos/12n.mp4" },
        { "opciones": ["a) Carlos Alberto García", "b) Carlos Alberto Gómez", "c) Carlos Alberto García Moreno"], "respuesta": "a", "video": "videos/22n.mp4" },
        { "opciones": ["a) Virus", "b) Soda Stereo", "c) Los Enanitos Verdes"], "respuesta": "b", "video": "videos/23n.mp4" },
       // { "opciones": ["a) León Gieco", "b) Luis Alberto Spinetta", "c) Fito Páez"], "respuesta": "c", "video": "videos/.mp4" },//falta video
      //  { "opciones": ["a) Pappo", "b) Skay Beilinson", "c) Ricardo Iorio"], "respuesta": "a", "video": "videos/inter6.mp4" },//falta video
      //  { "opciones": ["a) Soda Stereo", "b) Patricio Rey y sus Redonditos de Ricota", "c) Los Ratones Paranoicos"], "respuesta": "a", "video": "videos/.mp4" },
      //  { "opciones": ["a) Federico Páez", "b) Rodolfo Páez", "c) Ricardo Páez"], "respuesta": "b", "video": "videos/inter8.mp4" },
      //  { "opciones": ["a) Andrés Calamaro", "b) León Gieco", "c) Charly García"], "respuesta": "a", "video": "videos/inter9.mp4" },
      //  { "opciones": ["a) Patricio Rey y sus Redonditos de Ricota", "b) Rata Blanca", "c) Bersuit Vergarabat"], "respuesta": "a", "video": "videos/inter10.mp4" }
    ],
    "DIFICILES": [
      //  { "opciones": ["a) Ramos Mejía", "b) González Catán", "c) Isidro Casanova"], "respuesta": "b", "video": "videos/dificil1.mp4" },
      //  { "opciones": ["a) Bizarrap", "b) Wos", "c) Ecko"], "respuesta": "c", "video": "videos/dificil2.mp4" },
      //  { "opciones": ["a) Ecko", "b) L-Gante", "c) Bizarrap"], "respuesta": "b", "video": "videos/dificil3.mp4" },
        { "opciones": ["a) David LC", "b) Walter 'Pocho' Calderón", "c) El Dipy"], "respuesta": "b", "video": "videos/43n.mp4" },
        { "opciones": ["a) Ramos Mejía", "b) González Catán", "c) Isidro Casanova"], "respuesta": "b", "video": "videos/40n.mp4" },
      //  { "opciones": ["a) L-Gante", "b) KHEA", "c) Ecko"], "respuesta": "a", "video": "videos/.mp4" },
      //  { "opciones": ["a) Trueno", "b) Ysy A", "c) Duki"], "respuesta": "b", "video": "videos/dificil7.mp4" },
      //  { "opciones": ["a) C.R.O", "b) Lit Killah", "c) KHEA"], "respuesta": "a", "video": "videos/dificil8.mp4" },
        { "opciones": ["a) Lit Killah", "b) Bizarrap", "c) Ecko"], "respuesta": "a", "video": "videos/44n.mp4" },
        { "opciones": ["a) L-Gante", "b) KHEA", "c) Ecko"], "respuesta": "a", "video": "videos/45n.mp4" }
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