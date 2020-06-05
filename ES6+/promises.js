"use strict";
// igual que el ejemplo de los callbacks pero con promesas.
const booksDb = [
  { id: 1, title: "Clean Code", authorId: 1 },
  { id: 2, title: "The pragmatic programmer", authorId: 2 },
  { id: 3, title: "Web Development with Node.js", authorId: 2 },
];

const authorsDb = [
  { id: 1, name: "Robert C. Martin" },
  { id: 2, name: "Steve Forest" },
];

function getBookById(id) {
  return new Promise((resolve, reject) => {
    // buscar libro por id
    const book = booksDb.find((book) => book.id === id);
    // si no hay libro
    if (!book) {
      const error = new Error();
      error.message = "Book not found!";
      reject(error);
    }
    resolve(book);
  });
}

function getAuthorkById(id) {
  return new Promise((resolve, reject) => {
    // buscar libro por id
    const author = authorsDb.find((author) => author.id === id);
    // si no hay libro
    if (!author) {
      const error = new Error();
      error.message = "Author not found!";
      reject(error);
    }
    resolve(author);
  });
}

// llamadas a las funciones
getBookById(1)
  .then((book) => {
    return getAuthorkById(book.id);
  }) // getAuthorkById retorna otra promesa
  .then((author) => {
    console.log(author);
  })
  .catch((error) => {
    console.log(error.message);
  });
