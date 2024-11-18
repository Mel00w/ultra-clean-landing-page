// faire disparaitre le titre au defilement
window.addEventListener('scroll', () => {
    const title = document.getElementById('title'); // Sélectionne #title
    if (window.scrollY > 50) { // Cache le titre après 50px de défilement
        title.classList.add('hidden');
    } else { // Montre le titre lorsque l'utilisateur est en haut
        title.classList.remove('hidden');
    }
});
