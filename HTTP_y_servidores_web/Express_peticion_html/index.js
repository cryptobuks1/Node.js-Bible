"use strict";
const express = require("express");
const server = express();
//const api = express.Router();
const fs = require("fs");
const path = require("path");

const home = fs.readFileSync(path.join(__dirname, "./", "index.html"));
const about = fs.readFileSync(path.join(__dirname, "./about.html"));

server.get("/", getHome);

server.get("/about", (req, res) => {
  res.write(about);
  res.end();
});
server.listen(8200, () => {
  console.log("Servidor corriendo en el puerto " + 8200);
});

function getHome(req, res) {
  res.write(home);
  res.end();
}

// HTTPS methods

// GET -> lectura
// POST -> crear un nuevo recurso
// PUT -> remplazar un recurso existente completo
// PATCH -> actualizar una propiedad de un recurso
// DELETE -> borrar un recurso
