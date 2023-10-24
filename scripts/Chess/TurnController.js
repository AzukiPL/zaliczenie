class TurnController {
    constructor () {
        this.turn = "white";
        this.turnDisplay();
    }
    canChangeTurn(color) {
        if(color == this.turn) {
            return true;
        }
        else return false;
    }
    turnOver(color) {
        if(color == this.turn) {
            if(color == "white") this.turn = "black";
            else if(color == "black") this.turn = "white";
            document.getElementById("game-TicTac-reset-button").value = this.turn+"'s turn";
        }
    }

    // removed because it makes me sick .<.
    #flipTable() {
        const pawns = document.querySelectorAll(".game-Chess-pawn-images");
        pawns.forEach(pawn => {
            const row =  9 - pawn.customObject.row;
            const col =  9 - pawn.customObject.column;
            document.getElementById(String(row)+String(col)).appendChild(pawn);
            pawn.customObject.row = row;
            pawn.customObject.column = col;
        });
    }

    turnDisplay() {
        let div = document.createElement("div");
        div.id = "game-TicTac-reset";

        let turn = document.createElement("input");
        turn.type = "button";
        turn.id = "game-TicTac-reset-button";
        turn.value = this.turn+"'s turn";

        const gameScreen = document.getElementById("game-Chess-screen");
        gameScreen.appendChild(div);
        div.appendChild(turn);
    }

}