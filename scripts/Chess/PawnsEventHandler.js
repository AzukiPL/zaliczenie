// Class for every pawn related event happening
class PawnsEventHandler extends PawnsParameters {
    constructor(chessPawn = document, color, row = Number,rangeRow = [], col = Number, rangeCol = []) {
        super(row, col, color)
        this.chessPawn = chessPawn;
        this.row = row;
        this.col = col;
        this.rangeRow = rangeRow;
        this.rangeCol = rangeCol;
        this.tiles = document;
        this.#addEventHandler();
    }
    // On object initialization adds event Handler to this chessPawn
    #addEventHandler() {
        
        this.addSelected = this.addSelected.bind(this);
        this.chessPawn.addEventListener("click", this.addSelected);
    }
    
    // On event happening, highlight blue tiles
    // Then add event listener on those blue tiles
    // If blue tile is pressed, move pawn to this tile, 
    // Then remove tile event listener and remove blue tiles
    addSelected() {

        // controller used to remove all event listeners from tiles
        const controller = new AbortController();
        const signal  = controller.signal;

        // Refreshes tiles each update so they wont stay highlighted
        this.refreshTiles(); 

         // add blue tile around pawn
        this.chessPawn.classList.add("game-Chess-selected");
        for(let i=0; i<this.rangeRow.length; i++) {
            // if the tile exists:
            // Each iteration currentTile gets tile pawn can move to
            // The way this works, a vector from rangeRow is added to current row, same goes for column.
            // Then assigns this tile to currentTile, and stores it there.
            if(document.getElementById(String(parseInt(this.row + this.rangeRow[i]))+String(parseInt(this.col +this.rangeCol[i]))) != null) {
                const currentTile = document.getElementById(String(parseInt(this.row + this.rangeRow[i]))+String(parseInt(this.col +this.rangeCol[i])));
                currentTile.classList.add("game-Chess-selected");
                const pawn = this.chessPawn;
                const color = this.color;
                // Add eventListener to currentTile, if tile is selected, move selected pawn to this tile.
                currentTile.addEventListener("click", (e) => {
                    controller.abort();
                    if(pawn.classList.contains(color) && e.target.classList.contains("game-Chess-pawn-images") && !e.target.classList.contains(color))
                    {
                        currentTile.replaceChild(pawn,e.target);
                    }
                    else
                    {
                        currentTile.appendChild(pawn);
                    }
                    this.row += this.rangeRow[i];
                    this.col += this.rangeCol[i];
                    const tiles = document.getElementsByClassName("game-Chess-selected");

                    // Copy paste of this.refreshTiles(), but cause eventListeners are tricky, i had to use this without function
                    for(let i = (tiles.length) -1; 0<=i; i--) {
                        tiles[i].classList.remove("game-Chess-selected");
                    }
                }, { signal }); // for some reason { signal } and controler.abort() are neccessary for removing eventlistener, but idk how it works;

            } // if statement ends here
        } // for loop ends here
    } // addSelected() ends here

    // Refreshes tiles each time its called so they wont stay highlighted
    refreshTiles() {
        this.tiles = document.getElementsByClassName("game-Chess-selected");
        for(let i = (this.tiles.length) -1; 0<=i; i--) {
            this.tiles[i].classList.remove("game-Chess-selected");
        }
    }
}
