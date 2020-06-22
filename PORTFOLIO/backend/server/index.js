// no se inicializa el servidor aquí.
"use strict";
const express = require("express");
const server = express();
const cors = require("cors");
const { Project } = require("../models");

// middelwares
server.use(express.json()); // para que sea tratado como json
server.use(express.static(__dirname + "/../public"));

server.use(cors());
//rutas
server.get("/", (req, res) => {
  res.status(200).send({
    message: "Hola mundo desde la ráiz de NodeJS",
  });
});

server.get("/api/projects", async (req, res) => {
  let projects = await Project.find();

  projects = projects.map((projects) => {
    // nos devolvería => http://localhost:3000/img/image.jpeg
    projects.image = `${req.protocol}://${req.headers.host}/img/${projects.image}`;
    return projects;
  });
  return res.send({ error: false, data: projects });
});

server.get("/api/project/:id", async (req, res) => {
  const { id } = req.params;
  let project = await Project.findById(id);
  project.image = `${req.protocol}://${req.headers.host}/img/${project.image}`;
  console.log(project);
  
  return res.send({ error: false, data: project });
});

server.get("/api/project/search/:tags", async (req, res) => {
  const {tags} = req.params;
  
  // la i se utiliza para evitar CamelCase
  // cambiado name por tags
  let projects = await Project.find({tags:{$regex:new RegExp(tags,"i")}});
  projects = projects.map((projects) => {
    // nos devolvería => http://localhost:3000/img/image.jpeg
    projects.image = `${req.protocol}://${req.headers.host}/img/${projects.image}`;
    return projects;
  });
  return res.send({ error: false, data: projects });
});

module.exports = server;
