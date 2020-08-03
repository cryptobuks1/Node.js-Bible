const { Router } = require("express");

module.exports = function ({ UserController }) {
  const router = Router();

  // ruta de prueba
  router.get("/:userID", UserController.get);
  router.get("", UserController.getAll);
  //Su función es la misma que PUT, el cual sobreescribe completamente un recurso. Se utiliza para actualizar, de manera parcial una o varias partes. Está orientado también para el uso con proxy.
  router.patch("/:userID", UserController.update);
  router.delete("/:userID", UserController.delete);
  return router;
};
