
function createDivs() {
    const container = document.querySelector("#container");

    for (let i = 0; i < 256; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("divs");
        newDiv.style.backgroundColor = originalColor;
        newDiv.addEventListener("click", () => changeDivColor(newDiv));
        container.appendChild(newDiv);
    }
}

function changeDivColor(div) {
    const newColor = "gray";

    if (div.style.backgroundColor === newColor) {
        div.style.backgroundColor = originalColor;
    } else {
        div.style.backgroundColor =newColor;
    }
}

function main() {
    createDivs();
}

const originalColor = "white";

main();