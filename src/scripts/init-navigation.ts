export const initNavigation = (): void => {
  const drawer = document.getElementById('drawer');
  const toggleButtons = document.querySelectorAll('.js-nav-toggle');

  if (!drawer || toggleButtons.length === 0) {
    return;
  }

  const toggleMenu = (): void => {
    drawer.classList.toggle('is-active');

    document.body.classList.toggle('disable-scroll');

    const isActive = drawer.classList.contains('is-active');
    toggleButtons.forEach((btn) => {
      btn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    });
  };

  toggleButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
  });

  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-active')) {
      toggleMenu();
    }
  });
};
