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

function createCard(cardObj) {
    const container = document.querySelector(".cardContainer")
    const card = document.createElement("div");
    card.classList.add("card");
    container.appendChild(card)

    const keys = Object.keys(cardObj);

    for (let i = 0; i < keys.length; i += 1) {
        const key = document.createElement("p");
        key.classList.add("key");

        const input = document.createElement("p");
        input.classList.add("input")

        key.textContent = (`${keys[i]}: `);
        input.textContent = cardObj[keys[i]];

        card.appendChild(key);
        card.appendChild(input);

    }
    container.insertBefore(card, container.children[0]);

}

// Adds to library
function addLibrary() {
    const info = document.querySelectorAll(".info")
    const infoList = [];
    const read = document.querySelector(".check");

    info.forEach((element) => { 
        infoList.push(element.value);
    });
    const add = new Book(infoList[0], infoList[1], infoList[2], read.checked);
    library.push(add);
    createCard(add);
    
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
    addLibrary();
    clearInputs();
    showModal();
});