
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
    },
});

let isMenuOrSearchActive = false;
let isMobile = window.innerWidth <= 1120;

const toggleMenu = document.querySelector('.menu-icon img');
const menu = document.querySelector('.menu');
const toggleSearch = document.querySelector('.search-icon img');
const search = document.querySelector('.search');

function resetMenuAndSearch() {
    isMenuOrSearchActive = false;
    menu.classList.remove('active');
    search.classList.remove('active');
    toggleMenu.style.pointerEvents = 'auto';
    toggleMenu.style.opacity = '1';
    toggleSearch.style.pointerEvents = 'auto';
    toggleSearch.style.opacity = '1';
}

function handleResize() {
    const waseMobile = isMobile;
    isMobile = window.innerWidth <= 1120;

    if (waseMobile !== isMobile) {
        resetMenuAndSearch();
    }
}

window.addEventListener('resize', handleResize);

toggleMenu.addEventListener('click', () => {
    if (!isMenuOrSearchActive || menu.classList.contains('active')) {
        menu.classList.toggle('active');
        isMenuOrSearchActive = menu.classList.contains('active');

        if (isMobile) {
            toggleSearch.style.pointerEvents = isMenuOrSearchActive ? 'none' : 'auto';
            toggleSearch.style.opacity = isMenuOrSearchActive ? '0.4' : '1';
        }
    }
});

toggleSearch.addEventListener('click', () => {
    if (!isMenuOrSearchActive || search.classList.contains('active')) {
        search.classList.toggle('active');
        isMenuOrSearchActive = search.classList.contains('active');

        if (isMobile) {
            toggleMenu.style.pointerEvents = isMenuOrSearchActive ? 'none' : 'auto';
            toggleMenu.style.opacity = isMenuOrSearchActive ? '0.4' : '1';
        }
    }
});

handleResize();