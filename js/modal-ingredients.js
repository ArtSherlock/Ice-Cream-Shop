const refs = {
  openModalBtn: document.querySelectorAll("[data-modal-ingredients-open]"),
  closeModalBtn: document.querySelector("[data-modal-ingredients-close]"),
  modal: document.querySelector("[data-modal-ingredients]"),
};

refs.openModalBtn.forEach((el) => {
  el.addEventListener("click", toggleModal);
});

refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
  refs.modal.classList.toggle("is-hidden-ingredients");
}