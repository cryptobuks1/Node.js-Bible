const { Router } = require("express");

module.exports = function ({ CommentController }) {
  const router = Router();

  // ruta de prueba
  router.get("/:commentID/unique", CommentController.get);
  router.get("/:ideaID", CommentController.getIdeaComments);
  router.post("/:ideaID", CommentController.createComment);
  //Su función es la misma que PUT, el cual sobreescribe completamente un recurso. Se utiliza para actualizar, de manera parcial una o varias partes. Está orientado también para el uso con proxy.
  router.patch("/:commentID", CommentController.update);
  router.delete("/:commentID", CommentController.delete);
  return router;
};
