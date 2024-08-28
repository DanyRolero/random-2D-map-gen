class GShape2D {
    constructor(width, height, bin) {
        this.width = width;
        this.height = height;
        this.cells = bin;
    }

    // --------------------------------------------------------------------------------------
    getLength() {
        return this.cells.length;
    }

    // --------------------------------------------------------------------------------------
    getSize() {
        let size = 0;

        for(let i = 0; i < this.getLength(); i++) {
            if(this.cells.charAt(i) == '1') size++;
        }

        return size;
    }

    // --------------------------------------------------------------------------------------
    getCellFromIndex(index) {
        return this.cells.charAt(index);
    }

    // --------------------------------------------------------------------------------------
    getCellFromVector(x, y) {
        return this.cells.charAt(y * this.width + x);
    }

    // --------------------------------------------------------------------------------------
    hasUpNeightborFromIndex(index) {
        if(index < this.width) return false;
        return Boolean(Number(this.cells.charAt(index - this.width)));
    }

    // --------------------------------------------------------------------------------------
    hasBottomNeightborFromIndex(index) {
        if(index >= this.getLength() - this.width) return false;
        return Boolean(Number(this.cells.charAt(index + this.width)));
    }

    // --------------------------------------------------------------------------------------
    hasLeftNeightborFromIndex(index) {
        if(index % this.width == 0) return false;
        return Boolean(Number(this.cells.charAt(index - 1)));
    }

    // --------------------------------------------------------------------------------------
    hasRightNeightborFromIndex(index) {
        if(index % this.width == 1) return false;
        return Boolean(Number(this.cells.charAt(index + 1)));
    }
}