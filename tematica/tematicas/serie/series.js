const preguntas = {
 
    "FACILES": [
        { "opciones": ["a) How I Met Your Mother", "b) Seinfeld", "c) Friends"], "respuesta": "c", "video": "videos/1.mp4" },
        { "opciones": ["a) Un gallo para Esculapio", "b) Los Simuladores", "c) El Marginal"], "respuesta": "b", "video": "videos/2.mp4" },
        { "opciones": ["a) Locke & Key", "b) The Umbrella Academy", "c) Stranger Things"], "respuesta": "c", "video": "videos/3.mp4" },
        { "opciones": ["a) Narcos", "b) Ozark", "c) Breaking Bad"], "respuesta": "c", "video": "videos/5.mp4" },
        { "opciones": ["a) Diego Peretti", "b) Federico D’Elía", "c) Alejandro Fiore"], "respuesta": "b", "video": "videos/facil5.mp4" },
        { "opciones": ["a) Rebelde Way", "b) Chiquititas", "c) Floricienta"], "respuesta": "a", "video": "videos/facil6.mp4" },
        { "opciones": ["a) Rodrigo de la Serna", "b) Ariel Staltari", "c) Diego Alonso Gómez"], "respuesta": "b", "video": "videos/facil7.mp4" },
        { "opciones": ["a) 1999", "b) 2002", "c) 2005"], "respuesta": "b", "video": "videos/facil8.mp4" },
        { "opciones": ["a) Okupas", "b) El Marginal", "c) La 1-5/18"], "respuesta": "b", "video": "videos/facil9.mp4" },
        { "opciones": ["a) Constitución", "b) Once", "c) San Telmo"], "respuesta": "c", "video": "videos/facil10.mp4" }
    ],
    "INTERMEDIAS": [
        { "opciones": ["a) Rick and Morty", "b) BoJack Horseman", "c) Family Guy"], "respuesta": "b", "video": "videos/6.mp4" },
        { "opciones": ["a) Rebelde Way", "b) Casi Ángeles", "c) Aliados"], "respuesta": "b", "video": "videos/7.mp4" },
        { "opciones": ["a) Alice in Borderland", "b) Squid Game", "c) Sweet Home"], "respuesta": "b", "video": "videos/8.mp4" },
        { "opciones": ["a) Apache", "b) Monzón", "c) Puerta 7"], "respuesta": "b", "video": "videos/9.mp4" },
        { "opciones": ["a) Doom Patrol", "b) The Umbrella Academy", "c) Titans"], "respuesta": "b", "video": "videos/10.mp4" },
        { "opciones": ["a) Élite", "b) La Casa de Papel", "c) Vis a Vis"], "respuesta": "b", "video": "videos/inter6.mp4" },
        { "opciones": ["a) The Crown", "b) Downton Abbey", "c) Victoria"], "respuesta": "a", "video": "videos/inter7.mp4" },
        { "opciones": ["a) Grey’s Anatomy", "b) Dr. House", "c) ER"], "respuesta": "b", "video": "videos/inter8.mp4" },
        { "opciones": ["a) Dark", "b) 1899", "c) Babylon Berlin"], "respuesta": "a", "video": "videos/inter9.mp4" },
        { "opciones": ["a) Jim Parsons", "b) Johnny Galecki", "c) Simon Helberg"], "respuesta": "a", "video": "videos/inter10.mp4" }
    ],
    "DIFICILES": [
        { "opciones": ["a) La caída", "b) El Reino", "c) Todos mienten"], "respuesta": "b", "video": "videos/11.mp4" },
        { "opciones": ["a) Altered Carbon", "b) Westworld", "c) Black Mirror"], "respuesta": "b", "video": "videos/12.mp4" },
        { "opciones": ["a) Futurama", "b) Rick and Morty", "c) BoJack Horseman"], "respuesta": "b", "video": "videos/13.mp4" },
        { "opciones": ["a) Okupas", "b) El Puntero", "c) Tumberos"], "respuesta": "a", "video": "videos/14.mp4" },
        { "opciones": ["a) Una invasión de zombies", "b) Una nevada mortal", "c) Un terremoto global"], "respuesta": "b", "video": "videos/15.mp4" },
        { "opciones": ["a) Ricky Gervais", "b) Steve Carell", "c) Martin Freeman"], "respuesta": "a", "video": "videos/dificil6.mp4" },
        { "opciones": ["a) 2004", "b) 2002", "c) 2006"], "respuesta": "a", "video": "videos/dificil7.mp4" },
        { "opciones": ["a) Game of Thrones", "b) Frasier", "c) Saturday Night Live"], "respuesta": "a", "video": "videos/dificil8.mp4" },
        { "opciones": ["a) Star Trek", "b) The Twilight Zone", "c) Doctor Who"], "respuesta": "a", "video": "videos/dificil9.mp4" },
        { "opciones": ["a) Black Mirror", "b) Doctor Who", "c) Red Dwarf"], "respuesta": "b", "video": "videos/dificil10.mp4" }
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