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
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pn",
            clickable: true,
        },
    });
    var swiperSec = new Swiper(".myswpMobile", {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pn",
            clickable: true,
        },
    });

    var swiperLaptop = new Swiper(".swiperLaptop", {
        slidesPerView: 5,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            992:{
                slidesPerView: 4,
                spaceBetween: 40
            },

            1200:{
                slidesPerView: 5,
                spaceBetween: 40
            }
          },
          autoplay: {
            delay: 3000,
        },
      });

      var logoSwiper = new Swiper(".logoSwiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });


})