const preguntas = {
    "FACILES": [
        { "opciones": ["a) Nueve reinas", "b) Kamchatka", "c) La historia oficial"], "respuesta": "c", "video": "videos/facil1.mp4" },
        { "opciones": ["a) Carancho", "b) Nueve reinas", "c) El secreto de sus ojos"], "respuesta": "c", "video": "videos/facil2.mp4" },
        { "opciones": ["a) Atrápame si puedes", "b) El Lobo de Wall Street", "c) El Renacido (The Revenant)"], "respuesta": "c", "video": "videos/facil3.mp4" },
        { "opciones": ["a) Futbolín", "b) Metegol", "c) Golazo"], "respuesta": "b", "video": "videos/facil4.mp4" },
        { "opciones": ["a) Capitán América", "b) Thor", "c) Iron Man"], "respuesta": "c", "video": "videos/facil5.mp4" }
    ],
    "INTERMEDIAS": [
        { "opciones": ["a) El clan", "b) Relatos Salvajes", "c) El secreto de sus ojos"], "respuesta": "b", "video": "videos/inter1.mp4" },
        { "opciones": ["a) Tenet", "b) Matrix", "c) Inception (El Origen)"], "respuesta": "c", "video": "videos/inter2.mp4" },
        { "opciones": ["a) Carancho", "b) Nueve Reinas", "c) El hijo de la novia"], "respuesta": "b", "video": "videos/inter3.mp4" },
        { "opciones": ["a) La vida es bella", "b) El niño con el pijama de rayas", "c) Jojo Rabbit"], "respuesta": "b", "video": "videos/inter4.mp4" },
        { "opciones": ["a) Tiempo de Valientes", "b) El Clan", "c) Zama"], "respuesta": "b", "video": "videos/inter5.mp4" }
    ],
    "DIFICILES": [
        { "opciones": ["a) Blade Runner 2049", "b) COCO", "c) La forma del agua"], "respuesta": "c", "video": "videos/dificil1.mp4" },
        { "opciones": ["a) 1917", "b) La La Land", "c) Birdman"], "respuesta": "c", "video": "videos/dificil2.mp4" },
        { "opciones": ["a) El aura", "b) El secreto de sus ojos", "c) El hombre de al lado"], "respuesta": "b", "video": "videos/dificil3.mp4" },
        { "opciones": ["a) 1", "b) 2", "c) 3"], "respuesta": "b", "video": "videos/dificil4.mp4" },
        { "opciones": ["a) El suplente", "b) Argentina, 1985", "c) Crónica de una fuga"], "respuesta": "b", "video": "videos/dificil5.mp4" }
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