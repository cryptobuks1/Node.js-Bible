'use strict'
module.exports = {
    // variable de entorno si existe. proccess.env(es la forma que se comunica node con las variables de entorno) ,PORT(variable que se configura a nivel de SO)
    PORT: process.env.PORT || 4000,
}