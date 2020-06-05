'use strict'
const Emitter = require("./Emitter");

const emitter = new Emitter();
// cuando pase el evento onsave
emitter.on('save', ()=> {
    console.log("On save activated 1");  
});

emitter.on('save', ()=> {
    console.log("On save activated 2");  
});

emitter.emit('save');
