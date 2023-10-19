class Rook extends PawnsParameters {
   
    constructor (row, column, color) {
        super(row, column, color);
        this.#createRook();
        this.#addRange();
        this.onChessSelect();
    }


    #createRook() {
        const destinationTile = document.getElementById(this.tileID);
        let image = document.createElement('img');
        image.src = "images/"+this.color+"_RookPawn.png";
        image.classList.add('game-Chess-pawn-images');
        image.classList.add(this.color);
        image.alt = this.color+"_RookPawn.png";
        image.id = this.tileID+" Pawn";
        image.customObject = this;
        if(this.color == "white")
        image.dataset.pawnData = "rookPawn";
        else
        image.dataset.pawnData = "rookPawnB";
        destinationTile.appendChild(image);
    }
        #addRange() {
        // first element of rangeRow (x axis) is connected to its corresponding rangeCol (y axis)
        // straight line

        for(let i=0; i<4; i++) {
            this.range[i] = [];
            for(let j=0; j<16; j++) {

                // upwards
                if(i==0 && j%2 == 0)        this.range[i][j] = -j/2-1;
                else if(i==0 && j%2 != 0)   this.range[i][j] =  0;

                // downwards
                else if(i==1 && j%2 == 0)   this.range[i][j] =  j/2+1;
                else if(i==1 && j%2 != 0)   this.range[i][j] =  0;
                
                // to the left
                else if(i==2 && j%2 == 0)   this.range[i][j] =  0;
                else if(i==2 && j%2 != 0)   this.range[i][j] = -j/2;
                              
                // to the right
                else if(i==3 && j%2 == 0)   this.range[i][j] =  0;
                else if(i==3 && j%2 != 0)   this.range[i][j] =  j/2+1;
            }
        }
    }
}