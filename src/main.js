import 'reveal.js/dist/reveal.css';
import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js';
import RevealZoom from 'reveal.js/plugin/zoom/zoom.esm.js';

// Initialisation de reveal.js


// Fonction pour charger les slides dynamiquement
async function loadSlides() {
    const slidesContainer = document.querySelector('.slides');
    const slideFiles = [
        'json',
        // ...
    ];

    for (const folder of slideFolders) {
        const response = await fetch(`/${folder}/index.html`);
        const html = await response.text();
        slidesContainer.innerHTML += html;
    }

    Reveal.initialize({
        hash: true,
        plugins: [RevealNotes, RevealZoom],
    });
}

loadSlides();

