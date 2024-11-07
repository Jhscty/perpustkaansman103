const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Moby-Dick", author: "Herman Melville" },
    { title: "War and Peace", author: "Leo Tolstoy" },
    { title: "The Odyssey", author: "Homer" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "Great Expectations", author: "Charles Dickens" },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "The Book Thief", author: "Markus Zusak" },
    { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling" },
    { title: "The Hunger Games", author: "Suzanne Collins" },
    { title: "Jane Eyre", author: "Charlotte Brontë" },
    { title: "Fahrenheit 451", author: "Ray Bradbury" },
    { title: "Animal Farm", author: "George Orwell" },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky" }
];

document.addEventListener("DOMContentLoaded", () => {
    setupThemeToggle();
    setupSmoothScroll();
    setupSearch();
    displayBooks(); 
});

function setupThemeToggle() {
    const toggleButton = document.getElementById("toggleTheme");
    const currentTheme = localStorage.getItem("theme");
    document.body.classList.toggle("dark-mode", currentTheme === "dark");
    toggleButton.textContent = currentTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";

    toggleButton.addEventListener("click", () => {
        const isDarkMode = document.body.classList.toggle("dark-mode");
        toggleButton.textContent = isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode";
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    });
}

function setupSmoothScroll() {
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
        });
    });
}

function setupSearch() {
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");
    
    searchButton.addEventListener("click", searchBooks);
    searchInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") searchBooks();
    });
}

function searchBooks() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm));
    displayBooks(filteredBooks);
}

function displayBooks(bookArray = books) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = bookArray.map(book => `<div class="book-item"><h3>${book.title}</h3><p>${book.author}</p></div>`).join("");
}

