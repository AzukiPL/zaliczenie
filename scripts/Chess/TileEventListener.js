class TileEventListener {
    constructor () {

    }
    addTileListeners() {
        const tiles = document.getElementsByClassName("game-Chess-Tile");
        for (const tile of tiles) {
            tile.addEventListener("click", (e) => {

            });
        }
    }
}