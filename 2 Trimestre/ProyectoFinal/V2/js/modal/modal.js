// modal.js
export function initializeModal() {
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
    // updateCarrusel();
}
