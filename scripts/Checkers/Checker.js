class Checker extends ChekersParameters {
    constructor (row,column,color) {
        super(row,column,color);
        this.#createChecker();
        this.#addRange();
        this.onCheckerSelect();
    }

    #createChecker() {
        const destinationTile = document.getElementById(this.tileID);
        let image = document.createElement('img');
        image.src = "images/"+this.color+"_Checker.png";
        image.classList.add('game-Chess-pawn-images'); // its for scripts to work properly
        image.classList.add(this.color);
        image.alt = this.color+"_Checker.png";
        image.id = this.tileID+" Checker";
        image.customObject = this;
        if(this.color == "white")
        image.dataset.pawnData = "Checker";
        else
        image.dataset.pawnData = "CheckerB";
        destinationTile.appendChild(image);
    }

    #addRange() {
        for(let i=0; i<2; i++) {
            this.range[i] = [];
            for(let j=0; j<2; j++) {
                if(this.color=="white"){
                    // to the right top
                    if(i==0 && j%2 == 0)   this.range[i][j]      = -1;
                    else if(i==0 && j%2 != 0)   this.range[i][j] =  1;
                    // to the left top
                    else if(i==1 && j%2 == 0)   this.range[i][j] = -1;
                    else if(i==1 && j%2 != 0)   this.range[i][j] = -1;
                }
                else {
                    // to the Bottom Right
                    if(i==0 && j%2 == 0)   this.range[i][j]      =  1;
                    else if(i==0 && j%2 != 0)   this.range[i][j] =  1;
                    // to the Bottom Left
                    else if(i==1 && j%2 == 0)   this.range[i][j] =  1;
                    else if(i==1 && j%2 != 0)   this.range[i][j] = -1;
                }
            }
        }
    }

    promotion() {
        if(this.row == 1 || this.row == 8) {
            const tile = document.getElementById(String(this.row)+String(this.column));
            tile.innerHTML = "";
            const object = new KingChecker(this.row, this.column, this.color);
        }
    }
}