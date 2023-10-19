class Knight extends PawnsParameters {
   
    constructor (row, column, color) {
        super(row, column, color);
        this.#createKnight();
        this.#addRange();
        this.onChessSelect();
    }


    #createKnight() {
        const destinationTile = document.getElementById(this.tileID);
        let image = document.createElement('img');
        image.src = "images/"+this.color+"_KnightPawn.png";
        image.classList.add('game-Chess-pawn-images');
        image.classList.add(this.color);
        image.alt = this.color+"_KnightPawn.png";
        image.id = this.tileID+" Pawn";
        image.customObject = this;
        if(this.color == "white")
        image.dataset.pawnData = "knightPawn";
        else
        image.dataset.pawnData = "knightPawnB";
        destinationTile.appendChild(image);
    }

    #addRange() {
        for(let i=0; i<8; i++) {
            this.range[i] = [];
            for(let j=0; j<2; j++) {

                // upwards left
                if(i==0 && j%2==0) this.range[i][j]      = -2;
                else if(i==0 && j%2!=0) this.range[i][j] = -1;
                
                // upwards right
                else if(i==1 && j%2==0) this.range[i][j] = -2;
                else if(i==1 && j%2!=0) this.range[i][j] =  1;

                // right top
                else if(i==2 && j%2==0) this.range[i][j] = -1;
                else if(i==2 && j%2!=0) this.range[i][j] =  2;

                // right bottom
                else if(i==3 && j%2==0) this.range[i][j] =  1;
                else if(i==3 && j%2!=0) this.range[i][j] =  2;

                // bottom right
                else if(i==4 && j%2==0) this.range[i][j] =  2;
                else if(i==4 && j%2!=0) this.range[i][j] =  1;

                // bottom left
                else if(i==5 && j%2==0) this.range[i][j] =  2;
                else if(i==5 && j%2!=0) this.range[i][j] = -1;

                // left bottom
                else if(i==6 && j%2==0) this.range[i][j] =  1;
                else if(i==6 && j%2!=0) this.range[i][j] = -2;

                // left top
                else if(i==7 && j%2==0) this.range[i][j] = -1;
                else if(i==7 && j%2!=0) this.range[i][j] = -2;
            }
        }
    }
}