// Afficher le bouton "Scroll to Top" lors du défilement
window.addEventListener('scroll', function() {
    const scrollToTop = document.getElementById('scrollToTop');
    if (window.scrollY > 300) {
        scrollToTop.style.display = 'flex';
    } else {
        scrollToTop.style.display = 'none';
    }
});

// Fonction de défilement fluide avec animation
document.getElementById('scrollToTop').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Gestion du défilement fluide pour les liens de navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const offset = targetElement.offsetTop - navbarHeight;
        window.scrollTo({ top: offset, behavior: 'smooth' });
    });
});

// Gestion du défilement fluide pour le bouton "Découvrir"
document.querySelectorAll('.home-button').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const offset = targetElement.offsetTop - navbarHeight;
        window.scrollTo({ top: offset, behavior: 'smooth' });
    });
});
