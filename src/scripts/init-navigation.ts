const normalizePath = (path: string): string => {
  return path.replace(/\/$/, '').replace('.html', '');
};

export const initNavigation = (): void => {
  const currentPath = normalizePath(window.location.pathname);
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.js-nav-link');

  navLinks.forEach((link) => {
    const linkPath = normalizePath(link.pathname);
    if (linkPath === currentPath) {
      link.classList.add('is-active');
    } else {
      link.classList.remove('is-active');
    }
  });

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
