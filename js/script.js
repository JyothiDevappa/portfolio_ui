  const menuToggle = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        
        // Optional: Toggle icon between bars and X
        const icon = menuToggle.querySelector('i');
        if (navList.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });




        new Typed(".typing",{
    strings:[
        "modern websites",
        "full-stack applications",
        "interactive web experiences"
    ],
    typeSpeed:60,
    backSpeed:40,
    backDelay:1500,
    loop:true
});









const section = document.querySelector("#aboutSection");
const title = document.querySelector(".about-title");
const line = document.querySelector(".divider");
const wrapper = document.querySelector(".about-wrapper");
const text = document.querySelector(".about-right");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            setTimeout(()=>{
                title.classList.add("show-title");
            },300);

            setTimeout(()=>{
                line.classList.add("show-line");
            },900);

            setTimeout(()=>{
                wrapper.classList.add("move-left");
            },1600);

            setTimeout(()=>{
                text.classList.add("show-text");
            },2200);

        }

    });

});

observer.observe(section);










document.querySelectorAll(".portfolio-page-wrapper .video-box").forEach(box => {
            const video = box.querySelector("video");
            const overlay = box.querySelector(".video-overlay");
            const icon = overlay.querySelector("i");

            overlay.addEventListener("click", () => {
                if (video.paused) {
                    video.play();
                    box.classList.add("playing");
                    // Switch play icon to pause icon
                    icon.classList.remove("fa-play");
                    icon.classList.add("fa-pause");
                } else {
                    video.pause();
                    box.classList.remove("playing");
                    // Switch pause icon to play icon
                    icon.classList.remove("fa-pause");
                    icon.classList.add("fa-play");
                }
            });

            // Optional: Reset icon when video ends
            video.addEventListener("ended", () => {
                box.classList.remove("playing");
                icon.classList.remove("fa-pause");
                icon.classList.add("fa-play");
            });
        });


