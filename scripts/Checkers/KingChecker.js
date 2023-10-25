class KingChecker extends ChekersParameters {
    constructor (row,column,color) {
        super(row,column,color);
        this.#createChecker();
        this.#addRange();
        this.onCheckerSelect();
    }

    #createChecker() {
        const destinationTile = document.getElementById(this.tileID);
        let image = document.createElement('img');
        image.src = "images/"+this.color+"_KingChecker.png";
        image.classList.add('game-Chess-pawn-images'); // its for scripts to work properly
        image.classList.add(this.color);
        image.alt = this.color+"_KingChecker.png";
        image.id = this.tileID+" Checker";
        image.customObject = this;
        if(this.color == "white")
        image.dataset.pawnData = "KingChecker";
        else
        image.dataset.pawnData = "KingCheckerB";
        destinationTile.appendChild(image);
    }

    // i had some issues when i did it with for loop, so for simplicity i went with this approach here. 
    #addRange() {
        this.range = [[],[],[],[]];
        // Top Right
        this.range[0][0] = -1;
        this.range[0][1] =  1;

        // Top Left
        this.range[1][0] = -1;
        this.range[1][1] = -1;

        // Bottom Right
        this.range[2][0] =  1;
        this.range[2][1] =  1;

        // Bottom Left
        this.range[3][0] =  1;
        this.range[3][1] = -1;
    }
}