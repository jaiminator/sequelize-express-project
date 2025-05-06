// CLIENTE
const BASE_URL = "http://localhost:8000";

const inputTitle = document.getElementById("inputTitle");
const inputDescription = document.getElementById("inputDescription");
const inputLength = document.getElementById("inputLength");
const btnCreate = document.getElementById("btnCreate");

const createBook = () => {
  const bookToCreate = inputTitle.value;
  const descriptionToCreate = inputDescription.value;
  const lengthToCreate = Number(inputLength.value);

  fetch(BASE_URL + "/books", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      title: bookToCreate,
      description: descriptionToCreate,
      length: lengthToCreate
    }),
  }).then(() => {
    inputTitle.value = "";
    inputDescription.value = "";
    inputLength.value = "";
    getBooks();
  });
};

const getBooks = () => {
  fetch(BASE_URL + "/books")
    .then((res) => res.json())
    .then((books) => {
      const booksContainer = document.getElementById("booksContainer");
      booksContainer.innerHTML = "";

      books.forEach((book) => {
        booksContainer.innerHTML += `
          <h2>${book.title} - F: ${
          book.description
        }`;
        /*  <button onclick="deleteBook(${
          book.id
        })">Eliminar</button> <button onclick='updateBook(${JSON.stringify(
          book
        )})'>Modificar</button> </h2> */
      });
    });
};

/* const deletebook = (bookId) => {
  fetch(BASE_URL + "/books/" + bookId, {
    method: "DELETE",
  }).then(() => getbooks());
};

const updatebook = (book) => {
  const bookToCreate = prompt("Ingrese un nuevo nombre", book.title);
  const descriptionToCreate = prompt("Ingrese una nueva fuerza", book.description);
  const idToUpdate = book.id;
  if(!bookToCreate || !descriptionToCreate){
    alert("Por favor ingrese título y descripción");
    return;
  }
  fetch(BASE_URL + `/books/${idToUpdate}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: bookToCreate,
      description: descriptionToCreate,
      length: lengthToCreate
    }),
  }).then(() => {
    alert(`book ${book.title} actualizado a ${bookToUpdate}`);
    getbooks();
  });
}; */

btnCreate.addEventListener("click", createBook);
getBooks();