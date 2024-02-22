// main.js
import { initializeCarrusel } from './carrusel.js';
import { initializeModal } from './modal.js';
import { initializeSmoothScroll } from './smooth-scroll.js';
import { initializeStickyNavigation } from './sticky-navigation.js';
import { initializeAcordeon } from './acordeon.js';
import { initializeFilter } from './filter.js';
import { initializeCardContainer } from './card-container.js';
import { initializeHamburger } from './nav.js';



document.addEventListener('DOMContentLoaded', function () {
    initializeHamburger();    
    initializeStickyNavigation();
    initializeCarrusel();
    initializeModal();
    initializeSmoothScroll();
    
    initializeAcordeon();
    
    initializeFilter();
    initializeCardContainer();
});
