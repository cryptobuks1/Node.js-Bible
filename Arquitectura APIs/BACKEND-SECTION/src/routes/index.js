const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
// ayuda a capturar las excepciiones que dan las promesas
require("express-async-errors");
const { ErrorMiddleware, NotFoundMiddleware } = require("../middlewares");

module.exports = function ({ HomeRoutes, UserRoutes, IdeaRoutes, CommentRoutes,AuthRoutes }) {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes.use(express.json()).use(cors()).use(helmet()).use(compression());

  apiRoutes.use("/home", HomeRoutes);
  apiRoutes.use("/user", UserRoutes);
  apiRoutes.use("/idea", IdeaRoutes);
  apiRoutes.use("/comment", CommentRoutes);
  apiRoutes.use("/auth", AuthRoutes);

  // para que use la rutas
  router.use("/v1/api", apiRoutes);

  router.use(ErrorMiddleware);
  router.use(NotFoundMiddleware);

  return router;
};
