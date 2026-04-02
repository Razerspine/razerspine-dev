import {ConsoleLogger} from '@razerspine/runtime';
import {initNavigation} from '@scripts/init-navigation';
import {initCodeCopy} from '@scripts/code-copy';
import {ScrollAnimation} from '@scripts/scroll-animation';

(function () {
  const logger = new ConsoleLogger();
  const scrollAnimation = new ScrollAnimation();

  logger.success('app.ts successfully initialized and is now active!');

  initNavigation();
  initCodeCopy();
  scrollAnimation.init();
})();
