class TileRenderer {
    constructor() {
        this.inputCtrl = new InputController();
    }

    renderTiles() {
        const gameScreen = document.getElementById("game-TicTac-screen");
        for(let i=0; i<9; i++) {
            let tile = document.createElement("div");
            tile.classList.add("game-TicTacSquare");
            tile.id = parseInt(i+1);
            tile.addEventListener("click", (e) => {
                this.inputCtrl.updateTile(i+1);
            });

            gameScreen.appendChild(tile);
        }
    }
    renderReset() {
       // <!-- <div id="game-TicTac-reset"> <input id="game-TicTac-reset-button" type="button" value="Reset" onclick="inputControl.reset()"></div> -->
        let div = document.createElement("div");
        div.id = "game-TicTac-reset";

        let input = document.createElement("input");
        input.id = "game-TicTac-reset-button";
        input.type = "button";
        input.value = "Reset";
        input.onclick = this.inputCtrl.reset();
        input.addEventListener("click", (e) => {
            this.inputCtrl.reset();
        });

        const gameScreen = document.getElementById("game-TicTac-screen");
        gameScreen.appendChild(div);
        div.appendChild(input);
    }

}