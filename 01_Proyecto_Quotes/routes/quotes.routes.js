const router = require("express").Router();
const { QuotesController } = require("../controllers");

// rutas

router.get("/quotes", QuotesController.index);
router.get("/quotes/all", QuotesController.get);
// añadir desde el postman más citas
router.post("/quotes", QuotesController.add);

module.exports = router;
