const refs = {
  openModalBtn: document.querySelectorAll("[data-modal-read-open]"),
  closeModalBtn: document.querySelector("[data-modal-read-close]"),
  modal: document.querySelector("[data-modal-read]"),
};

refs.openModalBtn.forEach((el) => {
  el.addEventListener("click", toggleModal);
});

refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
  refs.modal.classList.toggle("is-hidden-read");
}