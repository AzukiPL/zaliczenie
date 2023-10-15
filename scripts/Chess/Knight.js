class Knight extends PawnsParameters {
   
    constructor (row, column, color) {
        super(row, column, color);
        this.#createKnight();
    }

    #createKnight() {
        const destinationTile = document.getElementById(this.tileID);
        let image = document.createElement('img');
        image.src = "images/"+this.color+"_KnightPawn.png";
        image.classList.add('game-Chess-pawn-images');
        image.alt = this.color+"_KnightPawn.png";
        destinationTile.appendChild(image);
    }
}