class TurnController {
    constructor () {
        this.turn = "white";
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

}