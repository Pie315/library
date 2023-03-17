const modal = document.querySelector(".modal");
const addBook = document.querySelector("#addBook");
const modalBox = document.querySelector(".modalBox");
const submit = document.querySelector("#submit");

let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
}

function showModal() {
    modal.classList.toggle("hide")
}

function createCard() {
    const info = document.querySelectorAll(".info")
    const infoList = [];

    info.forEach((element) => { 
        infoList.push(element.value);
    });
    

}

modalBox.addEventListener("click", (e) => {
    e.stopPropagation();
});

modal.addEventListener("click", () => {
    showModal()
});

addBook.addEventListener("click", () => {
    showModal()
});

submit.addEventListener("click", (Event) => {
    Event.preventDefault();
    createCard();
});