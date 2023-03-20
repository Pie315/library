const modal = document.querySelector(".modal");
const addBook = document.querySelector("#addBook");
const modalBox = document.querySelector(".modalBox");
const submit = document.querySelector("#submit");

const library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
}

function showModal() {
    modal.classList.toggle("hide")
}

// Adds to library and adds card
function createCard() {
    const info = document.querySelectorAll(".info")
    const infoList = [];
    const read = document.querySelector(".check");

    info.forEach((element) => { 
        infoList.push(element.value);
    });
    const add = new Book(infoList[0], infoList[1], infoList[2], read.checked);
    library.push(add);
    // console.table(library);

    const container = document.querySelector(".cardContainer")

    
}

// Resets all input VALUES to default
function clearInputs () {
    const read = document.querySelector(".check");
    const info = document.querySelectorAll(".info")
    for (let i = 0; i < info.length; i += 1) {
        info[i].value = "";
    }
    read.checked = false;
}

// Stops propagation that closes modal 
modalBox.addEventListener("click", (e) => {
    e.stopPropagation();
});

// Close modal when clicked outside
modal.addEventListener("click", () => {
    showModal();
});

// Open modal button
addBook.addEventListener("click", () => {
    showModal()
});

// Submit button
submit.addEventListener("click", (Event) => {
    Event.preventDefault();
    createCard();
    clearInputs();
    showModal();
});