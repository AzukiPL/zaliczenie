class Pawn extends PawnsParameters {
    constructor (row, column, color) {
        super(row, column, color);
        this.#createPawn();
        this.#addRange();
        this.onChessSelect();

    }

    #createPawn() {
        const destinationTile = document.getElementById(this.tileID);
        let image = document.createElement('img');
        image.src = "images/"+this.color+"_Pawn.png";
        image.classList.add('game-Chess-pawn-images');
        image.classList.add(this.color);
        image.alt = this.color+"_Pawn.png";
        image.id = this.tileID+" Pawn";
        image.customObject = this;
        if(this.color == "white")
        image.dataset.pawnData = "pawn";
        else
        image.dataset.pawnData = "pawnB";
        destinationTile.appendChild(image);
    }

    #addRange() {
        for(let i=0; i<1; i++) {
            this.range[i] = [];
            for(let j=0; j<4; j++) {
                if(this.color == "white") {
                    if(j%2 == 0)        this.range[i][j] = -j/2-1;
                    else if(j%2 != 0)   this.range[i][j] =  0;
                }
                else if(this.color == "black") {
                    if(j%2 == 0)        this.range[i][j] =  j/2+1;
                    else if(j%2 != 0)   this.range[i][j] =  0;
                }
            }
        }
    }

    promotion() {
        if(this.row == 1 || this.row == 8) {
            const tile = document.getElementById(String(this.row)+String(this.column));
            tile.innerHTML = "";
            const object = new Queen(this.row, this.column, this.color);
        }
    }
    // Highlights enemies if pawn can attack them
    // Highlighted tiles = pawn can move there / attack pawns on these tiles
    highlightIfPawn() {
        if(this.object.customObject instanceof Pawn) {
            let enemyTileR = document;
            let enemyTileL = document;
            
            // tile to the left top and right top of the pawn location
            // because black pawns moves from top to bottom, they have inverted direction
            // compared to white pawns
            if(this.color == "white") {
                enemyTileR = document.getElementById(String(this.row-1)+String(this.column+1));
                enemyTileL = document.getElementById(String(this.row-1)+String(this.column-1));

            }
            else {
                enemyTileR = document.getElementById(String(this.row+1)+String(this.column+1));
                enemyTileL = document.getElementById(String(this.row+1)+String(this.column-1));
            }

            // checks if there enemy pawn on the tiles mentioned above
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