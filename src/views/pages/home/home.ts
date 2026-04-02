export class HomePage {
  constructor() {
    this.init();
  }

  private init(): void {
    console.log('HomePage initialized');
  }
}

document.addEventListener('DOMContentLoaded', () => new HomePage());
