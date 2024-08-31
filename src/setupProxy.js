const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/back', {
      target: 'http://3.37.170.109:8080',
      pathRewrite: {
        '^/back': '',
      },
      changeOrigin: true,
    }),
  );
};
