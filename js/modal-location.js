const refs = {
  openModalBtn: document.querySelectorAll("[data-modal-location-open]"),
  closeModalBtn: document.querySelector("[data-modal-location-close]"),
  modal: document.querySelector("[data-modal-location]"),
};

refs.openModalBtn.forEach((el) => {
  el.addEventListener("click", toggleModal);
});

refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
  refs.modal.classList.toggle("is-hidden-location");
}