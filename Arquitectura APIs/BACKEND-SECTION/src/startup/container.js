// contenedor de inyección de dependencias
// inyectar objetos como si fuesen (asClass(clase), asValue(valor), asFunction(función))
const { createContainer, asClass, asValue, asFunction } = require("awilix");
// Importamos capas a usar
//services
const { HomeService } = require("../services");

// config
const config = require("../config");
// app lo interpreta como la clase que tenemos Server en el index.
const app = require(".");

//controllers
const { HomeController } = require("../controllers");

// routes
const { HomeRoutes } = require("../routes/index.routes");
const Routes = require("../routes");

const container = createContainer();

// models
const { User, Comment, Idea } = require("../models");

// inyección de clase, segmentado en varios registros
container
  .register({
    // configuración principal
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    // servicios
    // singleton pide que siempre sea la misma instancia de la clase compartida con las diferentes partes
    // inyecta la clase HomeService en el controlador
    HomeService: asClass(HomeService).singleton(),
  })
  .register({
    // controladores
    // para mantener el scope se usa bind
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
  })
  .register({
    // rutas
    HomeRoutes: asFunction(HomeRoutes).singleton(),
  })
  .register({
    User:asValue(User),
    Idea:asValue(idea),
    Comment:asValue(comment),
  })

module.exports = container;
