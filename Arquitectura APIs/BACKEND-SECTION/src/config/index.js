// si no estamos en producción va a cargar nuestras variables de entorno
if(process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

module.exports = {
    PORT:process.env.PORT,
    MONGO_URI:process.env.MONGO_URI,
    APPLICATION_NAME:process.env.APPLICATION_NAME,
}