class King extends PawnsParameters {
   
    constructor (row, column, color) {
        super(row, column, color);
        this.#createKing();
    }

    #createKing() {
        const destinationTile = document.getElementById(this.tileID);
        let image = document.createElement('img');
        image.src = "images/"+this.color+"_KingPawn.png";
        image.classList.add('game-Chess-pawn-images');
        image.alt = this.color+"_KingPawn.png";
        destinationTile.appendChild(image);
    }
}