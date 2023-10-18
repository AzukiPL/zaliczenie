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

    onChessSelect() {
        this.object = document.getElementById(this.tileID+" Pawn");
        this.object.addEventListener("click", (e) => {
            this.refreshTiles();
            loop1: for(let i=0; i<this.range.length;i++) {
                loop2: for(let j=0; j<this.range[i].length; j++) {
                    console.log(String(parseInt(this.column+this.range[i][j+1])));
                    if(document.getElementById(String(parseInt(this.row+this.range[i][j]))+String(parseInt(this.column+this.range[i][j+1]))) != null)
                    {
                        const tile = document.getElementById(String(parseInt(this.row+this.range[i][j]))+String(parseInt(this.column+this.range[i][j+1])));
                        const child = tile.firstElementChild;
                        if(child != null) {  
                            if(!child.classList.contains(this.color))   
                            {            
                                tile.classList.add("game-Chess-selected");
                                break loop2;
                            }
                            else if(child.classList.contains(this.color)) {
                                break loop2;
                            }
                            else continue;
                        }
                        else tile.classList.add("game-Chess-selected");
                    }
                    j++;
                }
            }
            // for(let i=0; i<this.rangeRow.length;i++) {
            //     if(document.getElementById(String(parseInt(this.row+this.rangeRow[i]))+String(parseInt(this.column+this.rangeCol[i]))) != null)
            //     {
            //         const tile = document.getElementById(String(parseInt(this.row+this.rangeRow[i]))+String(parseInt(this.column+this.rangeCol[i])));
            //         const child = tile.firstElementChild;
            //         if(child != null) {  
            //             if(!child.classList.contains(this.color))   
            //             {            
            //                 tile.classList.add("game-Chess-selected");
            //                 continue;
            //             }
            //             else continue;
            //         }
            //         else tile.classList.add("game-Chess-selected");
            //     }
            // }
        }, false);
    } 
    refreshTiles() {
        const tiles = document.getElementsByClassName("game-Chess-selected");

        for(let i=tiles.length-1; 0<=i; i--) {
            tiles[i].classList.remove("game-Chess-selected");
        }
    }

}