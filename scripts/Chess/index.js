function main() {
    const chessRenderer = new ChessboardRendering();
    chessRenderer.render();

    const tileListener = new TileListener();
    tileListener.addListeners();

    new HighlightToggle();
}
main();