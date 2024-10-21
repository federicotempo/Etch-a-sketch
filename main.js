
function createDivs() {
    const container = document.querySelector("#container");

    for (let i = 0; i < 256; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("divs");
        newDiv.addEventListener("click", () => changeDivColor(newDiv));
        container.appendChild(newDiv);
    }
}

function changeDivColor(div) {
    div.style.backgroundColor = "gray";
}

function main() {
    createDivs();
}

main();