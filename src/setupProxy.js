const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/v1/prices/cheap", {
      target: "https://api.travelpayouts.com",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/places2", {
      target: "http://autocomplete.travelpayouts.com",
      changeOrigin: true,
    })
  );
};
