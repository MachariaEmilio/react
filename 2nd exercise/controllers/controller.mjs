// Here is the authorization file to query from the api

const api = "https://reactnd-books-api.udacity.com";

// Generate a unique token for storing your bookshelf data on the backend server.
// let token = localStorage.token
// if (!token)
// token = localStorage.token = Math.random().toString(36).substr(-8)
const token = 10;
const headers = {
  Accept: "application/json",
  Authorization: "token",
};

async function all (){
    const read = await fetch("https://reactnd-books-api.udacity.com/books",  {headers: {Authorization: "token"}})
    console.log(await read.json())
}
all()

export async function gete(req, res){
    const read = await fetch("https://reactnd-books-api.udacity.com/books",  {headers: {Authorization: "token"}})
    console.log(read.body)
    res.send(JSON.parse(read.body))
}

export const get = async (bookId) =>
  await fetch(`${api}/books/${bookId}`, {
    headers: {
      Authorization: token,
    },
  })
    .then((res) => {
      // console.log (res.json())
      res.json();
    })
    .then((data) => data.book);

export const getAll = () =>
  fetch(`${api}/books`, { headers: { Authorization: "jkksd" } })
    .then((res) => res.json())
    .then((data) => data.books);

export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ shelf }),
  }).then((res) => res.json());

export const search = (query) =>
  fetch(`${api}/search`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((data) => data.books);

// This will allow you to query from the API
// Welcome to the Book Lender API!

// Use an Authorization header to work with your own data:

fetch(api, { headers: { Authorization: "whatever-you-want" } });

// The following endpoints are available:

// GET /status
// GET /books
// GET /books/:id
// PUT /books/:id { shelf }
// POST /search { query, maxResults }
