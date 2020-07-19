const { createContainer, asClass, asValue, asFunction } = require("awilix");

//service
const { HomeService } = require("../services");

// config
const config = require("../config");
// app lo interpreta como la clase que tenemos Server en el index.
const app = require(".");
console.log(app);

//controllers
const { HomeController } = require("../controllers");

// routes
const { HomeRoutes } = require("../routes/index.routes");
const Routes = require("../routes");

const container = createContainer();

// inyección de clase, segmentado en varios registros
container
  .register({ // configuración principal
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({ // servicios
    // singleton pide que siempre sea la misma instancia de la clase compartida con las diferentes partes
    // inyecta la clase HomeService
    HomeService: asClass(HomeService).singleton(),
  })
  .register({ // controladores
    // para mantener el scope se usa bind
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
  })
  .register({ // rutas
    HomeRoutes: asFunction(HomeRoutes).singleton(),
  });

module.exports = container;

