
/* ==========================================
   1. NAVIGATION & TYPED EFFECT
   ========================================== */
const menuToggle = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (navList.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});

new Typed(".typing", {
    strings: [
        "modern websites",
        "full-stack applications",
        "responsive designs",
        "UI/UX designs",
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});








/* ==========================================
   5. PORTFOLIO VIDEO OVERLAYS
   ========================================== */
document.querySelectorAll(".portfolio-page-wrapper .video-box").forEach(box => {
    const videoElem = box.querySelector("video");
    const overlay = box.querySelector(".video-overlay");
    const icon = overlay.querySelector("i");

    overlay.addEventListener("click", () => {
        if (videoElem.paused) {
            videoElem.play();
            box.classList.add("playing");
            icon.classList.replace("fa-play", "fa-pause");
        } else {
            videoElem.pause();
            box.classList.remove("playing");
            icon.classList.replace("fa-pause", "fa-play");
        }
    });

    videoElem.addEventListener("ended", () => {
        box.classList.remove("playing");
        icon.classList.replace("fa-pause", "fa-play");
    });
});