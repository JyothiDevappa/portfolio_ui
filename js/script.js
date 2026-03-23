/* ==========================================
   1. GLOBAL SELECTORS & SETUP
   ========================================== */
const isMobile = window.innerWidth < 768;
const card = document.getElementById("card");
const aboutSection = document.querySelector('.about-cinematic');
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

let mouseX = 0;
let mouseY = 0;

/* ==========================================
   2. UNIFIED CURSOR & TILT (Desktop + Mobile)
   ========================================== */
// Desktop Mouse Logic
if (!isMobile) {
    document.addEventListener('mousemove', (e) => {
        updatePositions(e.clientX, e.clientY);
    });
} else {
    // Mobile Touch Logic (Cursor follows finger)
    document.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        updatePositions(touch.clientX, touch.clientY);
    }, { passive: true });

    // Accelerometer Tilt for Mobile
  // Boosted Tilt Sensitivity for Mobile
window.addEventListener('deviceorientation', (e) => {
    // We removed the "/ 2" divider to make it rotate faster/more intensely
    // Gamma: Left/Right tilt (-90 to 90)
    // Beta: Front/Back tilt (-180 to 180)
    mouseX = e.gamma; 
    mouseY = e.beta;
    
    // Optional: Add a limit so the card doesn't flip entirely upside down
    mouseX = Math.max(-30, Math.min(30, mouseX)); 
    mouseY = Math.max(-30, Math.min(30, mouseY));
    
    updateCardTransform();
});
}

function updatePositions(x, y) {
    if (cursor && follower) {
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
        
        setTimeout(() => {
            follower.style.left = x + 'px';
            follower.style.top = y + 'px';
        }, 50);
    }

    // Update rotation values
    mouseX = (window.innerWidth / 2 - x) / 20;
    mouseY = (window.innerHeight / 2 - y) / 20;
    updateCardTransform();
}

/* ==========================================
   3. STAR FIELD (Optimized)
   ========================================== */
let stars = [];
function initStars() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = [];
    const starCount = isMobile ? 150 : 400; 
    for (let i = 0; i < starCount; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * (isMobile ? 1.5 : 2),
            speed: Math.random() * 0.5 + 0.1
        });
    }
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    let zoom = 1 + (window.scrollY / (isMobile ? 800 : 1500)); 

    stars.forEach(star => {
        ctx.beginPath();
        let x = (star.x - canvas.width / 2) * zoom + canvas.width / 2;
        let y = (star.y - canvas.height / 2) * zoom + canvas.height / 2;
        ctx.arc(x, y, star.size, 0, Math.PI * 2);
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
    });
    requestAnimationFrame(drawStars);
}

/* ==========================================
   4. TRANSFORM LOGIC
   ========================================== */
function updateCardTransform() {
    if (!card) return;
    const scrollValue = window.scrollY;
    const sectionOffset = aboutSection.offsetTop;
    const distance = scrollValue - sectionOffset;

    let scale = 1;
    if (scrollValue > sectionOffset - window.innerHeight) {
        let sensitivity = isMobile ? 1000 : 2500; 
        scale = 1 + (distance / sensitivity);
        scale = Math.max(0.8, Math.min(scale, 1.3)); 
    }

    // Works for both Mouse and Tilting Phone
    card.style.transform = `scale(${scale}) rotateY(${mouseX}deg) rotateX(${-mouseY}deg)`;
}

window.addEventListener('scroll', updateCardTransform);
window.addEventListener("resize", initStars);
initStars();
drawStars();