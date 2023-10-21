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
        this.range = [];
        this.rangeRow = [];
        this.rangeCol = [];
        this.object = document.getElementById(this.tileID);

    }

    // when this chess is selected, highlight tiles where it can move
    onChessSelect() {
        this.object = document.getElementById(this.tileID+" Pawn");
        this.object.addEventListener("click", (e) => {
            this.refreshTiles();
            this.#highlightMoveTiles();
        }, false);
    } 
    refreshTiles() {
        const tiles = document.getElementsByClassName("game-Chess-selected");
        for(let i=tiles.length-1; 0<=i; i--) {
            tiles[i].classList.remove("game-Chess-selected");
        }
        
        const redTiles = document.querySelectorAll(".game-current-selected");
        for(let i=0; i<redTiles.length; i++) {
            redTiles[i].classList.remove("game-current-selected");
        }
    }


    // highlights tiles where last selected pawn can move to
    #highlightMoveTiles() {
        if(!TileListener.turnCtrl.canChangeTurn(this.color)) return;
        loop1: for(let i=0; i<this.range.length;i++) {
            loop2: for(let j=0; j<this.range[i].length; j++) {
                if(document.getElementById(String(parseInt(this.row+this.range[i][j]))+String(parseInt(this.column+this.range[i][j+1]))) != null)
                {
                    const tile = document.getElementById(String(parseInt(this.row+this.range[i][j]))+String(parseInt(this.column+this.range[i][j+1])));
                    const child = tile.firstElementChild;
                    if(child != null) {  
                        this.#highlightIfPawn();
                        if(!child.classList.contains(this.color) && !(this.object.customObject instanceof Pawn))   
                        {            
                            tile.classList.add("game-Chess-selected");
                            tile.classList.add("game-current-selected");
                            break loop2;
                        }
                        else if(child.classList.contains(this.color)) {
                            break loop2;
                        }
                        else break loop2;
                    }
                    else tile.classList.add("game-Chess-selected");
                }
                j++;
            }
        }
    }
    
    #highlightIfPawn() {
        if(this.object.customObject instanceof Pawn) {
            let enemyTileR = document;
            let enemyTileL = document;
            if(this.color == "white") {
                enemyTileR = document.getElementById(String(this.row-1)+String(this.column+1));
                enemyTileL = document.getElementById(String(this.row-1)+String(this.column-1));

            }
            else {
                enemyTileR = document.getElementById(String(this.row+1)+String(this.column+1));
                enemyTileL = document.getElementById(String(this.row+1)+String(this.column-1));
            }
            if(enemyTileR.firstElementChild != null) {
                if(!enemyTileR.firstElementChild.classList.contains(this.color))   
                {            
                    enemyTileR.classList.add("game-Chess-selected");
                    enemyTileR.classList.add("game-current-selected");
                }
            }

            if(enemyTileL.firstElementChild != null) {
                if(!enemyTileL.firstElementChild.classList.contains(this.color))   
                {            
                    enemyTileL.classList.add("game-Chess-selected");
                    enemyTileL.classList.add("game-current-selected");
                }
            }
        }
    }

}