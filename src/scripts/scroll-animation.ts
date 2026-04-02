export class ScrollAnimation {
  private observer: IntersectionObserver;

  constructor() {
    const options: IntersectionObserverInit = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    this.observer = new IntersectionObserver(
      (entries, observer) => this.handleIntersect(entries, observer),
      options,
    );
  }

  private handleIntersect(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
  ): void {
    entries.forEach((entry) => {
      const target = entry.target as HTMLElement;

      const isOnce = target.getAttribute('data-animate-once') === 'true';

      if (entry.isIntersecting) {
        target.classList.add('is-animate');

        if (isOnce) {
          observer.unobserve(target);
        }
      } else {
        if (!isOnce) {
          target.classList.remove('is-animate');
        }
      }
    });
  }

  public init(): void {
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => this.observer.observe(el));
  }
}
