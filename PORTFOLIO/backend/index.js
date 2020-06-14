// correr en desarrollo npm run dev
const server = require("./server");
const { PORT } = require("./config");

server.listen(PORT, () => {
    console.log(`PortFolioAPP corriendo en el puerto ${PORT} `);
    
})