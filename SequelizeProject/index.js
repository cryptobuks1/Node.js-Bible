"use strict";
const { CRUD } = require("./helpers");
const db = require("./models");

const params = process.argv;

console.log(params); // se inicia -> node . "Hello World"
/*
Nos devulve un array
[
  1º'C:\\Program Files\\nodejs\\node.exe',
  2º'D:\\Desarrollo Aplicaciones WEB 2018\\Udemy Cursos\\La Biblia Node.js\\SequelizeProject',
  3º'Hello World'
]
 */
// si no hay más de 2 comandos que son por defecto que salga del programa
if (params.length <= 2) {
  process.exit(0); // No continuar con el flujo.
}

// si hay más de 2 los recogemos
// ejemplo de petición -> --create:Contact --firstname="jose mari"
const args = params.slice(2);
// separamos para coger el comando del CRUD en este caso create
const command = args[0].split(":")[0].substring(2); // substring quita los dos guiones de create
const entity = args[0].split(":")[1]; //recoge la entidad Contact

switch (command) {
  case CRUD.CREATE:
    const data = {};
    // recoger los argumentos -> --firstname="jose mari"
    args.slice(1).map((arg) => {
      const tmp = arg.split("=");
      //quitar guiones
      data[tmp[0].substring(2)] = tmp[1]; //recoger el value 1
      console.log(data);
    });
    db[entity]
      .create(data)
      .then(() => {
        console.log("Contacto creado");
      })
      .catch(console.log);
    break;
  //process.exit(0); // No continuar con el flujo.
  case CRUD.READ:
    db[entity].findAll().then(console.log).catch(console.log);
    break;
  case CRUD.UPDATE:
    console.log("Creado¡¡¡");
    break;
  case CRUD.DELETE:
     // recoger los argumentos -> --firstname="jose mari"
    args.slice(1).map((arg) => {
      const tmp = arg.split("=");
      //quitar guiones
      data[tmp[0].substring(2)] = tmp[1]; //recoger el value 1
      console.log(data);
    });

    db[entity].destroy({
      where:{
        id: tmp[1]
      }
    })
    break;

  default:
    console.log("Operación no encontrada");
}
