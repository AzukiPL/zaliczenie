class HighlightToggle {
    constructor () {
        this.#createToggle();

    }

    #createToggle() {
        const toggleCon = document.createElement("div");
        toggleCon.classList.add("game-Chess-tog-container")
        ;
        const toggle = document.createElement("button");
        toggle.classList.add("game-Chess-tog");
        toggle.innerHTML = "Highlight Toggle";
        toggle.onclick = this.#toggleOnClick();

        document.getElementById("game-Chess-screen").appendChild(toggleCon);
        toggleCon.appendChild(toggle);
    }

    #toggleOnClick() {
        console.log("click")
    }
}

// Unfinished