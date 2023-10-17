class PawnsParameters {
    // Row from top to bottom
    // Row 1-8
    // Column from left to right
    // Column 1-8
    constructor (row, column, color) {
        this.row = row;
        this.column = column;
        this.color = color;
        this.tileID = String(this.row)+String(this.column);
        this.rangeRow = [];
        this.rangeCol = [];
        this.object = document.getElementById(this.tileID);
    }

    onChessSelect() {
        this.object = document.getElementById(this.tileID+" Pawn");
        this.object.addEventListener("click", (e) => {
            this.refreshTiles();
            // document.getElementById(String(this.row)+String(this.column)).classList.add("game-Chess-selected");
            for(let i=0; i<this.rangeRow.length;i++) {
                if(document.getElementById(String(parseInt(this.row+this.rangeRow[i]))+String(parseInt(this.column+this.rangeCol[i]))) != null)
                {
                    const tile = document.getElementById(String(parseInt(this.row+this.rangeRow[i]))+String(parseInt(this.column+this.rangeCol[i])));
                    tile.classList.add("game-Chess-selected");
                }
            }
        }, false);
    } 
    refreshTiles() {
        const tiles = document.getElementsByClassName("game-Chess-selected");
        for(let i=tiles.length-1; 0<=i; i--) {
            tiles[i].classList.remove("game-Chess-selected");
        }
    }

}