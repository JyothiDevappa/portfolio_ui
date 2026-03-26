window.onload = function () {
    const starContainer = document.getElementById('stars-field');

    // Create stars
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const x = Math.random() * 100;
        const y = Math.random() * 60; // Keep stars in sky
        star.style.cssText = `position:absolute; left:${x}%; top:${y}%; width:1px; height:1px; background:#fff; box-shadow: 0 0 5px #fff; border-radius:50%; opacity:${Math.random()}; animation: twinkle ${Math.random() * 5 + 3}s infinite;`;
        starContainer.appendChild(star);
    }
};

// Subtle Parallax for the Mountains
document.addEventListener('mousemove', (e) => {
    const mountains = document.querySelector('.mountain-range');
    const x = (window.innerWidth / 2 - e.pageX) / 100;
    mountains.style.transform = `translateX(${x}px)`;
});

const aboutData = {


    career: `
        <h2 style="color:#00d9ff">MISSION_LOG</h2>
        <p><b>Goal:</b> Looking for an opportunity to start my career as a developer.</p>
        <p><b>Strength:</b> Turning complex ideas into user-friendly websites without the corporate fluff.</p>
    `
};

function unlockData(type) {
    const overlay = document.getElementById('info-overlay');
    const content = document.getElementById('panel-content');
    content.innerHTML = aboutData[type];
    overlay.style.display = 'flex';
}

function closePanel() {
    document.getElementById('info-overlay').style.display = 'none';
}






function showAboutCard() {
    document.getElementById('about-card-overlay').style.display = 'flex';
}

function hideAboutCard() {
    document.getElementById('about-card-overlay').style.display = 'none';
}






function showSkillsCard() {
    document.getElementById('skills-card-overlay').style.display = 'flex';
}

function hideSkillsCard() {
    document.getElementById('skills-card-overlay').style.display = 'none';
}










document.addEventListener("DOMContentLoaded", () => {
    const trigger = document.getElementById("exp-trigger-link");
    const overlay = document.getElementById("intern-overlay");
    const closeBtn = document.getElementById("close-intern");

    if (trigger) {
        trigger.addEventListener("click", () => {
            overlay.classList.add("active");
            document.body.style.overflow = "hidden"; // Stop background scroll
        });
    }

    const closeHandler = () => {
        overlay.classList.remove("active");
        document.body.style.overflow = "auto";
    };

    if (closeBtn) closeBtn.addEventListener("click", closeHandler);

    // Close if user clicks the dark area outside the box
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeHandler();
    });
});