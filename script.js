// =========================
// REACTION TIME GAME
// With sound + theme + keyboard
// =========================

// Elements
const startBtn = document.getElementById("start-btn");
const gameBox = document.getElementById("game-box");
const message = document.getElementById("message");
const timerText = document.getElementById("timer");
const themeBtn = document.getElementById("theme-btn");

// Audio context (sound effects)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playBeep(freq, duration = 0.15) {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.frequency.value = freq;
    osc.type = "sine";

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    gain.gain.exponentialRampToValueAtTime(
        0.0001,
        audioCtx.currentTime + duration
    );

    osc.stop(audioCtx.currentTime + duration);
}

// Game state
let startTime = 0;
let timeoutId = null;
let gameActive = false;
let waitingForClick = false;

// =========================
// EVENT LISTENERS
// =========================

// Mouse controls
startBtn.addEventListener("click", startGame);
gameBox.addEventListener("click", handleReaction);

// Keyboard controls
document.addEventListener("keydown", (e) => {
    if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault(); // stop scrolling

        // Start game if not active
        if (!gameActive && !waitingForClick) {
            startGame();
            return;
        }

        // Stop timer / reaction click
        handleReaction();
    }
});

// Theme switch
themeBtn.addEventListener("click", toggleTheme);

// =========================
// GAME FUNCTIONS
// =========================

function startGame() {
    resetGame();

    gameActive = true;
    message.textContent = "Get Ready...";
    gameBox.classList.add("ready");
    startBtn.disabled = true;

    playBeep(600);

    const delay = Math.random() * 3000 + 2000;
    timeoutId = setTimeout(showNow, delay);
}

function showNow() {
    waitingForClick = true;
    gameBox.classList.remove("ready");
    gameBox.classList.add("now");
    message.textContent = "NOW!";
    startTime = performance.now();

    playBeep(900);
}

function handleReaction() {
    // Too early
    if (gameActive && !waitingForClick) {
        clearTimeout(timeoutId);
        message.textContent = "Too Soon! ❌";
        timerText.textContent = "";
        playBeep(200, 0.3);
        endGame();
        return;
    }

    // Valid reaction
    if (waitingForClick) {
        const reaction = Math.round(performance.now() - startTime);
        timerText.textContent = `${reaction} ms`;
        message.textContent = "Your Reaction Time";
        playBeep(1200);
        endGame();
    }
}

function endGame() {
    gameActive = false;
    waitingForClick = false;
    gameBox.classList.remove("now");
    startBtn.textContent = "PLAY AGAIN";
    startBtn.disabled = false;
}

function resetGame() {
    clearTimeout(timeoutId);
    gameBox.classList.remove("ready", "now");
    message.textContent = "Click START or press SPACE";
    timerText.textContent = "";
    startBtn.textContent = "START";
}

// =========================
// THEME SWITCHER
// =========================

function toggleTheme() {
    document.body.classList.toggle("purple-theme");
}
