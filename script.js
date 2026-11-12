const container = document.querySelector("#container");

function createGrid(size) {
    // Remove the previous grid squares
    container.innerHTML = "";

    // Set the number of squares per row in CSS
    container.style.setProperty("--grid-size", size);

    // Calculate the total number of squares
    const totalSquares = size * size;

    // Create each square
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");

        square.classList.add("square");
        square.addEventListener("mouseover", function() {
    // Generate a random pastel color on the first interaction
    if (!square.dataset.red) {
        square.dataset.red = Math.floor(Math.random() * 56) + 200;
        square.dataset.green = Math.floor(Math.random() * 56) + 200;
        square.dataset.blue = Math.floor(Math.random() * 56) + 200;
        square.dataset.interactions = 0;
    }

    // Increase the interaction count
    square.dataset.interactions++;

    // Calculate the darkening factor
    const factor = Math.max(0, 1 - square.dataset.interactions / 10);

    // Darken the original color progressively
    const red = Math.round(square.dataset.red * factor);
    const green = Math.round(square.dataset.green * factor);
    const blue = Math.round(square.dataset.blue * factor);

    // Apply the updated color
    square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
        container.appendChild(square);
    }
}

// Create the initial 16 x 16 grid
createGrid(16);

const changeGridButton = document.querySelector("#change-grid");

changeGridButton.addEventListener("click", function() {
    const newSize = Number(prompt("Enter the number of squares per side (1-100):"));

    if (newSize >= 1 && newSize <= 100 && Number.isInteger(newSize)) {
        createGrid(newSize);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});