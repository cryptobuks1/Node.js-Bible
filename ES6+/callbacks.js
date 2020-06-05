const booksDb = [
  { id: 1, title: "Clean Code", authorId: 1 },
  { id: 2, title: "The pragmatic programmer", authorId: 2 },
  { id: 3, title: "Web Development with Node.js", authorId: 2 },
];

const authorsDb = [
  { id: 1, name: "Robert C. Martin" },
  { id: 2, name: "Steve Forest" },
];

function getBookById(id, callback) {
  // buscar libro por id
  const book = booksDb.find((book) => book.id === id);
  // si no hay libro
  if (!book) {
    const error = new Error();
    error.message = "Book not found!";
    return callback(error);
  }
  //  si encuentra libro
  callback(null, book);
}

function getAuthorkById(id, callback) {
  // buscar libro por id
  const author = authorsDb.find((author) => author.id === id);
  // si no hay libro
  if (!author) {
    const error = new Error();
    error.message = "Author not found!";
    return callback(error);
  }
  //  si encuentra autor
  callback(null, author);
}

//callback hell
getBookById(2, (err, book) => {
  if (err) {
    return console.log(err.message);
  }
  getAuthorkById(book.authorId, (err, author) => {
    if (err) {
      return console.log(err.message);
    }
    return console.log(`Este libro ${book.title} lo escribio ${author.name}`);
  });
  return console.log(book);
});
