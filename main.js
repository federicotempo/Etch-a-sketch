
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
        div.style.backgroundColor =newDivColor;
    }
}

function main() {
    createDivs();
}

const originalDivColor = "white";

main();