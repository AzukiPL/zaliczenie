class TileListener {
    static turnCtrl = new TurnController();
    constructor () {
        this.lastSelected = null;
    }
    addListeners() {
        const tiles = document.getElementsByClassName("game-Chess-Tile");
        for (const iterator of tiles) {
            iterator.name = " ";
            iterator.addEventListener("click", (e) => {
                if(e.target.classList.contains("game-Chess-pawn-images") && this.lastSelected == null) {
                    this.lastSelected = e.target;
                }
                else if(e.target.classList.contains("game-Chess-pawn-images")) {
                    if(this.lastSelected.customObject.color != e.target.customObject.color) {
                        if(iterator.classList.contains("game-Chess-selected")) {
                            e.stopPropagation();
                            iterator.innerHTML = " ";
                            this.#chessMove(iterator);
                        }
                        else this.lastSelected = e.target;
                    }
                    else this.lastSelected = e.target;
                }
                else this.#chessMove(iterator);
            }, true);
        }
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

    #chessMove(iterator = document) {
        if(iterator.classList.contains("game-Chess-selected")) {
            if(TileListener.turnCtrl.canChangeTurn(this.lastSelected.customObject.color)) {
                iterator.appendChild(this.lastSelected);
                let enemies = [];
                const tileData = iterator.dataset.enemies;
                if(tileData != null) {
                    for(let i=0; i<tileData.length; i++) {
                        const enemy = document.getElementById(tileData[i]+tileData[i+1]);
                        enemies.push(enemy);
                        i+=2;
                    }
                    for (const enemy of enemies) {
                        if(enemy!=null)
                        enemy.innerHTML = " ";
                    }
                }
                iterator.dataset.enemies = null;
                // for (const enemy of jump) {
                //     const idRow = String(parseInt(enemy.id/10));
                //     const idCol = String(parseInt(enemy.id%10));
                //     if(enemy != null) {
                //         // if(idRow < this.lastSelected.customObject.row && idRow > iterator.id/10) {
                //         //     if(idCol > this.lastSelected.customObject.column && idCol < iterator.id%10)
                //         //     {
                //         //         console.log("within range");
                //         //     }
                //         //     else console.log("not range1");
                //         // }
                //         // else console.log("not range");
                //         // console.log(iterator.dataset.enemies);


                //         enemy.innerHTML = " ";
                //     }
                    
                // }
                this.refreshTiles();
                this.lastSelected.customObject.row = parseInt(iterator.id / 10);
                this.lastSelected.customObject.column = parseInt(iterator.id % 10);
                TileListener.turnCtrl.turnOver(this.lastSelected.customObject.color);
                if(this.lastSelected.customObject instanceof Checker) this.lastSelected.customObject.promotion();
            }

        }
    }
}