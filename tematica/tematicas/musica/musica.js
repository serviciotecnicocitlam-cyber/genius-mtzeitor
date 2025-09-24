const preguntas = {
    "FACILES": [
        { "opciones": ["a) Michael Jackson", "b) Prince", "c) Justin Timberlake"], "respuesta": "a", "video": "videos/1.mp4" },
        { "opciones": ["a) Bruno Mars", "b) Ed Sheeran", "c) Shawn Mendes"], "respuesta": "b", "video": "videos/2.mp4" },
        { "opciones": ["a) AC/DC", "b) Metallica", "c) The Killers"], "respuesta": "a", "video": "videos/3.mp4" },
        { "opciones": ["a) Adele", "b) Beyoncé", "c) Rihanna"], "respuesta": "a", "video": "videos/4.mp4" },
        { "opciones": ["a) Alejandro Fernández", "b) Luis Miguel", "c) Chayanne"], "respuesta": "b", "video": "videos/5.mp4" },
        { "opciones": ["a) Coldplay", "b) The Beatles", "c) Oasis"], "respuesta": "a", "video": "videos/6.mp4" },
        { "opciones": ["a) Beyoncé", "b) Rihanna", "c) Alicia Keys"], "respuesta": "b", "video": "videos/7.mp4" },
        { "opciones": ["a) ABBA", "b) Spice Girls", "c) Bee Gees"], "respuesta": "a", "video": "videos/8.mp4" },
        { "opciones": ["a) Justin Bieber", "b) The Weeknd", "c) Jason Derulo"], "respuesta": "a", "video": "videos/9.mp4" },
        { "opciones": ["a) Whitney Houston", "b) Cyndi Lauper", "c) Madonna"], "respuesta": "c", "video": "videos/10.mp4" }
    ],
    "INTERMEDIAS": [
        { "opciones": ["a) Charly García", "b) Gustavo Cerati", "c) Fito Páez"], "respuesta": "b", "video": "videos/20.mp4" },
        { "opciones": ["a) Los Fabulosos Cadillacs", "b) Patricio Rey y sus Redondito de Ricota", "c) Rata Blanca"], "respuesta": "b", "video": "videos/12.mp4" },
        { "opciones": ["a) Carlos Alberto García", "b) Carlos Alberto Gómez", "c) Carlos Alberto García Moreno"], "respuesta": "a", "video": "videos/22.mp4" },
        { "opciones": ["a) Virus", "b) Soda Stereo", "c) Los Enanitos Verdes"], "respuesta": "b", "video": "videos/23.mp4" },
        { "opciones": ["a) León Gieco", "b) Luis Alberto Spinetta", "c) Fito Páez"], "respuesta": "c", "video": "videos/.mp4" },
        { "opciones": ["a) Pappo", "b) Skay Beilinson", "c) Ricardo Iorio"], "respuesta": "a", "video": "videos/inter6.mp4" },
        { "opciones": ["a) Soda Stereo", "b) Patricio Rey y sus Redonditos de Ricota", "c) Los Ratones Paranoicos"], "respuesta": "a", "video": "videos/39.mp4" },
        { "opciones": ["a) Federico Páez", "b) Rodolfo Páez", "c) Ricardo Páez"], "respuesta": "b", "video": "videos/inter8.mp4" },
        { "opciones": ["a) Andrés Calamaro", "b) León Gieco", "c) Charly García"], "respuesta": "a", "video": "videos/inter9.mp4" },
        { "opciones": ["a) Patricio Rey y sus Redonditos de Ricota", "b) Rata Blanca", "c) Bersuit Vergarabat"], "respuesta": "a", "video": "videos/inter10.mp4" }
    ],
    "DIFICILES": [
        { "opciones": ["a) Ramos Mejía", "b) González Catán", "c) Isidro Casanova"], "respuesta": "b", "video": "videos/dificil1.mp4" },
        { "opciones": ["a) Bizarrap", "b) Wos", "c) Ecko"], "respuesta": "c", "video": "videos/dificil2.mp4" },
        { "opciones": ["a) Ecko", "b) L-Gante", "c) Bizarrap"], "respuesta": "b", "video": "videos/dificil3.mp4" },
        { "opciones": ["a) David LC", "b) Walter 'Pocho' Calderón", "c) El Dipy"], "respuesta": "b", "video": "videos/43.mp4" },
        { "opciones": ["a) Lit Killah", "b) Bizarrap", "c) Ecko"], "respuesta": "b", "video": "videos/40.mp4" },
        { "opciones": ["a) L-Gante", "b) KHEA", "c) Ecko"], "respuesta": "a", "video": "videos/42.mp4" },
        { "opciones": ["a) Trueno", "b) Ysy A", "c) Duki"], "respuesta": "b", "video": "videos/dificil7.mp4" },
        { "opciones": ["a) C.R.O", "b) Lit Killah", "c) KHEA"], "respuesta": "a", "video": "videos/dificil8.mp4" },
        { "opciones": ["a) L-Gante", "b) Bizarrap", "c) Duki"], "respuesta": "a", "video": "videos/44.mp4" },
        { "opciones": ["a) Ecko", "b) Bizarrap", "c) L-Gante"], "respuesta": "b", "video": "videos/45.mp4" }
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