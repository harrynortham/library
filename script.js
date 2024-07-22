const addBookButton = document.getElementById("add-book");
const addBookDialog = document.getElementById("add-book__dialog");
const addBookForm = document.getElementById("add-book__form");
const formError = document.getElementsByClassName("formError")[0];
const bookName = document.getElementById("add-book__name");
const bookAuthor = document.getElementById("add-book__author");
const bookPages = document.getElementById("add-book__pages");

const myLibrary = [];

function Book(name, author, pages) {
  // the constructor...
  this.name = name;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  // do stuff here
}

function closeDialog() {
  bookName.value = "";
  bookAuthor.value = "";
  bookPages.value = "";

  addBookDialog.close();
}

addBookButton.addEventListener("click", () => {
  addBookDialog.showModal();
});

addBookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (bookName.value == "" || bookAuthor.value == "" || bookPages.value == "") {
    formError.textContent = "Fields can't be empty.";
  } else {
    let book = new Book(bookName.value, bookAuthor.value, bookPages.value);

    myLibrary.push(book);

    closeDialog();

    //refresh the dom elements

    console.log(myLibrary);
  }
});
