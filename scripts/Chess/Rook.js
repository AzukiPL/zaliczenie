class Rook extends PawnsParameters {
   
    constructor (row, column, color) {
        super(row, column, color);
        this.#createRook();
    }

    #createRook() {
        const destinationTile = document.getElementById(this.tileID);
        let image = document.createElement('img');
        image.src = "images/"+this.color+"_RookPawn.png";
        image.classList.add('game-Chess-pawn-images');
        image.alt = this.color+"_RookPawn.png";
        destinationTile.appendChild(image);
    }
}