// card-container.js
import { initializeFilter } from './filter.js';
export function initializeCardContainer() {
            // CARDS CONTAINER
            const cardContainer = document.getElementById('cardContainer');
        
            // Puedes cargar el archivo JSON de forma asíncrona
            fetch('data/cards.json')
                .then(response => response.json())
                .then(cards => {
                    cards.forEach(card => {
                        const cardElement = createCardElement(card);
                        cardContainer.appendChild(cardElement);
                    });
                    // Llama a initializeFilter después de cargar las tarjetas
                    initializeFilter();
                });
    
            function createCardElement(card) {
                const figure = document.createElement('figure');
                figure.classList.add('shop', card.category);
    
                figure.innerHTML = `
                    <img src="${card.image}" class="shop-img" alt="${card.title}" />
                    <div class="shop-box">
                        <h3>${card.title}</h3>
                        <ul class="shop-details">
                            ${card.details.map(detail => `<li>${getIcon(detail)} <span>${detail}</span></li>`).join('')}
                        </ul>
                        <div class="shop-price">
                            <strong>${card.price}</strong>
                            <a href="#" class="btnCards btn--small">Add to cart</a>
                        </div>
                    </div>
                `;
    
                return figure;
            }
    
            function getIcon(detail) {
                // Aquí puedes mapear tus detalles a iconos específicos si es necesario
                // Puedes adaptar esto según tus necesidades
                switch (detail) {
                    case 'Leisure and relaxing':
                        return '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="shop-icon"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg>' ;
                    case 'Work':
                        return '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="shop-icon"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>';
                    // Otros casos...
                    default:
                        return '';
                }
            }
}
