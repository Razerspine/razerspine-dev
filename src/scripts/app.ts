import {ConsoleLogger} from '@razerspine/runtime';
import {initNavigation} from '@scripts/init-navigation';
import {initCodeCopy} from '@scripts/code-copy';

(function () {
  const logger = new ConsoleLogger();
  logger.success('app.ts successfully initialized and is now active!');
  initNavigation();
  initCodeCopy();
})();
