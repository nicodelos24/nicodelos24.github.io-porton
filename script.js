const faders = document.querySelectorAll('.fade-in');

function checkFade() {
    const triggerBottom = window.innerHeight * 0.85;
    faders.forEach(fade => {
        const rect = fade.getBoundingClientRect();
        if (rect.top < triggerBottom) {
            fade.classList.add('visible');
        }
    });
}
let lastScroll = 0;
const nav = document.querySelector('.nav-bar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        // Bajando → ocultar nav
        nav.classList.add('nav-hidden');
    } else {
        // Subiendo → mostrar nav
        nav.classList.remove('nav-hidden');
    }

    lastScroll = currentScroll;
});