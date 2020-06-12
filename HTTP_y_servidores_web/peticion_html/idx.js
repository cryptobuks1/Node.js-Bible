const http = require("http");
const fs = require("fs");
const path = require("path");

const home = fs.readFileSync(path.join(__dirname, "./", "index.html"));
const about = fs.readFileSync(path.join(__dirname, "./", "about.html"));
//const html = fs.readFileSync('./index.html');

http
  .createServer((request, response) => {
    const { url } = request;
    console.log(url);
    if (url === "/") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(home);
    } else if (url === "/about") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(about);
    } else {
      response.writeHead(404, { "Content-Type": "text/html" });
      response.write("Page not found¡");
    }
    response.end();
  })
  .listen(8200);
