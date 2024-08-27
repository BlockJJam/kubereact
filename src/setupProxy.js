const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {

  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8021/api',
      changeOrigin: true,
    }),
  );
};
