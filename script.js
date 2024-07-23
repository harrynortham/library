const booksContainer = document.getElementById("books-container");
const addBookButton = document.getElementById("add-book");
const addBookDialog = document.getElementById("add-book__dialog");
const addBookForm = document.getElementById("add-book__form");
const formError = document.getElementsByClassName("formError")[0];
const nameInput = document.getElementById("add-book__name");
const authorInput = document.getElementById("add-book__author");
const pagesInput = document.getElementById("add-book__pages");

const myLibrary = [];

const bookPrototype = {
  read: function () {
    this.isRead = true;
    console.log(myLibrary);
  },
};

function Book(name, author, pages) {
  // the constructor...
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.isRead = false;
}

Object.assign(Book.prototype, bookPrototype);

function showBooks() {
  // if already exists, delete all child nodes
  booksContainer.innerHTML = "";
  myLibrary.map((book) => {
    //create each element add to the contaienr
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<div>${book.name}</div> <button>Read</button>`;

    newDiv.addEventListener("click", () => {
      book.read();
    });
    booksContainer.appendChild(newDiv);
  });
}

function addBookToLibrary(name, author, pages) {
  // do stuff here
  let book = new Book(name, author, pages);
  myLibrary.push(book);
  console.log(myLibrary);
  //refresh the dom elements
  showBooks();
}

function closeDialog() {
  nameInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";

  addBookDialog.close();
}

addBookButton.addEventListener("click", () => {
  addBookDialog.showModal();
});

addBookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (
    nameInput.value == "" ||
    authorInput.value == "" ||
    pagesInput.value == ""
  ) {
    formError.textContent = "Fields can't be empty.";
  } else {
    addBookToLibrary(nameInput.value, authorInput.value, pagesInput.value);
    closeDialog();
  }
});
