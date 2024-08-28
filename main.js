function resizeCanvas(width, height) {
    canvas.width = width;
    canvas.height = height;
}

// ---------------------------------------------------------------------------------
let canvasGrid = { cellSize: 100, color: 'navy', lineWidth: 1 }

// ---------------------------------------------------------------------------------
function drawCells(width, height, bin) {
    resizeCanvas(canvasGrid.cellSize * width, canvasGrid.cellSize * height);
    context.fillStyle = 'grey';
    
    for(let i = 0; i < bin.length; i++) {
        if(bin.charAt(i) == '1') {
            let x = i % width * canvasGrid.cellSize;
            let y = Math.floor(i / width) * canvasGrid.cellSize;
            context.closePath();
            context.fillRect(x, y, canvasGrid.cellSize, canvasGrid.cellSize);
        }
    }
}


// ---------------------------------------------------------------------------------
function drawGridInCanvas() {
    const horizontalLines = Math.round(canvas.height / canvasGrid.cellSize);
    const verticalLines = Math.round(canvas.width / canvasGrid.cellSize);
    
    context.strokeStyle = canvasGrid.color;
    context.lineWidth = canvasGrid.lineWidth;
    context.moveTo(canvasGrid.cellSize, canvasGrid.cellSize);
    
    for(let i = 1; i < horizontalLines; i++) {
        let currentRow = canvasGrid.cellSize * i;
        context.moveTo(0, currentRow);
        context.lineTo(canvas.width, currentRow);
        context.closePath();
        context.stroke();
    }

    for(let i = 1; i < verticalLines; i++) {
        let currentColumn = canvasGrid.cellSize * i;
        context.moveTo(currentColumn, 0);
        context.lineTo(currentColumn, canvas.height);
        context.closePath();
        context.stroke();
    }
}


// ---------------------------------------------------------------------------------
drawCells(2, 3, '111010');
drawGridInCanvas();