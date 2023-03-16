const modal = document.querySelector(".modal");
const addBook = document.querySelector("#addBook");
const modalBox = document.querySelector(".modalBox");
const submit = document.querySelector("#submit");

function showModal() {
    modal.classList.toggle("hide")
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

submit.addEventListener("click", () => {
    Event.preventDefault();
});