import {ConsoleLogger} from '@razerspine/runtime';
import {initNavigation} from '@scripts/init-navigation';

(function () {
  const logger = new ConsoleLogger();
  logger.success('app.ts successfully initialized and is now active!');
  initNavigation();
})();
