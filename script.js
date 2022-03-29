/**
 * Get the gridContainer and the clear button
 */
const gridContainer = document.querySelector(".gridContainer");
const clearButton = document.querySelector("#clear");

/**
 * Keeps track of whether the mouse button is down
 */
let isDrawing = false;

/**
 * Generates a nxn grid of divs
 * 
 * @param n Number of rows/columns
 */
function createGrid(n) {
    for (let i = 0; i < n; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < n; j++) {
            const elem = document.createElement("div");
            elem.classList.add("elem");
            elem.addEventListener('mouseover', draw);
            row.appendChild(elem);
        }
        gridContainer.appendChild(row);
    }
}

/**
 * Draws on the square
 */
function draw() {
    if (isDrawing) {
        this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    }
}

/**
 * Clears the grid and prompts user for new grid size
 */
function clear() {
    // clear grid
    let child = gridContainer.lastElementChild;
    while (child !== null) {
        gridContainer.removeChild(child);
        child = gridContainer.lastElementChild;
    }
    // prompt user for new size
    let newSize = prompt("New Canvas Size");

    while (newSize > 100) {
        newSize = prompt("Error");
    }
    createGrid(newSize);

}


/**
 * Add event listener to the clear button
 */
clearButton.addEventListener('click', clear);

/**
 * Add event listener to the grid
 */
gridContainer.addEventListener('mousedown', () => isDrawing = true);
gridContainer.addEventListener('mouseup', () => isDrawing = false);

createGrid(32);
