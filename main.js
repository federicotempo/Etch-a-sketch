
function createGrid(gridSize = 16) {
    const container = document.querySelector("#container");
    const containerWidth = 600;
    const containerHeight = 600;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("divs");
        newDiv.style.width = `${(containerWidth / gridSize)}` + 'px';
        newDiv.style.height = `${(containerHeight / gridSize)}` + 'px';
        newDiv.style.backgroundColor = originalDivColor;
        newDiv.addEventListener("click", () => changeDivColor(newDiv));
        container.appendChild(newDiv);
    }
}

function changeDivColor(div) {
    const newDivColor = "gray";

    if (div.style.backgroundColor === newDivColor) {
        div.style.backgroundColor = originalDivColor;
    } else {
        div.style.backgroundColor = newDivColor;
    }
}

function reset() {
    const resetButton = document.querySelector("#reset-button");
    resetButton.addEventListener("click", () => {
        location.reload();
    })
}

function askForGridSize() {
    const changeSizeButton = document.querySelector("#grid-size-button");
    changeSizeButton.addEventListener("click", () => getGridSizeFromUser());
}

function getGridSizeFromUser() {
    let newGridSize;

    do {
        newGridSize = prompt("Please enter the grid size (e.g., 16 for a 16x16 grid. (max. 100)): ");

        if (newGridSize === null) {
            return;
        }

        newGridSize = parseInt(newGridSize, 10);

        if (isNaN(newGridSize) || newGridSize <= 0) {
            alert("Please enter a valid positive integer.");
        }

    } while (isNaN(newGridSize) || newGridSize <= 0);

    if (newGridSize) {
        changeGridSize(newGridSize);
    }
}

function deleteGrid() {
    const container = document.querySelector("#container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function changeGridSize(newGridSize) {
    deleteGrid();
    createGrid(newGridSize);
}

function main() {
    reset();
    askForGridSize();
    createGrid();
}

const originalDivColor = "white";

main();