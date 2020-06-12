// propio visor de eventos
"use strict";
function Emitter() {
  this.events = {};
}

// type es el tipo de evento, listener quien responde cuando ocurre el evento
Emitter.prototype.on = function (type, listener) {
  // events es como si fuese un método de la clase Emitter
  // Si existe se le asigna el array que tenía antes, en caso de que no se encuntre será un array vacio
  this.events[type] = this.events[type] || [];

  this.events[type].push(listener);
};

Emitter.prototype.emit = function (type) {
  if (this.events[type]) {
      // ejecutar todos los listeners del evento.
    this.events[type].forEach((listener) => listener());
  }
};

module.exports = Emitter;
