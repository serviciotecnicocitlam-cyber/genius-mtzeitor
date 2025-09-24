const preguntas = {
    "FACILES": [
        { "opciones": ["a) Fortnite", "b) Call of Duty: Modern Warfare", "c) Apex Legends"], "respuesta": "a", "video": "videos/1.mp4" },
        { "opciones": ["a) Donkey Kong", "b) Super Mario Bros.", "c) Sonic the Hedgehog"], "respuesta": "b", "video": "videos/2.mp4" },
        { "opciones": ["a) The Legend of Zelda: Breath of the Wild", "b) Portal", "c) Tetris"], "respuesta": "a", "video": "videos/3.mp4" },
        { "opciones": ["a) Minecraft", "b) Terraria", "c) Roblox"], "respuesta": "a", "video": "videos/4.mp4" },
        { "opciones": ["a) God of War III", "b) God of War (2005)", "c) God of War: Chains of Olympus"], "respuesta": "b", "video": "videos/5.mp4" },
        { "opciones": ["a) Ingress", "b) Pokémon GO", "c) Jurassic World Alive"], "respuesta": "b", "video": "videos/inter8.mp4" },
        { "opciones": ["a) Five Nights at Freddy's", "b) Hello Neighbor", "c) Little Misfortune"], "respuesta": "a", "video": "videos/inter9.mp4" },
        { "opciones": ["a) Temple Run", "b) Subway Surfers", "c) Ambos"], "respuesta": "c", "video": "videos/inter10.mp4" },
        { "opciones": ["a) Hades", "b) The Binding of Isaac", "c) Spelunky"], "respuesta": "b", "video": "videos/inter11.mp4" },
        { "opciones": ["a) Katana Zero", "b) Moonlighter", "c) Stardew Valley"], "respuesta": "c", "video": "videos/inter12.mp4" }
    ],
    "INTERMEDIAS": [
        { "opciones": ["a) Bloodborne", "b) Dark Souls", "c) Overwatch"], "respuesta": "c", "video": "videos/6.mp4" },
        { "opciones": ["a) Ghost of Tsushima", "b) Sekiro: Shadows Die Twice", "c) Nioh 2"], "respuesta": "a", "video": "videos/7.mp4" },
        { "opciones": ["a) Celeste", "b) Hollow Knight", "c) Ori and the Blind Forest"], "respuesta": "b", "video": "videos/8.mp4" },
        { "opciones": ["a) Clash Royale", "b) Candy Crush Saga", "c) Genshin Impact"], "respuesta": "c", "video": "videos/9.mp4" },
        { "opciones": ["a) Clash Royale", "b) Mobile Legends", "c) Vainglory"], "respuesta": "a", "video": "videos/10.mp4" },
        { "opciones": ["a) Fatal Frame", "b) Silent Hill", "c) The Evil Within"], "respuesta": "b", "video": "videos/inter6.mp4" },
        { "opciones": ["a) Among Us", "b) Project Winter", "c) Goose Goose Duck"], "respuesta": "a", "video": "videos/inter7.mp4" },
        { "opciones": ["a) Sons of the Forest", "b) Green Hell", "c) The Forest"], "respuesta": "c", "video": "videos/inter8.mp4" },
        { "opciones": ["a) Hollow Knight", "b) Undertale", "c) Ori and the Blind Forest"], "respuesta": "b", "video": "videos/inter9.mp4" },
        { "opciones": ["a) Love Live! School Idol Festival", "b) Mystic Messenger", "c) Honkai: Star Rail"], "respuesta": "b", "video": "videos/inter10.mp4" }
    ],
    "DIFICILES": [
        { "opciones": ["a) Fallout", "b) Planescape: Torment", "c) Baldur’s Gate"], "respuesta": "a", "video": "videos/11.mp4" },
        { "opciones": ["a) Final Fantasy XII", "b) Xenoblade Chronicles", "c) Tales of Symphonia"], "respuesta": "a", "video": "videos/12.mp4" },
        { "opciones": ["a) Elden Ring", "b) Horizon Forbidden West", "c) Dragon Age: Inquisition"], "respuesta": "a", "video": "videos/13.mp4" },
        { "opciones": ["a) Valorant", "b) Rainbow Six Siege", "c) Overwatch"], "respuesta": "a", "video": "videos/14.mp4" },
        { "opciones": ["a) Doki Doki Literature Club", "b) The Stanley Parable", "c) Oxenfree"], "respuesta": "a", "video": "videos/15.mp4" },
        { "opciones": ["a) Call of Cthulhu: Dark Corners of the Earth", "b) Silent Hill 2", "c) Eternal Darkness: Sanity’s Requiem"], "respuesta": "c", "video": "videos/dificil6.mp4" },
        { "opciones": ["a) Chaos;Child", "b) Danganronpa: Trigger Happy Havoc", "c) Steins;Gate"], "respuesta": "b", "video": "videos/dificil7.mp4" },
        { "opciones": ["a) Genshin Impact", "b) Epic Seven", "c) Honkai: Star Rail"], "respuesta": "c", "video": "videos/dificil8.mp4" },
        { "opciones": ["a) Twin Mirror", "b) Life is Strange: True Colors", "c) Tell Me Why"], "respuesta": "a", "video": "videos/dificil9.mp4" },
        { "opciones": ["a) Stranglehold", "b) TimeShift", "c) Max Payne"], "respuesta": "c", "video": "videos/dificil10.mp4" }
    ]
};
let contadorPreguntas = 0;
let aciertos = 0;

const videofalse = document.getElementById('videofalse');
const videotrue = document.getElementById('videotrue');
const siguiente = document.getElementById('nuevo');

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
    videoPregunta.load();
    videoPregunta.play();
}

function verificarRespuesta(opcion, correcta) {
    // Desactivar botones mientras se reproduce video
    const botones = document.querySelectorAll(".opcion");
    botones.forEach(btn => btn.disabled = true);

    const esCorrecta = opcion === correcta;
    if (esCorrecta) {
        aciertos++;
        videotrue.style.zIndex = '5';
        videotrue.style.display = 'block';
        videotrue.play();
        videotrue.onended = () => {
            manejarSiguientePaso();
        };
    } else {
        videofalse.style.zIndex = '5';
        videofalse.style.display = 'block';
        videofalse.play();
        videofalse.onended = () => {
            manejarSiguientePaso();
        };
    }

    contadorPreguntas++; // ✅ Ahora se cuenta al responder
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

