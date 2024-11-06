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
    displayBooks(); // Display all books initially
    setupFadeIn();
});

function setupThemeToggle() {
    const toggleButton = document.getElementById("toggleTheme");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
        toggleButton.textContent = "Switch to Light Mode";
    } else {
        toggleButton.textContent = "Switch to Dark Mode";
    }

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
        localStorage.setItem("theme", theme);
        toggleButton.textContent = theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";
    });
}

function setupSmoothScroll() {
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        });
    });
}

function setupSearch() {
    document.getElementById("searchButton").addEventListener("click", () => {
        const searchTerm = document.getElementById("searchInput").value.toLowerCase();
        const filteredBooks = books.filter(book =>
            book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm)
        );
        displayBooks(filteredBooks);
    });
}

function displayBooks(bookArray = books) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = ""; // Clear previous entries

    if (bookArray.length === 0) {
        bookList.innerHTML = "<p>No books found.</p>";
    } else {
        bookArray.forEach(book => {
            const bookItem = document.createElement("div");
            bookItem.classList.add("book-item");
            bookItem.innerHTML = `<h3>${book.title}</h3><p>by ${book.author}</p>`;
            bookList.appendChild(bookItem);
        });
    }
}

function setupFadeIn() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll(".section").forEach(section => {
        observer.observe(section);
    });
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }
  