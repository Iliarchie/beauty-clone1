// MENU-MOBILE

const menuMobileOpen = document.querySelector(".header-start__btn-menu");
const menuMobileClose = document.querySelector(".menu-mobile__close-btn");
const menu = document.querySelector(".menu-mobile");

const menuBtn = document.querySelectorAll(".menu-mobile__list-link");

menuMobileOpen.addEventListener("click", function () {
  menu.classList.add("active");
});

menuMobileClose.addEventListener("click", function () {
  menu.classList.remove("active");
});

menuBtn.forEach((linkTab) => {
  linkTab.addEventListener("click", function () {
    const menuBtnTab = linkTab.nextElementSibling;
    menuBtnTab.classList.toggle("active");
  });
});

// MENU-CATALOG

const catalogLink = document.querySelectorAll(".menu-catalog__list-item");

catalogLink.forEach((link) => {
  link.addEventListener("click", function () {
    const linkTab = link.nextElementSibling;

    linkTab.classList.toggle("active");
  });
});

// MENU-LIST

const linkList = document.querySelectorAll(".menu-list__link");
const menuCatalog = document.querySelector(".menu-catalog");

let timeoutId;

menuCatalog.addEventListener("mouseenter", function () {
  clearTimeout(timeoutId);
  menuCatalog.classList.add("active");
});

menuCatalog.addEventListener("mouseleave", function () {
  timeoutId = setTimeout(function () {
    menuCatalog.classList.remove("active");
  }, 500);
});

menuCatalog.addEventListener("mouseenter", function () {
  clearTimeout(timeoutId);
});

menuCatalog.addEventListener("mouseleave", function (event) {
  if (!menuCatalog.contains(event.relatedTarget)) {
    menuCatalog.classList.remove("active");
  }
});

linkList.forEach((link) => {
  link.addEventListener("mouseenter", function () {
    clearTimeout(timeoutId);
    menuCatalog.classList.add("active");
  });

  link.addEventListener("mouseleave", function () {
    timeoutId = setTimeout(function () {
      menuCatalog.classList.remove("active");
    }, 500);
  });
});
