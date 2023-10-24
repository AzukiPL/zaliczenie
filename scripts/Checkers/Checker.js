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
        this.range = [[],[],[],[]];
        if(this.color == "white")
        {
            // Top Right
            this.range[0][0] = -1;
            this.range[0][1] =  1;
    
            // Top Left
            this.range[1][0] = -1;
            this.range[1][1] = -1;
        }
        else
        {
            // Bottom Right
            this.range[0][0] =  1;
            this.range[0][1] =  1;
    
            // Bottom Left
            this.range[1][0] =  1;
            this.range[1][1] = -1;
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