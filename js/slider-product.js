const swiperProduct = new Swiper(".swiper-product", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  slidesPerView: 3,

  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    461: {
      slidesPerView: 3,
    },
    320: {
      slidesPerView: 1,
    },
  },
});
