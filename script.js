const brands = document.querySelector('.brands');
const button = document.querySelector('.brands__button');
const buttonIcon =document.querySelector('.brands__button-icon');
const buttonText = document.querySelector('.brands__button-text');

button.addEventListener('click', () => {
    brands.classList.toggle('brands--expanded');

    if (brands.classList.contains('brands--expanded')) {
        buttonIcon.src = './img/expand.2.svg';
        buttonText.textContent = 'Скрыть';
    } else {
        buttonText.textContent = 'Показать все';
        buttonIcon.src = './img/expand.svg';  
    }
});


if (window.innerWidth < 768) {

    const swiper = new Swiper('.swiper', {

        slidesPerView: 1,
        spaceBetween: 16,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });

}