"use strict";
// en async/await hay que usar try catch porque no tienen un método catch como promises.

const booksDb = [
  { id: 1, title: "Clean Code", authorId: 1 },
  { id: 2, title: "The pragmatic programmer", authorId: 2 },
  { id: 3, title: "Web Development with Node.js", authorId: 2 },
];

const authorsDb = [
  { id: 1, name: "Robert C. Martin" },
  { id: 2, name: "Steve Forest" },
];

async function getBookById(id) {
  // buscar libro por id
  const book = booksDb.find((book) => book.id === id);
  // si no hay libro
  if (!book) {
    const error = new Error();
    error.message = "Book not found!";
    // captura del error
    throw error;
  }
  return book;
}

async function getAuthorkById(id) {
  // buscar libro por id
  const author = authorsDb.find((author) => author.id === id);
  // si no hay libro
  if (!author) {
    const error = new Error();
    error.message = "Author not found!";
    // captura del error
    throw error;
  }
  return author;
}

// función principal
async function main(){
    try {
        // espera a que se resuelva
        const book = await getBookById(5);
        const author = await getAuthorkById(book.authorId);
        console.log(`Este libro ${book.title} fue escrito por ${author.name}`);
    }catch(ex){
        console.log(ex.message);  
    }
}

main();