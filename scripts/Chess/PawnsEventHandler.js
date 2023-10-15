// Class for every pawn related event happening
class PawnsEventHandler {
    constructor(object = document, row = Number,rangeRow = [], col = Number, rangeCol = []) {
        this.object = object;
        this.row = row;
        this.col = col;
        this.rangeRow = rangeRow;
        this.rangeCol = rangeCol;
        this.tiles = document;
        this.#addEventHandler();
    }
    // On object initialization adds event Handler to this object
    #addEventHandler() {
        
        this.addSelected = this.addSelected.bind(this);
        this.object.addEventListener("click", this.addSelected);
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
        this.object.classList.add("game-Chess-selected");
        for(let i=0; i<this.rangeRow.length; i++) {

            // Each iteration currentTile gets tile pawn can move to
            // The way this works, a vector from rangeRow is added to current row, same goes for column.
            // Then assigns this tile to currentTile, and stores it there.
            const currentTile = document.getElementById(String(parseInt(this.row + this.rangeRow[i]))+String(parseInt(this.col +this.rangeCol[i])));
            currentTile.classList.add("game-Chess-selected");
            const pawn = this.object;

            // Add eventListener to currentTile, if tile is selected, move selected pawn to this tile.
            currentTile.addEventListener("click", (e) => {
                controller.abort();
                console.log(e.target);
                currentTile.appendChild(pawn);
                this.row += this.rangeRow[i];
                this.col += this.rangeCol[i];
                const tiles = document.getElementsByClassName("game-Chess-selected");

                // Copy paste of this.refreshTiles(), but cause eventListeners are tricky, i had to use this without function
                for(let i = (tiles.length) -1; 0<=i; i--) {
                    tiles[i].classList.remove("game-Chess-selected");
                }
            }, { signal }); // for some reason { signal } and controler.abort() are neccessary for removing eventlistener, but idk how it works;

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
