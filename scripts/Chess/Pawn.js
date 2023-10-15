class Pawn extends PawnsParameters {
   
    constructor (row, column, color) {
        super(row, column, color);
        this.#createPawn();
        this.chess = document.getElementById(this.tileID+" Pawn");


        // first element of rangeRow (x axis) is connected to its corresponding rangeCol (y axis)
        if(color == "black") {
            this.rangeRow[0] = 1;
            this.rangeRow[1] = 2;

            this.rangeCol[0] = 0;
            this.rangeCol[1] = 0;
        }
        if(color == "white") {
            this.rangeRow[0] = -1;
            this.rangeRow[1] = -2;
            
            this.rangeCol[0] = 0;
            this.rangeCol[1] = 0;
        }
        // this.chess is current chess object.
        // this.row = starting row position (x axis)
        // this.rangeRow = array of tile rows where this pawn can move relative to its current position
        // this.column = starting column position (y axis)
        // this.rangeCol = array of tile columns where this pawn can move relative to its current position
        this.eventHandler = new PawnsEventHandler(this.chess, this.row, this.rangeRow, this.column, this.rangeCol);

    }

    #createPawn() {
        const destinationTile = document.getElementById(this.tileID);
        let image = document.createElement('img');
        image.src = "images/"+this.color+"_Pawn.png";
        image.classList.add('game-Chess-pawn-images');
        image.alt = this.color+"_Pawn.png";
        image.id = this.tileID+" Pawn";
        destinationTile.appendChild(image);
    }

}