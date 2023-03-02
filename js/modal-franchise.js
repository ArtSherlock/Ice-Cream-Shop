const refs= {
  openModalBtn: document.querySelectorAll("[data-modal-franchise-open]"),
  closeModalBtn: document.querySelector("[data-modal-franchise-close]"),
  modal: document.querySelector("[data-modal-franchise]"),
};

refs.openModalBtn.forEach((el)=> {
  el.addEventListener("click", toggleModal);
});

refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
  refs.modal.classList.toggle("is-hidden-franchise");
}