// main.js
import { initializeCarrusel } from './carrusel.js';
import { initializeModal } from './modal.js';
import { initializeSmoothScroll } from './smooth-scroll.js';
import { initializeStickyNavigation } from './sticky-navigation.js';
import { initializeAcordeon } from './acordeon.js';
import { initializeFilter } from './filter.js';
import { initializeCardContainer } from './card-container.js';

document.addEventListener('DOMContentLoaded', function () {
    initializeStickyNavigation();
    initializeCarrusel();
    initializeModal();
    initializeSmoothScroll();
    
    initializeAcordeon();
    
    initializeFilter();
    initializeCardContainer();
});
