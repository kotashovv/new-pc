document.addEventListener('DOMContentLoaded', ()=>{
    const heroSlider = new Swiper('.hero-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
            el: '.hero-pagination',
        }
    })
})