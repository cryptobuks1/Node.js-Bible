const { Router } = require("express");
const { ParseInMiddleware } = require("../middlewares")
module.exports = function ({ IdeaController }) {
  const router = Router();

  // ruta de prueba
  router.get("", ParseInMiddleware ,IdeaController.getAll);
  router.get("/:ideaID", IdeaController.get);
  router.get("/:ideaID/all", IdeaController.getUserIdeas);
  router.post("", IdeaController.create);
  //Su función es la misma que PUT, el cual sobreescribe completamente un recurso. Se utiliza para actualizar, de manera parcial una o varias partes. Está orientado también para el uso con proxy.
  router.patch("/:ideaID", IdeaController.update);
  router.delete("/:ideaID", IdeaController.delete);
  router.post(":ideaID/upvote", IdeaController.upvoteIdea);
  router.post(":ideaID/downvote", IdeaController.downvoteIdea);
  return router;
};
