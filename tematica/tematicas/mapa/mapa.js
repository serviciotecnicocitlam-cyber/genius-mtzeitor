const preguntas = {
    "FACILES": [
        { "pregunta": "¿Qué localidad se muestra en la imagen?", "opciones": ["a) Ramos Mejía", "b) Lomas del Mirador", "c) San Justo"], "respuesta": "a", "video": "videos/1mp.jpg" },
        { "pregunta": "¿Qué localidad se muestra en la imagen?", "opciones": ["a) Tapiales", "b) Lomas del Mirador", "c) Villa Luzuriaga"], "respuesta": "b", "imagen": "imagenes/mago.jpeg" },
        { "pregunta": "¿Qué localidad se muestra en la imagen?", "opciones": ["a) La Tablada", "b) Ciudad Evita", "c) Villa Madero"], "respuesta": "a", "imagen": "imagenes/mago.jpeg" },
        { "pregunta": "¿Qué localidad se muestra en la imagen?", "opciones": ["a) Villa Celina", "b) Tapiales", "c) Villa Madero"], "respuesta": "c", "imagen": "imagenes/mago.jpeg" },
        { "pregunta": "¿Qué localidad se muestra en la imagen?", "opciones": ["a) Ciudad Evita", "b) Villa Madero", "c) Villa Celina"], "respuesta": "c", "imagen": "imagenes/mago.jpeg" },
        { "pregunta": "¿Qué localidad se muestra en la imagen?", "opciones": ["a) Aldo Bonzi", "b) Tapiales", "c) Lomas del Mirador"], "respuesta": "b", "imagen": "imagenes/mago.jpeg" }
    ],
    "INTERMEDIAS": [
        { "pregunta": "¿Qué localidad se muestra en la imagen?", "opciones": ["a) Aldo Bonzi", "b) La Tablada", "c) Villa Luzuriaga"], "respuesta": "a", "imagen": "imagenes/inter1.jpg" },
        { "pregunta": "¿Qué localidad se muestra en la imagen?", "opciones": ["a) San Justo", "b) Lomas del Mirador", "c) Ciudad Evita"], "respuesta": "c", "imagen": "imagenes/inter2.jpg" },
        { "pregunta": "¿Qué localidad se muestra en la imagen?", "opciones": ["a) Ramos Mejía", "b) San Justo", "c) Isidro Casanova"], "respuesta": "b", "imagen": "imagenes/inter3.jpg" },
        { "pregunta": "¿Qué localidad se muestra en la imagen?", "opciones": ["a) Villa Luzuriaga", "b) Lomas del Mirador", "c) Ciudad Evita"], "respuesta": "a", "imagen": "imagenes/inter4.jpg" },
        { "pregunta": "¿Qué localidad se muestra en la imagen?", "opciones": ["a) Isidro Casanova", "b) Gregorio de Laferrere", "c) Rafael Castillo"], "respuesta": "a", "imagen": "imagenes/inter5.jpg" }
    ],
    "DIFICILES": [
        { "pregunta": "¿Qué localidad se muestra en la imagen?", "opciones": ["a) Gregorio de Laferrere", "b) Rafael Castillo", "c) González Catán"], "respuesta": "b", "imagen": "imagenes/dificil1.jpg" },
        { "pregunta": "¿Qué localidad se muestra en la imagen?", "opciones": ["a) Gregorio de Laferrere", "b) Isidro Casanova", "c) Virrey del Pino"], "respuesta": "a", "imagen": "imagenes/dificil2.jpg" },
        { "pregunta": "¿Qué localidad se muestra en la imagen?", "opciones": ["a) Rafael Castillo", "b) Virrey del Pino", "c) González Catán"], "respuesta": "c", "imagen": "imagenes/dificil3.jpg" },
        { "pregunta": "¿Qué localidad se muestra en la imagen?", "opciones": ["a) Virrey del Pino", "b) Gregorio de Laferrere", "c) 20 de Junio"], "respuesta": "a", "imagen": "imagenes/dificil4.jpg" },
        { "pregunta": "¿Qué localidad se muestra en la imagen?", "opciones": ["a) Aldo Bonzi", "b) Virrey del Pino", "c) 20 de Junio"], "respuesta": "c", "imagen": "imagenes/dificil5.jpg" }
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
    const imgPregunta = document.getElementById("imgpregunta");
    imgPregunta.src = pregunta.imagen;
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