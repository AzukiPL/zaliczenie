function main() {
    const chessRenderer = new ChessboardRendering();
    chessRenderer.render();

    const tileListener = new TileListener("chess");
    tileListener.addListeners();

}
main();