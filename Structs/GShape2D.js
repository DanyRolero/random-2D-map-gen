class GShape2D {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.cells = [];

        for(let i = 0; i < height; i++) {
            this.cells.push(new Array(height).fill(false));
        }
    }

    // --------------------------------------------------------------------------------------
    // Recorre la cuadrícula y ejecuta una función de callback para cada elemento
    _traverseGrid(callback) {
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                callback(this.cells[x][y]);
            }
        }
    }

    // ------------------------------------------------------------------------------------
    getLength() {
        let result = 0;
        this._traverseGrid((value) => {
            if(value) result++;
        });
        return result;
    }

     // ------------------------------------------------------------------------------------
     getSize() {
        return this.width * this.height;
     }

    // --------------------------------------------------------------------------------------
    getCellFromIndex(index) {
        return this.cells.flat()[index];
    }

    // --------------------------------------------------------------------------------------
    getCellFromVector(x, y) {
        return this.cells[x][y];
    }

    // --------------------------------------------------------------------------------------
    activateCell(x,y) {
        this.cells[x][y] = true;
    }

    // --------------------------------------------------------------------------------------
    hasCellAdjacent(x, y, direction) {
        if(direction == 'up') {
            if(y == 0) return false;
            return this.cells[x][y-1];
        }

        if(direction == 'up') {
            if(y == 0) return false;
            return this.cells[x][y-1];
        }

        if(direction == 'up') {
            if(y == 0) return false;
            return this.cells[x][y-1];
        }

        if(direction == 'up') {
            if(y == 0) return false;
            return this.cells[x][y-1];
        }

    }
}