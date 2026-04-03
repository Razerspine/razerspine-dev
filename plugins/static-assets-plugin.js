const {sources, Compilation} = require('webpack');
const fs = require('fs');
const path = require('path');

class StaticAssetsPlugin {
  constructor(options = {}) {
    this.files = options.files || [];
  }

  applyProd(config) {
    config.plugins = config.plugins || [];

    config.plugins.push({
      apply: (compiler) => {
        compiler.hooks.thisCompilation.tap(
          'StaticAssetsPlugin',
          (compilation) => {
            compilation.hooks.processAssets.tap(
              {
                name: 'StaticAssetsPlugin',
                stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONS,
              },
              () => {
                this.files.forEach(({from, to}) => {
                  const filePath = path.resolve(process.cwd(), from);

                  if (!fs.existsSync(filePath)) {
                    console.warn(`[StaticAssetsPlugin] Missing: ${from}`);
                    return;
                  }

                  const content = fs.readFileSync(filePath);

                  compilation.emitAsset(to, new sources.RawSource(content));

                  console.log(`[StaticAssetsPlugin] Emitted: ${to}`);
                });
                console.log(`[StaticAssetsPlugin] Done (${this.files.length} files)`);
              },
            );
          },
        );
      },
    });
  }
}

module.exports = StaticAssetsPlugin;
