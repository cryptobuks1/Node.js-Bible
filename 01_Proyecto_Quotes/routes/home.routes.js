const router = require("express").Router();
const {HomeController} = require("../controllers") 

// rutas
 router.get("/", HomeController.index);
 router.get("/about", HomeController.about);

module.exports = router;