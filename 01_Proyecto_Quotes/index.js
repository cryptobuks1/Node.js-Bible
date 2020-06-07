// Arrancar con nodemon -> npm run dev
const express = require("express");
const server = express();
const { PORT } = require("./config");
const { HomeRoutes,QuotesRoutes } = require("./routes");
const { NotFoundMiddleware } = require("./middlewares");
// Middlewares
// public accesible automáticamente
server.use(express.static("./public"));
// transformar la peticiones POST a formato Json
// se puede usar bodyparser pero usamos json.
server.use(express.json());

// rutas
server.use("/", HomeRoutes);
server.use("/", QuotesRoutes);
server.use(NotFoundMiddleware);

server.listen(PORT, () => {
  console.log(`Aplicación corriendo en el puerto ${PORT}`);
});
