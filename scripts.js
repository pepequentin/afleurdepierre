// Fonction de défilement fluide et lent
function smoothScroll(target, duration) {
    const start = window.scrollY;
    const end = target.offsetTop;
    const change = end - start;
    let startTime = null;

    function animateScroll(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const scrollPosition = easeInOutQuad(progress, start, change, duration);

        window.scrollTo(0, scrollPosition);

        if (progress < duration) {
            requestAnimationFrame(animateScroll);
        }
    }

    // Fonction d'easing pour un effet plus naturel
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    // Démarrer l'animation
    requestAnimationFrame(animateScroll);
}
// Afficher le bouton "Scroll to Top" lorsqu'on défile
window.addEventListener('scroll', function() {
    const scrollToTop = document.getElementById('scrollToTop');
    if (window.scrollY > 300) { // Montée à partir de 300px de défilement
        scrollToTop.style.display = 'flex';
    } else {
        scrollToTop.style.display = 'none';
    }
});

// Fonction de défilement fluide vers le haut de la page
document.getElementById('scrollToTop').addEventListener('click', function(e) {
    e.preventDefault();
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    smoothScroll({ offsetTop: 0 }, 1000); // 1000 ms = 1 seconde pour le défilement
});


// Application du défilement fluide sur les liens de navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const offset = targetElement.offsetTop - navbarHeight;

        smoothScroll({ offsetTop: offset }, 1000); // 1000 ms = 1 seconde pour le défilement
    });
});

// Application du défilement fluide sur le bouton "Découvrir"
document.querySelectorAll('.home-button').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const offset = targetElement.offsetTop - navbarHeight;

        smoothScroll({ offsetTop: offset }, 1000); // 1000 ms = 1 seconde pour le défilement
    });
});

// Fonction de défilement fluide pour le bouton "Scroll to Top"
document.getElementById('scrollToTop').addEventListener('click', function(e) {
    e.preventDefault();
    smoothScroll({ offsetTop: 0 }, 1000); // 1000 ms = 1 seconde pour le défilement
});


// Initialiser AOS
AOS.init({
    duration: 1000, // Durée de l'animation en ms
    easing: 'ease-in-out', // Type d'easing
    once: true, // Animations se déclenchent une seule fois
});
