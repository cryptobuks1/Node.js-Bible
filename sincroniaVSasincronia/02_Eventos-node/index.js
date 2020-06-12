'use strict'
// módulo nativo de nodejs
const {EventEmitter} = require("events");
const {SAVE} = require("./event-name")
const emitter = new EventEmitter();
// cuando pase el evento onsave
emitter.on(SAVE, ()=> {
    console.log("On save activated 1");  
});

emitter.on(SAVE, ()=> {
    console.log("On save activated 2");  
});

emitter.emit(SAVE);
