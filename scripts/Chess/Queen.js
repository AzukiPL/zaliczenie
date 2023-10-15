class Queen extends PawnsParameters {
   
    constructor (row, column, color) {
        super(row, column, color);
        this.#createQueen();
    }

    #createQueen() {
        const destinationTile = document.getElementById(this.tileID);
        let image = document.createElement('img');
        image.src = "images/"+this.color+"_QueenPawn.png";
        image.classList.add('game-Chess-pawn-images');
        image.alt = this.color+"_QueenPawn.png";
        destinationTile.appendChild(image);
    }
}