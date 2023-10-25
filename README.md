# zaliczenie
 
DOCUMENTATION

Zaliczenie Aplikacje Internetowe
Maciej Wojtkiewicz

1. RULESET


--JAVASCRIPT--
- file names begin with big letter and big letter on each multiword letter, PawnsParameters.js, ChessboardRendering.js, and so on
- class names named the same way the file they are stored in.
- variable names begin with small letter, and big letter if its an multiword name, as example: nameSurname
- function names begin with small letter, and big letter if its an multiword name, as example: myFunction()
- opening brackets in same line as definition of function, and closing brackets 1 line bellow last line of function instruction.
    myFunction() { // open here

    } // close here
- all events are handled by scripts, without inline events as good practice.

--CSS--
- class and id naming that are used for style, begin with file name where they are located, and then category they are in. as example:
    game-Chess-selected, located in game.css, where all Chess related classes and ids are located
    game-current-selected, the only one exception to this rule, its in the same place as Chess-selected, and its used more of a logic help than style itself.
- if class or id does not contain category they are in or file name where they are located, it  most likely mean this class or id is used for JavaScript element finding.
- style.css is sort of global style file, it contains html tags CSS styles, and :root where all CSS local variables values are stored.


--HTML--
- all scripts included on bottom of HTML file for efficiency purposes.



2. HIERARCHY 


--TIC TAC TOE--
- index.js calls TileRenderer class in order to render all tiles on the game screen
- each tile creates new InputController that is connected with this tile on itialization.
    and add event listener to this tile, that on click it calls InputController update function in order to refresh tile;
- InputController, stores the main logic script, it is responsible for putting X O marks on selected tiles, contains the reset method
    and update function for game
- Update works on event happening, it does not refresh each frame.
- InputController inside marking function, calls ScoreController, that is responsible for checking if one of player has won.
    and update score on the side banners of the screen.

--TIC TAC TOE INCLUDE FILES--
    <script lang="JavaScript" src="scripts/TicTacToe/ScoreController.js"></script>
    <script lang="JavaScript" src="scripts/TicTacToe/InputController.js"></script>
    <script lang="JavaScript" src="scripts/TicTacToe/TileRenderer.js"></script>
    <script lang="JavaScript" src="scripts/TicTacToe/index.js"></script>




--CHESS--
- index.js creates instanceof ChessboardRendering, and call render function.
- ChessboardRendering after rendering chessboard, renders pawns on their tiles.
- each pawn type is stored in own class, all pawn types inherits from PawnsParameters class as their parent class which contains common data needed for each pawn
- after ChessboardRendering finish rendering everything, index.js calls TileListener which goes throught every tile rendered by ChessboardRendering, and add eventlistener to it.
- PawnsParameters has listener that checks if This pawn, has been selected, if yes it will highlight tiles where it can move to, based on each pawn this.range data.
- then TileListener checks for tile event where selectedd tile is highlighted, if it is highlighted, it will call chessMove() function to move last selected chess piece to that tile.
- this is a little mess in there but it works so lets leave it as it is.

- Chess does not contain castling, or the special pawn movement which mechanics are not known to me.
- King can not move to endangered tiles, but game does not force king to be hidden when hes endangered which can result in king being beaten like normal pawn.
- in case king is beaten, or cannont move, the opponent player is considered as winner.

- TurnController simply checks whose turn it is, display it above game screen and prevent other player from making his move until its his turn.


--CHESS INCLUDE FILES--
    <script lang="JavaScript" src="scripts/Chess/TurnController.js"></script>
    <script lang="JavaScript" src="scripts/Chess/PawnsParameters.js"></script>
    <script lang="JavaScript" src="scripts/Chess/TileListener.js"></script>
    <script lang="JavaScript" src="scripts/Chess/King.js"></script>
    <script lang="JavaScript" src="scripts/Chess/Queen.js"></script>
    <script lang="JavaScript" src="scripts/Chess/Bishop.js"></script>
    <script lang="JavaScript" src="scripts/Chess/Knight.js"></script>
    <script lang="JavaScript" src="scripts/Chess/Rook.js"></script>
    <script lang="JavaScript" src="scripts/Chess/Pawn.js"></script>
    <script lang="JavaScript" src="scripts/Chess/ChessboardRendering.js"></script>
    <script lang="JavaScript" src="scripts/Chess//index.js"></script> 

--CHECKERS--
- index.js creates instanceof ChessboardRendering, and call renderCheckers function
- ChessboardRendering is the same class as in chess therefore its located in chess folder.
- ChessboardRendering after rendering checkBoard, renders checkers on their tiles.
- Checker and KingChecker classes inherits from CheckersParameters class. the way those classes works is very similar to how chess works, 
    only changed conditions for attackin enemy and checker movement.
- after rendering checkboard, index.js calls TileListener function, its the same class as in chess therefore its located in chess folder,
    the calss takes parameter "checkers" which makes it use functions for checkers movement instead chess logics.

- TurnController simply checks whose turn it is, display it above game screen and prevent other player from making his move until its his turn.

- TurnController, ChessboardRendering, TileListener, are 3 classes that are located inside chess folder because they are neccessary in chess, and checkers were made latter.
- Making inherits class files felt inefficient because then HTML file would have to include both, parent and child classes, which was pointless for changing single method inside class.
- therefore these 3 classes contains methods for both, chess, and checkers.

--CHECKERS INCLUDE FILES--
    <script src="scripts/Chess/TurnController.js"></script>
    <script src="scripts/Chess/ChessboardRendering.js"></script>
    <script src="scripts/Chess/TileListener.js"></script>
    <script src="scripts/Checkers/CheckersParameters.js"></script>
    <script src="scripts/Checkers/Checker.js"></script>
    <script src="scripts/Checkers/KingChecker.js"></script>
    <script src="scripts/Checkers/index.js"></script>