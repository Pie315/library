function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.getInfo = function() {
        return(("You have read "+ this.pages + " pages of " + this.title));
    }
};

const Bernanke = new Book("The courage to act", "Ben S. Bernanke", 500, (false));
const UndauntedCourage = new Book("Undaunted Courage", "Setphen Ambroze", 600, false);

console.log(Bernanke.getInfo());