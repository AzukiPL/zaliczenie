class PawnsParameters {
    // Row from top to bottom
    // Row 1-8
    // Column from left to right
    // Column 1-8
    constructor (row, column, color) {
        this.row = row;
        this.column = column;
        this.color = color;
        this.tileID = String(this.row)+String(this.column);
        this.rangeRow = [];
        this.rangeCol = [];
        this.object = document.getElementById(this.tileID);
    }
}