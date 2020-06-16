// correr en desarrollo npm run dev nodemon
'use strict'
const server = require("./server");
const { PORT, MONGO_URI } = require("./config");

const mongoose = require("mongoose");

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(
      "La conexión a la base de datos se ha realizado correctamente.");

    server.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
    
    });
  })
  .catch(console.log);
