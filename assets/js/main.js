
const bannerSwiper = new Swiper('.banner-swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    effect: 'slide',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const productSwiper = new Swiper('.product-swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1440: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
});

const toggleMenu = document.querySelector('.menu-icon img');
const menu = document.querySelector('.menu');
toggleMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const toggleSearch = document.querySelector('.search-icon img');
const search = document.querySelector('.search');
toggleSearch.addEventListener('click', () => {
    search.classList.toggle('active');
});