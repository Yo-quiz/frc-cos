const yoKaiList = [
{ name: "Darabajoie", img: "tentelento.png" },
{ name: "Darumastar", img: "tentemacho.png" },
{ name: "Goruma", img: "tenterila.png" },
{ name: "Nanpart", img: "nihablar.png" },
{ name: "Passpa", img: "impas.png" },
{ name: "Granpart", img: "murallin.png" },
{ name: "Hauber", img: "lorigon.png" },
{ name: "Pachycoul", img: "inquielifante.png" },
{ name: "Persévéfant", img: "perselefante.png" },
{ name: "Boulapic", img: "globqueo.png" },
{ name: "Bouldacier", img: "globtundente.png" },
{ name: "Lama Laya", img: "montaña_loca.png" },
{ name: "Etna Magma", img: "lord_lava.png" },
{ name: "Loubarbare", img: "rebelcebu.png" },
{ name: "Racaîd", img: "caporrista.png" },
{ name: "Frérosse", img: "hermanion.png" },
{ name: "Coléroptère", img: "pegarabajo.png" },
{ name: "Rhinolimit", img: "enormarabajo.png" },
{ name: "Corniaque", img: "cuernarabajo.png" },
{ name: "Castelius III", img: "castelius_III.png" },
{ name: "Castelius II", img: "castelius_II.png" },
{ name: "Castelius I", img: "Castelius_I.png" },
{ name: "Castelius Max", img: "Maxicastelius.png" },
{ name: "Robonyan", img: "robonyan.png" },
{ name: "Oronyan", img: "aureonyan.png" },
{ name: "Misterre", img: "pom.png" },
{ name: "Ressak", img: "flus.png" },
{ name: "Gorgouille", img: "dorantuo.png" },
    { name: "Potache", img: "Aterracota.png" },
    { name: "Jalouseriz", img: "Quierodeso.png" },
    { name: "Fanfanfaron", img: "Gambulloso.png" },
    { name: "Égare-dare", img: "Indiligencio.png" },
    { name: "Charivari", img: "Tanquivocado.png" },
    { name: "Humainequin", img: "Mimoniqui.png" },
    { name: "Pachypipi", img: "Mamuguanto.png" },
    { name: "Antonnerre", img: "Rayael.png" },
    { name: "Parantonn", img: "Cazarayos.png" },
    { name: "Suinthan", img: "Zudado.png" },
    { name: "Crapop", img: "Eleganfibio.png" },
    { name: "Geeko", img: "Frikigarto.png" },
    { name: "Robonyan F", img: "Robonyan_2.0.png" },
    { name: "Sumodon", img: "Sumodon.png" },
    { name: "Soupotori", img: "Supersumodon.png" },
    { name: "Pfffuji", img: "Desinverest.png" },
    { name: "Krakatouaaah", img: "Inverestupcion.png" },
    { name: "Gargaros", img: "Gargantuo_A.png" },
    { name: "Ogralos", img: "Cazamentires_A.png" },
    { name: "Orqanos", img: "Demoniorco_A.png" },
  { "name": "Chionyan", "img": "Perronyan.png" },
  { "name": "Kintaronyan", "img": "Kintaronyan.png" },
  { "name": "Extrabuki", "img": "Kabukio_A.png" },
{ name: "Otto", "img": "Prudencio.png" },
  { name: "Dépotache", "img": "Explotacota.png" },
  { name: "Graffaël", "img": "Grafilcebu.png" },
  { name: "Chameuhllow", "img": "Chocovaca.png" },
  { name: "Pot-au-meuh", "img": "Vacaloca.png" },
  { name: "Piètros", "img": "Fracalavero.png" },
  { name: "Bricolos", "img": "Calabilidoso.png" },
  { name: "Big O'Max", "img": "Master_Chof.png" },
  { name: "Axeérator", "img": "Monte_Merario.png" },
  { name: "Navétéran", "img": "Calmarinero.png" },
  { name: "Navigarmateur", "img": "Almirante_Admirable.png" },
  { name: "Pogorille", "img": "Peter_Punki.png" },
  { name: "Mulangeur", "img": "Pantuflo.png" },
  { name: "Andrécup", "img": "Reahucio.png" },
  { name: "Zopzoparleur", "img": "Radiopatio.png" },
  { name: "Aloyauler", "img": "Filete_II.png" },
  { name: "Superobonyan", "img": "Showbonyan.png" },
  { name: "Squale Masqué", "img": "Tiburon_Tiburcio.png" },
  { name: "El Squalador", "img": "Tiburon_Jaqueton.png" },
  { name: "Flèche d'Azur", "img": "Capitan_Nublo.png" },
  { "name": "Originyan", "img": "originyan.png" },
  { "name": "Daikokuten", "img": "Daikokuten.png" },
  { "name": "Platinos", "img": "Platinum.png" },
  { "name": "Terminyanator", "img": "Terminyanator.png" },
  { name: "Haltela", "img": "Frauduralla.png" },
  { name: "Grovide", "img": "Insaciablo.png" },
  { name: "Tristos", "img": "Penancio.png" },
  { name: "Octorbot", "img": "Venoctobot.png" },
  { name: "Orqanos Lu Bu", "img": "Demoniorco_Lu_Bu.png" },
  { name: "Kyubot", "img": "Kyubot.png" },
  { name: "Robonyan Ultime", "img": "Robonyan_Definitivo.png" },
  { name: "Sire Trompelamor", "img": "Rey_Palmiro.png" },
  { name: "Gromel", "img": "Masculloso.png" },
  { name: "Vociféro", "img": "Vociferio.png" },
  { name: "Chousensha", img: "Chosensha.png" },
  { name: "Monomaneking", aliases: ["Monomaneking", "Mimiking"], img: "Monomaneking.png" },    { name: "Morigami Rex", img: "Morigami_Rex.png" },
  { name: "Zappadokia", img: "Zappadokia.png" },
  { name: "Gowin", img: "Gowin.png" }
];

let score = 0; 
let gameEnded = false; // Evita cambios una vez terminado el juego
const unlockedYoKai = new Set(); // Registro de Yo-kai desbloqueados por índice

// Normalizar la entrada del usuario (sin tildes y en minúsculas)
function normalizeString(str) {
    return str.normalize("NFD").replace(/[̀-\u036f]/g, "").toLowerCase();
}

// Crear el objeto de audio una sola vez
let getSound = new Audio("get.mp3");

// Reproducir sonido cuando se desbloquea un Yo-kai (sin solapamiento)
function playGetSound() {
    if (!getSound.paused) {
        getSound.pause(); // Detener el sonido actual si ya está reproduciéndose
        getSound.currentTime = 0; // Reiniciar el sonido al principio
    }
    getSound.play(); // Reproducir el sonido
}

// Actualizar la puntuación en formato (adivinados / totales)
function updateScoreDisplay() {
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `${score}/${yoKaiList.length}`;
}

// Verificar la respuesta del usuario
function checkAnswer() {
    if (gameEnded) return; // Si el juego ha terminado, no hacer nada

    const userAnswer = normalizeString(document.getElementById("answer-input").value.trim());

    let correctGuess = false; // Bandera para reproducir el sonido solo si hay aciertos

    yoKaiList.forEach((yoKai, index) => {
        // Normaliza todos los nombres asociados al Yo-kai
        const normalizedNames = [yoKai.name, ...(yoKai.aliases || [])].map(name => normalizeString(name));

        // Si la respuesta coincide con alguno de los nombres y no ha sido desbloqueado
        if (normalizedNames.includes(userAnswer) && !unlockedYoKai.has(index)) {
            const yoKaiImg = document.getElementById(`yo-kai${index + 1}`);
            if (yoKaiImg && yoKaiImg.src.includes("no-kai.png")) {
                yoKaiImg.src = yoKai.img; // Actualiza la imagen

                // Añadir clase para animación
                yoKaiImg.classList.add("yokai-unlocked");
                yoKaiImg.addEventListener("animationend", () => {
                    yoKaiImg.classList.remove("yokai-unlocked"); // Quitar clase tras animación
                });

                unlockedYoKai.add(index); // Marcar el Yo-kai como desbloqueado
                score++;
                correctGuess = true; // Se encontró un acierto
            }
        }
    });

    if (correctGuess) {
        playGetSound(); // Reproducir sonido solo si hubo un acierto
        updateScoreDisplay(); // Actualizar puntuación
        document.getElementById("answer-input").value = ""; // Borra la respuesta después de un acierto
    }

    checkGameEnd(); // Verifica si el juego ha terminado
}

// Verificar si el juego ha terminado (cuando se han adivinado todos los Yo-kai)
function checkGameEnd() {
    if (score === yoKaiList.length) {
        gameEnded = true;
        stopTimer(); // Detener el temporizador
        showCongratsImage(); // Mostrar imagen de "¡Felicidades!"
    }
}

function showCongratsImage() {

    // Detener temporizador
    stopTimer();

    // Obtener tiempo final mostrado
    const tiempoTotal = document.getElementById("time").textContent;

    // Sonido de victoria
    const victorySound = new Audio("congrats.mp3");
    victorySound.volume = 0.8;
    victorySound.play().catch(() => {});

    // Panel lateral
    const finalPanel = document.createElement("div");
    finalPanel.style.position = "fixed";
    finalPanel.style.top = "0";
    finalPanel.style.right = "-350px";
    finalPanel.style.width = "320px";
    finalPanel.style.height = "100%";
    finalPanel.style.backgroundColor = "#bd6000";
    finalPanel.style.color = "white";
    finalPanel.style.padding = "20px";
    finalPanel.style.boxSizing = "border-box";
    finalPanel.style.zIndex = "1000";
    finalPanel.style.fontFamily = "Arial, sans-serif";
    finalPanel.style.display = "flex";
    finalPanel.style.flexDirection = "column";
    finalPanel.style.transition = "right 0.6s ease";

    // Botón cerrar
    const closeBtn = document.createElement("div");
    closeBtn.textContent = "✖";
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "15px";
    closeBtn.style.right = "15px";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontSize = "18px";

    closeBtn.addEventListener("click", () => {
        finalPanel.style.right = "-350px";
        setTimeout(() => finalPanel.remove(), 600);
    });

     const title = document.createElement("h2");
    title.textContent = `Bravo ! Vous avez deviné tous les Yo-kai en ${tiempoTotal}`;
    title.style.marginTop = "40px";
    title.style.marginBottom = "30px";
    title.style.fontSize = "22px";

    // Texto Twitter
    const followText = document.createElement("p");
    followText.innerHTML = `
        Si cela vous a plu, pourquoi ne pas me suivre sur Twitter ?: 
        <a href="https://x.com/salty_baconV2" target="_blank" style="color:#4fc3ff; text-decoration:none;">
        @Salty_BaconV2
        </a>
    `;
    followText.style.fontSize = "16px";
    followText.style.marginTop = "auto";

    // Montaje
    finalPanel.appendChild(closeBtn);
    finalPanel.appendChild(title);
    finalPanel.appendChild(followText);
    document.body.appendChild(finalPanel);

    // Animación de entrada
    setTimeout(() => {
        finalPanel.style.right = "0";
    }, 50);
}

// Temporizador
let startTime;
let timerInterval;

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    document.getElementById("time").textContent = formattedTime;
}

function stopTimer() {
    clearInterval(timerInterval);
}

// Manejador de evento: validación automática con "input"
document.getElementById("answer-input").addEventListener("input", checkAnswer);

// Inicializar el marcador y temporizador al cargar la página
updateScoreDisplay(); // Inicializa la puntuación en 0/total
startTimer();

window.addEventListener("beforeunload", (event) => {
    if (score > 0) { // Mostrar advertencia solo si hay progreso
        event.preventDefault();
        event.returnValue = "¿Estás seguro de que quieres salir? Se perderá todo el progreso.";
    }
});
