const preguntas = {
    "FACILES": [
        { "pregunta": "¿Qué película argentina cuenta la historia de un niño y su madre durante la dictadura militar?", "opciones": ["a) Nueve reinas", "b) Kamchatka", "c) La historia oficial"], "respuesta": "c" },
        { "pregunta": "¿Cuál de estas películas argentinas es comedia romántica con Ricardo Darín y Soledad Villamil?", "opciones": ["a) Carancho", "b) Nueve reinas", "c) El secreto de sus ojos"], "respuesta": "c" },
        { "pregunta": "¿En qué película internacional Leonardo DiCaprio pelea por sobrevivir en el frío tras ser atacado por un oso?", "opciones": ["a) Atrápame si puedes", "b) El Lobo de Wall Street", "c) El Renacido (The Revenant)"], "respuesta": "c" },
        { "pregunta": "¿Cuál de estas películas animadas argentinas gira en torno al fútbol y a unos jugadores de metegol que cobran vida?", "opciones": ["a) Futbolín", "b) Metegol", "c) Golazo"], "respuesta": "b" },
        { "pregunta": "¿Qué película muestra la vida de Tony Stark y su transformación en un superhéroe con armadura?", "opciones": ["a) Capitán América", "b) Thor", "c) Iron Man"], "respuesta": "c" }
    ],
    "INTERMEDIAS": [
        { "pregunta": "¿Qué película argentina se compone de seis historias sobre la violencia, la venganza y el caos social?", "opciones": ["a) El clan", "b) Relatos Salvajes", "c) El secreto de sus ojos"], "respuesta": "b" },
        { "pregunta": "¿Cuál de estas películas internacionales trata sobre los sueños dentro de los sueños?", "opciones": ["a) Tenet", "b) Matrix", "c) Inception (El Origen)"], "respuesta": "c" },
        { "pregunta": "¿En qué película argentina Ricardo Darín interpreta a un experto en fraudes con su socio más joven?", "opciones": ["a) Carancho", "b) Nueve Reinas", "c) El hijo de la novia"], "respuesta": "b" },
        { "pregunta": "¿Qué película internacional muestra la amistad entre un niño alemán y un niño judío en un campo de concentración?", "opciones": ["a) La vida es bella", "b) El niño con el pijama de rayas", "c) Jojo Rabbit"], "respuesta": "b" },
        { "pregunta": "¿Cuál de estas películas argentinas retrata la historia de un criminal perseguido por la dictadura?", "opciones": ["a) Tiempo de Valientes", "b) El Clan", "c) Zama"], "respuesta": "b" }
    ],
    "DIFICILES": [
        { "pregunta": "¿Qué película ganó el Oscar a Mejor Película en 2019?", "opciones": ["a) Blade Runner 2049", "b) COCO", "c) La forma del agua"], "respuesta": "c" },
        { "pregunta": "¿Qué película internacional fue filmada en un solo plano secuencia simulado y ganó el Oscar a Mejor Película en 2015?", "opciones": ["a) 1917", "b) La La Land", "c) Birdman"], "respuesta": "c" },
        { "pregunta": "¿En qué película argentina un hombre se obsesiona con saber la verdad detrás de un crimen sin resolver durante años?", "opciones": ["a) El aura", "b) El secreto de sus ojos", "c) El hombre de al lado"], "respuesta": "b" },
        { "pregunta": "¿Cuántos premios Oscar tiene Argentina a mejor película extranjera?", "opciones": ["a) 1", "b) 2", "c) 3"], "respuesta": "b" },
        { "pregunta": "¿Cuál de estas películas argentinas fue seleccionada para competir por el Oscar a Mejor Película Extranjera en 2023?", "opciones": ["a) El suplente", "b) Argentina, 1985", "c) Crónica de una fuga"], "respuesta": "b" }
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

    document.getElementById("pregunta").innerText = pregunta.pregunta;

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
}
function verificarRespuesta(opcion, correcta) {
    if (opcion === correcta) {
        videotrue.style.display = 'block';
        videotrue.play();
        // Cuando termine muestra el boton de siguiente
        videotrue.onended = () => {
            siguiente.style.display = 'block';
        };
    } else {
        videofalse.style.display = 'block';
        videofalse.play();
        // Cuando termine muestra el boton de siguiente
        videofalse.onended = () => {
            siguiente.style.display = 'block';
        }
    }
}
// cuando se presione el boton se ejecuta
siguiente.addEventListener('click', () => {
    siguiente.style.display = 'none';
    videofalse.style.display = 'none';
    videotrue.style.display = 'none';
});
