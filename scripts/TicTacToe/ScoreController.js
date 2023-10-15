class ScoreController {
    constructor () {
        this.player1Score = 0;
        this.player2Score = 0;
        this.isMatchWon = false;
    }
    // Checks whether someone won or not.
    // Player 1 for x player 2 for o
    checkWinner(player) { 
        this.#checkTiles(1,2,3, player);
        this.#checkTiles(4,5,6, player);
        this.#checkTiles(7,8,9, player);

        this.#checkTiles(1,4,7, player);
        this.#checkTiles(2,5,8, player);
        this.#checkTiles(3,6,9, player);

        this.#checkTiles(1,5,9, player);
        this.#checkTiles(3,5,7, player);

    }

    // Checks tiles of given IDs for markings and returns false if at least one of them is false, updates score and finishes game if all of them are true;
    #checkTiles(tile1=0, tile2=0, tile3=0, player = 0) {
        const tiles = [
            document.getElementById(tile1),
            document.getElementById(tile2),
            document.getElementById(tile3)
        ];

        if(player == 1) {
            if(tiles[0].innerHTML != 'x') return false;
            if(tiles[1].innerHTML != 'x') return false;
            if(tiles[2].innerHTML != 'x') return false;
            this.#updateScore(player);
        }
        if(player == 2) {
            if(tiles[0].innerHTML != 'o') return false;
            if(tiles[1].innerHTML != 'o') return false;
            if(tiles[2].innerHTML != 'o') return false;
            this.#updateScore(player);
        }
    }

    // Updates player score as well as set this.isMatchWon to true, so whole game screen locks until reset.
    #updateScore(player) {
        let playerScore = 0;
        switch(player) {
            case 1: 
                playerScore = document.getElementById("game-player-1-score");
                this.player1Score++; 
                this.isMatchWon = true;
                playerScore.innerHTML = this.player1Score;
                break;

            case 2: 
                playerScore = document.getElementById("game-player-2-score"); 
                this.player2Score++; 
                this.isMatchWon = true;
                playerScore.innerHTML = this.player2Score;
                break;

            default: 
                console.log("Incorrect Player ID at checkWinner() parameter."); 
                break;
        }
        console.log("Player "+player+" wins!");
    }
}