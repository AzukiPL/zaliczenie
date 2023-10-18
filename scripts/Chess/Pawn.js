class Pawn extends PawnsParameters {
   
    constructor (row, column, color) {
        super(row, column, color);
        this.#createPawn();

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

}