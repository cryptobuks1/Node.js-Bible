const path = require("path");

const DB_PATH = path.join(__dirname ,"..","data", "db.json");
let db = require(DB_PATH);

const fs = require("fs");

// renderizado de archivos
function render(file, res) {
  return res.sendFile(path.join(__dirname + `/../views/${file}.html`));
}

class QuotesController {
  async index(req, res) {
    return render("quotes", res);
  }
  //retornar la base de datos
  async get(req, res) {
    return res.send(db);
  }

  // añadir una nueva cita desde postman
  async add(req, res) {
   // recogemos lo que viene en el body
    const { body: quote } = req;
    // revogemos cuantos objetos hay
    const lastQuote = db[db.lenght - 1];
    const { id } = lastQuote;
    // siguiente id libre
    quote.id = id + 1;
    // añadimos al array de base de datos
    db.push(quote);
    // escribirlo en el archivo de nuestra bd
    fs.writeFileSync(DB_PATH, JSON.stringify(db));
    return res.status(201).send()
  }
}

module.exports = new QuotesController();
