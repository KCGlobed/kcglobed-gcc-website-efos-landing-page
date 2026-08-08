/**
 * slider.js — Swiper sliders initialization for the Hero Banner and Featured News
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Hero Banner Swiper Slider
    const heroSliderEl = document.querySelector('.hero-slider');
    if (heroSliderEl) {
        new Swiper('.hero-slider', {
            loop: true,
            effect: 'fade',
            speed: 2000,
            fadeEffect: {
                crossFade: true
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination2',
                clickable: true
            }
        });
    }

    // 2. Initialize News Cards Swiper Slider
    const newsSwiperEl = document.querySelector('.news-swiper');
    if (newsSwiperEl) {
        new Swiper('.news-swiper', {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.news-pagination',
                clickable: true
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 24
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 24
                }
            }
        });
    }

    // 3. Initialize Think Tank Cards Swiper Slider
    const thinkTankSwiperEl = document.querySelector('.think-tank-swiper');
    if (thinkTankSwiperEl) {
        new Swiper('.think-tank-swiper', {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.think-tank-pagination',
                clickable: true
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    spaceBetween: 24
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 24
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 24
                }
            }
        });
    }
});
