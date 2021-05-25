// SELECTORS //
const burger = document.querySelector(".header__wrap i");
const modalBackdrop = document.querySelector(".modal_backdrop");
const modal = document.querySelector(".modal");
const body = document.querySelector("body");

// EVENT LISTENERS //
burger.addEventListener("click", () => {
  modalBackdrop.classList.add("darken");
  modal.classList.add("open");
});

modalBackdrop.addEventListener("click", () => {
  modalBackdrop.classList.remove("darken");
  modal.classList.remove("open");
});
