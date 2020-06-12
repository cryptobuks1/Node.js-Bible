// NODE_ENV variable de entorno que devuelve si estamos en producción o local
if (process.env.NODE_ENV !== "production") {
  // todas las variables de entorno que están en .env nos las pasa al entorno de ejecutción de nodejs. config() se le pasa un path si no está .env en la ráiz.
 require("dotenv").config();

}

module.exports = {
  MONGO_URI: process.env.MONGO_URI,
};
