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
});


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
