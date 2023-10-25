class TileRenderer {
    constructor() {
        this.inputCtrl = new InputController();
    }

    // renders 9 tiles on the screen, and add event listener to it that checks for update, which is main logic of the game
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

    // this method renders reset button below game screen, so when player wins or match is draw, 
    // players can press reset button to refresh game without refreshing scores of each player.
    renderReset() {
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