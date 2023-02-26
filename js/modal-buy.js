const refs = {
  openModalBtn: document.querySelectorAll("[data-modal-buy-open]"),
  closeModalBtn: document.querySelector("[data-modal-buy-close]"),
  modal: document.querySelector("[data-modal-buy]"),
};

refs.openModalBtn.forEach((el) => {
  el.addEventListener("click", toggleModal);
});

refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
  refs.modal.classList.toggle("is-hidden");
}
