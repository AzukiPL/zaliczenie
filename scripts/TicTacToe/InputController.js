class InputController {
    constructor () {
        this.tileID = Number(0);
        this.turn = Number(0);
        this.scoreControl = new ScoreController();
    }
    // Resets TicTacToe game to begining values, while keeping player score intact
    reset() {
        let tiles = document.getElementsByClassName("game-TicTacSquare");
        for(let i=0; i<tiles.length; i++) {
            tiles[i].innerHTML = "";
            tiles[i].classList.remove('o');
            tiles[i].classList.remove('x');
            this.scoreControl.isMatchWon = false;
        }
        this.turn = 0;
        this. tileID = 0;
    }
    // Updates pressed tile, and place mark X or O depending which player's turn it is
    updateTile(id) {
        this.tileID = id;
        this.#putPlayerMarking();
    }
    
    // Places player marking, changes color in this tile to player mark color, and adds class X to the document.element of ID == this.tileID
    // then calls scoreControl.checkWinner to see if player won, parameter 1 or 2 = wheter its player 1 or player 2
    #putPlayerMarking() {
        if(this.scoreControl.isMatchWon) {
            return 0;
        }
        let tile = document.getElementById(this.tileID);
        if(this.turn%2 == 0) {
            if(tile.innerHTML == 'x' || tile.innerHTML == 'o')
                return 0;
            tile.innerHTML = 'x';
            tile.style.color = "var(--font-color)";
            tile.classList.add('x');
            this.scoreControl.checkWinner(1);
        }
        else {
            if(tile.innerHTML == 'x' || tile.innerHTML == 'o')
                return 0;
            tile.innerHTML = 'o';   
            tile.style.color = "blue";
            tile.classList.add('o');
            this.scoreControl.checkWinner(2);
        }
        this.turn++;
    }
}