// SELECTORS //
const burger = document.querySelector(".header__wrap i");
const modalBackdrop = document.querySelector(".modal_backdrop");
const body = document.querySelector("body");

// EVENT LISTENERS //
burger.addEventListener("click", () => {
  modalBackdrop.classList.add("darken");
});

modalBackdrop.addEventListener("click", () => {
  modalBackdrop.classList.remove("darken");
});
