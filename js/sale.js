const swiperSale = new Swiper(".swiper-sale", {
  direction: "horizontal",
  loop: false,
  spaceBetween: 30,
  slidesPerView: 3,

  navigation: {
    nextEl: ".swiper-sale__next",
    prevEl: ".swiper-sale__prev",
  },

  scrollbar: {
    el: ".swiper-sale__scrollbar",
  },

  breakpoints: {
    440: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 2,
    },
    1001: {
      slidesPerView: 3,
    },
  },
});

const btnLike = document.querySelectorAll(".sale-card__like");
const btnBasket = document.querySelectorAll(".sale-card__basket");

btnLike.forEach((like) => {
  like.addEventListener("click", function () {
    like.classList.toggle("active");
  });
});

btnBasket.forEach((basket) => {
  basket.addEventListener("click", function () {
    basket.classList.toggle("active");
  });
});
