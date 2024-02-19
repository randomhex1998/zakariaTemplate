let j = $.noConflict();


j(document).ready(function () {
    j(".bars").on("click", () => {
        j(".mobile-menu").toggleClass("active-mobile-menu");
        j(".wrapper").toggleClass("active-mobile-menu");
    })
    j(".wrapper").on("click", () => {
        j(".mobile-menu").removeClass("active-mobile-menu");
        j(".wrapper").removeClass("active-mobile-menu");
    })


    //swiper slider
    let swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        autoplay: {
            delay: 3000,
        },
    });


    var swiperSec = new Swiper(".myswp", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pn",
            clickable: true,
        },
    });


})