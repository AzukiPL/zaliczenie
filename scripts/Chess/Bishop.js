class Bishop extends PawnsParameters {
   
    constructor (row, column, color) {
        super(row, column, color);
        this.#createBishop();
    }

    #createBishop() {
        const destinationTile = document.getElementById(this.tileID);
        let image = document.createElement('img');
        image.src = "images/"+this.color+"_BishopPawn.png";
        image.classList.add('game-Chess-pawn-images');
        image.alt = this.color+"_BishopPawn.png";
        destinationTile.appendChild(image);
    }
}