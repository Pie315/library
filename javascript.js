const modal = document.querySelector(".modal");
const addBook = document.querySelector(".addBook")
const modalBox = document.querySelector(".modalBox")

function showModal() {
    modal.classList.toggle("hide")
}

modalBox.addEventListener("click", () => {
    showModal()
})

modal.addEventListener("click", () => {
    showModal()
})

addBook.addEventListener("click", () => {
    showModal()
})

