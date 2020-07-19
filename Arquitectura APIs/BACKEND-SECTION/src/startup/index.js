// clase que le da inicio a la aplicación
const express = require("express");
// const { resolve } = require("./container");
let _express = null;
let _config = null;

class Server {
  constructor({ config, router }) {
    _config = config;
    _express = express().use(router);
  }
  // inicializar el servidor
  start() {
    console.log(_config.APLICATION_NAME);
    return new Promise((resolve) => {
      _express.listen(_config.PORT, () => {
        console.log(
          _config.APLICATION_NAME +
            " API corriendo en el puerto " +
            _config.PORT
        );
        resolve();
      });
    });
  }
}
module.exports = Server;
