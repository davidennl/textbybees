// main.js (Refactored with z-index fix)

// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");
const papers = document.querySelectorAll(".paper");

// Business Logic
let currentLocation = 1;
const numOfPapers = papers.length;
const maxLocation = numOfPapers + 1;

// Initialize z-indexes programmatically
papers.forEach((paper, index) => {
    paper.style.zIndex = numOfPapers - index;
});

// Event Listeners
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Function to open the book (when turning the first page)
function openBook() {
    book.style.transform = "translateX(50%)";
}

// Function to close the book (at the beginning or end)
function closeBook(isAtBeginning) {
    if (isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(50%)";
    }
}

// Main function to go to the next page
function goNextPage() {
    if (currentLocation < maxLocation) {
        if (currentLocation === 1) {
            openBook();
        }
        
        const paper = papers[currentLocation - 1];
        paper.classList.add("flipped");
        paper.style.zIndex = currentLocation;
        
        if (currentLocation === numOfPapers) {
            closeBook(false);
        }
        
        currentLocation++;
    }
}

// Main function to go to the previous page
function goPrevPage() {
    if (currentLocation > 1) {
        currentLocation--;
        
        if (currentLocation === 1) {
            closeBook(true);
        }
        
        if (currentLocation === numOfPapers) {
            openBook();
        }
        
        const paper = papers[currentLocation - 1];
        paper.classList.remove("flipped");
        // Restore original z-index
        paper.style.zIndex = numOfPapers - (currentLocation - 1);
    }
}