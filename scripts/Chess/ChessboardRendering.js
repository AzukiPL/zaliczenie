// Class responsible for chessboard set up, and spawn all pawns
class ChessboardRendering {
    constructor () {
        // reserve enough space in array for each pawn
        // reserve pawns for both teams, hence there are 16 pawns, 8 for each team.
        this.pawn = [16]; 
        this.rookPawn = [4];
        this.knightPawn = [4];
        this.bishopPawn = [4];
        this.queenPawn = [2];
        this.kingPawn = [2];

        this.chessTiles = [document][document];
    }
    // creates chessboard tiles from left to right, and give its correct class
    // give each tile its own id based on their position in row / column || x axis / y axis
    // on the end of the row switch color again so next row begins with same color as prievous ended

    render() {
        // Rneder the Chessboard
        this.renderChessboard();

        // Render all pawns on the chessboard
        this.#renderPawn();
        this.#renderRook();
        this.#renderKnight();
        this.#renderBishop();
        this.#renderQueen();
        this.#renderKing();
    }

    renderChessboard() {
        const gameScreen = document.getElementById("game-Chess-screen");
        let isWhite = true;
        for(let row=0; row<8; row++) {
            for(let col=0; col<8; col++) {

                let column = col+1;
                let tileDiv = document.createElement("div");
                tileDiv.classList.add("game-Chess-Tile");
                if(isWhite == true) tileDiv.classList.add("game-white");
                if(isWhite == false) tileDiv.classList.add("game-burly");
                tileDiv.id = String(parseInt(row+1)+String(column));
                gameScreen.appendChild(tileDiv);
                if(isWhite) isWhite = false;
                else        isWhite = true;
            }
            if(isWhite) isWhite = false;
            else        isWhite = true;
        }
    }

    // in theory i could use loops for this, but i think this approach is a bit easier to understand
    #renderPawn() {
        // argument 1 = row (x axis)
        // argument 2 = col (y axis)
        // argument 3 = color (whether chess should be white or black)
        this.pawn[0] = new Pawn(2,1,"black");
        this.pawn[1] = new Pawn(2,2,"black");
        this.pawn[2] = new Pawn(2,3,"black");
        this.pawn[3] = new Pawn(2,4,"black");
        this.pawn[4] = new Pawn(2,5,"black");
        this.pawn[5] = new Pawn(2,6,"black");
        this.pawn[6] = new Pawn(2,7,"black");
        this.pawn[7] = new Pawn(2,8,"white");

        this.pawn[8]  = new Pawn(7,1,"white");
        this.pawn[9]  = new Pawn(7,2,"white");
        this.pawn[10] = new Pawn(7,3,"white");
        this.pawn[11] = new Pawn(7,4,"white");
        this.pawn[12] = new Pawn(7,5,"white");
        this.pawn[13] = new Pawn(7,6,"white");
        this.pawn[14] = new Pawn(7,7,"white");
        this.pawn[15] = new Pawn(7,8,"white");
    }

    #renderRook() {
        // argument 1 = row (x axis)
        // argument 2 = col (y axis)
        // argument 3 = color (whether chess should be white or black)
        this.rookPawn[0] = new Rook(1,1,"black");
        this.rookPawn[1] = new Rook(1,8,"black");

        this.rookPawn[2] = new Rook(8,1,"white");
        this.rookPawn[3] = new Rook(8,8,"white");
    }
 
    #renderKnight() {
        // argument 1 = row (x axis)
        // argument 2 = col (y axis)
        // argument 3 = color (whether chess should be white or black)
        this.knightPawn[0] = new Knight(1,2,"black");
        this.knightPawn[1] = new Knight(1,7,"black");

        this.knightPawn[2] = new Knight(8,2,"white");
        this.knightPawn[3] = new Knight(8,7,"white");
    }

    #renderBishop() {
        // argument 1 = row (x axis)
        // argument 2 = col (y axis)
        // argument 3 = color (whether chess should be white or black)
        this.bishopPawn[0] = new Bishop(1,3,"black");
        this.bishopPawn[1] = new Bishop(1,6,"black");

        this.bishopPawn[2] = new Bishop(8,3,"white");
        this.bishopPawn[3] = new Bishop(8,6,"white");
    }

    #renderQueen() {
        // argument 1 = row (x axis)
        // argument 2 = col (y axis)
        // argument 3 = color (whether chess should be white or black)
        this.queenPawn[1] = new Queen(1,4,"black");
        this.queenPawn[2] = new Queen(8,4,"white");
    }
    #renderKing() {
        // argument 1 = row (x axis)
        // argument 2 = col (y axis)
        // argument 3 = color (whether chess should be white or black)
        this.kingPawn[1] = new King(1,5,"black");
        this.kingPawn[2] = new King(8,5,"white");
    }
}