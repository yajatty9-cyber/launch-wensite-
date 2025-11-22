/* CINEMATIC PARTICLES */
const pCanvas = document.getElementById("particles");
const pCtx = pCanvas.getContext("2d");

pCanvas.width = innerWidth;
pCanvas.height = innerHeight;

let particles = [];
for (let i = 0; i < 400; i++) {
    particles.push({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        s: Math.random() * 2,
        v: Math.random() * 1 + 0.2
    });
}

function animateParticles() {
    pCtx.clearRect(0, 0, innerWidth, innerHeight);
    pCtx.fillStyle = "rgba(0,255,60,0.8)";
    particles.forEach(p => {
        pCtx.beginPath();
        pCtx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
        pCtx.fill();
        p.y += p.v;
        if (p.y > innerHeight) p.y = 0;
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();

/* EARTH CANVAS 3D EFFECT */
const earthCanvas = document.getElementById("earthCanvas");
const eCtx = earthCanvas.getContext("2d");
earthCanvas.width = innerWidth;
earthCanvas.height = innerHeight;

let angle = 0;

function drawEarth() {
    eCtx.clearRect(0, 0, innerWidth, innerHeight);

    let radius = 200;
    let x = innerWidth / 2;
    let y = innerHeight / 2;

    eCtx.beginPath();
    eCtx.arc(x, y, radius, 0, Math.PI * 2);
    let grad = eCtx.createRadialGradient(x, y, 10, x, y, radius);
    grad.addColorStop(0, "#2eff3c");
    grad.addColorStop(1, "#003300");
    eCtx.fillStyle = grad;
    eCtx.fill();

    angle += 0.01;
    requestAnimationFrame(drawEarth);
}
drawEarth();

/* FLASH + EARTHQUAKE */
function screenFlash() {
    const flash = document.getElementById("flash");
    flash.style.transition = "0.1s";
    flash.style.opacity = "1";
    setTimeout(() => flash.style.opacity = "0", 100);
}

function shakeScreen() {
    document.body.style.animation = "shake 0.6s";
    setTimeout(() => (document.body.style.animation = ""), 600);
}

/* LAUNCH SEQUENCE */
function LAUNCH() {
    screenFlash();
    shakeScreen();

    setTimeout(() => screenFlash(), 200);

    setTimeout(() => {
        document.body.style.transition = "2s";
        document.body.style.opacity = "0";
    }, 1800);

    setTimeout(() => {
        window.location.href = "https://farmersgenius.vercel.app";
    }, 2600);
}
