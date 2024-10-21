
function createDivs() {
    const container = document.querySelector("#container");

    for (let i = 0; i < 256; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("divs");
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
        newGridSize = parseInt(newGridSize, 10);

        if (isNaN(newGridSize) || newGridSize <= 0) {
            alert("Please enter a valid positive integer.");
        }

    } while (isNaN(newGridSize) || newGridSize <= 0);

}

function main() {
    reset();
    askForGridSize(); 
    createDivs();
}

const originalDivColor = "white";

main();