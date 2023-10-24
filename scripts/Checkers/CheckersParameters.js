class ChekersParameters {
    constructor (row, column, color) {
        this.row = row;
        this.column = column;
        this.color = color;
        this.tileID = String(this.row)+String(this.column);
        this.range = [];
        this.object = document.getElementById(this.tileID);
        this.tileIterator = [];
    }
      // when this chess is selected, highlight tiles where it can move
      onCheckerSelect() {
        this.object = document.getElementById(this.tileID+" Checker");
        this.object.addEventListener("click", (e) => {
            this.refreshTiles();
            this.#highlightMoveTiles(this.row,this.column, true);
        }, false);
    } 
    refreshTiles() {
        const tiles = document.getElementsByClassName("game-Chess-selected");
        for(let i=tiles.length-1; 0<=i; i--) {
            tiles[i].dataset.enemies = " ";
            tiles[i].classList.remove("game-Chess-selected");
        }
        
        const redTiles = document.querySelectorAll(".game-current-selected");
        for(let i=0; i<redTiles.length; i++) {
            redTiles[i].dataset.enemies = " ";
            redTiles[i].classList.remove("game-current-selected");
        }
    }


    // highlights tiles where last selected pawn can move to
    #highlightMoveTiles(row, column, isFirst) {
        if(!TileListener.turnCtrl.canChangeTurn(this.color)) return;
        loop1: for(let i=0; i<this.range.length;i++) {
            loop2: for(let j=0; j<this.range[i].length; j++) {
                if(document.getElementById(String(parseInt(row+this.range[i][j]))+String(parseInt(column+this.range[i][j+1]))) != null)
                {
                    const tile = document.getElementById(String(parseInt(row+this.range[i][j]))+String(parseInt(column+this.range[i][j+1])));
                    const child = tile.firstElementChild;
                    if(child != null) {  
                        if(!child.classList.contains(this.color) && !tile.classList.contains("game-current-selected"))   
                        {   
                            tile.classList.add("game-current-selected");
                            const tile2 = document.getElementById(String(parseInt(row+parseInt(this.range[i][j])*2))+String(parseInt(column+parseInt(this.range[i][j+1])*2)));
                            if(tile2 == null) tile.classList.remove("game-current-selected"); 
                            else if(tile2.firstElementChild == null) {
                                this.tileIterator.push(tile.id);
                                tile2.dataset.enemies = this.tileIterator;
                                tile.classList.add("game-current-selected");
                                tile2.classList.add("game-Chess-selected");
                                
                                this.#highlightMoveTiles(parseInt(row+parseInt(this.range[i][j])*2), parseInt(column+parseInt(this.range[i][j+1])*2), false);
                                break loop2;
                            } 
                            else {
                                tile.classList.remove("game-current-selected");
                            }
                            break loop2;
                        }
                        else if(child.classList.contains(this.color)) {
                            break loop2;
                        }
                        else break loop2;
                    }
                    else if(isFirst) tile.classList.add("game-Chess-selected");
                }
                j++;
            }
            if(isFirst && i==1) this.tileIterator[-1] = this.tileIterator.pop();
            else if(i==2) this.tileIterator[-1] = this.tileIterator.pop();
        }
    }
}