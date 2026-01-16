document.addEventListener('DOMContentLoaded', ()=>{
    const heroSlider = new Swiper('.hero-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
            el: '.hero-pagination',
        }
    })

    const reviewsSlider = new Swiper('.reviews__swiper', {
        slidesPerView: 1.2, 
        spaceBetween: 15,
    });
})