const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
//////////////////////////////////
//Destructuring
//////////////////////////////////


const book = getBook(2);
const {title, author, pages, publicationDate, genres, hasMovieAdaptation} = book;
console.log(title, author, genres, publicationDate);


//////////////////////////////////
//Rest operator
//////////////////////////////////

const [primaryGenre, secondaryGenre, ...others] = genres;
console.log(primaryGenre, secondaryGenre, others);

//////////////////////////////////
//Spread operator
//////////////////////////////////

const newGenres = [...genres, 'epic fantacy'];
console.log(newGenres);

const oldBook = getBook(1);
const updatedBook = {...book, 
  //adding new property
  moviePublicationDate: "2024-02-02",

  //update an existing property
  pages: 1210}
console.log(updatedBook);

//////////////////////////////////
//Template literal
//////////////////////////////////

const summery = `${title}, a ${pages}-page long book, was written by ${author} and publish in ${publicationDate.split("-")[0]}`;
console.log(summery);

//////////////////////////////////
//Ternaries instead of if/else
//////////////////////////////////

const pageRange = pages > 1000 ? 'over a thousend' : 'less than 1000';
console.log(pageRange);

//////////////////////////////////
//Arrow function
//////////////////////////////////

const getYear = (date) => date.split("-")[0];
console.log(`The publication year of ${title} is ${getYear(publicationDate)}`); 

//////////////////////////////////
//Short circuting && || ??
//////////////////////////////////

console.log(true && "Some String");
console.log(false && "Some String");
console.log(hasMovieAdaptation && "This book has a movie");

//falsy: 0, '', null, undefined
console.log(0 && 'Some String');

console.log(true || "Some String");
console.log(false || "Some String");
console.log(hasMovieAdaptation || "This book has a movie");

//|| is appropriate as default value for those property which not defined!
console.log(0 || 'Some String');
console.log(book.translations.spanish || 'There is no spanish traslation for this book!');

//to handle 0 or '' use ??

const count = book.reviews.librarything.reviewsCount ?? "no data";
console.log(count);

//////////////////////////////////
//Optional chaninig ?.
//////////////////////////////////

const book2 = getBook(3);
const getTotalReviewCount = (book) => {
  const goodreads = book?.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book?.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
};

console.log(getTotalReviewCount(book2));

//////////////////////////////////
//Map method
//////////////////////////////////

const books = getBooks();
const titles = books.map((book) => book.title);
console.log(titles);

const essentialData = books.map((book) => ({
    title: book.title,
    author: book.author,
    reviewsCount: getTotalReviewCount(book)
  }));
console.log(essentialData);

//////////////////////////////////
//Filter method
//////////////////////////////////

const longBooks = books.filter((book) => book.pages > 300).map((book)=>({
  title: book.title,
  pages: book.pages
}));
console.log(longBooks);

const adventureBooks = books.filter((book)=> book.genres.includes("adventure")).map((book)=>({
  title: book.title,
  pages: book.pages
}));
console.log(adventureBooks);

//////////////////////////////////
//Reduce method
//////////////////////////////////

const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0 );
console.log(pagesAllBooks);

//////////////////////////////////
//Sort method 
//////////////////////////////////

//(Sort method muttates the original array contrary to Map, Filter and Reduce which creating new array and indeed they are immutable)
//To solve this issue before this method let's use slice() before

const sortedBooksByTitleAsc = books.slice().sort((a, b) => a.pages - b.pages).map(book=>({title: book.title, pages:book.pages}));
const sortedBooksByTitleDesc = books.slice().sort((a, b) => b.pages - a.pages).map(book=>({title: book.title, pages:book.pages}));
console.log(sortedBooksByTitleAsc, sortedBooksByTitleDesc);

//////////////////////////////////
//Immutable Arrays
//////////////////////////////////

// 1) Add a book to a array
const newBook = {
  id: 6,
  title: "Test",
  author: "Test Author"
}

const booksAfterAdding = [...books, newBook];
console.log(booksAfterAdding);

// 2) Delete a book from array
const booksAfterDeleting = booksAfterAdding.filter(book=>book.id !== 3);
console.log(booksAfterDeleting);

// 3) update a book in the array
const booksAfterUpdating = booksAfterDeleting.map(book=> book.id === 1 ? {...book, pages:1210} : book);
console.log(booksAfterUpdating);

//////////////////////////////////
// Async JS: promise
//////////////////////////////////

fetch("https://jsonplaceholder.typicode.com/todos").then(resposne => resposne.json()).then(data => console.log(data));
console.log("Meysam");
// As you can see the second log is executed first then the api result is printed. This is the art of Promise

//////////////////////////////////
// Async JS : async function and await
//////////////////////////////////

async function getTodos() {
 const resposne =  await fetch("https://jsonplaceholder.typicode.com/todos");
 const data = await resposne.json();
 console.log(data);

 return data;
}

const todos = getTodos();
console.log(todos);
console.log("Asadian");

//Inside of the function await keyword force the interpreter to wait for each line then goes to the next line;