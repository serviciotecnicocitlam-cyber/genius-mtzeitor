const preguntas = {
    "FACILES": [
        { "opciones": ["a) 2018", "b) 2022", "c) 2014"], "respuesta": "b", "video": "videos/1.mp4" },
        { "opciones": ["a) 7", "b) 8", "c) 6"], "respuesta": "b", "video": "videos/2.mp4" },
        { "opciones": ["a) Alemania", "b) Francia", "c) Brasil"], "respuesta": "a", "video": "videos/3.mp4" },
        { "opciones": ["a) Newell’s Old Boys", "b) FC Barcelona", "c) PSG"], "respuesta": "b", "video": "videos/4.mp4" },
        { "opciones": ["a) Copa América", "b) Copa Confederaciones", "c) Mundial Sub-20"], "respuesta": "a", "video": "videos/5.mp4" },
        { "opciones": ["a) Julián Álvarez", "b) Lionel Messi", "c) Ángel Di María"], "respuesta": "c", "video": "videos/6.mp4" },
        { "opciones": ["a) 2", "b) 3", "c) 4"], "respuesta": "b", "video": "videos/7.mp4" },
        { "opciones": ["a) Franco Armani", "b) Emiliano 'Dibu' Martínez", "c) Sergio Romero"], "respuesta": "b", "video": "videos/8.mp4" },
        { "opciones": ["a) Lautaro Martínez", "b) Julián Álvarez", "c) Rodrigo De Paul"], "respuesta": "b", "video": "videos/9.mp4" },
        { "opciones": ["a) César Luis Menotti", "b) Carlos Salvador Bilardo", "c) Marcelo Bielsa"], "respuesta": "a", "video": "videos/10.mp4" }
    ],
    "INTERMEDIAS": [
        { "opciones": ["a) Boca Juniors", "b) Fluminense", "c) Palmeiras"], "respuesta": "b", "video": "videos/20.mp4" },
        { "opciones": ["a) Uruguay", "b) Chile", "c) Paraguay"], "respuesta": "b", "video": "videos/12.mp4" },
        { "opciones": ["a) Manchester City", "b) Real Betis", "c) Liverpool"], "respuesta": "b", "video": "videos/22.mp4" },
        { "opciones": ["a) Inglaterra", "b) Italia", "c) España"], "respuesta": "b", "video": "videos/23.mp4" },
        { "opciones": ["a) Erling Haaland", "b) Kylian Mbappé", "c) Robert Lewandowski"], "respuesta": "a", "video": "videos/.mp4" },
        { "opciones": ["a) Real Madrid", "b) AC Milan", "c) Bayern Múnich"], "respuesta": "a", "video": "videos/inter6.mp4" },
        { "opciones": ["a) Boca Juniors", "b) River Plate", "c) Flamengo"], "respuesta": "b", "video": "videos/39.mp4" },
        { "opciones": ["a) Gabigol (Flamengo)", "b) Julián Álvarez (River)", "c) Hulk (Atlético Mineiro)"], "respuesta": "a", "video": "videos/inter8.mp4" },
        { "opciones": ["a) Alemania", "b) España", "c) Brasil"], "respuesta": "b", "video": "videos/inter9.mp4" },
        { "opciones": ["a) Hugo Lloris", "b) Kylian Mbappé", "c) Paul Pogba"], "respuesta": "a", "video": "videos/inter10.mp4" }
    ],
    "DIFICILES": [
        { "opciones": ["a) Deportivo Laferrere", "b) Almirante Brown", "c) Yupanqui"], "respuesta": "a", "video": "videos/dificil1.mp4" },
        { "opciones": ["a) El Gallo", "b) La Fragata", "c) El Verde"], "respuesta": "b", "video": "videos/dificil2.mp4" },
        { "opciones": ["a) Tapiales", "b) González Catán", "c) Rafael Castillo"], "respuesta": "a", "video": "videos/dificil3.mp4" },
        { "opciones": ["a) Laferrere", "b) Liniers", "c) Lugano"], "respuesta": "a", "video": "videos/43.mp4" },
        { "opciones": ["a) Leandro Paredes", "b) Enzo Fernández", "c) Juan Foyth"], "respuesta": "a", "video": "videos/40.mp4" },
        { "opciones": ["a) 1990", "b) 1995", "c) 1997"], "respuesta": "a", "video": "videos/42.mp4" },
        { "opciones": ["a) Laferrere", "b) Almirante Brown", "c) Liniers"], "respuesta": "b", "video": "videos/dificil7.mp4" },
        { "opciones": ["a) 3", "b) 2", "c) 1"], "respuesta": "c", "video": "videos/dificil8.mp4" },
        { "opciones": ["a) Liniers", "b) All Boys", "c) Chacarita"], "respuesta": "a", "video": "videos/44.mp4" },
        { "opciones": ["a) B Nacional", "b) B Metropolitana", "c) Torneo Federal A"], "respuesta": "b", "video": "videos/dificil10.mp4" }
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
