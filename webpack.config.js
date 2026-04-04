const path = require('path');
const {
  createBaseConfig,
  createDevConfig,
  createProdConfig,
} = require('@razerspine/build');
const uiKit = require('@razerspine/ui');
const StaticAssetsPlugin = require('./plugins/static-assets-plugin');

module.exports = (env = {}, argv = {}) => {
  const mode = argv?.mode || env?.mode || process.env.NODE_ENV || 'development';

  const baseConfig = createBaseConfig({
    mode,
    scripts: 'ts',
    styles: 'scss',
    appType: 'mpa',
    templates: {
      entry: 'src/views/pages/',
    },
    resolve: {
      alias: {
        '@views': path.resolve(process.cwd(), 'src/views'),
        '@styles': path.resolve(process.cwd(), 'src/styles'),
        '@scripts': path.resolve(process.cwd(), 'src/scripts'),
        '@images': path.resolve(process.cwd(), 'src/assets/images'),
        '@icons': path.resolve(process.cwd(), 'src/assets/icons'),
        '@fonts': path.resolve(process.cwd(), 'src/assets/fonts'),
        'pug-mixins': uiKit.paths.mixins,
      },
    },
    buildPlugins: [
      new StaticAssetsPlugin({
        files: [
          {from: 'static/og-image.png', to: 'og-image.png'},
          {from: 'static/robots.txt', to: 'robots.txt'},
          {from: 'static/sitemap.xml', to: 'sitemap.xml'},
          {
            from: 'static/google61f7866a032b3f5b.html',
            to: 'google61f7866a032b3f5b.html',
          },
        ],
      }),
    ],
  });

  if (mode === 'development') {
    return createDevConfig(baseConfig);
  }

  return createProdConfig(baseConfig);
};
