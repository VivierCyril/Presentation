import 'reveal.js/dist/reveal.css';
import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js';
import RevealZoom from 'reveal.js/plugin/zoom/zoom.esm.js';

// Initialisation de reveal.js
Reveal.initialize({
    hash: true,
    plugins: [RevealNotes, RevealZoom],
});

// Fonction pour charger les slides dynamiquement
// async function loadSlides() {
//     const slidesContainer = document.querySelector('.slides');
//     const slideFiles = [
//         '/slides/json/index.html',
//         // Ajoute tes autres slides ici
//     ];
//
//     for (const file of slideFiles) {
//         const response = await fetch(file);
//         const html = await response.text();
//         slidesContainer.innerHTML += html;
//     }
//
//     // Re-initialise reveal.js après chargement des slides
//     Reveal.sync();
//     Reveal.layout();
// }
//
// loadSlides();
