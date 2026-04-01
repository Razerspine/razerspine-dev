import {createStore, applyBindings, ConsoleLogger} from '@razerspine/runtime';

interface HomeState {}

export class HomePage {
  private logger = new ConsoleLogger();
  private readonly state: HomeState;

  constructor() {
    const initialData = {};
    const {state} = createStore(initialData, () => this.update());
    this.state = state;

    this.init();
  }

  private init(): void {
    this.update();
    this.logger.success(
      'MPA Home Page initialized with Class-based reactivity!',
    );
  }

  private update(): void {
    applyBindings(document.body, this.state);
  }
}

document.addEventListener('DOMContentLoaded', () => new HomePage());
