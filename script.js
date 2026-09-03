const brands = document.querySelector('.brands');
const button = document.querySelector('.brands__button');

button.addEventListener('click', () => {
    brands.classList.toggle('brands--expanded');

    if (brands.classList.contains('brands--expanded')) {
        button.textContent = 'Скрыть';
    } else {
        button.textContent = 'Показать все';
    }
});

if (window.innerWidth < 768) {
    const swiper = new Swiper ('.swiper ', {
        slidesPerView: 1,
        spaceBetween: 16,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
      
    });
}