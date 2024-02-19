document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.querySelector(".carrusel");
    const slides = carrusel.querySelectorAll(".slide");
    const totalSlides = slides.length;
    const btnLeft = carrusel.querySelector(".btn--left");
    const btnRight = carrusel.querySelector(".btn--right");
    const dots = carrusel.querySelectorAll(".dot");
    let currentSlide = 0;

    // Función para actualizar la visualización del carrusel
    function updateCarrusel() {
        slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? "block" : "none";
        });

        dots.forEach((dot, index) => {
        dot.classList.toggle("dot--fill", index === currentSlide);
        });
    }

    // Función para manejar el clic en el botón izquierdo
    btnLeft.addEventListener("click", function () {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarrusel();
    });

    // Función para manejar el clic en el botón derecho
    btnRight.addEventListener("click", function () {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarrusel();
    });

    // Función para manejar el clic en los dots
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
        currentSlide = index;
        updateCarrusel();
        });
    });
    // Configurar el auto avance cada 5 segundos
    setInterval(function () {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarrusel();
    }, 5000);

    // Función para manejar las teclas de flecha izquierda/derecha
    document.addEventListener('keydown', handleKeySlider);

    function handleKeySlider(e){
        if (e.key === 'ArrowLeft'){
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarrusel();
        } else if (e.key === 'ArrowRight'){
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarrusel();
        }
    }
    ////////////// MODAL WINDOW////////////////

    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const btnCloseModal = document.querySelector('.btn--close-modal');
    const btnOpenModal = document.querySelectorAll('.btn--show-modal');

    const openModal = function () {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    };

    const closeModal = function (){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    };

    btnOpenModal.forEach(btn => btn.addEventListener('click', openModal));

    btnCloseModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', function (e){

        if (e.key === 'Escape' && !modal.classList.contains('hidden')){
            closeModal();
        }
    })

    // Inicializar el carrusel
    updateCarrusel();

    //SCROLL SMOOTH
    const btnScrollTos = document.querySelectorAll('.btn--scroll-to');

    // Iterar sobre cada botón y agregar el evento de clic
    btnScrollTos.forEach(btnScrollTo => {
        btnScrollTo.addEventListener('click', function (e) {
            e.preventDefault();

            // Obtener el identificador del objetivo desde el atributo href
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Verificar si el elemento objetivo existe
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // STICKY NAVIGATION

    // Obtén el elemento del nav
    const nav = document.querySelector('.nav');

    // Obtén la posición inicial del nav
    const navOffsetTop = nav.offsetTop;

    // Establece la cantidad de scroll requerida para que el nav se vuelva sticky
    const scrollThreshold = 150; // Ajusta según sea necesario

    // Agrega un event listener para el evento scroll
    window.addEventListener('scroll', () => {
        // Obtén la posición actual de la ventana
        const scrollY = window.scrollY || window.pageYOffset;

        // Calcula la opacidad en función del desplazamiento
        const opacity = Math.min(1, (scrollY - navOffsetTop) / scrollThreshold);

        // Aplica la opacidad al nav
        nav.style.opacity = opacity;

        // Verifica si la posición de desplazamiento es mayor o igual a la posición inicial del nav más el umbral
        if (scrollY >= navOffsetTop + scrollThreshold) {
            // Si es así, agrega la clase 'sticky' al nav
            nav.classList.add('sticky');
        } else {
            // Si no, elimina la clase 'sticky'
            nav.classList.remove('sticky');
            nav.style.opacity = 1; // Restablece la opacidad cuando vuelves hacia arriba
        }

        //////////////ACORDEON/////////////
        const items = document.querySelectorAll('.item');

        items.forEach(item => {
            const downIcon = item.querySelector('.icon[name="down"]');
            const upIcon = item.querySelector('.icon[name="up"]');
            const hiddenBox = item.querySelector('.hidden-box');
            const numero = item.querySelector('.numero');
            const texto = item.querySelector('.texto');

            downIcon.addEventListener('click', function() {
                closeAllItems();
                openItem(item);
            });

            upIcon.addEventListener('click', function() {
                closeItem(item);
            });

            numero.addEventListener('click', function() {
                if (!item.classList.contains('open')) {
                    closeAllItems();
                    openItem(item);
                }else{
                    closeItem(item);
                }
            });

            texto.addEventListener('click', function() {
                if (!item.classList.contains('open')) {
                    closeAllItems();
                    openItem(item);
                }else{
                    closeItem(item);
                }
                
            });
        });

        function closeAllItems() {
            items.forEach(item => {
                closeItem(item);
            });
        }

        function openItem(item) {
            item.classList.add('open');
            const downIcon = item.querySelector('.icon[name="down"]');
            const upIcon = item.querySelector('.icon[name="up"]');
            const hiddenBox = item.querySelector('.hidden-box');

            downIcon.style.display = 'none';
            upIcon.style.display = 'block';
            hiddenBox.style.display = 'block';
        }

        function closeItem(item) {
            item.classList.remove('open');
            const downIcon = item.querySelector('.icon[name="down"]');
            const upIcon = item.querySelector('.icon[name="up"]');
            const hiddenBox = item.querySelector('.hidden-box');

            downIcon.style.display = 'block';
            upIcon.style.display = 'none';
            hiddenBox.style.display = 'none';
        }


        // FILTROOO
        const items2 = document.querySelectorAll('.shop');
        const filterButtons = document.querySelectorAll('.filter-button');

        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                const filter = this.getAttribute('data-filter');

                // Agrega y quita la clase active para resaltar el botón seleccionado
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                items2.forEach(item => {
                    if (filter === 'all' || item.classList.contains(filter)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

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
            });

        function createCardElement(card) {
            const figure = document.createElement('figure');
            figure.classList.add('shop', card.category);

            figure.innerHTML = `
                <img src="${card.image}" alt="${card.title}" />
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


    });
}); //FIN DOCUMENTLOADER














