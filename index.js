var MyMaths = {};
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');


let genBinaryCollection = function(numInt) {
    const totalCombinations = Math.pow(2,numInt);
    const binaryCollection = [];

    for(let i = 0; i < totalCombinations; i++) binaryCollection.push(i.toString(2));
    return binaryCollection;
}

let drawGShape2DInCanvas = function(gShape2D) {
    const widthCell = canvas.width / gShape2D.width;
    const heightCell = canvas.height / gShape2D.height;
}

