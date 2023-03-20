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

// 
function createCard() {
    const info = document.querySelectorAll(".info")
    const infoList = [];

    info.forEach((element) => { 
        infoList.push(element.value);
    });
    const add = new Book(infoList[0], infoList[1], infoList[2], infoList[3]);
    library.push(add);
    console.table(library);
}

// Resets all input VALUES to ""
function clearInputs () {
    const info = document.querySelectorAll(".info")
    for (let i = 0; i < info.length; i += 1) {
        info[i].value = "";
    }
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