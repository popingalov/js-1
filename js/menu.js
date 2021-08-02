(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-burger'),
    closeMenuBtn: document.querySelector('.exit--mobile-menu'),
    menu: document.querySelector('.mobile-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
