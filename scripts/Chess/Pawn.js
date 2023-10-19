class Pawn extends PawnsParameters {
   
    constructor (row, column, color) {
        super(row, column, color);
        this.#createPawn();
        this.#addRange();
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

    #addRange() {
        for(let i=0; i<2; i++) {
            this.range[i] = [];
            for(let j=0; j<2; j++) {
                if(this.color == "white") {
                    if(j%2 == 0)        this.range[i][j] = -i-1;
                    else if(j%2 != 0)   this.range[i][j] =  0;
                }
                else if(this.color == "black") {
                    if(j%2 == 0)        this.range[i][j] =  i+1;
                    else if(j%2 != 0)   this.range[i][j] =  0;
                }
            }
        }
    }

}