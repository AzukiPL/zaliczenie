function main() {
    const checkBoard = new ChessboardRendering();
    checkBoard.renderCheckers();

    const tileListener = new TileListener();
    tileListener.addListeners();
}

main();