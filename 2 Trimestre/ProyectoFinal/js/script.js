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
// Inicializar el carrusel
updateCarrusel();
});
