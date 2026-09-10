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

let swiper;
const mobileMediaQuery = window.matchMedia('(max-width: 767px)');

function updateSwiper(e) {
    if (e.matches) {
        if (!swiper) {
            swiper = new Swiper('.swiper', {
                slidesPerView: 1,
                spaceBetween: 16,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
} else {
    if (swiper) {
        swiper.destroy(true, true);
        swiper = undefined;
    }
}
}
updateSwiper(mobileMediaQuery);
mobileMediaQuery.addEventListener('change', updateSwiper);