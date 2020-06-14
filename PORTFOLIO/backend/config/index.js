// esto solo sirve para local, por eso dotenv se ha instalado en modo developer
if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

module.exports = {
    PORT:process.env.PORT,
    MONGO_URI:process.env.MONGO_URI,
}