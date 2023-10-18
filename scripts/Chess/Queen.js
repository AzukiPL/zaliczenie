class Queen extends PawnsParameters {
   
    constructor (row, column, color) {
        super(row, column, color);
        this.#createQueen();
        // first element of rangeRow (x axis) is connected to its corresponding rangeCol (y axis)
        // straight line
        this.rangeRow[0] = 1;
        this.rangeRow[1] = 2;
        this.rangeRow[2] = 3;
        this.rangeRow[3] = 4;
        this.rangeRow[4] = 5;
        this.rangeRow[5] = 6;
        this.rangeRow[6] = 7;
        this.rangeRow[7] = 8;
        this.rangeRow[8] = 100;

        this.rangeCol[0] = 0;
        this.rangeCol[1] = 0;
        this.rangeCol[2] = 0;
        this.rangeCol[3] = 0;
        this.rangeCol[4] = 0;
        this.rangeCol[5] = 0;
        this.rangeCol[6] = 0;
        this.rangeCol[7] = 0;
        this.rangeCol[8] = 100;

        // straight line backward
        this.rangeRow[8]  = -1;
        this.rangeRow[9]  = -2;
        this.rangeRow[10] = -3;
        this.rangeRow[11] = -4;
        this.rangeRow[12] = -5;
        this.rangeRow[13] = -6;
        this.rangeRow[14] = -7;
        this.rangeRow[15] = -8;

        this.rangeCol[8]  = 0;
        this.rangeCol[9]  = 0;
        this.rangeCol[10] = 0;
        this.rangeCol[11] = 0;
        this.rangeCol[12] = 0;
        this.rangeCol[13] = 0;
        this.rangeCol[14] = 0;
        this.rangeCol[15] = 0;

        // // straight line left
        // this.rangeRow[16] = 0;
        // this.rangeRow[17] = 0;
        // this.rangeRow[18] = 0;
        // this.rangeRow[19] = 0;
        // this.rangeRow[20] = 0;
        // this.rangeRow[21] = 0;
        // this.rangeRow[22] = 0;
        // this.rangeRow[23] = 0;

        // this.rangeCol[16] = -1;
        // this.rangeCol[17] = -2;
        // this.rangeCol[18] = -3;
        // this.rangeCol[19] = -4;
        // this.rangeCol[20] = -5;
        // this.rangeCol[21] = -6;
        // this.rangeCol[22] = -7;
        // this.rangeCol[23] = -8;

        // // straight line right
        // this.rangeRow[24] = 0;
        // this.rangeRow[25] = 0;
        // this.rangeRow[26] = 0;
        // this.rangeRow[27] = 0;
        // this.rangeRow[28] = 0;
        // this.rangeRow[29] = 0;
        // this.rangeRow[30] = 0;
        // this.rangeRow[31] = 0;

        // this.rangeCol[24] = 1;
        // this.rangeCol[25] = 2;
        // this.rangeCol[26] = 3;
        // this.rangeCol[27] = 4;
        // this.rangeCol[28] = 5;
        // this.rangeCol[29] = 6;
        // this.rangeCol[30] = 7;
        // this.rangeCol[31] = 8;

        // // diagnal line right bottom 
        // this.rangeRow[32] = 1;
        // this.rangeRow[33] = 2;
        // this.rangeRow[34] = 3;
        // this.rangeRow[35] = 4;
        // this.rangeRow[36] = 5;
        // this.rangeRow[37] = 6;
        // this.rangeRow[38] = 7;
        // this.rangeRow[39] = 8;

        // this.rangeCol[32] = 1;
        // this.rangeCol[33] = 2;
        // this.rangeCol[34] = 3;
        // this.rangeCol[35] = 4;
        // this.rangeCol[36] = 5;
        // this.rangeCol[37] = 6;
        // this.rangeCol[38] = 7;
        // this.rangeCol[39] = 8;

        // // diagnal line left bottom
        // this.rangeRow[40] = 1;
        // this.rangeRow[41] = 2;
        // this.rangeRow[42] = 3;
        // this.rangeRow[43] = 4;
        // this.rangeRow[44] = 5;
        // this.rangeRow[45] = 6;
        // this.rangeRow[46] = 7;
        // this.rangeRow[47] = 8;

        // this.rangeCol[40] = -1;
        // this.rangeCol[41] = -2;
        // this.rangeCol[42] = -3;
        // this.rangeCol[43] = -4;
        // this.rangeCol[44] = -5;
        // this.rangeCol[45] = -6;
        // this.rangeCol[46] = -7;
        // this.rangeCol[47] = -8;

        // // diagnal line left top
        // this.rangeRow[48] = -1;
        // this.rangeRow[49] = -2;
        // this.rangeRow[50] = -3;
        // this.rangeRow[51] = -4;
        // this.rangeRow[52] = -5;
        // this.rangeRow[53] = -6;
        // this.rangeRow[54] = -7;
        // this.rangeRow[55] = -8;

        // this.rangeCol[48] = -1;
        // this.rangeCol[49] = -2;
        // this.rangeCol[50] = -3;
        // this.rangeCol[51] = -4;
        // this.rangeCol[52] = -5;
        // this.rangeCol[53] = -6;
        // this.rangeCol[54] = -7;
        // this.rangeCol[55] = -8;

        // // diagnal line right top
        // this.rangeRow[56] = -1;
        // this.rangeRow[57] = -2;
        // this.rangeRow[58] = -3;
        // this.rangeRow[59] = -4;
        // this.rangeRow[60] = -5;
        // this.rangeRow[61] = -6;
        // this.rangeRow[62] = -7;
        // this.rangeRow[63] = -8;

        // this.rangeCol[56] = 1;
        // this.rangeCol[57] = 2;
        // this.rangeCol[58] = 3;
        // this.rangeCol[59] = 4;
        // this.rangeCol[60] = 5;
        // this.rangeCol[61] = 6;
        // this.rangeCol[62] = 7;
        // this.rangeCol[63] = 8;

        this.onChessSelect();
    }

    #createQueen() {
        const destinationTile = document.getElementById(this.tileID);
        let image = document.createElement('img');
        image.src = "images/"+this.color+"_QueenPawn.png";
        image.classList.add('game-Chess-pawn-images');
        image.classList.add(this.color);
        image.alt = this.color+"_QueenPawn.png";
        image.id = this.tileID+" Pawn";
        image.customObject = this;
        if(this.color == "white")
        image.dataset.pawnData = "queenPawn";
        else
        image.dataset.pawnData = "queenPawnB";
        destinationTile.appendChild(image);
    }
}