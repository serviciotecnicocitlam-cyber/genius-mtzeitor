const preguntas = {
    "FACILES": [                                              //SACANDO LAS 5 PREGUNTAS, FUTBOL YA ESTA TERMINADO
        { "opciones": ["a) Maracaná", "b) Morumbí", "c) Mineirao"], "respuesta": "a", "video": "videos/1.mp4" },//revisado
        { "opciones": ["a) 5", "b) 24", "c) 13"], "respuesta": "b", "video": "videos/2.mp4" },//revisado
        { "opciones": ["a) Jorge Valdano", "b) Daniel Passarella", "c) Diego Maradona"], "respuesta": "c", "video": "videos/3.mp4" },//revisado
        { "opciones": ["a) Suecia", "b) Inglaterra", "c) Nigeria"], "respuesta": "a", "video": "videos/4.mp4" },//revisado
        { "opciones": ["a) Gonzalo Higuaín", "b) Lionel Messi", "c) Ezequiel Lavezzi"], "respuesta": "b", "video": "videos/5.mp4" },//revisado
        //{ "opciones": ["a) Julián Álvarez", "b) Lionel Messi", "c) Ángel Di María"], "respuesta": "c", "video": "videos/.mp4" },                    //falta video
        //{ "opciones": ["a) ", "b) ", "c) "], "respuesta": "b", "video": "videos/.mp4" },                                                           //falta video y preguntas
        //{ "opciones": ["a) Franco Armani", "b) Emiliano 'Dibu' Martínez", "c) Sergio Romero"], "respuesta": "b", "video": "videos/.mp4" },        //falta video
        //{ "opciones": ["a) Lautaro Martínez", "b) Julián Álvarez", "c) Rodrigo De Paul"], "respuesta": "b", "video": "videos/.mp4" },             //falta video
        //{ "opciones": ["a) César Luis Menotti", "b) Carlos Salvador Bilardo", "c) Marcelo Bielsa"], "respuesta": "a", "video": "videos/.mp4" }   //falta video
    ],
    "INTERMEDIAS": [
        { "opciones": ["a) Boca Juniors", "b) Fluminense", "c) Palmeiras"], "respuesta": "b", "video": "videos/6.mp4" },//revisado
        { "opciones": ["a) Uruguay", "b) Chile", "c) Paraguay"], "respuesta": "b", "video": "videos/7.mp4" },//revisado
        { "opciones": ["a) Manchester City", "b) Real Betis", "c) Liverpool"], "respuesta": "b", "video": "videos/8.mp4" },//revisado
        { "opciones": ["a) Inglaterra", "b) Italia", "c) España"], "respuesta": "b", "video": "videos/9.mp4" },//revisado
        { "opciones": ["a) Gabigol (Flamengo)", "b) Julián Álvarez (River)", "c) Hulk (Atlético Mineiro)"], "respuesta": "a", "video": "videos/10.mp4" },//revisado
        { "opciones": ["a) Alemania", "b) España", "c) italia"], "respuesta": "b", "video": "videos/11.mp4" },//revisado
        { "opciones": ["a) PSG", "b) Barcelona", "c) Newell’s Old Boys"], "respuesta": "b", "video": "videos/12.mp4" },//revisado
        { "opciones": ["a) Maracaná", "b) Estadio de la Luz", "c) Soccer City"], "respuesta": "a", "video": "videos/16.mp4" }, //revisado
        { "opciones": ["a) Palmeiras", "b) Flamengo", "c) Boca juniors"], "respuesta": "b", "video": "videos/14.mp4" },//revisado
        { "opciones": ["a) Javier Zanetti", "b) Walter Samuel", "c) Diego Milito"], "respuesta": "c", "video": "videos/15.mp4" }//revisado
    ],
    "DIFICILES": [
        { "opciones": ["a) El Gallo", "b) La Fragata", "c) El Verde"], "respuesta": "b", "video": "videos/19.mp4" },//revisado
        { "opciones": ["a) Tapiales", "b) González Catán", "c) Rafael Castillo"], "respuesta": "a", "video": "videos/20.mp4" },//revisado
        { "opciones": ["a) Laferrere", "b) Liniers", "c) Lugano"], "respuesta": "a", "video": "videos/21.mp4" },//revisado
        { "opciones": ["a) Laferrere", "b) italiano", "c) lugano"], "respuesta": "a", "video": "videos/23.mp4" },//revisado
        { "opciones": ["a) 1922", "b) 1912", "c) 1931"], "respuesta": "a", "video": "videos/24.mp4" },//revisado
        { "opciones": ["a) Leandro Paredes", "b) Enzo Fernández", "c) Juan Foyth"], "respuesta": "a", "video": "videos/25.mp4" },//revisado
        { "opciones": ["a) Laferrere", "b) Almirante Brown", "c) Liniers"], "respuesta": "b", "video": "videos/27.mp4" },//revisado
        { "opciones": ["a) 3", "b) 2", "c) 1"], "respuesta": "c", "video": "videos/28.mp4" },//revisado
        { "opciones": ["a) Liniers", "b) All Boys", "c) Chacarita"], "respuesta": "a", "video": "videos/29.mp4" },//revisado
        { "opciones": ["a) B Nacional", "b) B Metropolitana", "c) Torneo Federal A"], "respuesta": "b", "video": "videos/30.mp4" }//revisado
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
