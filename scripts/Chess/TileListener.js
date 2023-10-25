class TileListener {
    // Controls turn each time pawn makes move.
    static turnCtrl = new TurnController();
    constructor (type) {
        this.lastSelected = null; // last selected pawn, this parameter is used to check which pawn is currently selected.
        this.king = document.querySelectorAll(".king"); // this.king is used to check whether king is in danger or not, this doesnt work 100%, but i hope its not an issue.
        this.type = type; // type, whether TileListener has to use Chess or Checkers methods, because both are inside this class
    }

    // universal method for both games, iterates through every tile on the chessboard, and add event listener to it.
    addListeners() {
        const tiles = document.getElementsByClassName("game-Chess-Tile");
        for (const iterator of tiles) {
            iterator.addEventListener("click", (e) => {
                if(e.target.classList.contains("game-Chess-pawn-images") && this.lastSelected == null) {
                    this.lastSelected = e.target;
                }
                else if(e.target.classList.contains("game-Chess-pawn-images")) {
                    if(this.lastSelected.customObject.color != e.target.customObject.color) {
                        if(iterator.classList.contains("game-Chess-selected")) {
                            e.stopPropagation();
                            iterator.innerHTML = " ";
                            this.#gameTypeMove(iterator);
                        }
                        else this.lastSelected = e.target;
                    }
                    else this.lastSelected = e.target;
                }
                else this.#gameTypeMove(iterator);
            }, true);
        }
    }

    // refreshes highlighted tiles so when player chooses other pawn or moves, old highlight is removed, this prevent lastSelected pawn from going to places outside its range.
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

    // this calls proper function inside add listener, based on this.type which game it is.
    // using wrong method would cause console errors due to not included proper files inside game HTML file.
    #gameTypeMove(iterator) {
        if(this.type=="chess") this.#chessMove(iterator);
        if(this.type=="checkers") this.#checkerMove(iterator);
    }


    // main method of moving pawns inside Chess type game.
    // its added on addListener() as event.
    // if selected tile has class game-Chess-Selected (if selected tile is highlighted), then check if last selected pawn.color is corresponding to current turn color.
    // if everythin is ok, then append last selected pawn to tile where player pressed on, refresh tiles and update selected pawn position information
    // then TileListener updates turn color, so opponent can make his move.
    // if last selected is instance of Pawn, make its 2nd range set to 0, this is according to chess rules where pawn can move 2 tiles forward if its his first movement.
    // this simply sets his 2nd tile range to 0 after its first movement.
    // also if last selected is pawn, call its function promotion() that checks if pawn can promote.
    #chessMove(iterator = document) {
        if(iterator.classList.contains("game-Chess-selected")) {
            if(TileListener.turnCtrl.canChangeTurn(this.lastSelected.customObject.color)) {
                iterator.appendChild(this.lastSelected);
                this.refreshTiles();
                this.lastSelected.customObject.row = parseInt(iterator.id / 10);
                this.lastSelected.customObject.column = parseInt(iterator.id % 10);
                TileListener.turnCtrl.turnOver(this.lastSelected.customObject.color);
                if(this.lastSelected.customObject instanceof Pawn) this.lastSelected.customObject.range[0][2] = 0;
                if(this.lastSelected.customObject instanceof Pawn) this.lastSelected.customObject.promotion();

                // for each king, check if danger, doesnt work as it should because i broke something.
                for (const iterator of this.king) {
                    iterator.customObject.checkIfDanger(iterator.parentElement);
                }
            }
        }
    }

    // main method for moving pawns inside Checkers type game.
    // starts similar to chess move. with difference that it reads every tile dataset. and turns its data into array of enemies this pawn jumped over.
    // dataset is assigned by CheckersParameters while highlighting tiles.
    // then for enemy of enemies, if enemy exists, remove that enemy.
    // after that just making sure all dataset are removed so it wont cause any trouble in further pawn attacks.
    // and rest is the same as with chess
    #checkerMove(iterator = document) {
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
                this.refreshTiles();
                this.lastSelected.customObject.row = parseInt(iterator.id / 10);
                this.lastSelected.customObject.column = parseInt(iterator.id % 10);
                TileListener.turnCtrl.turnOver(this.lastSelected.customObject.color);
                if(this.lastSelected.customObject instanceof Checker) this.lastSelected.customObject.promotion();
            }

        }
    }
}