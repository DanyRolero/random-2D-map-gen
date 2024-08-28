class GShape2D {
    constructor(width, height, ...cells) {
        this.width = width;
        this.height = height;
        this.cells = cells;
    }

    // --------------------------------------------------------------------------------------
    getSize() {
        return this.cells.length;
    }
}